const gitController = require('./controller/gitController');

module.exports = ( app ) => {

    app.get('/', (req, res, next) => {
        //Modelo de resposta
        res.status(200).json("API rodando com sucesso!");
    });

    app.get('/getRepositoryByLanguage/:language', gitController.getRepositoryByLanguage)
}