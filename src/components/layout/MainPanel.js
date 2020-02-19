import React, { Fragment } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

function MainPanel () {
  return (
      <Fragment>
          <Sidebar />
          <Content />
      </Fragment>
  );
}

export default MainPanel;
