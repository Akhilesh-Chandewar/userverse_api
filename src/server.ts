import config from './config/config';
import app from './app';
import logger from './utils/logger';
import databaseService, { sequelize } from './services/databaseService';

const server = app.listen(config.PORT);

void (async () => {
    try {
        // Database Connection
        const connection = await databaseService.connect();
        logger.info(`DATABASE_CONNECTION`, {
            meta: {
                DIALECT: connection.getDialect(),
                DATABASE_PATH: config.DATABASE_URL
            }
        });

        await sequelize.sync();
        logger.info(`DATABASE SYNCED`, {
            meta: {
                DIALECT: connection.getDialect(),
                DATABASE_PATH: config.DATABASE_URL
            }
        });

        logger.info(`APPLICATION_STARTED`, {
            meta: {
                PORT: config.PORT,
                SERVER_URL: config.SERVER_URL
            }
        });
    } catch (err) {
        logger.error(`APPLICATION_ERROR`, { meta: err });
        server.close((error) => {
            if (error) {         
                logger.error(`APPLICATION_ERROR`, { meta: error });
            }
            process.exit(1);
        });
    };
})();
