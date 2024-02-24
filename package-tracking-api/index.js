const { Router } = require('express');
const {json} = require('body-parser');
const { connect} = require('mangoose');
const {trackingRoutes} = require('routes/trackingRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb://localhost:27017/package-tracking';

connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(json());
app.use('/api/tracking', trackingRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
