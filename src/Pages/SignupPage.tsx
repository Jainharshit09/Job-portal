import { IconArrowLeft, IconWebhook } from '@tabler/icons-react';
import React from 'react';
import SignUp from '../Components/SignUpLogin/SignUp';
import Login from '../Components/SignUpLogin/Login';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';

const SignupPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-[poppins] overflow-hidden relative">
       <Button className='!absolute left-5 z-10' onClick={()=>navigate("/")} mr="md" my="md" leftSection={<IconArrowLeft size={20}/>} color="bright-sun.4" variant="light">
            Home
        </Button>
      <div
        className={`w-[100vw] h-[100vh] flex [&>*]:flex-shrink-0 ${
          location.pathname === '/signup' ? '-translate-x-1/2 sm-mx:-translate-x-full' : 'translate-x-0 '
        } transition-all ease-in-out duration-500`}
      >
        {/* Login Component */}
        <Login />
        {/* Middle Section */}
        <div
        className={`w-1/2 h-full sm-mx:hidden sm-mx:min-h-full  transition-all duration-1000 ease-in ${
            location.pathname === '/signup' ? 'rounded-r-[200px]' : 'rounded-l-[200px]'
        } bg-mine-shaft-900 items-center flex flex-col gap-5 justify-center`}
        >
          <div className="flex gap-1 items-center text-bright-sun-400">
            <IconWebhook className="h-32 w-32" stroke={2} />
            <div className="text-6xl bs-mx:text-5xl md-mx-text-4xl sm-mx:text-3xl font-bold">Job Hook</div>
          </div>
          <div className="text-2xl bs-mx:text-xl md-mx:text-lg font-semibold text-mine-shaft-200 p-3">
            Find the Job Made for You
          </div>
        </div>
        {/* SignUp Component */}
        <SignUp />
      </div>
    </div>
  );
};

export default SignupPage;
