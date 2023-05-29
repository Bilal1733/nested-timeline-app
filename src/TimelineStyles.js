import React from 'react';
import { Helmet } from 'react-helmet';

const TimelineStyles = () => {
  return (
    <Helmet>
      <link
        rel="stylesheet"
        type="text/css"
        href={process.env.PUBLIC_URL + '/vis-timeline.min.css'}
      />
    </Helmet>
  );
};

export default TimelineStyles;
