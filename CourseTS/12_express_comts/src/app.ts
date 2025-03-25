// iniciando projeto com express
console.log("Express + Ts");

// init express
import express from 'express';

const app = express();

// 3 - rotas com post

app.get("/", (req, res) => {
    return res.send("Hello World");
});

// 3 - rotas com post
app.post("/api/product", (req, res) => {
     
    console.log(req.body);
    return res.send("Produto salvo com sucesso");
})


app.listen(3000, () => {
    console.log("Server is running on port 3000")
});