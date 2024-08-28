import config from './config';
import { rateLimit } from 'express-rate-limit';

const limiter = rateLimit({
    windowMs: config.RATE_LIMIT_WINDOW_MS || 5 * 60 * 1000, // Default to 5 minutes if not provided
    max: config.RATE_LIMIT_MAX || 20,                     // Default to 20 requests if not provided
    standardHeaders: true,                                // Add the `RateLimit-*` headers to the response
    legacyHeaders: false,                                // Remove the `X-RateLimit-*` headers from the response
});

export default limiter;
