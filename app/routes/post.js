module.exports = (application) => {

    application.get('/save-post', (req, res) => {
        application.app.controllers.post.savePost(application, req, res);
    });
}