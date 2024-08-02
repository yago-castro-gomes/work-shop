"use client";
import React, { useState, useEffect } from 'react';
import '../styles/SegundaTela.css';
import Modal from '../components/Modal'; // Import the Modal component
import { grupos } from '../../mock/MockData'; // Ajuste o caminho conforme necessário

export default function PageInfo() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [participantInfo, setParticipantInfo] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const storedInfo = localStorage.getItem('participantInfo');
    if (storedInfo) {
      setParticipantInfo(JSON.parse(storedInfo));
    }
  }, []);

  const handleExpand = (index: number) => {
    if (index === 0) {
      setIsModalOpen(true);
    } else {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getTextByIndex = (index: number) => {
    switch (index) {
      case 0: return "GRUPO";
      case 1: return "DATA";
      case 2: return "HORÁRIO";
      case 3: return "LOCAL";
      default: return "";
    }
  };

  const getDetailByIndex = (index: number) => {
    if (!participantInfo) return "";
    switch (index) {
      case 0:
        const participantGroup = grupos.find(group =>
          group.grupo.some(member => member.nome === participantInfo.nome)
        );

        if (participantGroup) {
          return (
            <div>
              <p className="flex items-center font-extrabold justify-center mb-3" style={{color: '#FFFFFF'}} >{participantGroup.nomeGrupo}</p>
              <ul className="pl-5 text-gray-800">
                {participantGroup.grupo.map((member: any, idx: number) => (
                  <li key={idx}>{member.nome}</li>
                ))}
              </ul>
            </div>
          );
        }
        return "Grupo não encontrado";
      case 1:
        const groupDetails = grupos.find(group =>
          group.grupo.some(member => member.nome === participantInfo.nome)
        );

        if (groupDetails) {
          return (
            <div>
              <p>{groupDetails.data}</p>
            </div>
          );
        }
        return "Detalhes não encontrados";
      case 2:
        return '13h00';
      case 3:
        return 'Rua Dr. Antônio Braga Filho 687, Bairro Porto Velho, Itajubá. Auditório do Bloco 100';
      default:
        return "";
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl p-4 mt-auto">
        {[0, 1, 2, 3].map((index) => (
          <div key={index} className={`flex items-center justify-center`}>
            <div
              className={`relative w-full max-w-[360px] md:max-w-[420px] lg:max-w-[520px] mx-auto cursor-pointer item ${expandedIndex === index ? 'expanded' : ''}`}
              onClick={() => handleExpand(index)}
            >
              <img
                src='../img/pasta.svg'
                className='w-full h-auto'
                alt='Pasta'
              />
              <div className='absolute px-11 md:px-16 inset-0 flex items-center justify-center text-[9px] md:text-[12px] text-white font-bold text-shadow-sm transition-opacity duration-300 ease-in-out'>
                {expandedIndex === index ? getDetailByIndex(index) : getTextByIndex(index)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {participantInfo && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          content={getDetailByIndex(0)}
        />
      )}

      <div className="relative mt-10 bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center w-full p-4">
        <img src='../img/logo.svg' className='max-w-1/2 lg:max-w-[450px] h-auto' alt='Logo do Workshop' />
      </div>
    </div>
  );
}
