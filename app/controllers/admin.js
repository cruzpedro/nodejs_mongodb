module.exports.formulario_inclusao_noticia = function (application, req, res) {
    res.render('admin/form_add_noticia', {errors_validation: {}, noticia: {}});
};

module.exports.noticia_salvar = function (application, req, res) {
    let noticia = req.body;

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia', 'Notícia é obrigatória').notEmpty();

    let errors = req.validationErrors();

    if(errors) {
        res.render('admin/form_add_noticia', {errors_validation: errors, noticia: noticia});
        return;
    }

    let connection = application.config.dbConnection();
    let noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.saveNoticia(noticia, function (error, result) {
        res.redirect('/noticias');
    })
};