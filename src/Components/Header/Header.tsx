import React, { useEffect } from 'react';
import { IconWebhook, IconX } from '@tabler/icons-react';
import { Burger, Button, Drawer } from '@mantine/core';
import NavLinks from './NavLinks';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';
import { useDispatch, useSelector } from 'react-redux';
import ProfileService from '../../Services/ProfileService';
import { setProfile } from '../../Slice/ProfileSlice';
import Noti from './Noti';
import { setUpResponseInterceptor } from '../../Interceptor/axiosInterceptor';
import { useDisclosure } from '@mantine/hooks';



const Header = () => {
    const links = [
        { name: 'Find Job', url: 'find-job' },
        { name: 'Find Talent', url: 'find-talent' },
        { name: 'Post Job', url: 'post-job/0' },
        { name: 'Posted Job', url: 'posted-job/0'}, 
        { name: 'Job History', url: 'job-history'},
        { name: 'About us', url: 'about-us' },
      ];
    const user = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    const [opened, { open, close }] = useDisclosure(false);
    const location = useLocation();
    const navigate=useNavigate();
    useEffect(() => {
        setUpResponseInterceptor(navigate);
    }, [navigate]);
    useEffect(() => {
        if (!user || !user.id) return;  
        ProfileService.getProfile(user.id)
            .then((data: any) => {
                dispatch(setProfile(data));
            })
            .catch((err: any) => {
                console.error("Error fetching profile:", err);
            });
    }, [user, dispatch]);
  
    if (location.pathname === "/signup" || location.pathname === "/login") {
        return null;
    }

    return (
        <div className="w-full bg-mine-shaft-950 h-20 text-white flex justify-between items-center px-5">
            {/* Logo and Title */}
            <div className="flex gap-1 items-center cursor-pointer text-bright-sun-400">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <IconWebhook className="h-16 w-16  " stroke={2} />
                </Link>
                <div className="text-2xl xs-mx:hidden font-bold">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Job Hook
                    </Link>
                </div>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-5 items-center">
                <NavLinks />
            </div>

            {/* Profile & Notification */}
            <div className="flex gap-3 items-center cursor-pointer">
                {user && user.id ? (
                    <ProfileMenu />
                ) : (
                    <Link to="/login">
                        <Button variant="subtle" color="bright-sun.4">Login</Button>
                    </Link>
                )}
                
                {user?<Noti/>:<></>}
                {
                }
                <Burger opened={opened} className='llg:hidden' onClick={open} aria-label="Toggle navigation" />
                <Drawer opened={opened} size={'xs'} onClose={close} overlayProps={{ backgroundOpacity: 0.5, blur: 4 }} position="right"
                    closeButtonProps={{
                        icon: <IconX size={30} stroke={2} />,
                    }}
                    title={"Menu"}
                    padding="xl"
                >
                    <div className='flex flex-col gap-7 items-center'>
                    { links.map((link, index) => (
                    <div
                        key={index}
                        className={`${
                        location.pathname === '/' + link.url
                            ? 'text-bright-sun-400'
                            : 'border-transparent '
                        }  h-full divider flex items-center px-2`}
                    >
                        <Link className='text-xl hover:text-bright-sun-600 ' to={link.url}>{link.name}</Link>
                    </div>
                    ))}
                    </div>
                </Drawer>
            </div>
        </div>
    );
};

export default Header;
