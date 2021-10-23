const getAllRepositories = require('./getAllRepositories');

const getRepositoryByLanguage = async ( req, res ) => {
    
    try {
        const { language } = req.params;
        const allRepositories = await getAllRepositories();

        const selectedLanguageRepositorires = allRepositories.filter(repository => {
            const isLanguageRepository = repository.language == language;

            if(isLanguageRepository){
                return repository;
            }
            return;
        })

        const selectedLanguageRepositoriresAsc = selectedLanguageRepositorires.sort(function(a,b){
            return new Date(a.created_at) - new Date(b.created_at);
        });

        return res.status(200).json(selectedLanguageRepositoriresAsc)
        
    } catch (error) {
        
        console.error("Houve um erro ao consultar o método getRepositoryByLanguage");
        console.error(error);
        
        return res.status(400);
    }
}

module.exports = getRepositoryByLanguage;