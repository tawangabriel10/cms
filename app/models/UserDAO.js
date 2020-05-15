/**
 * User DAO
 * @param {*} connection 
 */

 // Receives a database connection as a parameter in the function constructor
function UserDAO(connection) {
    this._connection = connection;
};

// Returns user data according to username and password
UserDAO.prototype.login = (username, password, callback) => {
    var sql = 'SELECT * FROM user u ' +
    'INNER JOIN user_access_group ua ON u.userId = ua.userId ' +
    'INNER JOIN access_group ag ON ua.accessGroupId = ag.accessGroupId ' +
    'WHERE u.username = "' + username + '" AND u.password = "' + password + '" '
    this._connection.query(sql, {}, callback);
};

// register user data
UserDAO.prototype.save = (user, callback) => {
    this._connection.query('INSERT INTO user VALUES ( ? )', user, callback);
};

module.exports = () => {
    return UserDAO;
}