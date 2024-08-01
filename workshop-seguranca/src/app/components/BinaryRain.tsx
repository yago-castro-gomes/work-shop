'use client';

import { useEffect } from 'react';
import '../styles/PrimeiraTela.css';

function BinaryRain(): JSX.Element {
  useEffect(() => {
    const container = document.getElementById('binary-container');
    if (!container) return;

    const numStreams = 30; // Número total de streams por camada
    const numChars = 20; // Número total de caracteres por stream

    const createLayer = (zIndex: number, speedMultiplier: number, fontSizeRange: [number, number], opacityRange: [number, number], charCount: number) => {
      for (let i = 0; i < numStreams; i++) {
        const stream = document.createElement('div');
        stream.className = 'binary-stream';
        stream.style.left = `${Math.random() * 100}vw`;
        stream.style.top = `${Math.random() * 100}vh`;

        for (let j = 0; j < charCount; j++) {
          const char = document.createElement('span');
          char.textContent = Math.random() > 0.5 ? '0' : '1';
          char.style.fontSize = `${Math.random() * (fontSizeRange[1] - fontSizeRange[0]) + fontSizeRange[0]}rem`;
          char.style.opacity = `${Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0]}`;
          char.style.animationDelay = `${Math.random() * 5}s`;
          char.style.animationDuration = `${Math.random() * 5 + 5 / speedMultiplier}s`;
          stream.appendChild(char);
        }

        container.appendChild(stream);
      }
    };

    // Cria múltiplas camadas com diferentes estilos
    createLayer(1, 1.5, [1.5, 1.5], [0.05, 0.05], numChars); // Camada de fundo: menor fonte, opacidade mais clara
    createLayer(2, 1.5, [1.58, 1.8], [0.1, 0.1], 10); // Camada do meio: fonte maior, opacidade média
    createLayer(3, 1.5, [2.0, 2.0], [0.2, 0.2], numChars); // Camada da frente: fonte média, opacidade mais escura, menos caracteres
    createLayer(4, 1.5, [3.0, 3.0], [0.8, 0.8], 2); // Camada da frente: fonte média, opacidade mais escura, menos caracteres


    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div id="binary-container" className="binary-container"></div>;
}

export default BinaryRain;
