/**
 * 
 */

const getById = (application, req, res) =>{
    var post = req.query;
    const connection = application.config.db_config();
    const postModels = new application.app.models.PostDAO(connection);

    postModels.getById(post.postId, (error, result) => {
        if (error) {
            res.status(500).json({
                error: error
            });
            return;
        }
        console.log('getById: ', result);
        res.status(200).json({
            data: result[0]
        });
        return;
    });
};

const getAll = (application, req, res) => {
    const connection = application.config.db_config();
    const postModels = new application.app.models.PostDAO(connection);
    postModels.getAll((error, result) => {
        if (error) {
            res.status(500).json({
                error: error
            });
            return;
        }
        res.status(200).json({
            data: result
        });
        return;
    })
};

const save = (application, req, res) => {
    var post = req.body;

    req.assert('title', 'Title is required.').notEmpty();
    req.assert('subtitle', 'Subtitle is required.').notEmpty();
    req.assert('content', 'Content is required.').notEmpty();

    var errors = req.validationErrors();
    if (errors) {
        res.status(500).json({ 
            error: errors, 
            data: post 
        });
        return;
    }

    const connection = application.config.db_config();
    const postModels = new application.app.models.PostDAO(connection);

    postModels.save(post, (error, result) => {
        if (error) {
            res.status(500).json({
                error: error
            });
            return;
        }
        res.status(200).json({
            data: result
        });
        return;
    });
};

const update = (application, req, res) => {
    var post = req.body;
    req.assert('title', 'Title is required.').notEmpty();
    req.assert('subtitle', 'Subtitle is required.').notEmpty();
    req.assert('content', 'Content is required.').notEmpty();

    var errors = req.validationErrors();
    if (errors) {
        res.status(500).json({ 
            error: errors, 
            data: post 
        });
        return;
    }

    const connection = application.config.db_config();
    const postModels = new application.app.models.PostDAO(connection);

    postModels.save(post, (error, result) => {
        if (error) {
            res.status(500).json({
                error: error
            });
            return;
        }
        res.status(200).json({
            data: result
        });
        return;
    });
};

const deleteId = (application, req, res) => {
    var post = req.query;
    const connection = application.config.db_config();
    const postModels = new application.app.models.PostDAO(connection);

    postModels.delete(post.postId, (error, result) => {
        if (error) {
            res.status(500).json({
                error: error
            });
            return;
        }
        
        postModels.getAll((error1, result1) => {
            if (error) {
                res.status(500).json({
                    error: error1
                });
                return;
            }
            res.status(200).json({
                data: result1
            });
            return;
        })
    });
};

module.exports = {
    getById: getById,
    getAll: getAll,
    save: save,
    update: update,
    deleteId: deleteId
};