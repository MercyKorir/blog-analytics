import express from 'express';
import apiRoutes from './routes/api.js';

const PORT = 5050;
const app = express();

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running successfully on ${PORT}`);
});
