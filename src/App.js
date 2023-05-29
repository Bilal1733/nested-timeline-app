import React, { Fragment } from 'react';
import TimelineStyles from './TimelineStyles';
import NestedTimelineComponent from './NestedTimelineComponent';

const App = () => {
  return (
    <Fragment>
      <TimelineStyles />
      <h1>Vis.js Nested Group Timeline in React</h1>
      <NestedTimelineComponent />
    </Fragment>
  );
};

export default App;
