"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = exports.users = void 0;
exports.users = {
    getUsers: 'Select * from user limit :limit offset :offset',
    getUser: 'select * from user where id=:id',
    updateUser: 'update user set firstName = :firstName, lastName = :lastName, role = :role, country = :country where id=:id',
    deleteUser: 'delete from user where id=:id',
    insertUser: 'insert into user(firstName, lastName, role, country) values (:firstName, :lastName, :role, :country)'
};
exports.products = {
    getProducts: 'Select * from product limit :limit offset :offset',
    getProduct: 'select * from product where id=:id',
    updateProduct: 'update product set name = :name, price = :price, description = :description, currency = :currency where id=:id',
    deleteProduct: 'delete from product where id=:id',
    insertProduct: 'insert into product(name, description, price, currency) values (:name, :description, :price, :currency)'
};
//# sourceMappingURL=query.js.map