import React, { useState, useEffect } from 'react';

export default function Header(props) {
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
      id="header"
      className={`${mounting || props.hide ? 'hide' : 'show'} ${
        props.selectedPage ? '' : 'expand'
      }`}
    >
      <div className="tabs">
        <h2 className={getClass(1)} onClick={() => props.selectPage(1)}>
          projects
          <span />
        </h2>
        <h2 className={getClass(2)} onClick={() => props.selectPage(2)}>
          photography
          <span />
        </h2>
      </div>
      <div className="name">
        <h1>dante</h1>
        <h1>tobar</h1>
      </div>
      <div className="tabs">
        <h2 className={getClass(3)} onClick={() => props.selectPage(3)}>
          about
          <span />
        </h2>
        <h2 className={getClass(4)} onClick={() => props.selectPage(4)}>
          contact
          <span />
        </h2>
      </div>
    </div>
  );
}
