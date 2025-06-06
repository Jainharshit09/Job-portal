import { Button, Group, LoadingOverlay, PasswordInput, Radio, TextInput } from '@mantine/core'
import { IconAt, IconLock, IconX, IconCheck } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Anchor, Checkbox } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { useNavigate } from 'react-router-dom'
import UserService from '../../Services/UserService'
import SignupFormValidation from '../../Services/FormValidation'

const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT"
}

const SignUp = () => {
    const [value, setValue] = useState('APPLICANT')
    const [formError, setFormError] = useState<{ [key: string]: string }>(form)
    const [data, setData] = useState<{ [key: string]: string }>(form)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleChange = (event: any) => {
        if (typeof event === 'string') {
            setData({ ...data, accountType: event })
            setValue(event)
            return
        }
        let name = event.target.name, value = event.target.value
        setData({ ...data, [name]: value })
        setFormError({ ...formError, [name]: SignupFormValidation(name, value) })
        if (name === 'password' && data.confirmPassword !== "") {
            let err = data.confirmPassword !== value ? "Password did not match" : ""
            setFormError({ ...formError, [name]: SignupFormValidation(name, value), confirmPassword: err })
        }
        if (name === 'confirmPassword') {
            setFormError({ ...formError, confirmPassword: value !== data.password ? "Password did not match" : "" })
        }
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        setLoading(true)
        let valid = true
        let newFormError: { [key: string]: string } = {}

        for (let key in data) {
            if (key === 'accountType') continue
            if (key !== 'confirmPassword') {
                newFormError[key] = SignupFormValidation(key, data[key])
            } else if (data.confirmPassword !== data.password) {
                newFormError[key] = "Password did not match"
            }
            if (newFormError[key]) valid = false
        }

        setFormError(newFormError)

        if (!valid) {
            setLoading(false) // Stop loading if validation fails
            notifications.show({
                position: 'top-center',
                icon: <IconX style={{ width: "90%", height: "90%" }} />,
                color: "red.8",
                withCloseButton: true,
                withBorder: true,
                className: '!border-red-800',
                autoClose: 3000,
                title: 'Registration Failed',
                message: "Please fill the form correctly",
            })
        } else {
            const { confirmPassword, ...dataToSend } = data
            UserService.registerUser(dataToSend)
                .then((res: any) => {
                    setData(form)
                    setLoading(false)
                    notifications.show({
                        position: 'top-center',
                        icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
                        color: "teal",
                        withBorder: true,
                        className: '!border-green-500',
                        autoClose: 3000,
                        withCloseButton: true,
                        title: 'Registered Successfully',
                        message: 'Redirecting to login Page... 🎉',
                    })
                    setTimeout(() => {
                        navigate('/login')
                    }, 3000)
                })
                .catch((err: any) => {
                    setLoading(false) // Stop loading on error
                    notifications.show({
                        position: 'top-center',
                        icon: <IconX style={{ width: "90%", height: "90%" }} />,
                        withCloseButton: true,
                        color: "red.8",
                        withBorder: true,
                        className: '!border-red-800',
                        autoClose: 3000,
                        title: 'Registration Failed',
                        message: err.response?.data?.errorMessage || "Something went wrong!",
                    })
                })
        }
    }

    return (
        <>
            <LoadingOverlay
                visible={loading}
                zIndex={1000}
                overlayProps={{ radius: 'sm', blur: 1 }}
                className='translate-x-1/2'
                loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
            />
            <div className='w-1/2 px-20 flex flex-col gap-3 justify-center'>
                <div className='text-2xl font-semibold'>Create Account</div>
                <TextInput
                    withAsterisk
                    label="Full Name"
                    onChange={handleChange}
                    name="name"
                    value={data.name}
                    error={formError.name}
                    placeholder="Enter your full Name"
                />
                <TextInput
                    withAsterisk
                    leftSection={<IconAt size={16} />}
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    error={formError.email}
                    placeholder="Enter Your email"
                />
                <PasswordInput
                    error={formError.password}
                    onCopy={(event) => event.preventDefault()}
                    withAsterisk
                    name="password"
                    leftSection={<IconLock size={18} stroke={1.5} />}
                    onChange={handleChange}
                    value={data.password}
                    label="Password"
                    placeholder="Enter Your Password"
                />
                <PasswordInput
                    error={formError.confirmPassword}
                    onPaste={(event) => event.preventDefault()}
                    withAsterisk
                    name="confirmPassword"
                    leftSection={<IconLock size={18} stroke={1.5} />}
                    onChange={handleChange}
                    value={data.confirmPassword}
                    label="Confirm Password"
                    placeholder="Confirm Password"
                />
                <Radio.Group
                    value={data.accountType}
                    onChange={handleChange}
                    label="You are?"
                    withAsterisk
                >
                    <Group mt="mx">
                        <Radio
                            className={`px-6 py-4 border rounded-lg ${value === 'APPLICANT' ? 'border-bright-sun-400 bg-bright-sun-400/5' : 'border-mine-shaft-800 bg-mine-shaft-900'}`}
                            value="APPLICANT"
                            label="Applicant"
                        />
                        <Radio
                            className={`px-6 py-4 border rounded-lg ${value === 'EMPLOYEER' ? 'border-bright-sun-400 bg-bright-sun-400/5' : 'border-mine-shaft-800 bg-mine-shaft-900'}`}
                            value="EMPLOYEER"
                            label="Employeer"
                        />
                    </Group>
                </Radio.Group>
                <Checkbox
                    mt="xs"
                    label={<>I accept{' '}<Anchor>terms & conditions</Anchor></>}
                />
                <Button loading={loading} onClick={handleSubmit} variant="filled" style={{ color: "white" }}>
                    Sign up
                </Button>
                <div className="mx-auto">
                    Have an account?{' '}
                    <span
                        onClick={() => {
                            navigate("/login")
                            setData(form)
                            setFormError(form)
                        }}
                        className="text-bright-sun-400 hover:underline cursor-pointer"
                    >
                        Login
                    </span>
                </div>
            </div>
        </>
    )
}

export default SignUp
