import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Product } from 'src/products/entities';
import { ProductsService } from 'src/products/products.service';

import { seedProductsData } from './data';

@Injectable()
export class SeedService {
  constructor(
    private readonly productRepository: Repository<Product>,
    private readonly productsService: ProductsService,
  ) {}

  async runSeedProducts() {
    await this.insertNewProducts();
    return 'Seed - Insert products executed!';
  }

  private async insertNewProducts() {
    await this.deleteAllProducts();

    const products = seedProductsData.products;

    const insertPromises = [];

    products.forEach((product) =>
      insertPromises.push(this.productsService.create(product, null)),
    );

    await Promise.all(insertPromises);

    return true;
  }

  private async deleteAllProducts() {
    const query = this.productRepository.createQueryBuilder('product');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      console.log(error);
    }
  }
}
