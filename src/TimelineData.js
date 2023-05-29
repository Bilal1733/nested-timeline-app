import React, { useState, useEffect } from 'react';

const TimelineData = ({ children }) => {
  // State to store the fetched timeline data
  const [timelineData, setTimelineData] = useState(null);

  useEffect(() => {
    // Function to fetch the timeline data
    const fetchData = async () => {
      try {
        // Make a GET request to '/data.json' with appropriate headers
        const response = await fetch('/data.json', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          // If the response is successful, extract the data from JSON
          const data = await response.json();
          // Store the fetched data in the state
          setTimelineData(data);
        } else {
          // Log an error if the response status is not successful
          console.error('Error fetching timeline data. Status:', response.status);
        }
      } catch (error) {
        // Log any error that occurs during the fetch process
        console.error('Error fetching timeline data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  // Render the children function with the timeline data if available, otherwise render null
  return timelineData ? children(timelineData) : null;
};

export default TimelineData;
