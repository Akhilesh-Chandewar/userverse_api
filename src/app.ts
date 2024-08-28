import express, { Application, NextFunction, Request, Response } from 'express';
import router from './routes/apiRouter';
import path from 'path';
import globalErrorHandler from './middleware/globalErrorHandler';
import httpError from './utils/httpError';
import responseMessage from './constants/responseMessage';

const app:Application = express();

// middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'public')));

app.use('/api/v1/', router);

app.use((req: Request, _: Response, next: NextFunction) => {
    try {
        throw new Error(responseMessage.NOT_FOUND('route'));
    } catch (err) {
        httpError(next, err, req, 404)
    }
})

app.use(globalErrorHandler);

export default app;