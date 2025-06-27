"use client";

import { useState, useCallback, useEffect } from "react";
import {
  NotificationData,
  NotificationType,
} from "@/components/PushNotification";

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<NotificationData[]>([]);

  // Demander la permission pour les notifications du navigateur
  useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  const addNotification = useCallback(
    (
      type: NotificationType,
      title: string,
      message: string,
      duration?: number
    ) => {
      const id = Date.now().toString();
      const newNotification: NotificationData = {
        id,
        type,
        title,
        message,
        duration,
      };

      setNotifications((prev) => [...prev, newNotification]);

      // Notification native du navigateur
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification(title, {
          body: message,
          icon: "/assets/icons/logos.svg",
          badge: "/assets/icons/logos.svg",
          tag: id,
        });
      }
    },
    []
  );

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  }, []);

  const showConnectionNotification = useCallback(() => {
    addNotification(
      "success",
      "Connexion établie",
      "Vous êtes maintenant connecté au système Wakatti",
      4000
    );
  }, [addNotification]);

  const showDisconnectionNotification = useCallback(() => {
    addNotification(
      "warning",
      "Connexion perdue",
      "Votre connexion au système a été interrompue",
      5000
    );
  }, [addNotification]);

  const showErrorNotification = useCallback(
    (message: string) => {
      addNotification("error", "Erreur", message, 6000);
    },
    [addNotification]
  );

  const showInfoNotification = useCallback(
    (title: string, message: string) => {
      addNotification("info", title, message, 4000);
    },
    [addNotification]
  );

  return {
    notifications,
    addNotification,
    removeNotification,
    showConnectionNotification,
    showDisconnectionNotification,
    showErrorNotification,
    showInfoNotification,
  };
};
