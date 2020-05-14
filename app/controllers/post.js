/**
 * 
 */

const posts = (application, req, res) => {
    res.render('post/posts', {});
};

const savePost = (application, req, res) => {
    res.render('post/savePost', { validation: {}, post: {} });
};

const getAll = (application, req, res) => {
    const connection = application.config.db_config();
    const postModels = new application.app.models.PostDAO(connection);
    postModels.getAll((error, result) => {
        res.render('post/posts', {posts: result});
    })
};

const save = (application, req, res) => {
    var post = req.body;

    req.assert('title', 'Title is required.').notEmpty();
    req.assert('subtitle', 'Subtitle is required.').notEmpty();
    req.assert('content', 'Content is required.').notEmpty();

    var errors = req.validationErrors();
    if (errors) {
        res.render('post/savePost', { validation: errors, post: post });
        return;
    }

    const connection = application.config.db_config();
    const postModels = new application.app.models.PostDAO(connection);

    postModels.save(post, (error, result) => {
        res.redirect('/posts');
    });
};

module.exports = {
    posts: posts,
    savePost: savePost,
    getAll: getAll,
    save: save
};