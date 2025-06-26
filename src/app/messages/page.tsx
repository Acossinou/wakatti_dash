"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Mic, Plus } from "lucide-react";


const AudioMessageComponent = ({
  audioSrc = "/audio.mp3",
  profileSrc,
}: {
  audioSrc?: string;
  profileSrc: string;
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const waveformHeights = [
    20, 25, 15, 30, 18, 22, 28, 24, 16, 19, 26, 21, 23, 17, 29, 27, 14, 31, 20,
    25, 15, 30, 18, 22, 28, 24, 16, 19, 26, 21, 23, 17, 29, 27, 14, 31, 20, 25,
  ];

  return (
    <div className="flex items-center bg-white rounded-xl p-4 max-w-xl">
      <button
        onClick={togglePlay}
        className="mr-4 w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
      >
        {isPlaying ? (
          <div className="w-4 h-4 bg-white rounded-sm" />
        ) : (
          <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
        )}
      </button>
      <div className="flex-1 h-12 flex items-center space-x-1 overflow-hidden">
        {waveformHeights.map((height, i) => (
          <div
            key={i}
            className={`w-1.5 rounded-sm ${
              i === 10 ? "bg-gray-400" : "bg-gray-300"
            }`}
            style={{
              height: `${height}px`,
            }}
          />
        ))}
      </div>
      <div className="w-12 h-12 rounded-full overflow-hidden ml-4">
        <Image
          src={profileSrc}
          width={48}
          height={48}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <audio ref={audioRef} src={audioSrc} preload="auto" />
    </div>
  );
};

export default function MessagesPage() {
  const [filter, setFilter] = useState<"all" | "unread" | "groups">("all");
  const [activeChat, setActiveChat] = useState<number | null>(null); // État pour gérer la discussion active
  const [messages, setMessages] = useState([
    {
      from: "Mickael Kyle",
      time: "13:01",
      messages: [
        {
          type: "image",
          content: "/assets/images/Rectangle 34624226.png",
        },
        {
          type: "audio",
          content: "/audio1.mp3",
        },
      ],
    },
    {
      from: "Other",
      time: "14:06",
      messages: [
        {
          type: "audio",
          content: "/audio2.mp3",
        },
        {
          type: "audio",
          content: "/audio3.mp3",
        },
      ],
    },
  ]);

  const [discussions] = useState([
    {
      id: 1,
      name: "Mickael Kyle",
      lastMessage: "Je suis déjà là depuis aux environs de...",
      time: "10:03",
      unread: 3,
      image: "/assets/images/Ellipse 8.png",
      isGroup: false,
    },
    {
      id: 2,
      name: "Kyle",
      lastMessage: "Je suis déjà là depuis aux environs de...",
      time: "10:03",
      unread: 3,
      image: "/assets/images/Ellipse 8.png",
      isGroup: false,
    },
    {
      id: 3,
      name: "Mickael",
      lastMessage: "Je suis déjà là depuis aux environs de...",
      time: "10:03",
      unread: 3,
      image: "/assets/images/Ellipse 8.png",
      isGroup: false,
    },
    {
      id: 4,
      name: "Groupe de Travail",
      lastMessage: "Réunion prévue demain à 10h.",
      time: "09:45",
      unread: 0,
      image: "/assets/images/Ellipse 7.png",
      isGroup: true,
    },
  ]);

  const filteredDiscussions = discussions.filter((discussion) => {
    if (filter === "all") return true;
    if (filter === "unread") return discussion.unread > 0;
    if (filter === "groups") return discussion.isGroup;
    return false;
  });

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          from: "Mickael Kyle",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          messages: [{ type: "text", content: newMessage }],
        },
      ]);
      setNewMessage(""); // Réinitialise le champ de saisie
    }
  };

  // Gestion de la touche "Esc" pour quitter la discussion
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeChat !== null) {
        setActiveChat(null); // Quitte la discussion
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeChat]);

  // Ajout d'un état pour la largeur d'écran pour la responsivité côté client
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1280);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
      <div className="flex h-full pt-10 caret-transparent ">
        {/* Sidebar des discussions */}
        {(!activeChat && isMobile) || !isMobile ? (
          <div
            className={`bg-white w-full xl:w-1/3 p-1 rounded-l-lg overflow-hidden ${
              activeChat && isMobile ? "hidden" : ""
            }`}
          >
            <h2 className="text-lg font-bold mb-4 text-xl">Discussion</h2>
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setFilter("all")}
                className={`${
                  filter === "all" ? "bg-[#795FFC] text-white" : "bg-gray-100"
                } w-20 px-3 font-semibold py-1 rounded`}
              >
                Toutes
              </button>
              <button
                onClick={() => setFilter("unread")}
                className={`${
                  filter === "unread"
                    ? "bg-[#795FFC] text-white"
                    : "bg-gray-100"
                } w-30 px-3 font-semibold py-1 rounded`}
              >
                Non lues
              </button>
              <button
                onClick={() => setFilter("groups")}
                className={`${
                  filter === "groups"
                    ? "bg-[#795FFC] text-white"
                    : "bg-gray-100"
                } px-3 font-semibold py-1 rounded`}
              >
                Groupes
              </button>
            </div>
            <div className="space-y-2 overflow-y-auto h-[calc(100%-100px)] ">
              {filteredDiscussions.length > 0 ? (
                filteredDiscussions.map((discussion) => (
                  <div
                    key={discussion.id}
                    onClick={() => setActiveChat(discussion.id)}
                    className={`flex items-center justify-between p-4 hover:bg-gray-200 rounded-lg cursor-pointer ${
                      activeChat === discussion.id ? "bg-gray-200" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 flex-1">
                      <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-full overflow-hidden">
                        <Image
                          src={discussion.image}
                          width={40}
                          height={40}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm sm:text-base break-words">
                          {discussion.name}
                        </p>
                        <p className="text-xs sm:text-sm truncate break-words">
                          {discussion.lastMessage
                            .split(" ")
                            .slice(0, 4)
                            .join(" ")}
                          {discussion.lastMessage.split(" ").length > 4 &&
                            " ....."}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-xs">{discussion.time}</p>
                      {discussion.unread > 0 && (
                        <span className="bg-[#795FFC] text-white text-xs font-bold px-2 py-1 rounded-full mt-1">
                          {discussion.unread}
                        </span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">Aucune discussion.</p>
              )}
            </div>
          </div>
        ) : null}

        {/* Section de chat */}
        {activeChat ? (
          <div
            className={`flex-1 flex flex-col bg-white rounded-r-lg w-full ${
              isMobile ? "" : ""
            }`}
          >
            <div className="p-2 bg-[#795FFC] flex items-center rounded-tr-lg gap-5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                <Image
                  src={
                    discussions.find((d) => d.id === activeChat)?.image ||
                    "/assets/images/default.png"
                  }
                  width={40}
                  height={40}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-sm sm:text-base">
                  {discussions.find((d) => d.id === activeChat)?.name}
                </p>
                <p className="text-xs sm:text-sm">En ligne il y a 1h</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-2 space-y-1 bg-gray-100">
              {messages.map((messageGroup, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    messageGroup.from === "Other" ? "items-start" : "items-end"
                  }`}
                >
                  <div
                    className={`flex flex-col ${
                      messageGroup.from === "Other"
                        ? "items-start"
                        : "items-end"
                    } w-full gap-2`}
                  >
                    {messageGroup.messages.map((msg, msgIndex) => (
                      <div
                        key={msgIndex}
                        className={`w-full px-2 sm:px-4 md:px-6 flex ${
                          msg.type === "image" ||
                          (msg.type === "audio" &&
                            messageGroup.from !== "Other")
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        {msg.type === "image" && (
                          <Image
                            src={msg.content}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="h-auto w-auto max-w-[60%] sm:max-w-[50%] md:max-w-[40%] rounded-lg"
                          />
                        )}
                        {msg.type === "audio" && (
                          <div className="w-full max-w-md rounded-lg bg-gray-100">
                            <AudioMessageComponent
                              audioSrc={msg.content}
                              profileSrc={
                                messageGroup.from === "Other"
                                  ? "/assets/images/Ellipse 837.png"
                                  : "/assets/images/Ellipse 1.png"
                              }
                            />
                          </div>
                        )}
                        {msg.type === "text" && (
                          <div className="w-full flex justify-end px-2">
                            <div className="bg-[#795FFC] text-white px-3 sm:px-4 py-2 rounded-xl inline-block max-w-[80%] max-h-[60vh] overflow-y-auto break-words text-sm sm:text-base">
                              {msg.content}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-2 bg-gray-300 flex rounded-br-lg items-center gap-2">
              <button className="p-2 hover:bg-gray-300 rounded-full hover:bg-gray-400">
                <Plus className="w-full text-gray-500 text-xl" />
              </button>
              <div className="flex items-center flex-1 bg-white">
                <button className="ml-2">
                  <Image
                    src="/assets/images/Vector.png"
                    alt="Fonctionnalités"
                    className="w-6"
                    width={24}
                    height={24}
                  />
                </button>
                <input
                  type="text"
                  placeholder="Écrivez un message"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="w-full p-2 ml-2 caret-black"
                />
              </div>
              <button
                onClick={handleSendMessage}
                className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
              >
                <Mic className="w-full text-black" />
              </button>
            </div>
          </div>
        ) : (
          // Affiche le logo si aucune discussion n'est sélectionnée
          !isMobile && (
            <div className="flex-1 flex flex-col items-center justify-center bg-gray-300 rounded-r-lg w-full hidden xl:flex">
              <Image
                src="/assets/icons/logos.svg"
                alt="Logo Orange"
                width={180}
                height={180}
                className="w-60 h-60 object-contain opacity-80"
                priority
              />
              <p className="text-center text-gray-500 text-xl">
                Envoyez et recevez des messages sur Wakatti <br /> sans
                garder votre téléphone
              </p>
            </div>
          )
        )}
      </div>
  );
}

