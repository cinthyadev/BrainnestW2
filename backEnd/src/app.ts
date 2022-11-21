import express, { Application } from "express";
import cors from "cors"; //espesifica qué servidores tienen permitido pedir cosas
import config from "./config";
import dashboardRoutes from "./routes/dashboardRoute";
// var bodyParser = require('body-parser')
const app: Application = express();
app.set("port", config.PORT);
app.use(cors());
// app.use(express.json()) //para entender cuando viene una petición como json
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
// app.use(express.urlencoded({extended:false})) // para cuando se envíe una petición false en un formulario se pueda entender
// app.use(express.bodyParser());

app.use(dashboardRoutes);

export default app;
