import { Module } from '@nestjs/common';
import { OrderController } from '../controllers/v1/product.controller';
import { OrderService } from '../services/product.service';

@Module({
    controllers: [OrderController],
    providers: [OrderService],
})
export class OrderRouteModule { }
