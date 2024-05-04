import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());

app.listen(8000, () => {
  console.log('Server is running on port 3000');
})