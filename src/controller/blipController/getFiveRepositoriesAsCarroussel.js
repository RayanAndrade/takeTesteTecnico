const gitController = require('../gitController');

const getFiveRepositoriesAsCarroussel = async ( req, res ) => {
    try {
        const { language } = req.params;
        const allLanguageRepositories = await gitController.getRepositoryByLanguage(language);
        const topFiveRepositories = allLanguageRepositories.slice(0,5);
        const uri = await gitController.getTakeAvatar();
        const blipCarroussel = {};

        topFiveRepositories.forEach( (repository, i) => {

            blipCarroussel[`rep${i + 1}`] = {
                title: repository.name,
                text: repository.description,
                type: "image/jpeg",
                uri
            } 
        })

        return res.status(200).json(blipCarroussel);
        
    } catch (error) {
        
        console.error("Houve um erro ao consultar o método getFiveRepositoriesAsCarroussel");
        console.error(error);
        
        return res.status(400);
    }
}

module.exports = getFiveRepositoriesAsCarroussel;