import { Controller, Get } from '@nestjs/common';
import { OrderService } from '../../services/product.service';

@Controller()
export class OrderController {
    constructor(private readonly orderServiceService: OrderService) { }

    @Get()
    getHello(): string {
        return this.orderServiceService.getHello();
    }
}
