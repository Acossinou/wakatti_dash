"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useNotifications } from "@/hooks/useNotifications";
import NotificationContainer from "@/components/NotificationContainer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Simple PlanningIcon SVG component
function PlanningIcon() {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" />
      <path d="M16 3v4M8 3v4M3 9h18" strokeWidth="2" />
    </svg>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const { notifications, removeNotification, showConnectionNotification } =
    useNotifications();

  // Simuler la notification de connexion au chargement
  useEffect(() => {
    const timer = setTimeout(() => {
      showConnectionNotification();
    }, 2000);

    return () => clearTimeout(timer);
  }, [showConnectionNotification]);

  return (
    <html lang="fr">
      <head>
        <title>Wakatti Dashboard</title>
        <meta name="description" content="Dashboard de gestion Wakatti" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f4f2fb]`}
      >
        {/* Conteneur de notifications */}
        <NotificationContainer
          notifications={notifications}
          onRemoveNotification={removeNotification}
        />

        {/* Header global */}
        <header className="bg-[#795FFC] text-white py-2 sm:py-2 px-2 sm:px-4 xl:px-6 xl:py-4 flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50">
          <Image
            src="/assets/icons/logos.svg"
            alt="wakatti_logo"
            width={48}
            height={48}
            className="h-12 w-auto sm:h-15 xl:h-1/14"
          />
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/messages" aria-label="Messages">
              <Button className="bg-[#997FFF] rounded-full w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center shadow hover:bg-white/50">
                <Image
                  src="/assets/icons/message.svg"
                  alt="Messages"
                  width={24}
                  height={24}
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                />
              </Button>
            </Link>
            <Link href="/notifications" aria-label="Notifications">
              <Button className="bg-[#997FFF] rounded-full w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center shadow hover:bg-white/50">
                <Image
                  src="/assets/icons/notification.svg"
                  alt="Notifications"
                  width={24}
                  height={24}
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                />
              </Button>
            </Link>
            <Link href="/settings" aria-label="Settings">
              <Image
                src="/assets/icons/pers.svg"
                alt="User profile"
                width={56}
                height={56}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mr-2 sm:mr-4 lg:mr-10 ml-1 sm:ml-2"
              />
            </Link>
          </div>
        </header>
        {/* Layout principal avec sidebar */}
        <div className="flex pt-[60px] sm:pt-[80px] min-h-screen">
          {/* Sidebar */}
          <aside className="w-16 sm:w-20 bg-white border-r border-gray-200 h-[calc(100vh-60px)] sm:h-[calc(100vh-80px)] fixed top-[60px] sm:top-[80px] xl:top-30 left-0 z-40 flex flex-col items-center py-4 sm:py-8">
            <nav className="flex flex-col gap-4 sm:gap-4 lg:gap-6 w-full items-center">
              <Link
                href="/dashboard"
                className={`border-2 border-gray-200 rounded-full p-2 sm:p-3 lg:p-4 flex items-center justify-center transition ${
                  pathname === "/dashboard"
                    ? "bg-[#795FFC] text-white border-[#795FFC]"
                    : "text-gray-700 hover:text-[#795FFC] hover:bg-[#f4f2fb] hover:border-[#795FFC]"
                }`}
                aria-label="dashboard"
              >
                <Image
                  src="/assets/icons/menu.svg"
                  alt="Dashboard"
                  width={24}
                  height={24}
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                />
              </Link>
              <Link
                href="/employees"
                className={`border-2 border-gray-200 rounded-full p-2 sm:p-3 lg:p-4 flex items-center justify-center transition ${
                  pathname === "/employees"
                    ? "bg-[#795FFC] text-white border-[#795FFC]"
                    : "text-gray-700 hover:text-[#795FFC] hover:bg-[#f4f2fb] hover:border-[#795FFC]"
                }`}
                aria-label="Employés"
              >
                <Image
                  src="/assets/icons/users.svg"
                  alt="Employés"
                  width={24}
                  height={24}
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                />
              </Link>
              <Link
                href="/presences"
                className={`border-2 border-gray-200 rounded-full p-2 sm:p-3 lg:p-4 flex items-center justify-center transition ${
                  pathname === "/presences"
                    ? "bg-[#795FFC] text-white border-[#795FFC]"
                    : "text-gray-700 hover:text-[#795FFC] hover:bg-[#f4f2fb] hover:border-[#795FFC]"
                }`}
                aria-label="Présences"
              >
                <Image
                  src="/assets/icons/Icon.svg"
                  alt="#"
                  width={24}
                  height={24}
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                />
              </Link>
              <Link
                href="/notifications"
                className={`border-2 border-gray-200 rounded-full p-2 sm:p-3 lg:p-4 flex items-center justify-center transition ${
                  pathname === "/notifications"
                    ? "bg-[#795FFC] text-white border-[#795FFC]"
                    : "text-gray-700 hover:text-[#795FFC] hover:bg-[#f4f2fb] hover:border-[#795FFC]"
                }`}
                aria-label="Notifications"
              >
                <Image
                  src="/assets/icons/notifications.svg"
                  alt="Notifications"
                  width={24}
                  height={24}
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                />
              </Link>
              <Link
                href="/planning"
                className={`border-2 border-gray-200 rounded-full p-2 sm:p-3 lg:p-4 flex items-center justify-center transition ${
                  pathname === "/planning"
                    ? "bg-[#795FFC] text-white border-[#795FFC]"
                    : "text-gray-700 hover:text-[#795FFC] hover:bg-[#f4f2fb] hover:border-[#795FFC]"
                }`}
                aria-label="Planning"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-400">
                  <PlanningIcon />
                </div>
              </Link>
              <Link
                href="/hours"
                className={`border-2 border-gray-200 rounded-full p-2 sm:p-3 lg:p-4 flex items-center justify-center transition ${
                  pathname === "/hours"
                     ? "bg-[#795FFC] text-white border-[#795FFC]"
                    : "text-gray-700 hover:text-[#795FFC] hover:bg-[#f4f2fb] hover:border-[#795FFC]"
                }`}
                aria-label="Heures"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </Link>
              <Link
                href="/settings"
                className={`border-2 border-gray-200 rounded-full p-2 sm:p-3 lg:p-4 flex items-center justify-center transition ${
                  pathname === "/settings"
                    ? "bg-[#795FFC] text-white border-[#795FFC]"
                    : "text-gray-700 hover:text-[#795FFC] hover:bg-[#f4f2fb] hover:border-[#795FFC]"
                }`}
                aria-label="Settings"
              >
                <Image
                  src="/assets/icons/setting.svg"
                  alt="Settings"
                  width={24}
                  height={24}
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                />
              </Link>
            </nav>
          </aside>
          <main className="flex-1 ml-16 sm:ml-20 pb-16 sm:pb-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
