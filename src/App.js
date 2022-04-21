import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  useEffect(() => {
    const clicked = () => console.log('window clicked');
    window.addEventListener('click', clicked);

    // return a clean-up function
    return () => {
      window.removeEventListener('click', clicked);
    };
  }, []);

  return (
    <div>
      When you click the window you'll find a message logged to the console
    </div>
  );
}
