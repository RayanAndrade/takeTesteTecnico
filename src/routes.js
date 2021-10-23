module.exports = ( app ) => {

    app.get('/', (req, res, next) => {
        //Modelo de resposta
        res.send({
            status: 200,
            erro: 0,
            detalhes: "API rodando com sucesso!",
            data: {}
        })
        //Respostas são gerenciadas pelas camadas data, em sua respectiva pasta de query
    });
    
}