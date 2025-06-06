import { Indicator } from '@mantine/core'
import { IconBell, IconCheck } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { Menu } from '@mantine/core'
import { Notification } from '@mantine/core';
import { useSelector } from 'react-redux';
import NotiService from '../../Services/NotiService';
import { useNavigate } from 'react-router-dom';

const Noti = () => {
    const navigate = useNavigate();
    const [opened, setOpened] = useState(false);
    const [notification, setNotification] = useState<any>([]);
    const user = useSelector((state: any) => {
        return state.user;
    })

    useEffect(() => {
        NotiService.getNotification(user.id).then((res: any) => {
            setNotification(res);
        }).catch((err: any) => {
            console.error(err);
        });
    }, [user]);

    const unread = (index: number) => {
        let temp = [...notification];
        temp = temp.filter((noti: any, i: number) => i !== index);
        setNotification(temp);
        NotiService.readNotification(user.id).then((res: any) => {
            console.log(res);
        }).catch((err: any) => {
            console.error(err);
        });
    }

    return (
        <div>
            <Menu opened={opened} onChange={setOpened} shadow="md" width={400}>
                <Menu.Target>
                    <div className='flex gap-2 items-center'>
                        <Indicator disabled={notification.length <= 0} color="red" size={9} offset={12} position="top-end" processing>
                            <div className="bg-mine-shaft-800 p-1.5 rounded-full border border-white-500">
                                <IconBell stroke={1.5} />
                            </div>
                        </Indicator>
                    </div>
                </Menu.Target>

                <Menu.Dropdown onChange={() => setOpened(true)}>
                    <div className="flex flex-col gap-1">
                        {
                            notification.map((noti: any, index: number) => {
                                return (
                                    <Notification
                                        onClick={() => {
                                            navigate(noti.route);
                                            setOpened(false);
                                            unread(index);
                                        }}
                                        key={index}
                                        onClose={() => unread(index)}
                                        className="hover:bg-bright-sun-400 curson-pointer border border-bright-sun-400 w-full h-full"
                                        icon={<IconCheck size={20} />}
                                        color="teal"
                                        title={noti.action}
                                        mt="md"
                                    >
                                        {noti.message}
                                    </Notification>
                                );
                            })
                        }
                        {
                            notification.length === 0 && <div className='text-center text-bright-sun-400'>No Notification</div>
                        }
                    </div>
                </Menu.Dropdown>
            </Menu>
        </div>
    )
}

export default Noti;