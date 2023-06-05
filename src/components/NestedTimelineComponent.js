import React, { useEffect, useRef } from 'react';
import 'vis-timeline/styles/vis-timeline-graph2d.css';
import { DataSet } from 'vis-timeline/standalone';
import { Timeline } from 'vis-timeline/standalone';
import timelineData from '../data/data.json';

const NestedTimelineComponent = () => {
  // Create references for the timeline container, data sets, and timewwwwwwwline instance
  const timelineContainerRef = useRef(null);
  const groupsDataSetRef = useRef(null);
  const itemsDataSetRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    initializeTimeline();
    return cleanupTimeline;
  }, []);

  // Initialize the timeline when the component mounts
  const initializeTimeline = () => {
    const { groups, items } = timelineData;

    // Create the data sets
    createDataSets(groups, items);

    // Create the timeline instance
    createTimeline();

    // Set the timeline data
    setTimelineData();
  };

  // Create the data sets for groups and items
  const createDataSets = (groups, items) => {
    groupsDataSetRef.current = new DataSet(groups);
    itemsDataSetRef.current = new DataSet(items);
  };

  // Create the timeline instance
  const createTimeline = () => {
    timelineRef.current = new Timeline(timelineContainerRef.current);
  };

  // Set the data to the timeline
  const setTimelineData = () => {
    const { current: timeline } = timelineRef;
    timeline.setGroups(groupsDataSetRef.current);
    timeline.setItems(itemsDataSetRef.current);
  };

  // Clean up the timeline instance when the component unmounts
  const cleanupTimeline = () => {
    timelineRef.current.destroy();
  };

  return <div ref={timelineContainerRef} style={{ height: '500px' }} />;
};

export default NestedTimelineComponent;
