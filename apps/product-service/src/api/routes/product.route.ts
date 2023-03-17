import { MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { ProductController } from '../controllers/v1/product.controller';
import { LoadProductById, ProductMiddleware } from '../middleware/product.middleware';
import { ProductService } from '../services/product.service';

@Module({
    controllers: [
        ProductController
    ],
    providers: [
        ProductService,
        ProductMiddleware,
    ]
})
export class ProductRouteModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoadProductById)
            .forRoutes({ path: '/v1/items/:id', method: RequestMethod.GET });

        consumer
            .apply(LoadProductById)
            .forRoutes({ path: '/v1/items/:id', method: RequestMethod.PATCH })
    }
}
