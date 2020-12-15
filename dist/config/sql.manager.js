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
exports.SqlManager = void 0;
const sequelize_1 = require("./sequelize");
const SqlConnection = __importStar(require("sequelize"));
class SqlManager {
    constructor() {
        this.sequelizeConnection = sequelize_1.sequelize.getSequelize();
    }
    InitiateTransaction() {
        return this.sequelizeConnection.transaction();
    }
    getSequelize() {
        return this.sequelizeConnection;
    }
    ExecuteQuery(qry) {
        return this.sequelizeConnection.query(qry, { type: SqlConnection.QueryTypes.SELECT });
    }
    Get(qry, vals = {}) {
        return this.sequelizeConnection.query({
            query: qry,
            values: vals
        }, { type: SqlConnection.QueryTypes.SELECT });
    }
    Insert(qry, vals) {
        return this.sequelizeConnection.query({
            query: qry,
            values: vals
        }, { type: SqlConnection.QueryTypes.INSERT });
    }
    Update(qry, vals) {
        return this.sequelizeConnection.query({
            query: qry,
            values: vals
        }, { type: SqlConnection.QueryTypes.UPDATE });
    }
    BulkInsert(tableName, vals) {
        return this.sequelizeConnection.getQueryInterface().bulkInsert(tableName, vals);
    }
    BulkUpdate(qry, vals) {
        return this.sequelizeConnection.query({
            query: qry,
            values: vals
        }, { type: SqlConnection.QueryTypes.BULKUPDATE });
    }
    Delete(qry, vals) {
        return this.sequelizeConnection.query({
            query: qry,
            values: vals
        }, { type: SqlConnection.QueryTypes.DELETE });
    }
}
exports.SqlManager = SqlManager;
//# sourceMappingURL=sql.manager.js.map