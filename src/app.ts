import express, { Application, NextFunction, Request, Response } from 'express';
import router from './routes/apiRouter';
import path from 'path';
import globalErrorHandler from './middleware/globalErrorHandler';
import httpError from './utils/httpError';
import responseMessage from './constants/responseMessage';
import helmet from 'helmet';
import cors from 'cors';
import limiter from './config/rateLimiter';
import logger from './utils/logger';

const app:Application = express();

// middleware
app.use(helmet())
app.use(
    cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
        // origin: ['https://client.com'],
        credentials: true
    })
)
app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'public')));

app.use(limiter)
logger.info(`RATE_LIMITER_INITIATED`)

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