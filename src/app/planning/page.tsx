"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import LeaveRequestModal from "@/components/congés";
import Image from "next/image";

export default function ScheduleView() {
  const [selectedWeek] = useState({
    start: new Date("2025-10-21"),
    end: new Date("2025-10-26"),
  });

  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);

  const days = [
    "Lundi 21",
    "Mardi 22",
    "Mercredi 23",
    "Jeudi 24",
    "Vendredi 25",
    "Samedi 26",
    "Dimanche 27",
  ];
  const hours = Array.from({ length: 12 }, (_, i) => i + 9);

  // Remplace les icônes Lucide par des images SVG personnalisées
  const events = [
    {
      title: "Nombre de tâches : 01",
      employee: "DOSSA",
      day: "Lundi 21",
      time: "09:30 - 11:30",
      color: "bg-green-100 border-green-400",
      avatars: [
        <Image
          src="/assets/images/2.png"
          alt="avatar"
          width={20}
          height={20}
          className="w-5 h-5"
          key="1"
        />,
      ],
    },
    {
      title: "Employé ajouté\nNombre de tâches : 02",
      employee: "DADA",
      day: "Mardi 22",
      time: "11:00 - 12:00",
      color: "bg-orange-100 border-orange-400",
      avatars: [
        <Image
          src="/assets/images/1.png"
          alt="avatar"
          width={20}
          height={20}
          className="w-5 h-5"
          key="1"
        />,
      ],
    },
    {
      title: "Nombre de tâches : 05",
      employee: "TATA",
      day: "Jeudi 24",
      time: "11:00 - 13:00",
      color: "bg-red-100 border-red-400",
      avatars: [
        <Image
          src="/assets/images/3.png"
          alt="avatar"
          width={20}
          height={20}
          className="w-5 h-5"
          key="1"
        />,
      ],
    },
    {
      title: "Staff / Conférence\nPatient: Jenny Dey",
      employee: "DOSSAA",
      day: "Lundi 21",
      time: "17:00 - 19:00",
      color: "bg-sky-100 border-sky-400",
      avatars: [
        <Image
          src="/assets/images/5.png"
          alt="avatar"
          width={20}
          height={20}
          className="w-5 h-5"
          key="1"
        />,
      ],
    },
    {
      title: "Nombre de tâches : 03",
      employee: "LOLO",
      day: "Vendredi 25",
      time: "11:00 - 14:00",
      color: "bg-yellow-100 border-yellow-400",
      avatars: [
        <Image
          src="/assets/images/1.png"
          alt="avatar"
          width={20}
          height={20}
          className="w-5 h-5"
          key="1"
        />,
      ],
    },
    {
      title: "Nombre de tâches : 02",
      employee: "POPO",
      day: "Dimanche 27",
      time: "11:00 - 14:00",
      color: "bg-amber-100 border-amber-400",
      avatars: [
        <Image
          src="/assets/images/2.png"
          alt="avatar"
          width={20}
          height={20}
          className="w-5 h-5"
          key="1"
        />,
      ],
    },
    {
      title: "Nombre de tâches : 03",
      employee: "YOYO",
      day: "Mercredi 23",
      time: "13:00 - 15:00",
      color: "bg-fuchsia-100 border-fuchsia-400",
      avatars: [
        <Image
          src="/assets/images/1.png"
          alt="avatar"
          width={20}
          height={20}
          className="w-5 h-5"
          key="1"
        />,
      ],
    },
    {
      title: "Nombre de tâches : 05",
      employee: "NANA",
      day: "Jeudi 24",
      time: "13:00 - 15:00",
      color: "bg-cyan-100 border-cyan-400",
      avatars: [
        <Image
          src="/assets/images/5.png"
          alt="avatar"
          width={20}
          height={20}
          className="w-5 h-5"
          key="1"
        />,
      ],
    },
    {
      title: "Nombre de tâches : 03",
      employee: "MOMA",
      day: "Samedi 26",
      time: "14:00 - 16:00",
      color: "bg-teal-100 border-teal-400",
      avatars: [
        <Image
          src="/assets/images/2.png"
          alt="avatar"
          width={20}
          height={20}
          className="w-5 h-5"
          key="1"
        />,
      ],
    },
  ];

  return (
    <div className="p-20 bg-[#f4f0fc] min-h-screen">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Employées</h2>
          <p className="text-sm text-gray-500">
            Voici une liste de tous les employés.
          </p>
        </div>
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
        </div>{" "}
        <Button
          onClick={() => setIsLeaveModalOpen(true)}
          className="bg-[#795FFC] text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-violet-700 transition"
        >
          Planifier un congé
        </Button>
      </div>

      {/* Modal de congé */}
      <LeaveRequestModal
        isOpen={isLeaveModalOpen}
        onClose={() => setIsLeaveModalOpen(false)}
      />
      <div className="bg-white rounded-xl shadow-lg">
        <div className="flex items-center text-sm font-medium text-black justify-between mb-4 p-4">
          <button className="text-gray-600 font-semibold py-2 border-1 border-gray-200 px-6 rounded-full hover:bg-gray-200 transition">
            Aujourd&apos;hui
          </button>{" "}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="w-12 h-12 rounded-full border-gray-200  flex items-center justify-center mr-4"
            >
              <ChevronLeft className="text-gray-500" />
            </Button>
            <p className="font-semibold">
              {format(selectedWeek.start, "MMM dd")} –{" "}
              {format(selectedWeek.end, "dd ,yyyy")}
            </p>
            <Button
              variant="outline"
              className="w-12 h-12 rounded-full border-gray-200  flex items-center justify-center ml-4"
            >
              <ChevronRight className="text-gray-500" />
            </Button>
          </div>{" "}
          <div className="bg-gray-100 p-0 rounded-full flex">
            <Button
              variant="outline"
              className="bg-white text-gray-600 font-semibold p-4 rounded-l-full border-1 border-gray-200 hover:bg-gray-50 transition"
            >
              Année
            </Button>
            <Button className="bg-[#795FFC] text-white font-semibold p-4 rounded-none border-1 border-gray-200 hover:bg-[#6d4fd6] transition">
              Semaine
            </Button>
            <Button
              variant="outline"
              className="bg-white text-gray-600 font-semibold p-4 rounded-none border-1 border-gray-200 hover:bg-gray-50 transition"
            >
              Mois
            </Button>
            <Button
              variant="outline"
              className="bg-white text-gray-600 font-semibold p-4 rounded-r-full border-1 border-gray-200 hover:bg-gray-50 transition"
            >
              Jours
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-px bg-white rounded-lg overflow-hidden">
          <div className="bg-white p-2 text-xs font-semibold">&nbsp;</div>
          {days.map((day) => (
            <div
              key={day}
              className="bg-white p-4 text-xs font-semibold border-l border-t text-center border-gray-200"
            >
              {day}
            </div>
          ))}

          {hours.map((hour) => (
            <div key={hour} className="contents">
              <div className="bg-white text-sm text-black p-8 border-t border-gray-200">
                {hour.toString().padStart(2, "0")}:00
              </div>
              {days.map((day) => {
                const block = events.find(
                  (e) =>
                    e.day === day &&
                    e.time.startsWith(`${hour.toString().padStart(2, "0")}`)
                );
                return (
                  <div
                    key={`${day}-${hour}`}
                    className="relative h-24 border-t border-l bg-white border-gray-200"
                  >
                    {block && (
                      <div
                        className={`absolute w-full h-full rounded-lg border ${block.color} p-2 text-xs overflow-hidden`}
                      >
                        <p className="font-semibold whitespace-pre-line">
                          {block.title}
                        </p>
                        <p className="text-gray-500 text-[11px]">
                          Employé : {block.employee}
                        </p>
                        <div className="flex mt-2 space-x-1 text-xl">
                          {block.avatars.map((avatar, i) => (
                            <span key={i}>{avatar}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
