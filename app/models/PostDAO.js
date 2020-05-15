/**
 * DAO of Posts
 * @param {*} connection 
 */

 // Receives a connection to the database in the function's constructor 
function PostDAO(connection) {
    this._connection = connection;
};

// Query a post by ID
PostDAO.prototype.getById = (postId, callback) => {
    this._connection.query('SELECT * FROM post WHERE postId = ' + postId, {}, callback);
};

//consult all posts
PostDAO.prototype.getAll = (callback) => {
    this._connection.query('SELECT p.* FROM posts p', {}, callback);
};

// register a post in the database
PostDAO.prototype.save = (post, callback) => {
    this._connection.query('INSERT INTO post VALUES ?', post, callback);
};

// altera um post pelo ID
PostDAO.prototype.update = (post, callback) => {
    this._connection.query('UPDATE post SET ? WHERE postId = ' + post.postId, post, callback);
};

// deletes a post by ID
PostDAO.prototype.delete = (postId, callback) => {
    this._connection.query('DELETE FROM post WHERE postID = ' + postId, {}, callback);
};

module.exports = () => {
    return PostDAO;
};
