import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TrackingInfo = () => {
  const { trackingNumber } = useParams();
  const [trackingData, setTrackingData] = useState(null);

  useEffect(() => {
    axios.get(`API_URL/tracking/${trackingNumber}`)
      .then(response => {
        setTrackingData(response.data);
      })
      .catch(error => {
        console.error('Error fetching tracking data:', error);
      });
  }, [trackingNumber]);

  return (
    <div>
      <h2>Tracking Information</h2>
      {trackingData ? (
        <div>
          <p>Tracking Number: {trackingData.trackingNumber}</p>
          <p>Status: {trackingData.status}</p>
          <p>Location: {trackingData.location}</p>
          
        </div>
      ) : (
        <p>Loading tracking information...</p>
      )}
    </div>
  );
};

export default TrackingInfo;
