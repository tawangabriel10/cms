/**
 * 
 */

module.exports = (application) => {
    application.get('/', (req, res) => {
        application.app.controllers.user.index(application, req, res);
    });

    application.get('/user', (req, res) => {
        application.app.controllers.user.saveUser(application, req, res);
    });

    application.post('/login', (req, res) => {
        application.app.controllers.user.login(application, req, res);
    });

    application.post('/user', (req, res) => {
        application.app.controllers.user.save(application, req, res);
    });
};

