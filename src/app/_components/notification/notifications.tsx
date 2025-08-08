"use client";

import { useAppSelector } from "@/store/hooks";
import { NotificationToast } from "./notification-toast";
import { NotificationProps } from "./notification.types";

export const Notifications: React.FC<NotificationProps> = () => {
  const notifications = useAppSelector(
    (state) => state.notification.notifications
  );

  if (notifications.length < 1) return null;

  return (
    <div className="fixed flex flex-col-reverse bottom-3 right-3 gap-3 z-50">
      {notifications.map((p) => {
        return (
          <NotificationToast key={`notification-${p.id}`} notification={p} />
        );
      })}
    </div>
  );
};
