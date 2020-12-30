export const users = {
    getUsers: 'Select * from user limit :limit offset :offset',
    getCount: 'select count(*) as total from user',
    getUser: 'select * from user where id=:id',
    updateUser: 'update user set firstName = :firstName, lastName = :lastName, role = :role, country = :country where id=:id',
    deleteUser: 'delete from user where id=:id',
    insertUser: 'insert into user(firstName, lastName, role, country) values (:firstName, :lastName, :role, :country)'
}

export const products = {
    getProducts: 'Select * from product limit :limit offset :offset',
    getCount: 'select count(*) as total from product',
    getProduct: 'select * from product where id=:id',
    updateProduct: 'update product set name = :name, price = :price, description = :description, currency = :currency where id=:id',
    deleteProduct: 'delete from product where id=:id',
    insertProduct: 'insert into product(name, description, price, currency) values (:name, :description, :price, :currency)'
}