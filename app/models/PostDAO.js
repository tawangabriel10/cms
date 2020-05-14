const PostDAO = (connection) => {
    this._connection = connection;
};

PostDAO.prototype.save = (post, callback) => {
    this._connection.query('INSERT INTO post VALUES ?', post, callback);
};

module.exports = () => {
    return PostDAO;
};
