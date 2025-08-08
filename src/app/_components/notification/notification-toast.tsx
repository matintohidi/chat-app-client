"use client";
import { ReactNode, useEffect, useState } from "react";
import { Progress } from "../progress/progress";
import { NotificationToastProps } from "./notification.types";
import { NotificationType } from "@/types/notification.interface";
import { dismissNotification } from "@/store/slices/notification.slice";
import { useAppDispatch } from "@/store/hooks";
import { Ban, Check, CircleAlert, CircleX, Info } from "lucide-react";

const notificationTypes: Record<NotificationType, string> = {
  success: "bg-success",
  info: "bg-info",
  warning: "bg-warning",
  error: "bg-error",
};

const notificationIcons: Record<NotificationType, ReactNode> = {
  success: <Check width={20} height={20} color="white" />,
  info: <Info width={20} height={20} color="white" />,
  warning: <CircleAlert width={20} height={20} color="white" />,
  error: <Ban width={20} height={20} color="white" />,
};

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
    <div className="notification show-notification ">
      <div className={`notification-icon ${notificationTypes[type]}`}>
        {notificationIcons[type]}
      </div>
      <div className="text-sm font-semibold">{message}</div>
      <button
        className="ml-auto hover:text-primary-content mt-2"
        onClick={() => dispatch(dismissNotification(id))}
      >
        <CircleX width={20} height={20} />
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
