import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Item } from '../../common/models';

@Injectable()
export class ProductMiddleware {
    readonly itemRespository = this._itemRespository;

    constructor(
        @InjectModel(Item) private _itemRespository: typeof Item,
    ) { }
}

/**
 * Perpare order create appen to body
 */
export class LoadProductById extends ProductMiddleware implements NestMiddleware {
    async use(req, res, next) {
        const product = await this.itemRespository.findByPk(req.params.id);
        req.locals = req.locals ? req.locals : {};
        req.locals.product = product;
        next();
    }
}