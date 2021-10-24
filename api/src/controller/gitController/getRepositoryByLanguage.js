const getAllRepositories = require('./getAllRepositories');

const getRepositoryByLanguage = async ( language ) => {
    
    try {
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

        return selectedLanguageRepositoriresAsc
        
    } catch (error) {
        
        console.error("Houve um erro ao consultar o método getRepositoryByLanguage");
        console.error(error);
        
        const fakeResponse = [{}];

        return fakeResponse;
    }
}

module.exports = getRepositoryByLanguage;