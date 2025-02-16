import React from 'react'
import {IconWebhook, IconBell} from "@tabler/icons-react"
import {Button, Indicator } from '@mantine/core';
import NavLinks from './NavLinks';
import { Link, useLocation } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';
import { useSelector } from 'react-redux';
const Header = () => {
    const user=useSelector((state:any)=>state.user);
    const location=useLocation();
    return location.pathname!=="/signup" && location.pathname!=="/login"?(
    <div className='w-full bg-mine-shaft-950 h-20 text-white flex justify-between items-center px-5'>
        <div className='flex gap-1 items-center cursor-pointer text-bright-sun-400'> 
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <IconWebhook 
                className='h-16 w-16'
                stroke={2} />
            </Link>
            <div className='text-2xl font-bold'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                Job Hook
            </Link>
        </div>
        </div>

        <div className='flex gap-5 items-center'>
            { <NavLinks/>}
        </div>

        <div className='flex gap-3 items-center cursor-pointer'>   
            {user?<ProfileMenu/>:<Link to="/login">
                <Button variant='subtle' color='bright-sun.4'>Login</Button>
                </Link>
            }
            {/* <div className='bg-mine-shaft-800 p-1 rounded-full border border-white-300'><IconSettings stroke={1.5}/></div> */}
            <Indicator color="red" size={9} offset={12} position="top-end" processing>
                <div className='bg-mine-shaft-800 p-1.5 rounded-full border border-white-500'><IconBell stroke={1.5}/></div>
            </Indicator>
        </div>
    </div>
  ):<></>
}

export default Header;