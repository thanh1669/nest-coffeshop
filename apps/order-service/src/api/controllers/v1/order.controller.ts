import { AuthValidationPipe } from '@app/config';
import { Body, Controller, Get, HttpException, HttpStatus, Post, Query, Request, UsePipes } from '@nestjs/common';
import { OrderService } from '../../services/order.service';
import { ListOrder, OrderCreate } from '../../validations/order.validation';

@Controller('/v1/orders')
export class OrderController {
    constructor(private service: OrderService) { }

    @Get()
    @UsePipes(new AuthValidationPipe(ListOrder))
    async list(@Request() req, @Query() query) {
        const invoices = await this.service.getAll(
            query
        );
        return {
            code: 0,
            data: invoices
        };
    }

    @Post()
    @UsePipes(new AuthValidationPipe(OrderCreate))
    async create(@Body() body, @Request() req) {
        try {
            const newInvoice = await this.service.createOrder(
                body
            );
            return {
                code: 0,
                data: newInvoice,
                message: 'Thêm mới dữ liệu thành công',
            };
        } catch (error) {
            throw new HttpException(
                error,
                HttpStatus.INTERNAL_SERVER_ERROR
            )
        }
    }

    @Get(':id')
    async get(@Request() req) {
        return { code: 0, data: req.locals.order };
    }
}
