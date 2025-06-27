/**
 * COMPOSANT DE NOTIFICATION PUSH - WAKATTI DASH
 *
 * Ce composant affiche des notifications temporaires avec :
 * - Différents types (success, info, warning, error)
 * - Animations d'entrée et de sortie
 * - Auto-fermeture configurable
 * - Icônes adaptées selon le type
 * - Possibilité de fermeture manuelle
 */
"use client";

import React, { useEffect, useState } from "react";
import { FiX, FiCheck, FiInfo, FiAlertTriangle } from "react-icons/fi";

// Types de notifications disponibles
export type NotificationType = "success" | "info" | "warning" | "error";

/**
 * Interface pour les données d'une notification
 */
export interface NotificationData {
  id: string; // Identifiant unique de la notification
  type: NotificationType; // Type de notification (détermine l'apparence)
  title: string; // Titre de la notification
  message: string; // Message détaillé
  duration?: number; // Durée d'affichage en millisecondes (optionnel)
}

/**
 * Interface pour les props du composant PushNotification
 */
interface PushNotificationProps {
  notification: NotificationData; // Données de la notification à afficher
  onClose: (id: string) => void; // Callback appelé lors de la fermeture
}

/**
 * COMPOSANT NOTIFICATION PUSH
 * Affiche une notification avec animations et auto-fermeture
 */
const PushNotification: React.FC<PushNotificationProps> = ({
  notification,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false); // État pour l'animation d'entrée
  const [isLeaving, setIsLeaving] = useState(false); // État pour l'animation de sortie

  /**
   * Effets pour gérer les animations et l'auto-fermeture
   */
  useEffect(() => {
    // Animation d'entrée avec un léger délai
    const timer = setTimeout(() => setIsVisible(true), 100);

    // Programmation de l'auto-fermeture
    const autoCloseTimer = setTimeout(() => {
      handleClose();
    }, notification.duration || 5000); // 5 secondes par défaut

    return () => {
      clearTimeout(timer);
      clearTimeout(autoCloseTimer);
    };
  }, [notification.duration]);

  /**
   * Fonction pour gérer la fermeture avec animation
   */
  const handleClose = () => {
    setIsLeaving(true); // Déclenche l'animation de sortie
    setTimeout(() => {
      onClose(notification.id); // Supprime la notification après l'animation
    }, 300);
  };

  /**
   * Fonction pour obtenir l'icône appropriée selon le type
   */
  const getIcon = () => {
    switch (notification.type) {
      case "success":
        return <FiCheck className="w-5 h-5 text-white" />;
      case "warning":
        return <FiAlertTriangle className="w-5 h-5 text-yellow-600" />;
      case "error":
        return <FiAlertTriangle className="w-5 h-5 text-red-600" />;
      default:
        return <FiInfo className="w-5 h-5 text-blue-600" />;
    }
  };

  /**
   * Fonction pour obtenir les styles CSS selon le type
   */
  const getStyles = () => {
    const baseStyles = "border-l-4 shadow-lg"; // Styles de base
    switch (notification.type) {
      case "success":
        return `${baseStyles} bg-[#795FFC] `; // Violet pour succès
      case "warning":
        return `${baseStyles} bg-[#795FFC]`; // Violet pour avertissement
      case "error":
        return `${baseStyles} bg-red-50`; // Rouge clair pour erreur
      default:
        return `${baseStyles} bg-blue-50`; // Bleu clair pour info
    }
  };

  return (
    <div
      className={`
        max-w-sm w-full z-50 transition-all duration-500 ease-in-out
        ${
          isVisible && !isLeaving
            ? "translate-x-0 opacity-100" // Position et opacité finales
            : "translate-x-full opacity-0" // Position et opacité initiales/finales
        }
      `}
    >
      {/* CONTENU DE LA NOTIFICATION */}
      <div className={`${getStyles()} rounded-lg p-4 backdrop-blur-sm`}>
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            {/* ICÔNE DE LA NOTIFICATION */}
            <div className="flex-shrink-0 mt-0.5">{getIcon()}</div>
            <div className="flex-1 min-w-0">
              {/* TITRE DE LA NOTIFICATION */}
              <h4 className="text-sm font-semibold  text-white mb-1">
                {notification.title}
              </h4>
              {/* MESSAGE DE LA NOTIFICATION */}
              <p className="text-sm text-white">{notification.message}</p>
            </div>
          </div>
          {/* BOUTON DE FERMETURE MANUELLE */}
          <button
            onClick={handleClose}
            className="flex-shrink-0 ml-3 p-1 rounded-full hover:bg-gray-200 transition-colors"
          >
            <FiX className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PushNotification;
