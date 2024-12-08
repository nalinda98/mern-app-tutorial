import React from 'react';

export const Instruction = () => {
  return (
    <div style={{  lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }} >
      <h2 style={{ textAlign: 'center', color: '#5A8CB1' }}>Game Instructions</h2>
      <ol style={{ listStyleType: 'decimal' }}>
        <li>
          This game is for entertainment purposes only and is intended to be played with friends.
        </li>
        <li>
          The goal of the game is to select the last two numbers of the winning 
          <strong> Mahajana Sampatha</strong> lottery.
        </li>
        <li>
          The numbers must be chosen in the correct order:
          <ul style={{ listStyleType: 'circle', marginLeft: '40px' }}>
            <li>The last number of your selection must match the last number of the lottery.</li>
            <li>The second-to-last number of your selection must match the second-to-last number of the lottery.</li>
          </ul>
        </li>
        <li>
          Use the buttons displayed on the platform to select your number between 00 and 99.
        </li>
        <li>
          Select your desired price category at the top of the page. Options are:
          <strong> Rs.100/=, Rs.200/=, Rs.500/= or Rs.1000/=</strong>
        </li>
        <li>
          Ensure the date is set correctly as your selection will be valid only for the selected date.
        </li>
        <li>
          If you win, your prize will be calculated as <strong>Unit Price × 80</strong>.
        </li>
        <li>
          Share your selection with friends and await the lottery results to see who wins!
        </li>
        <li>
          This is a friendly game and should be played responsibly. Enjoy and have fun!
        </li>
      </ol>
    </div>
  );
};
