module.exports = function(application) {
    application.get('/stream', function(req, res) {
        application.app.controllers.stream.index(application, req, res);
    });
};