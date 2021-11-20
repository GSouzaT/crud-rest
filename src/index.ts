import express, { Request, Response, NextFunction } from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';
import errorHandler from './middlewares/error-handler.middleware';

const app = express();

// Configurações aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de rotas
app.use(usersRoute);
app.use(statusRoute);

// Configuração de Handlers de erro
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Running on port 3000');
});
