/**
 * 
 */

const index = (application, req, res) => {
    res.render('user/index', { validation: {}, login: {} });
};

const saveUser = (application, req, res) => {
    res.render('user/saveUser', { validation: {}, user: {} });
};

const login = (application, req, res) => {
    var login = req.body;

    req.assert('username', 'Username is required.').notEmpty();
    req.assert('password', 'Password is required.').notEmpty();
    const errors = req.validationErrors();
    if (errors) {
        res.render('user/index', { validation: errors, login: {} });
        return;
    }

    const connection = application.config.db_config();
    const userModels = new application.app.models.UserDAO(connection);
    userModels.login(login.username, login.password, (error, result) => {
        res.redirect('/posts');
    });
};

const save = (application, req, res) => {
    var user = req.body;

    req.assert('username', 'Username is required.').notEmpty();
    req.assert('password', 'Password is required.').notEmpty();
    req.assert('accessGroupId', 'Access Group Id is required.').notEmpty();
    const errors = req.validationErrors();
    if (errors) {
        res.render('user/saveUser', { validation: errors, user: user });
        return;
    }
    const connection = application.config.db_config();
    const userModels = new application.app.models.UserDAO(connection);
    userModels.save(user, (error, result) => {
        res.redirect('/');
    });
};

module.exports = {
    index: index,
    saveUser: saveUser,
    login: login,
    save: save
}