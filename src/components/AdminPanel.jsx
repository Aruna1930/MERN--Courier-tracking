
import React, { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [status, setStatus] = useState('');
  const [location, setLocation] = useState('');

  const handleAddPackage = () => {
    axios.post('API_URL/tracking', {
      trackingNumber,
      status,
      location
    })
      .then(response => {
        console.log('Package added successfully:', response.data);
        setTrackingNumber('');
        setStatus('');
        setLocation('');
      })
      .catch(error => {
        console.error('Error adding package:', error);
      });
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <h3>Add Package</h3>
      <form onSubmit={handleAddPackage}>
        <input
          type="text"
          placeholder="Tracking Number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Add Package</button>
      </form>
    </div>
  );
};

export default AdminPanel;
