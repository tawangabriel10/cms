const PostDAO = (connection) => {
    this._connection = connection;
};

PostDAO.prototype.getById = (postId, callback) => {
    this._connection.query('SELECT * FROM post WHERE postId = ' + postId, {}, callback);
};

PostDAO.prototype.getAll = (callback) => {
    this._connection.query('SELECT p.* FROM posts p', {}, callback);
};

PostDAO.prototype.save = (post, callback) => {
    this._connection.query('INSERT INTO post VALUES ?', post, callback);
};

PostDAO.prototype.update = (post, callback) => {
    this._connection.query('UPDATE post SET ? WHERE postId = ' + post.postId, post, callback);
};

PostDAO.prototype.delete = (postId, callback) => {
    this._connection.query('DELETE FROM post WHERE postID = ' + postId, {}, callback);
};

module.exports = () => {
    return PostDAO;
};
