import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmConfigModule } from './config/typeorm/typeorm.module';
import { Product } from './products/entities/product.entity';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    TypeOrmConfigModule,
    TypeOrmModule.forFeature([Product]),
    ProductsModule,
    DatabaseModule,
    AuthModule,
    UserModule,
    SeedModule,
  ],
})
export class AppModule {}
