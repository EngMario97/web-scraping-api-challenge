import express from "express";
import routes from "./routes/index.routes";
import ErrorHandler from "./middlewares/ErrorHandler";
import swaggerAutogen from 'swagger-autogen';

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.use(express.json());

app.use(routes);

app.use(ErrorHandler);

app.listen(PORT, HOST, () => {
  console.log("🚀 Servidor Iniciado");
});


