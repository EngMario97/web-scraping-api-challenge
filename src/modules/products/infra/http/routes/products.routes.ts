import { Router } from "express";
import ProductsController from "../controllers/ProductsController";

const routes = Router();

routes.get("/", ProductsController.list);

routes.get("/:brand", ProductsController.findByBrand);

export default routes;
