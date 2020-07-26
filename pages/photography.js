import React, { useState, useEffect } from 'react';

export default function Photography() {
  const [mounting, setMounting] = useState(true);

  useEffect(() => {
    setTimeout(() => setMounting(false), 350);
  }, []);
  return (
    <div id="photography" className={`${mounting ? 'hide' : 'show'}`}>
      <img src="/squares/rob2.jpg" />
      <img src="/squares/seanpromo.jpg" />
      <img src="/squares/rcpromo.jpg" />
      <img src="/squares/greg.jpg" />
      <img src="/squares/haze1.jpg" />
      <img src="/squares/ez.jpg" />
      <img src="/squares/antonforegg.jpg" />
      <img src="/squares/britforegg.jpg" />
      <img src="/squares/jarrenfarefax.jpg" />
      <img src="/squares/mario.jpg" />
      <img src="/squares/cow.jpg" />
      <img src="/squares/jarenkit.jpg" />
      <img src="/squares/sauciego.jpg" />
      <img src="/squares/seanforegg.jpg" />
      <img src="/squares/sandm.jpg" />
      <img src="/squares/hightide.jpg" />
      <img src="/squares/educatedboys.jpg" />
      <img src="/squares/lunasboots.jpg" />
      <img src="/squares/burntcar.jpg" />
      <img src="/squares/oxnard6.jpg" />
      <img src="/squares/vanillasky.jpg" />
    </div>
  );
}
