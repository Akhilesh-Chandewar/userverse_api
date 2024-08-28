import dotenvFlow from 'dotenv-flow';

dotenvFlow.config();

export default {
    // General
    ENV: process.env.ENV || 'development',
    PORT: process.env.PORT || '3000',
    SERVER_URL: process.env.SERVER_URL || 'http://localhost:3000',

    // Database
    DATABASE_URL: process.env.DATABASE_URL || './database/database.sqlite',

    // Rate Limiter
    RATE_LIMIT_WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '300000', 10),
    RATE_LIMIT_MAX: parseInt(process.env.RATE_LIMIT_MAX || '20', 10)
};
