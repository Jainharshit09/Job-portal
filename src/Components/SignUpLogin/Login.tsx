import { Button, LoadingOverlay, PasswordInput, TextInput } from '@mantine/core'
import { IconX, IconCheck } from '@tabler/icons-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserService from '../../Services/UserService'
import { notifications } from '@mantine/notifications'
import ResetPass from './ResetPass'
import { useDisclosure } from '@mantine/hooks'
import { useDispatch } from 'react-redux'
import { setUser } from '../../Slice/UserSlice'

const form = {
    email: "",
    password: "",
}
const Login = () => {
    const dispatch=useDispatch()
    const [data, setData] = useState<{ [key: string]: string }>(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>({});
    const [opened, { open, close }] = useDisclosure(false);
    const navigate = useNavigate();
    const [loading,setLoading]=useState(false);

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormError({ ...formError, [name]: "" });
        setData({ ...data, [name]: value });
    }

    const validateForm = () => {
        let valid = true;
        let newFormError: { [key: string]: string } = {};

        if (!data.email) {
            newFormError.email = "Email is required";
            valid = false;
        }

        if (!data.password) {
            newFormError.password = "Password is required";
            valid = false;
        }

        setFormError(newFormError);
        return valid;
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setLoading(true);
        const isValid = validateForm();

        if (isValid) {
            UserService.loginUser(data)
                .then((res: any) => {
                    notifications.show({
                        position: 'top-center',
                        icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
                        color: "teal",
                        withCloseButton: true,
                        withBorder: true,
                        className: '!border-teal-800',
                        autoClose: 1000,
                        title: 'Logged in Successfully',
                        message: 'Redirecting to home page... 🎉',
                    });
                    setTimeout(() => {
                        dispatch(setUser(res    ));
                        navigate('/home');
                    }, 1000);
                })
                .catch((err: any) => {
                    setLoading(false);
                    notifications.show({
                        position: 'top-center',
                        icon: <IconX style={{ width: "90%", height: "90%" }} />,
                        color: "red.8",
                        withCloseButton: true,
                        withBorder: true,
                        className: '!border-red-800',
                        autoClose: 2000,
                        title: 'Login Failed',
                        message: err.response.data.errorMessage || "Invalid credentials.",
                    });
                });
        } else {
            setLoading(false);
            notifications.show({
                position: 'top-center',
                icon: <IconX style={{ width: "90%", height: "90%" }} />,
                color: "red.8",
                withCloseButton: true,
                withBorder: true,
                className: '!border-red-800',
                autoClose: 2000,
                title: 'Login Failed',
                message: "Please fill credentials  correctly.",
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

            <div className="w-1/2 px-20 flex flex-col gap-3 justify-center">
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
                <Button onClick={handleSubmit} loading={loading} autoContrast variant="filled">Login</Button>
                <div className="mx-auto">
                    Don't have an account?{' '}
                    <span
                        onClick={() => { navigate('/signup'); setData(form); }}
                        className="text-bright-sun-400 hover:underline cursor-pointer"
                    >
                        Sign up
                    </span>
                </div>
                <div className='text-bright-sun-400 hover:underline cursor-pointer text-center' onClick={open}>Forget Password</div>
            </div>
            <ResetPass opened={opened} close={close} />
        </>
    )
}

export default Login;
