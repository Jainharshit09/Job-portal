import React from 'react'
import {IconWebhook, IconBell,IconSettings} from "@tabler/icons-react"
import { Avatar,Indicator } from '@mantine/core';
import NavLinks from './NavLinks';
const Header = () => {
  return (
    <div className='w-full bg-mine-shaft-950 h-20 text-white flex justify-between items-center px-5'>
        <div className='flex gap-1 items-center text-bright-sun-400'> 
            <IconWebhook 
            className='h-16 w-16'
            stroke={2} />
            <div className='text-2xl font-bold'>
                Job Hook
            </div>
        </div>

        <div className='flex gap-5 items-center'>
            { <NavLinks/>}
        </div>

        <div className='flex gap-3 items-center'>
            <div className='flex gap-2 items-center'>
                <div>Harshit</div>
                <Avatar src="avatar.png" alt="it's me" />
            </div>
            <div className='bg-mine-shaft-800 p-1 rounded-full border border-white-300'><IconSettings stroke={1.5}/></div>
            <Indicator color="red" size={9} offset={12} position="top-end" processing>
                <div className='bg-mine-shaft-800 p-1.5 rounded-full border border-white-500'><IconBell stroke={1.5}/></div>
            </Indicator>
        </div>
    </div>
  )
}

export default Header;