import React, { useState } from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export default function MobileHeader(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [unmounting, setUnmounting] = useState(false);

  const openPage = page => {
    setUnmounting(true);
    props.selectPage(null);
    setTimeout(() => {
      props.selectPage(page);
      setUnmounting(false);
      setShowMenu(false);
    }, 200);
  };

  return (
    <React.Fragment>
      <div
        id="mobile-header"
        className={`${props.selectedPage ? '' : 'expand'} ${
          showMenu || props.hide ? 'hide' : 'show'
        } header`}
      >
        <h2>dante tobar</h2>
        <button
          type="button"
          className="icon-button"
          onClick={() => setShowMenu(true)}
        >
          <MenuIcon style={{ fontSize: 40 }} />
        </button>
      </div>
      <div
        id="menu"
        className={`${unmounting ? 'unmounting' : showMenu ? 'show' : 'hide'}`}
      >
        <button
          type="button"
          className="icon-button close"
          onClick={() => setShowMenu(false)}
        >
          <CloseIcon style={{ fontSize: 40 }} />
        </button>
        <h1
          onClick={() => {
            openPage(1);
          }}
        >
          projects
          <span />
        </h1>
        <h1
          onClick={() => {
            openPage(2);
          }}
        >
          photography
          <span />
        </h1>
        <h1
          onClick={() => {
            openPage(3);
          }}
        >
          experience
          <span />
        </h1>
        <h1
          onClick={() => {
            openPage(4);
          }}
        >
          about
          <span />
        </h1>
      </div>
    </React.Fragment>
  );
}
