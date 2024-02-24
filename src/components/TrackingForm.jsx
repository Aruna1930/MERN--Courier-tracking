import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const TrackingForm = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/tracking-info/${trackingNumber}`);
  };

  return (
    <div>
      <h2>Tracking Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Tracking Number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <button type="submit">Track Package</button>
      </form>
    </div>
  );
};

export default TrackingForm;
