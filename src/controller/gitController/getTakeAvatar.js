const axios = require("axios");
require("dotenv").config();

const getTakeAvatar = async _ => {
    try {
        const takeInfo = await axios({
            method: "get",
            url: `https://api.github.com/users/${process.env.takeRepository}`,
        }); 
        const { avatar_url } = takeInfo.data;

        return avatar_url;
        
    } catch (error) {
        
        console.error("Houve um erro ao consultar o método getTakeAvatar");
        console.error(error);
        
        const fakeResponse = 'https://icones.pro/wp-content/uploads/2021/05/icone-question-verte.png';
        
        return fakeResponse;
    }
}

module.exports = getTakeAvatar;