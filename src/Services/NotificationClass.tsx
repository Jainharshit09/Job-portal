import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";
import React from "react";

const successNotification = (title: string, message: string) => {
    notifications.show({
        position: 'top-center',
        icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
        color: "teal",
        withCloseButton: true,
        withBorder: true,
        className: '!border-green-800',
        autoClose: 3000,
        title: title,
        message: message,
    });
}

const errorNotification = (title: string, message: string) => {
    notifications.show({
        position: 'top-center',
        icon: <IconX style={{ width: "90%", height: "90%" }} />,
        color: "red",
        withCloseButton: true,
        withBorder: true,
        className: '!border-red-800',
        autoClose: 3000,
        title: title,
        message: message,
    });
}

const NotificationClass = {
    errorNotification,
    successNotification
}

export default NotificationClass;
