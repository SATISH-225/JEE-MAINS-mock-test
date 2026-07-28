const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dns = require('dns');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');

dns.setServers(['8.8.8.8', '8.8.4.4']);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
app.use(cors({
  origin: "https://jee-mains-mock-test.vercel.app",
  credentials: true
}));
app.use(express.json());

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
  console.error('Missing DATABASE_URL in bn/.env');
  process.exit(1);
}

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'fn', 'signup.html'));
});

app.use(express.static(path.join(__dirname, '..', 'fn')));
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
