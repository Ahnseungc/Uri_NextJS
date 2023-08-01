import React from 'react';

import TabBar from '../TabBar';

const Layouts = (props) => {
  return (
    <div style={{ height: '100%' }}>
      <TabBar />
      {props.children}
    </div>
  );
};

export default Layouts;
