"use client";
import { useEffect, useState } from "react";
import { Progress } from "../progress/progress";
import { NotificationToastProps } from "./notification.types";
import { NotificationType } from "@/types/notification.interface";
import { CloseSquare } from "iconsax-react";
import { dismissNotification } from "@/store/slices/notification.slice";
import { useAppDispatch } from "@/store/hooks";

const notificationTypes: Record<NotificationType, string> = {
  success: "bg-success",
  info: "bg-info",
  warning: "bg-warning",
  error: "bg-error",
};

// const notificationIcons: Record<NotificationType, ReactNode> = {
//   success: <IconCheck width={20} height={20} color="white" />,
//   info: <IconInfo width={20} height={20} color="white" />,
//   warning: <IconInfo width={20} height={20} color="white" />,
//   error: <IconError width={20} height={20} color="white" />,
// };

export const NotificationToast: React.FC<NotificationToastProps> = ({
  notification: { id, message, type, duration = 5000 },
}) => {
  const dispatch = useAppDispatch();

  const [progressValue, setProgressValue] = useState<number>(100);
  useEffect(() => {
    const interval = duration / 100;
    const intervalId = setInterval(() => {
      setProgressValue((oldValue) =>
        Math.max(oldValue - 100 / (duration / interval), 0)
      );
    }, interval);
    return () => clearInterval(intervalId);
  }, [duration]);
  return (
    <div className="notification">
      <div className={`notification-icon ${notificationTypes[type]}`}>
        {/* {notificationIcons[type]} */}
      </div>
      <div className="text-sm font-semibold">{message}</div>
      <button
        className="mr-auto hover:text-white mt-2"
        onClick={() => dispatch(dismissNotification(id))}
      >
        <CloseSquare width={20} height={20} />
      </button>
      <Progress
        className="!absolute bottom-1 left-2 right-2 !w-auto"
        size="tiny"
        variant={type}
        value={progressValue}
      />
    </div>
  );
};
