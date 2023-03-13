import { Module } from '@nestjs/common';
import { ProductController } from '../controllers/v1/product.controller';
import { ProductService } from '../services/product.service';

@Module({
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductRouteModule { }
