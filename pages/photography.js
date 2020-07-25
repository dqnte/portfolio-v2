import React, { useState, useEffect } from 'react';

export default function Photography() {
  const [mounting, setMounting] = useState(true);

  useEffect(() => {
    setTimeout(() => setMounting(false), 350);
  }, []);
  return (
    <div id="photography" className={`${mounting ? 'hide' : 'show'}`}>
      <img src="https://tobar-portfolio.s3-us-west-1.amazonaws.com/antonforegg.jpg" />
      <img src="https://tobar-portfolio.s3-us-west-1.amazonaws.com/sandm.jpg" />
      <img src="https://tobar-portfolio.s3-us-west-1.amazonaws.com/britforegg.jpg" />
    </div>
  );
}
