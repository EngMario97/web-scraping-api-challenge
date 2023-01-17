import { Request, Response } from "express";
import FindAllProductsService from "../../../services/FindAllProductsService";
import FindProductByBrandService from "../../../services/FindProductByBrandService";

class ProductsController {

  async list(request: Request, response: Response): Promise<Response> {
    const listAllProductsService = new FindAllProductsService();

    const products = await listAllProductsService.execute();

    return response.json(products);
  }

  async findByBrand(request: Request, response: Response): Promise<Response> {
    const { brand } = request.params;

    const findProductByBrand = new FindProductByBrandService();

    const productsBrand = await findProductByBrand.execute(String(brand));

    return response.json(productsBrand);
  }

}

export default new ProductsController();