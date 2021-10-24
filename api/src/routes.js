const blipController = require('./controller/blipController');

module.exports = ( app ) => {

    app.get('/', (req, res, next) => {
        //Modelo de resposta
        res.status(200).json("API rodando com sucesso!");
    });

    app.get('/getFiveRepositoriesAsCarroussel/:language', blipController.getFiveRepositoriesAsCarroussel)
}