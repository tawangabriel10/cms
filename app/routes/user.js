/**
 * Registered routes referring to user endpoints
 */

module.exports = (application) => {

    application.post('/login', (req, res) => {
        application.app.controllers.user.login(application, req, res);// access the User Controller login method
    });

    application.post('/user', (req, res) => {
        application.app.controllers.user.save(application, req, res);// access the save method of the User Controller
    });
};

