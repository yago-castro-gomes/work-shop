"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../app/styles/PrimeiraTela.css";
import { grupos } from "@/mock/MockData";
import BinaryRain from "./components/BinaryRain";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

const Home = () => {
  const [selectedParticipant, setSelectedParticipant] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const handleParticipantChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedParticipant(event.target.value);
    setErrorMessage("");
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setErrorMessage("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Encontrar o participante selecionado
  const selectedParticipantDetails = grupos
    .map(group => group.grupo) // Mapeia os grupos para obter a lista de participantes
    .flat() // Achata a lista de listas em uma única lista de participantes
    .find(participant => participant.nome === selectedParticipant); // Encontra o participante

  const handleAccess = () => {
    if (selectedParticipantDetails && password === "1234@Mudar") {
      // Armazenar informações no localStorage
      localStorage.setItem("participantInfo", JSON.stringify(selectedParticipantDetails));
      // Redirecionar para a página de informações
      router.push("/informacoes");
    } else {
      setErrorMessage("Senha incorreta ou participante não selecionado");
    }
  };

  const sortedParticipants = grupos
    .map(group => group.grupo)
    .flat() // Achata a lista de participantes
    .sort((a, b) => a.nome.localeCompare(b.nome)); // Ordena em ordem alfabética

  return (
    <>
      <div className="flex items-center justify-center gap-10 h-screen ml-0 md:ml-12">
        <div className="flex flex-col gap-10 md:gap-20">
          <div>
            <p className="text-white text-3xl sm:text-4xl lg:text-5xl uppercase">
              Você está convidado <br /> para o workshop
            </p>
            <p className="gradient-text text-3xl sm:text-4xl lg:text-5xl uppercase">
              Segurança <br /> corporativa
            </p>
          </div>
          <div className="flex flex-col gap-y-9">
            <select
              className="custom-select md:w-9/12 h-12 pl-5 bg-white text-gray font-montserrat rounded-md"
              value={selectedParticipant}
              onChange={handleParticipantChange}
            >
              <option value="" disabled>
                Selecione um participante
              </option>
              {sortedParticipants.map((participant, index) => (
                <option key={index} value={participant.nome}>
                  {participant.nome}
                </option>
              ))}
            </select>
            <div className="relative md:w-9/12">
            <input
              className="w-full h-12 p-5 bg-white font-montserrat rounded-md pr-10 outline-gray-900" 
              style={{ color: 'gray' }}
              type={showPassword ? "text" : "password"}
              placeholder="Senha (padrão):"
              value={password}
              onChange={handlePasswordChange}
            />

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword ? (
                  <EyeIcon className="h-5 w-5" style={{color: 'gray'}} />
                ) : (
                  <EyeSlashIcon className="h-5 w-5" style={{color: 'gray'}} />
                )}
              </button>
            </div>
            <button
              className="w-40 h-10 p-2 text-xs font-bold bg-gradient-button text-white font-montserrat uppercase rounded-full"
              onClick={handleAccess}
            >
              Acessar
            </button>
            {errorMessage && (
              <p className="text-white text-sm">{errorMessage}</p>
            )}
          </div>
        </div>
        <div className="hidden md:flex md:shrink-0 relative image-container">
          <img
            className="w-full"
            src="./img/cabeca.svg"
            alt="Silhueta de uma cabeça humana com um cérebro similar a uma placa elétrica"
          />
          <BinaryRain />
        </div>
      </div>
    </>
  );
};

export default Home;
