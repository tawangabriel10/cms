/**
 * Controller of User
 */
const jwt = require('jsonwebtoken');

// Method that handles user rules regarding login and returns a JWT token
const login = (application, req, res) => {
    var login = req.body;
    console.log("login", login);

    req.assert('username', 'Username is required.').notEmpty();
    req.assert('password', 'Password is required.').notEmpty();
    const errors = req.validationErrors();
    if (errors) {
        res.status(500).json({ 
            error: {
                msg: 'Username and Password is required'
            }, 
            data: {} 
        });
        return;
    }

    const connection = application.config.db_config();
    const userModels = new application.app.models.UserDAO(connection);
    userModels.login(login.username, login.password, (error, result) => {
        if (error || result.lenght == 0) {
            res.status(401).json({
                error: 'Error Authetication'
            });
            return;
        }
        var token = jwt.sign(result[0], 'mysecret', {
            expiresIn: 3600 // expires in 1h
          });
        res.status(200).json({
            data: result[0],
            jwt: token
        });
        return;
    });
};


// Method that deals with the business rules of registering a user and returns the response to the request
const save = (application, req, res) => {
    var user = req.body;

    req.assert('username', 'Username is required.').notEmpty();
    req.assert('password', 'Password is required.').notEmpty();
    req.assert('accessGroupId', 'Access Group Id is required.').notEmpty();
    const errors = req.validationErrors();
    if (errors) {
        res.status(500).json({ 
            error: errors, 
            data: user 
        });
        return;
    }
    const connection = application.config.db_config();
    const userModels = new application.app.models.UserDAO(connection);
    userModels.save(user, (error, result) => {
        if (error) {
            res.status(500).json({
                error: error,
                data: user
            });
            return;
        }
        res.status(200).json({
            data: result
        });
        return;
    });
};

module.exports = {
    login: login,
    save: save
};