import { Button, Modal, PasswordInput, PinInput, TextInput } from '@mantine/core'
import { IconAt } from '@tabler/icons-react';
import React, { useState } from 'react'
import userService from '../../Services/UserService';
import SignupFormValidation from '../../Services/FormValidation';
import NotificationClass from '../../Services/NotificationClass';
import { useInterval } from '@mantine/hooks';

const ResetPass = (props:any) => {
    const [email, setEmail] = useState("");
    const[otpSent , setOtpSpent]=useState(false);
    const[otpSending,setOtpSending]=useState(false);
    const[verified,setVerified]=useState(false);
    const[password,setPassword]=useState("");
    const [passErr,setPassErr]=useState("");
    const[resendLoader,setResendLoader]=useState(false);
    const [seconds, setSeconds] = useState(60);
    const interval = useInterval(() => {
        if(seconds===0){
            setResendLoader(false);
            setSeconds(60);
            interval.stop();
        }
        else     setSeconds((s) => s - 1)}, 1000);
    const handleSendOtp=()=>{
        setOtpSending(true);
        userService.sendOtp(email).then((res)=>{
            NotificationClass.successNotification("OTP sent successfully","Enter OTP to reset .")
            console.log(res);
            setOtpSending(false);
            setResendLoader(true); 
            interval.start();
            setOtpSpent(true);
        }).catch((err) => {
            console.log(err);
            NotificationClass.errorNotification("OTP sending failed",  err.response.data.errorMessage);
        });
    }

    const handleverifyOtp=(otp:string)=>{
        userService.verfiyOtp(email,otp).then((res)=>{
            console.log(res);
            NotificationClass.successNotification("OTP Verfied", "Enter new Password.")
            setVerified(true);

        }).catch((err)=>{
            console.log(err);
            NotificationClass.errorNotification("OTP verfication Falied", err.response.data.errorMessage)
        })
    }

    const resendOtp=()=>{
        if(resendLoader) return;
        handleSendOtp ();
    }

    const changeEmail=()=>{
        setOtpSpent(false);
        setResendLoader(false);
        setSeconds(60);
        setVerified(false);
        interval.stop();
    }
    
    const handleResetPassword=()=>{
        userService.changePassword(email,password).then((res)=>{
            console.log(res);
            NotificationClass.successNotification("Password Changed","Login with new Password");
            setEmail("");
            setOtpSpent(false);
            setOtpSending(false);
            setVerified(false);
            setPassword("");
            setPassErr("");
            setResendLoader(false);
            setSeconds(60);
            interval.stop();
            props.close();
        }).catch((err)=>{
            console.log(err);
            NotificationClass.errorNotification("Password Changed Failed",err.respose.data.errorMessage);
        })
    }
  return (
    <div className='flex justify-center items-center p-2'>
        <Modal opened={props.opened} onClose={props.close} title="Reset Password">
            <div className='flex flex-col gap-6 '>
                <TextInput
                    withAsterisk
                    label="Email"
                    name="email"
                    size="md"
                    onChange={(e)=>setEmail(e.target.value)}
                    leftSection={<IconAt size={16}/>}
                    rightSection={ <Button loading={otpSending && !otpSent} disabled={email==="" || otpSent} size='xs'mr='sm' onClick={handleSendOtp}  autoContrast variant="filled">Login</Button>}
                    rightSectionWidth="xxl"
                    placeholder="Enter Your Email"
                    />
                    {otpSent &&  <PinInput onComplete={handleverifyOtp} size='md' className='mx-auto' gap="lg"  oneTimeCode length={6}  placeholder="9" type="number" />}
                    {otpSent && !verified &&
                    <div className='flex  gap-2'>
                        <Button fullWidth color='bright-sun.4'  onClick={resendOtp}  autoContrast variant="light">{resendLoader?seconds:"Resend"}</Button>
                        <Button fullWidth  onClick={changeEmail}  autoContrast variant="filled">Change Email</Button>
                    </div>
                    }
                    {
                        verified && 
                        <PasswordInput
                            withAsterisk
                            label="Password"
                            name="password"
                            onChange={(e)=>{setPassword(e.target.value); setPassErr(SignupFormValidation("password",e.target.value))}}
                            value={password}
                            error={passErr}
                            placeholder="Enter Your Password"
                        />
                    }
                    {
                        verified && <Button  color='bright-sun.4'  onClick={handleResetPassword}  autoContrast variant="filled">Change Password</Button>
                    }
                </div>
        </Modal>
        </div>
    )
}

export default ResetPass



