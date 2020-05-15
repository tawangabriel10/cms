/**
 * Creates Rest service routes for Posts
 */
module.exports = (application) => {

    application.get('/post', (req, res) => {
        application.app.controllers.post.getById(application, req, res);// access Post Controller getById method
    });

    application.get('/posts', (req, res) => {
        application.app.controllers.post.getAll(application, req, res);// access Post Controller getAll method
    });

    application.post('/post', (req, res) => {
        application.app.controllers.post.save(application, req, res);// access save method of Post Controller
    });

    application.put('/post', (req, res) => {
        application.app.controllers.post.update(application, req, res);// access Post Controller update method
    });

    application.delete('/post', (req, res) => {
        application.app.controllers.post.deleteId(application, req, res);// access Post Controller deleteId method
    });
}