module.exports = (application) => {

    application.get('/post/find-all', (req, res) =>{
        application.app.controllers.post.posts(application, req, res);
    });

    application.get('/post/save', (req, res) => {
        application.app.controllers.post.savePost(application, req, res);
    });

    application.get('/post', (req, res) => {
        application.app.controllers.post.getById(application, req, res);
    });

    application.get('/posts', (req, res) => {
        application.app.controllers.post.getAll(application, req, res);
    });

    application.post('/post', (req, res) => {
        application.app.controllers.post.save(application, req, res);
    });

    application.put('/post', (req, res) => {
        application.app.controllers.post.update(application, req, res);
    });

    application.delete('/post', (req, res) => {
        application.app.controllers.post.deleteId(application, req, res);
    });
}