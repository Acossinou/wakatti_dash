import React from "react";
import {
  FiX,
  FiMapPin,
  FiClock,
  FiEdit2,
  FiChevronDown,
} from "react-icons/fi";

interface LeaveRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeaveRequestModal: React.FC<LeaveRequestModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-flou bg-opacity-50 z-50 flex justify-center items-center  backdrop-blur font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-1 right-2 text-gray-400 hover:text-gray-600 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          <FiX size={20} />
        </button>

        <div className="space-y-2">
          <div>
            <div className="flex justify-between items-center w-full">
              <h3 className="text-lg font-semibold text-gray-800">
                Type de Congés :
              </h3>
              <button className="flex items-center space-x-2 bg-gray-100 rounded-full py-1 px-3 border border-gray-200">
                <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
                <FiChevronDown className="text-gray-600" />
              </button>
            </div>
            <select className="w-full mt-2 text-gray-500  rounded-lg px-3 py-2">
              <option>Congé de déplacement</option>
              <option>Congé maladie</option>
              <option>Congé annuel</option>
              <option>Congé maternité</option>
            </select>
          </div>

          <hr className="border-gray-200" />

          <div className="flex items-center space-x-4 text-gray-700">
            <FiMapPin size={20} />
            <input
              type="text"
              placeholder="Lieu"
              className="flex-1 rounded-lg px-3 py-2 text-gray-500"
            />
          </div>

          <hr className="border-gray-200" />

          <div className="flex items-center">
            <div className="flex items-center space-x-4 text-gray-700 py-2 border-r border-gray-200 pr-4">
              <FiClock size={20} />
              <input
                type="number"
                placeholder="Heure de debut"
                className="flex-1 w-45 rounded-lg px-1 py-2"
              />
            </div>
            <div className="flex items-center space-x-4 text-gray-700 ml-2">
              <FiClock size={20} />
              <input
                type="number"
                placeholder="Heure de fin"
                className="flex-1 rounded-lg px-3 py-2 w-45"
              />
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="flex items-center space-x-4 text-gray-700">
            <FiClock size={20} />
            <input
              type="number"
              placeholder="Nombre d'heures"
              className="flex-1 rounded-lg px-3 py-2"
            />
          </div>
          <hr className="border-gray-200" />
          <div>
            <div className="flex items-center space-x-4 text-gray-700">
              <FiEdit2 size={20} />
              <h2 className="text-gray-800 font-semibold">Ajouter des notes</h2>
            </div>
            <textarea
              placeholder="Il est en mission..."
              className="w-full mt-2 rounded-lg px-3 py-2 resize-none"
            ></textarea>
          </div>
          <hr className="border-gray-200" />
          <div>
            <h2 className="text-gray-800 font-semibold pt-2">
              Mode de travail
            </h2>
            <select className="w-full mt-2 text-gray-500 rounded-lg px-3 py-2">
              <option>Télétravail prévu</option>
              <option>Présentiel</option>
              <option>Hybride</option>
              <option>Déplacement</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end items-center gap-4 mt-10">
          <button
            type="button"
            onClick={onClose}
            className="text-gray-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="bg-[#795FFC] text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-violet-700 transition-transform transform hover:scale-105"
          >
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequestModal;
