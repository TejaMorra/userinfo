"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.SequelizeConfig = void 0;
const SqlConnection = __importStar(require("sequelize"));
const Database_1 = require("./Database");
console.log(Database_1.dbConfig);
class SequelizeConfig {
    setConnection() {
        const dbInfo = Database_1.dbConfig.connection;
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
    ping(dbInfo) {
        this.sequelize
            .authenticate()
            .then(() => {
            console.log(`Connection has been established to the database: ${dbInfo.host} - ${dbInfo.database} successfully.`);
        })
            .catch((err) => {
            console.log(`Unable to connect to the database ${dbInfo.host} - ${dbInfo.database}`, err);
        });
    }
    getSequelize() {
        return this.sequelize;
    }
}
exports.SequelizeConfig = SequelizeConfig;
exports.sequelize = new SequelizeConfig();
//# sourceMappingURL=sequelize.js.map