"use client";
import React, { useState } from 'react';
import '../styles/SegundaTela.css';

export default function PageInfo() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <div className='main-container'>
        {[0, 1, 2, 3].map((index) => (
          <div key={index} className={`page-info ${expandedIndex === index ? 'expanded' : ''}`}>
            <img
              src='../img/pasta.svg'
              className='pasta'
              alt='Pasta'
              onClick={() => handleExpand(index)}
            />
          </div>
        ))}
      </div>
      <div className='page-logo'>
        <img src='../img/logo.svg' className='logo' alt='Logo' />
      </div>
    </div>
  );
}
