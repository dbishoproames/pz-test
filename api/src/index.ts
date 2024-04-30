import express, { Request, Response } from 'express';
import cors from 'cors';

import productRoutes from './routes/product';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: RegExp('^https?://(localhost|127\.0\.0\.1)(:[1-9][0-9]*)?$'),
  optionsSuccessStatus: 200,
}));

app.use(express.json());

app.use('/product', productRoutes);

/*
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});
*/

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
