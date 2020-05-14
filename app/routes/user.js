/**
 * 
 */

module.exports = (application) => {
    application.get('/', (req, res) => {
        application.app.controllers.user.index(application, req, res);
    });
};