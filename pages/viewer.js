import React, { useState } from 'react';

import CloseIcon from '@material-ui/icons/Close';

export default function Viewer(props) {
  let viewerStyles;
  let headerSyles;
  if (props.view && props.view.component) {
    viewerStyles = {
      background: props.view.backColor,
    };
    headerSyles = {
      color: props.view.color,
    };
  } else {
    viewerStyles = {};
  }

  const [unmounting, setUnmounting] = useState(false);

  const unMountView = () => {
    setUnmounting(true);
    setTimeout(() => {
      setUnmounting(false);
      props.selectView(null);
    }, 300);
  };

  return (
    <div
      id="viewer"
      style={viewerStyles}
      className={props.view ? (unmounting ? 'unmounting' : 'show') : ''}
    >
      <div id="viewer-header">
        <button
          type="button"
          className="icon-button close"
          style={headerSyles}
          onClick={unMountView}
        >
          <CloseIcon style={{ fontSize: 40 }} />
        </button>
      </div>
      {props.view && props.view.component}
    </div>
  );
}
