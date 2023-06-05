import React, { Fragment } from 'react';
import TimelineStyles from './TimelineStyles';
import NestedTimelineComponent from './components/NestedTimelineComponent';

import Footer from './MainNavigation/Footer';
import MainNavbar from './MainNavigation/MainNavbar';

const App = () => {
  return (
    <Fragment>
      <MainNavbar />
      <TimelineStyles />
      <h1>Vis.js Nested Group Timeline in React</h1>
      <NestedTimelineComponent />
      <Footer />
    </Fragment>
  );
};

export default App;
