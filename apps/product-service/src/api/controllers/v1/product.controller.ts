import { AuthValidationPipe } from '@app/config';
import { Body, Controller, Get, HttpException, HttpStatus, Post, Query, Request, UsePipes } from '@nestjs/common';
import { ProductService } from '../../services/product.service';
import { CreateProduct, ListProduct } from '../../validations/product.validation';

@Controller('/v1/items')
export class ProductController {
    constructor(private service: ProductService) { }

    @Get()
    @UsePipes(new AuthValidationPipe(ListProduct))
    async list(@Request() req, @Query() query) {
        const items = await this.service.getAll(
            query
        );
        return {
            code: 0,
            data: items
        };
    }

    @Post()
    @UsePipes(new AuthValidationPipe(CreateProduct))
    async create(@Body() body, @Request() req) {
        try {
            const newItem = await this.service.createItem(
                body
            );
            return {
                code: 0,
                data: newItem,
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
        return { code: 0, data: req.locals.product };
    }
}
