const { Router } = require('express');
const router = Router();
const { findOne } = require('../models/tracking');

router.get('/:trackingNumber', (req, res) => {
  const trackingNumber = req.params.trackingNumber;
  findOne({ trackingNumber })
    .then(tracking => {
      if (!tracking) {
        return res.status(404).json({ error: 'Tracking not found' });
      }
      res.json(tracking);
    })
    .catch(err => res.status(400).json({ error: err.message }));
});

export default router;
