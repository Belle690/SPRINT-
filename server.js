import express from 'express';
const app = express();

app.get("/", (req, res) => {
    res.send("Bem vindo!! 💕");
});

app.get("/status", (req, res) => {
    res.json({status: "online", sprint:1});

});

app.get("/escola", (req, res) => {
    res.json({nome: "Senai",
        cidade: "São Paulo",
        instituicao: "SENAI - Serviço Nacional de Aprendizagem Industrial",
    });

});

app.get("/cursos", (req, res) => {
    res.json([
        {id: 1, curso: "Desenvolvimento de sistemas"},
        {id: 2, curso: "Administração"},
        {id: 3, curso: "Marketing"}
    ]);

});


app.get("/professor", (req, res) => {
    res.json({Professor: "Eduardo", disciplina: "Backend",
    
    });

});


app.get("/ajuda", (req, res) => {
    res.send("Rotas disponíveis: GET /status - mostra o status do sistema; GET /escola - mostra informações da instituição; GET /ajuda - mostra as orientações das rotas.");
});





// DESAFIO EXTRA — GET /requisicao
app.get("/requisicao", (req, res) => {
    res.json({
        metodo: req.method,
        caminho: req.path,
        mensagem: "Solicitação recebida com sucesso!"
    });
});


const PORT = 3000;


app.listen(PORT, () => console.log(`Servidor em http://localhost:${PORT}`));