import AppError from "../../../shared/errors/AppErrors";
import puppeteer from "puppeteer";
import IProductDTO from "../dtos/IProductDTO";
const URL = 'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops'

export default class FindAllProductsService {
  public async execute(): Promise<IProductDTO[]> {


    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(URL);

    const productsData = await page.evaluate(() => {
      const products = Array.from(document.querySelectorAll('.caption'));
      const data = products.map((product: any) => ({
        name: product.querySelector('.title').innerText,
        description: product.querySelector('.description').innerText,
        price: product.querySelector('.pull-right.price').innerText
      }));

      return data;
    })

    await browser.close();

    if (!productsData) {
      throw new AppError("Produtos não encontrados");
    }
    return productsData;

  }
}
