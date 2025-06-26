import React from "react";
import Image from "next/image";
import { FiMenu, FiSearch, FiChevronUp } from "react-icons/fi";

const notifications = [
  {
    id: 1,
    isExpanded: true,
    title: "Nous avons publié de nouvelles fonctionnalités",
    description:
      "Hey Peter, nous avons une nouvelle opportunité de recherche des utilisateurs pour vous. Adam du bureau du maire recherche des gens comme vous.",
    avatar: "/assets/images/Avatar.png",
    time: "il y a 1 mois",
  },
  {
    id: 2,
    isExpanded: false,
    description:
      "Hey Peter, nous avons une nouvelle opportunité de recherche des utilisateurs pour vous. Adam du bureau du maire recherche des gens comme vous.",
    avatar: "/assets/images/Image.png",
    time: "il y a 1 mois",
  },
  {
    id: 3,
    isExpanded: false,
    description:
      "Hey Peter, nous avons une nouvelle opportunité de recherche des utilisateurs pour vous. Neil cherche des gens comme toi.",
    avatar: "/assets/images/Image (1).png",
    time: "il y a 1 mois",
  },
  {
    id: 4,
    isExpanded: false,
    description:
      "Hey Peter, nous avons une nouvelle opportunité de recherche des utilisateurs pour vous. Neil cherche des gens comme toi.",
    avatar: "/assets/images/Image (2).png",
    time: "il y a 1 mois",
  },
  {
    id: 5,
    isExpanded: false,
    description:
      "Hey Peter, nous avons une nouvelle opportunité de projet parallèle pour vous. Herbert du programme pour enfants recherche des gens comme vous.",
    avatar: "/assets/images/Image (2).png",
    time: "il y a 1 mois",
  },
  {
    id: 6,
    isExpanded: false,
    description:
      "Hey Peter, nous avons une nouvelle opportunité de projet parallèle pour vous. Cleveland du bureau de poste recherche des gens comme vous.",
    avatar: "/assets/images/Image (3).png",
    time: "il y a 2 mois",
  },
];

const NotificationsPage = () => {
  return (
    <div className="bg-[#f8f7ff] p-8 mt-10 min-h-screen font-sans flex gap-6">
      {/* Sidebar */}
      <div className="md:col-span-1">
        <div className="bg-white rounded-lg shadow">
          <div className="bg-[#795FFC] text-white p-4 rounded-t-lg flex items-center">
            <FiMenu className="mr-3" size={20} />
            <h2 className="font-bold text-lg">Filtres</h2>
          </div>
          <div className="p-8">
            <div className="relative mb-6">
              <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Recherche"
                className="w-full bg-gray-100 border-none rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div className="mb-6">
              <ul>
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="au-travail-status"
                    className="accent-[#795FFC] h-5 w-5 text-violet-600 rounded"
                  />
                  <label
                    htmlFor="au-travai-status"
                    className="ml-3 text-green-500 flex items-center"
                  >
                    Lu
                  </label>
                </li>
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="en-pause-status"
                    className="accent-[#795FFC] h-5 w-5  text-violet-600 rounded"
                  />
                  <label
                    htmlFor="en-pause-status"
                    className="ml-3 text-yellow-500 flex items-center"
                  >
                    Non lus
                  </label>
                </li>
                <li className="flex items-center">
                  <input
                    type="checkbox"
                    id="pas-pointe-status"
                    className="accent-[#795FFC] h-5 w-5 text-violet-600 rounded"
                  />
                  <label
                    htmlFor="pas-pointe-status"
                    className="ml-3 text-red-500 flex items-center"
                  >
                    Pas pointé
                  </label>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Lieux</h3>
              <ul>
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="au-travail-lieux"
                    className="accent-[#795FFC] h-5 w-5 text-violet-600 rounded"
                  />
                  <label
                    htmlFor="au-travail-lieux"
                    className="ml-3 text-green-500"
                  >
                    Au travail
                  </label>
                </li>
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="en-pause-lieux"
                    className="accent-[#795FFC] h-5 w-5 text-violet-600 rounded"
                  />
                  <label
                    htmlFor="en-pause-lieux"
                    className="ml-3 text-yellow-500"
                  >
                    En pause
                  </label>
                </li>
                <li className="flex items-center">
                  <input
                    type="checkbox"
                    id="pas-pointe-lieux"
                    className="accent-[#795FFC] h-5 w-5 text-violet-600 rounded"
                  />
                  <label
                    htmlFor="pas-pointe-lieux"
                    className="ml-3 text-red-500"
                  >
                    Pas pointé
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-white rounded-lg shadow px-20 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Notifications</h1>
          <div>
            <button className="bg-[#795FFC] text-white py-2 px-4 rounded-lg shadow hover:bg-violet-700 transition">
              Copy
            </button>
            <button className="text-gray-600 font-semibold py-2 px-4 rounded-lg ml-2 hover:bg-gray-200 transition">
              Excel
            </button>
            <button className="text-gray-600 font-semibold py-2 px-4 rounded-lg ml-2 hover:bg-gray-200 transition">
              CSV
            </button>
            <button className="text-gray-600 font-semibold py-2 px-4 rounded-lg ml-2 hover:bg-gray-200 transition">
              PDF
            </button>
            <button className="text-gray-600 font-semibold py-2 px-4 rounded-lg ml-2 hover:bg-gray-200 transition">
              Print
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {notifications.map((notif) =>
            notif.isExpanded ? (
              <div
                key={notif.id}
                className="bg-[#795FFC] text-white p-4 rounded-lg shadow-lg"
              >
                <div className="flex justify-between items-start">
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                      <Image
                        src={notif.avatar}
                        alt="avatar"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{notif.title}</h3>
                      <p className="text-white text-sm mt-1">
                        {notif.description}
                      </p>
                    </div>
                  </div>
                  <button className="text-[#795FFC] hover:text-white">
                    <FiChevronUp size={20} />
                  </button>
                </div>
              </div>
            ) : (
              <div
                key={notif.id}
                className="bg-white p-4 rounded-lg shadow flex items-center border-l-4 border-transparent hover:border-violet-500 transition-colors"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                  <Image
                    src={notif.avatar}
                    alt="avatar"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex-grow">
                  <p className="text-gray-800">{notif.description}</p>
                  <p className="text-gray-500 text-sm mt-1">{notif.time}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
