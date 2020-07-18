import Head from 'next/head';
import React, { useRef, useEffect, useState } from 'react';

import '../styles/sizing.scss';
import '../styles/text.scss';

import Projects from './projects';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const page1 = useRef(null);
  const page2 = useRef(null);

  const [isLoaded, load] = useState(false);

  const handleClick = () => {
    window.scrollTo(0, window.innerHeight);
  };

  useEffect(() => {
    load(true);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Dante Tobar</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div id="intro" className={isLoaded ? '' : 'preload'}>
          <h1>dante tobar</h1>
          <h3 style={{ transitionDelay: '80ms' }}>software engineer</h3>
          <p style={{ transitionDelay: '160ms' }}>
            i have experience ranging from full-stack web development to
            computational physics
          </p>
          <p style={{ transitionDelay: '240ms' }}>
            i also take pictures of my friends and of bands in the los angeles
            area
          </p>

          <div className="links" style={{ transitionDelay: '240ms' }}>
            <a
              href="https://www.instagram.com/eggward_norton/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/dante-m-tobar/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="http://github.com/tuna-melt"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="scroll-down"
            onClick={handleClick}
            style={{ transitionDelay: '240ms' }}
          />
        </div>
        <Projects />
      </main>
    </div>
  );
}
