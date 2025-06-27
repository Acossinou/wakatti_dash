/**
 * TABLEAU DE BORD PRINCIPAL - WAKATTI DASH
 *
 * Cette page affiche le dashboard principal de l'application avec :
 * - Statistiques générales (effectif, présences, heures)
 * - Graphiques de présence (camemberts et courbes)
 * - Liste détaillée des employés avec leurs horaires
 * - Interface responsive pour tous les écrans
 */
"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Area,
} from "recharts";

// INTERFACES ET TYPES POUR LE TYPAGE DES DONNÉES

/**
 * Interface pour les cartes de statistiques
 * Définit la structure des données affichées dans les cartes du haut
 */
type StatCardProps = {
  label: string; // Libellé de la statistique
  value: number; // Valeur numérique
  trend: string; // Tendance (ex: "4% (30jours)")
  trendColor: "positive" | "negative" | "neutral"; // Couleur de la tendance
  icon?: React.ReactNode; // Icône optionnelle
};

/**
 * Interface pour les données des employés
 * Structure des informations de chaque employé
 */
type Employee = {
  id: string; // Identifiant unique
  name: string; // Nom complet
  avatar: string; // Chemin vers l'image de profil
  scheduled: string; // Horaires planifiés
  clocked: string; // Horaires réellement pointés
  location: string; // Lieu de travail
  totalHours: string; // Total d'heures travaillées
};

// DONNÉES STATIQUES POUR LES GRAPHIQUES ET STATISTIQUES

/**
 * Données pour le graphique de présence (camemberts)
 * Répartition des employés par statut
 */
const PRESENCE_DATA = [
  { name: "Présence", value: 81 }, // Employés présents
  { name: "Retard", value: 22 }, // Employés en retard
  { name: "Absents", value: 62 }, // Employés absents
];

// Couleurs associées aux différents statuts dans les graphiques
const COLORS = ["#2e90fa", "#22c55e", "#ef4444"];

/**
 * Données des statistiques principales affichées en haut du dashboard
 * Chaque carte affiche une métrique importante avec son évolution
 */
const STATS_DATA: StatCardProps[] = [
  {
    label: "Effectif Total",
    value: 158,
    trend: "4% (30jours)",
    trendColor: "neutral",
    icon: (
      <Image
        src="/assets/icons/1.svg"
        alt="Effectif Total"
        width={80}
        height={80}
        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
      />
    ),
  },
  {
    label: "Total Présent",
    value: 124,
    trend: "4%(30jours)",
    trendColor: "neutral",
    icon: (
      <Image
        src="/assets/icons/2.svg"
        alt="Total Présent"
        width={80}
        height={80}
        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
      />
    ),
  },
  {
    label: "Présent aujourd'hui",
    value: 65,
    trend: "25%(30jours)",
    trendColor: "neutral",
    icon: (
      <Image
        src="/assets/icons/3.svg"
        alt="Présent aujourd'hui"
        width={80}
        height={80}
        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
      />
    ),
  },
  {
    label: "Totales des heures",
    value: 300,
    trend: "15%(30jours)",
    trendColor: "neutral",
    icon: (
      <Image
        src="/assets/icons/4.svg"
        alt="Totales des heures"
        width={80}
        height={80}
        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
      />
    ),
  },
];

/**
 * Données des employés pour le tableau
 * Liste des employés avec leurs informations de présence
 */
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
];

// COMPOSANTS

/**
 * Composant pour afficher une carte de statistique
 * Affiche une métrique avec son icône, sa valeur et sa tendance
 */
const StatCard = ({ label, value, trend, trendColor, icon }: StatCardProps) => {
  // Configuration des couleurs selon le type de tendance
  const trendColors = {
    positive: "text-green-500",
    negative: "text-red-500",
    neutral: "text-gray-500",
  };

  // Mapping des icônes de tendance selon le libellé
  const trendIcons: { [key: string]: string } = {
    "Effectif Total": "assets/icons/+.svg",
    "Total Présent": "assets/icons/+.svg",
    "Présent aujourd'hui": "assets/icons/-.svg",
    "Totales des heures": "assets/icons/-.svg",
  };

  return (
    <Card>
      <CardContent className="px-2 sm:px-4 py-6 sm:py-8 lg:py-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
        {/* Icône principale de la statistique */}
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <div className="text-center sm:text-left">
          {/* Valeur principale */}
          <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-600">
            {value}
          </div>
          {/* Libellé de la statistique */}
          <div className="text-xs sm:text-sm text-gray-500 mt-1">{label}</div>
          {/* Tendance avec icône */}
          <div
            className={`flex items-center justify-center sm:justify-start gap-2 text-xs mt-1 font-medium ${trendColors[trendColor]}`}
          >
            <Image
              src={trendIcons[label] || "/assets/icons/trend-default.svg"}
              alt="trend icon"
              width={24}
              height={24}
              className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
            />
            {trend}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

/**
 * COMPOSANT PRINCIPAL DU DASHBOARD
 * Orchestre l'affichage de tous les éléments du tableau de bord
 */
const Dashboard = () => {
  // Calcul des pourcentages pour les graphiques de présence
  const totalPresence = PRESENCE_DATA.reduce(
    (sum, item) => sum + item.value,
    0
  );
  const presencePercentages = PRESENCE_DATA.map((item) => ({
    ...item,
    percentage: Math.round((item.value / totalPresence) * 100),
  }));

  return (
    <div className="min-h-screen bg-[#f4f2fb] p-2 sm:p-4 lg:p-6">
      {/* EN-TÊTE DU DASHBOARD */}
      <header className="text-black py-4 sm:py-6 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* Titre et message de bienvenue */}
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
          Tableau de bord <br />
          <span className="text-sm sm:text-base lg:text-lg font-normal">
            Bonjour !
          </span>
        </h1>
        {/* Bouton de pointage */}
        <div className="flex items-center gap-4">
          <Button className="bg-[#795FFC] text-white font-semibold hover:bg-[#997FFF] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg rounded-xl">
            Pointer
          </Button>
        </div>
      </header>

      {/* GRILLE DES STATISTIQUES PRINCIPALES */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 mt-4 max-w-full mx-auto px-2 sm:px-4">
        {STATS_DATA.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </section>

      {/* SECTION DES GRAPHIQUES */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mt-6 px-2 sm:px-4">
        {/* GRAPHIQUES EN CAMEMBERT - STATISTIQUES DE PRÉSENCE */}
        <Card>
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-4">
            <div>
              <CardTitle className="text-lg sm:text-xl lg:text-2xl text-[#343c6a] font-bold">
                Statistique
              </CardTitle>
            </div>
            {/* Options d'affichage des graphiques */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <label className="flex items-center gap-2 text-xs sm:text-sm text-[#343c6a] font-bold">
                <input
                  type="checkbox"
                  className="accent-[#795FFC] w-4 h-4 sm:w-6 sm:h-6"
                />
                Graphique
              </label>
              <label className="flex items-center gap-2 text-[#343c6a] text-xs sm:text-sm font-bold">
                <input
                  type="checkbox"
                  className="accent-[#795FFC] w-4 h-4 sm:w-6 sm:h-6"
                />
                Valeur graphique
              </label>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 h-auto sm:h-[250px] overflow-x-auto">
              {/* GRAPHIQUE PRÉSENCE */}
              <div className="flex-1 flex flex-col items-center relative min-w-[120px] h-[200px] sm:h-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        {
                          ...PRESENCE_DATA[0],
                          percentage: presencePercentages[0].percentage,
                        },
                      ]}
                      dataKey="percentage"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={50}
                      innerRadius={25}
                      startAngle={90}
                      endAngle={90 + presencePercentages[0].percentage * 6.5}
                    >
                      <Cell fill={COLORS[1]} />
                    </Pie>
                    <Tooltip
                      formatter={(valeur) => [`${valeur}%`, "Pourcentage"]}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
                {/* Affichage du pourcentage au centre */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg sm:text-xl lg:text-xl font-bold text-black mb-2 sm:mb-5">
                    {presencePercentages[0].percentage}%
                  </span>
                </div>
              </div>

              {/* GRAPHIQUE RETARD */}
              <div className="flex-1 flex flex-col items-center relative min-w-[120px] h-[200px] sm:h-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        {
                          ...PRESENCE_DATA[1],
                          percentage: presencePercentages[1].percentage,
                        },
                      ]}
                      dataKey="percentage"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={50}
                      innerRadius={25}
                      startAngle={90}
                      endAngle={90 + presencePercentages[1].percentage * 4}
                    >
                      <Cell fill={COLORS[0]} />
                    </Pie>
                    <Tooltip
                      formatter={(value) => [`${value}%`, "Pourcentage"]}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg sm:text-xl lg:text-xl font-bold text-black mb-2 sm:mb-5">
                    {presencePercentages[1].percentage}%
                  </span>
                </div>
              </div>

              {/* GRAPHIQUE ABSENTS */}
              <div className="flex-1 flex flex-col items-center relative min-w-[120px] h-[200px] sm:h-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        {
                          ...PRESENCE_DATA[2],
                          percentage: presencePercentages[2].percentage,
                        },
                      ]}
                      dataKey="percentage"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={50}
                      innerRadius={25}
                      startAngle={90}
                      endAngle={62 + presencePercentages[2].percentage * 6}
                    >
                      <Cell fill={COLORS[2]} />
                    </Pie>
                    <Tooltip
                      formatter={(value) => [`${value}%`, "Pourcentage"]}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg sm:text-xl lg:text-xl font-bold text-black mb-2 sm:mb-5">
                    {presencePercentages[2].percentage}%
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* GRAPHIQUE EN COURBE - ÉVOLUTION DE LA PRÉSENCE */}
        <Card>
          <CardContent>
            <div className="flex flex-col sm:flex-row justify-between items-start mb-5 gap-4">
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#343c6a]">
                  Presence par jours
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Lorem ipsum Dolor Sit Amet, Consectetur adip
                </p>
              </div>
              {/* Bouton pour télécharger le rapport */}
              <button className="flex items-center text-[#3b82f6] border border-[#a6c1ee] rounded-full px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold hover:bg-blue-50 transition-colors">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v10m0 0l-4-4m4 4l4-4" />
                  <path d="M5 19h14" />
                </svg>
                Rapport
              </button>
            </div>

            {/* GRAPHIQUE EN COURBE */}
            <div
              style={{ width: "100%", height: "200px" }}
              className="sm:h-[250px]"
            >
              <ResponsiveContainer>
                <LineChart
                  data={[
                    { name: "Dim", present: 30 },
                    { name: "Lun", present: 48 },
                    { name: "Mar", present: 75 },
                    { name: "Mer", present: 55 },
                    { name: "Jeu", present: 68 },
                    { name: "Ven", present: 82 },
                    { name: "Sam", present: 75 },
                  ]}
                  margin={{ top: 20, right: 15, left: 0, bottom: 10 }}
                >
                  {/* Dégradé pour l'aire sous la courbe */}
                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#81c4ff" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#81c4ff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e0e0e0"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    dy={10}
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                  />
                  {/* Tooltip personnalisé */}
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-100">
                            <p className="font-bold text-gray-900">{`${payload[0].value} present`}</p>
                            <p className="text-sm text-gray-500">
                              18 octobre 2025
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                    cursor={{
                      stroke: "#3b82f6",
                      strokeWidth: 1,
                      strokeDasharray: "3 3",
                    }}
                  />
                  {/* Zone sous la courbe */}
                  <Area
                    type="monotone"
                    dataKey="present"
                    stroke="none"
                    fill="url(#chartGradient)"
                  />
                  {/* Ligne principale */}
                  <Line
                    type="monotone"
                    dataKey="present"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{
                      r: 4,
                      fill: "#3b82f6",
                      stroke: "#fff",
                      strokeWidth: 2,
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* TABLEAU DES EMPLOYÉS */}
      <section className="mt-6 px-2 sm:px-4">
        <div className="bg-white rounded-2xl shadow-sm font-sans w-full mb-10">
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap min-w-[600px]">
              {/* EN-TÊTE DU TABLEAU */}
              <thead className="bg-[#795FFC] text-white">
                <tr>
                  <th className="text-left border-r border-gray-200 font-semibold p-2 sm:p-3 xl:p-4 rounded-tl-lg text-xs sm:text-sm xl:text-lg">
                    Employés / Stagiaires
                  </th>
                  <th className="text-left border-r border-gray-200 font-semibold p-2 sm:p-3 xl:p-4 text-xs sm:text-sm xl:text-lg">
                    Planifiées
                  </th>
                  <th className="text-left border-r border-gray-200 font-semibold p-2 sm:p-3 xl:p-4 text-xs sm:text-sm xl:text-lg">
                    Pointées
                  </th>
                  <th className="text-left border-r border-gray-200 font-semibold p-2 sm:p-3 xl:p-4 rounded-tr-lg text-xs sm:text-sm xl:text-lg">
                    Total
                  </th>
                </tr>
              </thead>
              {/* CORPS DU TABLEAU */}
              <tbody>
                {EMPLOYEES_DATA.map((employee) => (
                  <tr key={employee.id} className="border-b border-gray-200">
                    {/* COLONNE EMPLOYÉ (nom + avatar) */}
                    <td className="border-r border-gray-200 p-2 sm:p-3">
                      <div className="flex items-center ml-10">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden mr-5 sm:mr-3 flex-shrink-0">
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
                    {/* COLONNE HORAIRES PLANIFIÉS */}
                    <td className="p-2 sm:p-3 border-r border-gray-200 text-gray-600 text-xs sm:text-sm">
                      {employee.scheduled}
                    </td>
                    {/* COLONNE HORAIRES POINTÉS + LOCALISATION */}
                    <td className="p-2 sm:p-3 border-r border-gray-200">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-8 lg:space-x-10 lg:ml-10">
                        {/* Horaires réellement pointés */}
                        <span className="bg-gray-100 text-gray-800 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm whitespace-nowrap">
                          {employee.clocked}
                        </span>
                        {/* Localisation avec icône */}
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
                    {/* COLONNE TOTAL D'HEURES */}
                    <td className="p-2 sm:p-3 border-r border-gray-200 text-gray-600 text-xs sm:text-sm">
                      {employee.totalHours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION ET INFORMATIONS */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-xs sm:text-sm text-gray-500 p-4 sm:p-6 lg:p-10 gap-4">
            {/* Informations sur les données affichées */}
            <div className="order-2 sm:order-1">
              <p>Affichage des données de 1 à 8 sur 256K entrées.</p>
            </div>
            {/* Navigation de pagination */}
            <nav className="flex items-center space-x-1 sm:space-x-2 order-1 sm:order-2">
              <button className="px-2 sm:px-3 py-1 rounded-md hover:bg-gray-200 transition-colors text-xs sm:text-sm">
                &lt;
              </button>
              <button className="px-2 sm:px-3 py-1 rounded-md bg-[#795FFC] text-white text-xs sm:text-sm">
                1
              </button>
              <button className="px-2 sm:px-3 py-1 rounded-md hover:bg-gray-200 transition-colors text-xs sm:text-sm">
                2
              </button>
              <button className="px-2 sm:px-3 py-1 rounded-md hover:bg-gray-200 transition-colors text-xs sm:text-sm">
                3
              </button>
              <span className="px-1 sm:px-3 py-1 text-xs sm:text-sm">...</span>
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
  );
};

export default Dashboard;
