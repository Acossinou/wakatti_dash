"use client";

import React from "react";
import Image from "next/image";
import { FiMenu, FiSearch} from "react-icons/fi";
// Définition de l'interface Employee pour typer les données des employés
interface Employee {
  id: string;
  name: string;
  avatar: string;
  scheduled: string;
  clocked: string;
  location: string;
  totalHours: string;
}

// Remplace la génération de EMPLOYEES_DATA pour garantir des ids uniques
const EMPLOYEES_DATA: Employee[] = [
  {
    id: "1",
    name: "Maurille KOMI",
    avatar: "/assets/images/user.png",
    scheduled: "08:00 - 17:00",
    clocked: "08:00 - 16:00",
    location: "Godomey",
    totalHours: "08:00",
  },
  {
    id: "2",
    name: "Jean DUPONT",
    avatar: "/assets/images/user.png",
    scheduled: "08:00 - 17:00",
    clocked: "08:00 - 16:00",
    location: "Godomey",
    totalHours: "08:00",
  },
  {
    id: "3",
    name: "Alice DURAND",
    avatar: "/assets/images/user.png",
    scheduled: "08:00 - 17:00",
    clocked: "08:00 - 16:00",
    location: "Godomey",
    totalHours: "08:00",
  },
  {
    id: "4",
    name: "Paul MARTIN",
    avatar: "/assets/images/user.png",
    scheduled: "08:00 - 17:00",
    clocked: "08:00 - 16:00",
    location: "Godomey",
    totalHours: "08:00",
  },

  {
    id: "5",
    name: "Fatou SOW",
    avatar: "/assets/images/user.png",
    scheduled: "08:00 - 17:00",
    clocked: "08:00 - 16:00",
    location: "Godomey",
    totalHours: "08:00",
  },
  {
    id: "6",
    name: "Fatou SOW",
    avatar: "/assets/images/user.png",
    scheduled: "08:00 - 17:00",
    clocked: "08:00 - 16:00",
    location: "Godomey",
    totalHours: "08:00",
  },
  {
    id: "7",
    name: "Fatou SOW",
    avatar: "/assets/images/user.png",
    scheduled: "08:00 - 17:00",
    clocked: "08:00 - 16:00",
    location: "Godomey",
    totalHours: "08:00",
  },
  {
    id: "8",
    name: "Fatou SOW",
    avatar: "/assets/images/user.png",
    scheduled: "08:00 - 17:00",
    clocked: "08:00 - 16:00",
    location: "Godomey",
    totalHours: "08:00",
  },
];

// Note: To use images from i.pravatar.cc, you might need to add it to your next.config.js file:
// images: {
//   domains: ['i.pravatar.cc'],
// },

const EmployeesPage = () => {
  return (
    <div className="bg-[#f8f7ff] p-8 min-h-screen font-sans mt-5">
      <div className="flex justify-between items-center mb-6 px-4">
        <h1 className="text-2xl font-bold mb-6 mt-4">Temps Et Présence</h1>
        <div>
          <button className="bg-[#795FFC] text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-violet-700 transition">
            Copy
          </button>
          <button className="text-gray-600 font-semibold py-2 px-6 rounded-lg ml-2 hover:bg-gray-200 transition">
            Excel
          </button>
          <button className="text-gray-600 font-semibold py-2 px-6 rounded-lg ml-2 hover:bg-gray-200 transition">
            CSV
          </button>
          <button className="text-gray-600 font-semibold py-2 px-6 rounded-lg ml-2 hover:bg-gray-200 transition">
            PDF
          </button>
          <button className="text-gray-600 font-semibold py-2 px-6 rounded-lg ml-2 hover:bg-gray-200 transition">
            Print
          </button>
        </div>
        <button className="bg-[#795FFC] text-white py-3 px-8 rounded-lg shadow font-semibold hover:bg-violet-700 transition">
          Pointer
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
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
                      htmlFor="au-travail-status"
                      className="ml-3 text-green-500 flex items-center"
                    >
                      Au travail
                    </label>
                  </li>
                  <li className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id="en-pause-status"
                      className="accent-[#795FFC] h-5 w-5 text-violet-600 rounded"
                    />
                    <label
                      htmlFor="en-pause-status"
                      className="ml-3 text-yellow-500 flex items-center"
                    >
                      En pause
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

        {/* Employees Table */}
        <section className="md:col-span-3">
          <div className="bg-white rounded-2xl shadow-sm font-sans w-full mb-10">
            <div className="overflow-x-auto">
              <table className="w-full whitespace-nowrap min-w-[600px]">
                <thead className="bg-[#795FFC] text-white ">
                  <tr>
                    <th className="text-left font-semibold border-r border-gray-200  p-2 sm:p-3 xl:p-4 rounded-tl-lg text-xs sm:text-sm xl:text-lg ">
                      Employés / Stagiaires
                    </th>
                    <th className="text-left border-r border-gray-200 font-semibold p-2 sm:p-3 xl:p-4 text-xs sm:text-sm xl:text-lg">
                      Planifiées
                    </th>
                    <th className="text-left border-r border-gray-200 font-semibold p-2 sm:p-3  xl:p-4 text-xs sm:text-sm xl:text-lg">
                      Pointées
                    </th>
                    <th className="text-left border-r border-gray-200 font-semibold p-2 sm:p-3 xl:p-4 rounded-tr-lg text-xs sm:text-sm xl:text-lg">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {EMPLOYEES_DATA.map((employee) => (
                    <tr key={employee.id} className="border-b border-gray-200">
                      <td className="border-r border-gray-200 p-2 sm:p-3">
                        <div className="flex items-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden mr-2 sm:mr-3 flex-shrink-0">
                            <Image
                              src={employee.avatar}
                              alt={employee.name}
                              width={40}
                              height={40}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <span className="font-medium text-gray-800 text-xs sm:text-sm truncate">
                            {employee.name}
                          </span>
                        </div>
                      </td>
                      <td className="p-2 sm:p-3 border-r border-gray-200 text-gray-600 text-xs sm:text-sm">
                        {employee.scheduled}
                      </td>
                      <td className="p-2 sm:p-3 border-r border-gray-200">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-10">
                          <span className="bg-gray-100 text-gray-800 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm whitespace-nowrap">
                            {employee.clocked}
                          </span>
                          <div className="flex items-center bg-gray-100 px-2 sm:px-3 py-1 rounded-md">
                            <svg
                              className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-gray-700 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 20l-4.95-6.05a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-xs sm:text-sm">
                              {employee.location}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 sm:p-3 border-r border-gray-200 text-gray-600 text-xs sm:text-sm">
                        {employee.totalHours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-xs sm:text-sm text-gray-500 p-4 sm:p-6 lg:p-10 gap-4">
              <div className="order-2 sm:order-1">
                <p>Affichage des données de 1 à 8 sur 256K entrées.</p>
              </div>
              <nav className="flex items-center space-x-1 sm:space-x-2 order-1 sm:order-2">
                <button className="px-2 sm:px-3 py-1 rounded-md hover:bg-gray-200 transition-colors text-xs sm:text-sm">
                  &lt;
                </button>
                <button className="px-2 sm:px-3 py-1 rounded-md  bg-[#795FFC] text-white text-xs sm:text-sm">
                  1
                </button>
                <button className="px-2 sm:px-3 py-1 rounded-md hover:bg-gray-200 transition-colors text-xs sm:text-sm">
                  2
                </button>
                <button className="px-2 sm:px-3 py-1 rounded-md hover:bg-gray-200 transition-colors text-xs sm:text-sm">
                  3
                </button>
                <span className="px-1 sm:px-3 py-1 text-xs sm:text-sm">
                  ...
                </span>
                <button className="px-2 sm:px-3 py-1 rounded-md hover:bg-gray-200 transition-colors text-xs sm:text-sm">
                  40
                </button>
                <button className="px-2 sm:px-3 py-1 rounded-md hover:bg-gray-200 transition-colors text-xs sm:text-sm">
                  &gt;
                </button>
              </nav>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmployeesPage;
