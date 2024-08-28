import { Sequelize } from 'sequelize';
import config from '../config/config';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: config.DATABASE_URL as string,
});

export default {
    connect: async () => {
        try {
            await sequelize.authenticate();
            return sequelize;
        } catch (err) {
            throw err;
        }
    }
};
