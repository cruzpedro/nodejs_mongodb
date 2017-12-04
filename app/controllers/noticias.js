module.exports.noticia = function (application, req, res) {
    let connection = application.config.dbConnection();
    let noticiasModel = new application.app.models.NoticiasDAO(connection);
    let idNoticia = req.query;

    noticiasModel.getNoticia(idNoticia, function (error, result) {
        res.render('noticias/noticia', {noticia: result})
    });
};

module.exports.noticias = function (application, req, res) {
    let connection = application.config.dbConnection();
    let noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function (error, result) {
        res.render('noticias/noticia', {noticia: result})
    });
};