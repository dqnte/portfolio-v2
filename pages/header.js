import React, { useState, useEffect } from 'react';

import DesktopHeader from './desktopHeader';
import MobileHeader from './mobileHeader';

export default function Header(props) {
  return (
    <React.Fragment>
      <DesktopHeader
        selectedPage={props.selectedPage}
        selectPage={props.selectPage}
      />
      <MobileHeader
        selectedPage={props.selectedPage}
        selectPage={props.selectPage}
      />
    </React.Fragment>
  );
}
