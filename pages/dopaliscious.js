import React, { useState, useEffect } from 'react';

export default function Dopaliscious() {
  const [onDisplay, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => setDisplay(true), 600);
  }, []);

  return <div className={`project ${onDisplay ? 'visible' : ''}`}></div>;
}
