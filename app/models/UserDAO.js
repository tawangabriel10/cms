const UserDAO = (connection) => {
    this._connection = connection;
};

UserDAO.prototype.login = (username, password, callback) => {
    this._connection.query('SELECT * FROM user WHERE username = "' + username + '" AND password = "' + password + '" ', {}, callback);
};

UserDAO.prototype.save = (user, callback) => {
    this._connection.query('INSERT INTO user VALUES ( ? )', user, callback);
};

module.exports = () => {
    return UserDAO;
}