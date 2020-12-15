
import * as SqlConnection from 'sequelize';

import {dbConfig} from './Database';

console.log(dbConfig)
export class SequelizeConfig {
    private sequelize: SqlConnection.Sequelize;

    public setConnection() {
        const dbInfo = dbConfig.connection;
        this.sequelize = new SqlConnection.Sequelize(dbInfo.database, dbInfo.user, dbInfo.password, {
            host: dbInfo.host,
            dialect: 'mysql',
            logging: console.log,
            pool: {
                max: 10,
                min: 0
            }
        });
        this.ping(dbInfo);
    }

    private ping(dbInfo) {
        this.sequelize
            .authenticate()
            .then(() => {
                console.log(`Connection has been established to the database: ${dbInfo.host} - ${dbInfo.database} successfully.`);
            })
            .catch((err) => {
                console.log(`Unable to connect to the database ${dbInfo.host} - ${dbInfo.database}`, err);
            });
    }

    public getSequelize() {
        return this.sequelize;
    }

}

export const sequelize = new SequelizeConfig();