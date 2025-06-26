import React from 'react';
import { FiX } from 'react-icons/fi';

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-flou bg-opacity-50 z-50 flex justify-center items-center  backdrop-blur font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-full bg-gray-100"
        >
          <FiX size={20} />
        </button>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Ajouter un nouveau</h2>

        <form>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">Avatar</label>
            <button type="button" className="bg-[#795FFC] text-white font-semibold py-2 px-6 rounded-lg border border-gray-200 hover:bg-violet-700 transition">
              AJOUTER
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-600 mb-2">Prénom</label>
              <input type="text" id="prenom" className="w-full bg-[#f7f8fa] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-violet-500" />
            </div>
            <div>
              <label htmlFor="nomFamille" className="block text-sm font-medium text-gray-600 mb-2">Nom de famille</label>
              <input type="text" id="nomFamille" className="w-full bg-[#f7f8fa] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-violet-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">E-mail</label>
              <input type="email" id="email" className="w-full bg-[#f7f8fa] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-violet-500" />
            </div>
            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-600 mb-2">Téléphone</label>
              <input type="tel" id="telephone" className="w-full bg-[#f7f8fa] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-violet-500" />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="adresse" className="block text-sm font-medium text-gray-600 mb-2">Adresse</label>
            <input type="text" id="adresse" placeholder="Adresse de la rue" className="w-full bg-[#f7f8fa] border-none rounded-lg px-4 py-3 mb-3 focus:ring-2 focus:ring-violet-500" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <input type="text" placeholder="Ville" className="w-full bg-[#f7f8fa] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-violet-500" />
              <input type="text" placeholder="État / province" className="w-full bg-[#f7f8fa] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-violet-500" />
              <input type="text" placeholder="Code postal" className="w-full bg-[#f7f8fa] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-violet-500" />
            </div>
          </div>

          <div className="flex justify-end items-center gap-4 mt-8">
            <button type="button" onClick={onClose} className="text-gray-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition">
              Annuler
            </button>
            <button type="submit" className="bg-[#795FFC] text-white font-bold py-3 px-4 rounded-lg shadow hover:bg-violet-700 transition">
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
