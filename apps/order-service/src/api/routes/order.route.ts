import { PostgresqlModule } from '@app/config';
import { MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { OrderController } from '../controllers/v1/order.controller';
import { LoadOrderById, OrderMiddleware, PerpareOrderCreate } from '../middleware/order.middleware';
import { OrderService } from '../services/order.service';

@Module({
    controllers: [
        OrderController
    ],
    providers: [
        OrderService,
        OrderMiddleware,
    ]
})
export class OrderRouteModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoadOrderById)
            .forRoutes({ path: '/v1/orders/:id', method: RequestMethod.GET });

        consumer
            .apply(LoadOrderById)
            .forRoutes({ path: '/v1/orders/:id', method: RequestMethod.PATCH })

        consumer
            .apply(PerpareOrderCreate)
            .forRoutes({ path: '/v1/orders/:id/cancel', method: RequestMethod.POST })
    }
}
