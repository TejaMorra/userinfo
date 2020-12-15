export const users = {
    getUsers: 'Select * from user',
    getUser: 'select * from user where id=:id',
    updateUser: 'update user set firstName = :firstName, lastName = :lastName, role = :role, country = :country where id=:id',
    deleteUser: 'delete from user where id=:id',
    insertUser: 'insert into user(firstName, lastName, role, country) values (:firstName, :lastName, :role, :country)'
}