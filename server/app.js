
// app.js
import express from 'express';
import cors from 'cors';
import routerUser from './routes/user.routes.js';

import morgan from 'morgan';
import { FRONTEND_URL } from './config.js';

const app = express();

// Configuración CORS
const corsOptions = {
  origin: FRONTEND_URL,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());


// Rutas
app.use('/apiUser', routerUser);

export default app;
