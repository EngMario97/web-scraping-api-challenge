import { Router } from "express";
import productsRoutes from "../../../../modules/products/infra/http/routes/products.routes";

const routes = Router();

routes.use("/products", productsRoutes);
/*routes.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))*/

export default routes;
