import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Order } from "../../common/models";

@Injectable()
export class OrderMiddleware {
    readonly orderRespository = this._orderRespository;

    constructor(
        @InjectModel(Order) private _orderRespository: typeof Order,
    ) { }
}

/**
 * Perpare order create appen to body
 */
export class LoadOrderById extends OrderMiddleware implements NestMiddleware {
    async use(req, res, next) {
        const order = await this.orderRespository.findByPk(req.params.id);
        req.locals = req.locals ? req.locals : {};
        req.locals.order = order;
        next();
    }
}

/**
 * Perpare order create appen to body
 */
export class PerpareOrderCreate extends OrderMiddleware implements NestMiddleware {
    async use(req, res, next) {
        const params = req.body;

        if (params.order_items && params.order_items.length) {
            params.total_item = params.order_items.length;
        }

        if (params.total_item) {
            params.total_quantity = params.order_items
                .reduce((a, b) => (a + b.total_quantity));
        }

        if (params.total_quantity) {
            params.total_price = params.order_items
                .reduce((a, b) => (a + b.total_price));
        }

        req.body = params;
        next();
    }
}
