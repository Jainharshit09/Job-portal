import { Button, LoadingOverlay, PasswordInput, TextInput } from '@mantine/core'
import { IconX, IconCheck } from '@tabler/icons-react'
import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { notifications } from '@mantine/notifications'
import ResetPass from './ResetPass'
import { useDisclosure } from '@mantine/hooks'
import { useDispatch } from 'react-redux'
import AuthService from '../../Services/AuthService'
import { setJwt } from '../../Slice/JwtSlice'
import { jwtDecode } from 'jwt-decode'
import { setUser } from '../../Slice/UserSlice'
import NotificationClass from '../../Services/NotificationClass'

const initialFormState = {
    email: "",
    password: "",
};

const Login = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState(initialFormState);
    const [formError, setFormError] = useState<{ [key: string]: string }>({});
    const [opened, { open, close }] = useDisclosure(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // Handle Input Change
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormError((prev) => ({ ...prev, [name]: "" })); // Clear error when user types
        setData((prev) => ({ ...prev, [name]: value }));
    };  
    // Validate Form Fields
    const validateForm = () => {
        let isValid = true;
        let newFormError: { [key: string]: string } = {};

        if (!data.email.trim()) {
            newFormError.email = "Email is required";
            isValid = false;
        }

        if (!data.password.trim()) {
            newFormError.password = "Password is required";
            isValid = false;
        }

        setFormError(newFormError);
        return isValid;
    };

    // Handle Login Submission
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        if (!validateForm()) {
            setLoading(false);
            notifications.show({
                position: 'top-center',
                icon: <IconX style={{ width: "90%", height: "90%" }} />,
                color: "red",
                title: 'Login Failed',
                message: "Please fill in credentials correctly.",
                autoClose: 2000,
            });
            return;
        }

        try {
            const res = await AuthService.loginUser(data);
            if (!res.jwt) throw new Error("JWT not received!");

            // Show success notification
            notifications.show({
                position: 'top-center',
                icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
                color: "teal",
                title: 'Logged in Successfully',
                message: 'Redirecting to home page... 🎉',
                autoClose: 1000,
            });

            // Save JWT
            dispatch(setJwt(res.jwt));

            // Decode Token & Save User Data
            try {
                const decoded = jwtDecode(res.jwt);
                dispatch(setUser({ ...decoded, email: decoded.sub }));
            } catch (error) {
                console.error("JWT Decoding Failed:", error);
                NotificationClass.errorNotification("JWT Decoding Failed", "Failed to decode JWT.");
            }

            // Redirect after successful login
            setTimeout(() => navigate('/home'), 1000);
        } catch (err: any) {
            console.error("Login Error:", err);
            setLoading(false);
            notifications.show({
                position: 'top-center',
                icon: <IconX style={{ width: "90%", height: "90%" }} />,
                color: "red",
                title: 'Login Failed',
                message: "Invalid credentials.",
                autoClose: 2000,
            });
        }
    };

    return (
        <>
            <LoadingOverlay
                visible={loading}
                zIndex={1000}
                overlayProps={{ radius: 'sm', blur: 1 }}
                loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
            />

            <div className="w-1/2 sm-mx:w-full px-20 bs-mx:px-10 md-mx:px-5 flex flex-col gap-3 justify-center">
                <div className="text-2xl font-semibold">Login</div>
                
                <TextInput
                    withAsterisk
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    error={formError.email}
                    placeholder="Enter Your Email"
                />
                
                <PasswordInput
                    withAsterisk
                    label="Password"
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                    error={formError.password}
                    placeholder="Enter Your Password"
                />
                
                <Button onClick={handleSubmit} loading={loading} autoContrast variant="filled">
                    Login
                </Button>

                <div className="mx-auto">
                    Don't have an account?{' '}
                    <span
                        onClick={() => { navigate('/signup'); setData(initialFormState); }}
                        className="text-bright-sun-400 hover:underline cursor-pointer"
                    >
                        Sign up
                    </span>
                </div>

                <div className='text-bright-sun-400 hover:underline cursor-pointer text-center' onClick={open}>
                    Forgot Password?
                </div>
            </div>

            <ResetPass opened={opened} close={close} />
        </>
    );
};

export default Login;
