import React, { useState, useEffect } from 'react';

export default function DesktopHeader(props) {
  const [currentUnderline, setUnderline] = useState(props.selectedPage);
  const [direction, setDirection] = useState(null);
  const [mounting, setMounting] = useState(true);

  useEffect(() => {
    setDirection([currentUnderline, props.selectedPage]);
    setTimeout(() => setUnderline(props.selectedPage), 50);
  }, [props.selectedPage]);

  useEffect(() => {
    setTimeout(() => setMounting(false), 30);
  }, []);

  const getClass = id => {
    let className = currentUnderline === id ? 'underline' : '';
    if (!direction) return className;

    if (id === direction[0]) {
      className += id < direction[1] ? ' underline-right' : ' underline-left';
    } else if (id === direction[1]) {
      className += id < direction[0] ? ' underline-right' : ' underline-left';
    }

    return className;
  };

  return (
    <div
      id="desktop-header"
      className={`header text-grid ${
        mounting || props.hide ? 'hide' : 'show'
      } ${props.selectedPage ? '' : 'expand'}`}
    >
      <h2
        className={getClass(1) + ' right'}
        onClick={() => props.selectPage(1)}
      >
        projects
        <span />
      </h2>
      <h2
        className={getClass(2) + ' center'}
        onClick={() => props.selectPage(2)}
      >
        photography
        <span />
      </h2>

      <div className="name">
        <h1>dante</h1>
        <h1>tobar</h1>
      </div>
      <h2
        className={getClass(3) + ' center'}
        onClick={() => props.selectPage(3)}
      >
        experience
        <span />
      </h2>
      <h2 className={getClass(4) + ' left'} onClick={() => props.selectPage(4)}>
        about
        <span />
      </h2>
    </div>
  );
}
