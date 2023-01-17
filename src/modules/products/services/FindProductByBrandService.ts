import AppError from "../../../shared/errors/AppErrors";
import IProductDTO from "../dtos/IProductDTO";
import FindAllProductsService from "./FindAllProductsService";

export default class FindProductByBrandService {
  public async execute(brand: string): Promise<IProductDTO[]> {

    let newProductsData: IProductDTO[] = [];

    const listAllProductsService = new FindAllProductsService();

    const productsData = await listAllProductsService.execute();

    for (var i = 0; i < productsData.length; i++) {
      if (productsData[i].name.includes(brand)) {
        newProductsData.push(productsData[i]);
      }
    }

    return newProductsData;
  }
}

