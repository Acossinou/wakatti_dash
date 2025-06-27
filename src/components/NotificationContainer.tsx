"use client";

import React from "react";
import PushNotification, { NotificationData } from "./PushNotification";

interface NotificationContainerProps {
  notifications: NotificationData[];
  onRemoveNotification: (id: string) => void;
}

const NotificationContainer: React.FC<NotificationContainerProps> = ({
  notifications,
  onRemoveNotification,
}) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {notifications.map((notification, index) => (
        <div
          key={notification.id}
          style={{ transform: `translateY(-${index * 10}px)` }}
        >
          <PushNotification
            notification={notification}
            onClose={onRemoveNotification}
          />
        </div>
      ))}
    </div>
  );
};

export default NotificationContainer;
