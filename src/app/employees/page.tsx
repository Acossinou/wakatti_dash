"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiSearch, FiEdit, FiTrash2 } from "react-icons/fi";
import AddUserModal from "@/components/AddUser";

const employees = [
  {
    id: 1,
    name: "Lindsey Stroud",
    email: "lindsey.stroud@gmail.com",
    avatar: "/assets/images/user.png",
    department: "Technology Department",
    role: "Head of Technology",
  },
  {
    id: 2,
    name: "Sarah Brown",
    email: "sarah.brown@gmail.com",
    avatar: "/assets/images/user.png",
    department: "Technology Department",
    role: "Head of Technology",
  },
  {
    id: 3,
    name: "Micheal Owen",
    email: "micheal.owen@gmail.com",
    avatar: "/assets/images/user.png",
    department: "Technology Department",
    role: "Head of Technology",
  },
  {
    id: 4,
    name: "Mary Jane",
    email: "mary.jane@gmail.com",
    avatar: "/assets/images/user.png",
    department: "Technology Department",
    role: "Head of Technology",
  },
  {
    id: 5,
    name: "Peter Doodle",
    email: "peter.doodle@gmail.com",
    avatar: "/assets/images/user.png",
    department: "Technology Department",
    role: "Head of Technology",
  },
];

const EmployeesPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="bg-[#f8f7ff] p-8 min-h-screen font-sans mt-5">
      <div className="px-4">
        <h1 className="text-2xl font-bold mb-2">Employées</h1>
      </div>

      <div className="flex justify-between items-center mb-6 px-4">
        <p className="text-gray-500">Voici une liste de tous les employés.</p>
        <div className="flex gap-2">
          <button className="bg-[#795FFC] text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-violet-700 transition">
            Copy
          </button>
          <button className="text-gray-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition">
            Excel
          </button>
          <button className="text-gray-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition">
            CSV
          </button>
          <button className="text-gray-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition">
            PDF
          </button>
          <button className="text-gray-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition">
            Print
          </button>
        </div>
        <button
            onClick={() => setModalOpen(true)}
            className="bg-[#795FFC] text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-violet-700 transition"
          >
            Ajouter
          </button>
      </div>

      <AddUserModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

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
                      className="accent-[#795FFC]  h-5 w-5 text-violet-600 rounded"
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
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#795FFC] text-white">
                <tr>
                  <th className="p-4 text-left w-12"></th>
                  <th className="p-4 text-left font-semibold">
                    Employees Name
                  </th>
                  <th className="p-4 text-left font-semibold">Email Address</th>
                  <th className="p-4 text-left font-semibold">Department</th>
                  <th className="p-4 text-left font-semibold">Role</th>
                  <th className="p-4 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {employees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="accent-[#795FFC] h-5 w-5 text-violet-600 rounded"
                      />
                    </td>
                    <td className="p-4 flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <Image
                          src={employee.avatar}
                          alt={employee.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <span className="font-medium text-gray-800">
                        {employee.name}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600">{employee.email}</td>
                    <td className="p-4 text-gray-600">{employee.department}</td>
                    <td className="p-4 text-gray-600">{employee.role}</td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <button className="text-blue-500 hover:text-blue-700 mr-3">
                          <FiEdit size={20} />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <FiTrash2 size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeesPage;
