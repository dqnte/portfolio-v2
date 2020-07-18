import React, { useState, useEffect } from 'react';

export default function Photography() {
  const [onDisplay, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => setDisplay(true), 600);
  }, []);

  return (
    <div className={`project photography ${onDisplay ? 'visible' : ''}`}>
      <img src="https://tobar-portfolio.s3-us-west-1.amazonaws.com/antonforegg.jpg" />
      <img src="https://tobar-portfolio.s3-us-west-1.amazonaws.com/sandm.jpg" />
      <img src="https://tobar-portfolio.s3-us-west-1.amazonaws.com/britforegg.jpg" />
    </div>
  );
}
