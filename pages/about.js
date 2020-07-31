import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

export default function About() {
  const [mounting, setMounting] = useState(true);

  useEffect(() => {
    setTimeout(() => setMounting(false), 350);
  }, []);

  return (
    <div id="about" className={`text-grid ${mounting ? 'hide' : 'show'}`}>
      <div className="bio">
        <p>
          Hi. I am a software engineer based in Los Angeles. I make stuff with
          my hands and my computer. I am not very cool, however I make stuff
          that looks kinda cool and works really cool. Please hire me, I can
          make your life easier because you can depend on me
        </p>
      </div>
      <div className="link">
        <h3 className="title">contact</h3>
        <div className="email">dante.m.tobar@gmail.com</div>
      </div>
      <div className="link">
        <h3 className="title">social</h3>
        <div className="social">
          <a href="https://www.instagram.com/eggward_norton/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/dante-m-tobar/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/tuna-melt">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
}
