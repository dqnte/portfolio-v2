import React, { useEffect, useState } from 'react';

export default function Coreo() {
  const [onDisplay, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => setDisplay(true), 600);
  }, []);

  return (
    <div className={`project ${onDisplay ? 'visible' : ''}`}>
      <p>
        Coreo is a tool for choreographers to share videos with their dances and
        vise-versa. Choreographers record videos with their webcam that they can
        then share with their dance team. The dancers in the team can then watch
        and practice the routine. When a dancer has perfected the routine, they
        can then record their routine, which is then compared to the original
        video using computer vision.
      </p>
    </div>
  );
}
