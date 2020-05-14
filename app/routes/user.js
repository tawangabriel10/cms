/**
 * 
 */

module.exports = (application) => {

    application.post('/login', (req, res) => {
        application.app.controllers.user.login(application, req, res);
    });

    application.post('/user', (req, res) => {
        application.app.controllers.user.save(application, req, res);
    });
};

