"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type Employee = {
  id: string;
  name: string;
  avatar: string;
  totalHours: {
    month: number;
    quarter: number;
    semester: number;
  };
  department: string;
  position: string;
};

type PeriodType = "month" | "quarter" | "semester";

const EMPLOYEES_DATA: Employee[] = [
  {
    id: "1",
    name: "Maurille KOMI",
    avatar: "/assets/images/user.png",
    totalHours: { month: 168, quarter: 504, semester: 1008 },
    department: "Développement",
    position: "Développeur Senior",
  },
  {
    id: "2",
    name: "Jean DUPONT",
    avatar: "/assets/images/user.png",
    totalHours: { month: 160, quarter: 480, semester: 960 },
    department: "Design",
    position: "UI/UX Designer",
  },
  {
    id: "3",
    name: "Alice DURAND",
    avatar: "/assets/images/user.png",
    totalHours: { month: 172, quarter: 516, semester: 1032 },
    department: "Marketing",
    position: "Chef de projet",
  },
  {
    id: "4",
    name: "Paul MARTIN",
    avatar: "/assets/images/user.png",
    totalHours: { month: 156, quarter: 468, semester: 936 },
    department: "RH",
    position: "Gestionnaire RH",
  },
  {
    id: "5",
    name: "Fatou SOW",
    avatar: "/assets/images/user.png",
    totalHours: { month: 164, quarter: 492, semester: 984 },
    department: "Finance",
    position: "Comptable",
  },
];

const HoursPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>("month");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const periodLabels = {
    month: "Ce mois",
    quarter: "Ce trimestre",
    semester: "Ce semestre",
  };

  const getPeriodHours = (employee: Employee) => {
    return employee.totalHours[selectedPeriod];
  };

  const getTotalHours = () => {
    return EMPLOYEES_DATA.reduce(
      (total, employee) => total + getPeriodHours(employee),
      0
    );
  };

  return (
    <div className="min-h-screen bg-[#f4f2fb] p-2 sm:p-4 lg:p-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-800">
            Totales des heures
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Suivi des heures travaillées par employé
          </p>
        </div>

        {/* Period Filter */}
        <div className="relative">
          <Button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-[#795FFC] text-white border border-gray-300 hover:bg-[#997FFF] px-4 py-2 rounded-lg flex items-center gap-2 min-w-[150px] justify-between"
          >
            {periodLabels[selectedPeriod]}
            <ChevronDownIcon className="w-4 h-4" />
          </Button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
              {Object.entries(periodLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedPeriod(key as PeriodType);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                    selectedPeriod === key
                      ? "bg-[#795FFC] text-white"
                      : "text-gray-700"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total des heures</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {getTotalHours()}h
                </p>
              </div>
              <div className="w-12 h-12 bg-[#795FFC] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Moyenne par employé</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {Math.round(getTotalHours() / EMPLOYEES_DATA.length)}h
                </p>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Nombre d&apos;employés</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {EMPLOYEES_DATA.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Employees Table */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Détail par employé - {periodLabels[selectedPeriod]}
          </h2>
        </div>
        <Card>
          <CardContent>
            <div className="overflow-x-auto ">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700">
                      Employé
                    </th>
                    <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700 hidden sm:table-cell">
                      Département
                    </th>
                    <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700 hidden lg:table-cell">
                      Poste
                    </th>
                    <th className="text-right py-3 px-2 sm:px-4 font-semibold text-gray-700">
                      Heures totales
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {EMPLOYEES_DATA.map((employee) => (
                    <tr
                      key={employee.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-2 sm:px-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                            <Image
                              src={employee.avatar}
                              alt={employee.name}
                              width={40}
                              height={40}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800 text-sm sm:text-base">
                              {employee.name}
                            </p>
                            <p className="text-xs text-gray-500 sm:hidden">
                              {employee.department}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-gray-600 text-sm hidden sm:table-cell">
                        {employee.department}
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-gray-600 text-sm hidden lg:table-cell">
                        {employee.position}
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-right">
                        <span className="bg-[#795FFC] text-white px-2 sm:px-3 py-1 rounded-full text-sm font-medium">
                          {getPeriodHours(employee)}h
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HoursPage;
