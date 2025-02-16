import { Avatar, Switch } from '@mantine/core'
import { IconMessageCircle, IconUserCircle, IconFileText, IconMoon, IconMoonStars, IconSun, IconLogout2 } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Menu } from '@mantine/core'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../Slice/UserSlice'

const ProfileMenu = () => {
    const [checked, setChecked] = useState(false);
    const [opened, setOpened] = useState(false);
    const dispatch=useDispatch();
    const user=useSelector((state:any)=>{
        return state.user;
    })
    const handleLogout=()=>{
        console.log("Logged Out");
        dispatch(removeUser());
    }
    return (
        <div>
            <Menu opened={opened} onChange={setOpened} shadow="md" width={200}>
        <Menu.Target>
            <div className='flex gap-2 items-center'>
                            <div>{user.name}</div>
                            <Avatar src="avatar.png" alt="it's me" />
                        </div>
        </Menu.Target>

        <Menu.Dropdown onChange={() => setOpened(true)}>
            <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Menu.Item leftSection={<IconUserCircle size={14} />}>
            Profile
            </Menu.Item>
            </Link>
            <Menu.Item leftSection={<IconMessageCircle size={14} />}>
            Messages
            </Menu.Item>
            <Menu.Item leftSection={<IconFileText size={14} />}>
            Resume
            </Menu.Item>
            <Menu.Item
            leftSection={<IconMoon size={14} />}
            rightSection={
                <Switch
                size="md"
                color="dark.4"
                checked={checked}
                onChange={(event) => setChecked(event.currentTarget.checked)}   
                onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
                offLabel={<IconMoonStars size={16} stroke={2.5} color="cyan" />}
                />
            }
            >
            Dark Mode
            </Menu.Item>

            <Menu.Divider />
            <Menu.Item
            onClick={handleLogout}
            color="red"
            leftSection={<IconLogout2 size={14} />}
            >
            LogOut
            </Menu.Item>
        </Menu.Dropdown>
        </Menu>
        </div>
    )
}
export default ProfileMenu