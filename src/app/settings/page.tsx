"use client";

import React from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { Edit2Icon } from "lucide-react";

const userListData = [
  {
    id: 1,
    name: "Saint Paul, MN",
    date: "Nov 14, 09:00",
    amount: "$ 6000",
    avatar: null,
  },
  {
    id: 2,
    name: "Lawrence, MA",
    date: "Nov 14, 09:00",
    amount: "$ 6000",
    avatar: "/assets/images/Image5.png",
  },
  {
    id: 3,
    name: "New York, NY",
    date: "Nov 14, 09:00",
    amount: "$ 6000",
    avatar: "/assets/images/Image5.png",
  },
  {
    id: 4,
    name: "New York, NY",
    date: "Nov 14, 09:00",
    amount: "$ 6000",
    avatar: "/assets/images/Image5.png",
  },
  {
    id: 5,
    name: "New York, NY",
    date: "Nov 14, 09:00",
    amount: "$ 6000",
    avatar: "/assets/images/Image5.png",
  },
  {
    id: 6,
    name: "New York, NY",
    date: "Nov 14, 09:00",
    amount: "$ 6000",
    avatar: "/assets/images/Image5.png",
  },
  {
    id: 7,
    name: "New York, NY",
    date: "Nov 14, 09:00",
    amount: "$ 6000",
    avatar: "/assets/images/Image5.png",
  },
];

const SettingPage = () => {
  return (
    <div className="bg-[#f0f2f5] min-h-screen p-15 font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-lg flex gap-8">
        {/* Main Profile Form */}
        <div className="w-2/3">
          <div className="relative mb-8">
            {" "}
            <div className="w-full h-48 rounded-2xl overflow-hidden relative cursor-pointer group">
              <input
                type="file"
                id="bannerUpload"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  // Ici vous pouvez gérer le changement d'image
                  if (e.target.files && e.target.files[0]) {
                    const file = e.target.files[0];
                    console.log("Nouvelle image sélectionnée:", file);
                    // Logique pour uploader/changer l'image
                  }
                }}
              />
              <label
                htmlFor="bannerUpload"
                className="cursor-pointer block w-full h-full"
              >
                <Image
                  width={800}
                  height={200}
                  src="/assets/images/bg.png"
                  alt="Banner"
                  className="w-full h-full object-cover transition-opacity group-hover:opacity-75"
                />
                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-flou bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="mb-2">
                      <svg
                        className="w-8 h-8 mx-auto"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Changer l&apos;image</p>
                  </div>
                </div>
              </label>
              <button className="absolute top-35 right-4 bg-white/80 p-1 rounded-full text-gray-700 hover:bg-white transition-colors z-10">
                <Image
                  width={24}
                  height={24}
                  src="/assets/icons/delete.svg"
                  alt="Delete"
                  className="w-10 h-10"
                />
              </button>
            </div>
            <div className="absolute -bottom-[-12px] left-8">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md relative">
                <Image
                  width={96}
                  height={96}
                  src="/assets/images/Avatar 1.png"
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <input
                type="file"
                id="avatarUpload"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  // Gérer le changement d'avatar
                  if (e.target.files && e.target.files[0]) {
                    const file = e.target.files[0];
                    console.log("Nouvel avatar sélectionné:", file);
                    // Logique pour uploader/changer l'avatar
                  }
                }}
              />
              <label htmlFor="avatarUpload">
                <button
                  type="button"
                  className="absolute bottom-0 right-1 bg-[#795FFC] p-1 rounded-full text-white hover:bg-violet-700 transition-colors cursor-pointer"
                  onClick={() =>
                    document.getElementById("avatarUpload")?.click()
                  }
                >
                  <Edit2Icon size={15} />
                </button>
              </label>
            </div>
          </div>

          <div className="mt-16">
            <form>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-gray-600 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    defaultValue="Barbara"
                    className="w-full bg-[#f3f6f9] text-[#795FFC] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-gray-600 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    defaultValue="Anderson"
                    className="w-full bg-[#f3f6f9] text-[#795FFC] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-600 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    defaultValue="banderson@gmail.com"
                    className="w-full bg-[#f3f6f9] text-[#795FFC] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-600 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    defaultValue="310-685-3335"
                    className="w-full bg-[#f3f6f9] text-[#795FFC] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="streetAddress"
                  className="block text-sm font-semibold text-gray-600 mb-2"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  placeholder="Street Address"
                  className="w-full bg-[#f3f6f9] text-[#795FFC] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-3 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full bg-[#f3f6f9] text-[#795FFC] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="State / Province"
                  className="w-full bg-[#f3f6f9] text-[#795FFC] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="w-full bg-[#f3f6f9] text-[#795FFC] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#795FFC] text-white font-bold mt-10 py-3 px-6 rounded-lg shadow hover:bg-violet-700 transition"
                >
                  Enregistrer les modifications
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Users List Sidebar */}
        <aside className="w-1/3 bg-[#f3f6f9] p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-gray-800">
              Liste des utilisateurs
            </h3>
            <button className="bg-[#795FFC] text-white w-8 h-8 flex items-center justify-center rounded-full shadow hover:bg-violet-700">
              <FiPlus size={20} />
            </button>
          </div>
          <div className="space-y-4">
            {userListData.map((user) => (
              <div key={user.id} className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4 flex-shrink-0">
                  {user.avatar ? (
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      width={48}
                      height={48}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200"></div>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-lg text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">
                    {user.date} &bull; {user.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="text-[#795FFC] text-lg font-semibold hover:underline ">
              Voir plus +
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SettingPage;
