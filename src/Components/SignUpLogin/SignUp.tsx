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
                loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
                /> 
               <div className='w-full llg:gap-3  sx-mx:p- max-w-[500px] mx-auto px-4 sm:px-6 md-mx:px-1 sm-mx:max-w-[500px] sm-mx: bs-mx:max-w-[350px] xs-mx:max-w-[300px] xs-mx:ml-12 xsm-mx:w-full xsm-mx:ml-1  flex flex-col justify-center  font-medium s gap-1'>
  <div className='text-lg xs:text-sm sm-mx:p-2 sm:text-xl xsm-mx:ml-20 xs-mx:mt-2 font-semibold text-center'>
    Create Account
  </div>
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
                    <Group mt="xs" className="flex-wrap gap-3">
                    <Radio
                        className={`px-4 py-3 border rounded-lg text-sm ${value === 'APPLICANT' ? 'border-bright-sun-400 bg-bright-sun-400/5' : 'border-mine-shaft-800 bg-mine-shaft-900'}`}
                        value="APPLICANT"
                        label="Applicant"
                    />
                    <Radio
                        className={`px-4 py-3 border rounded-lg text-sm ${value === 'EMPLOYEER' ? 'border-bright-sun-400 bg-bright-sun-400/5' : 'border-mine-shaft-800 bg-mine-shaft-900'}`}
                        value="EMPLOYEER"
                        label="Employeer"
                    />
                    </Group>
                </Radio.Group>

                <Checkbox
                    mt="xs"
                    className="text-sm"
                    label={
                    <span className="text-sm">
                        I accept{' '}
                        <Anchor size="sm" className="text-bright-sun-400">
                        terms & conditions
                        </Anchor>
                    </span>
                    }
                />

                <Button loading={loading} onClick={handleSubmit} variant="filled" style={{ color: "white" }}>
                    Sign up
                </Button>

                <div className="text-center text-sm">
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
