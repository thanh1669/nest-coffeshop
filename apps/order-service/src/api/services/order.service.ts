import { AppConfig, JobConfig } from '@app/common/models';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from '../../common/models';

@Injectable()
export class OrderService {

    constructor(
        @InjectModel(Order) private orderRespository: typeof Order,
        @Inject(AppConfig.ORDER_SERVICE) private rabbitClient: ClientProxy,
    ) { }

    getHello(): string {
        this.rabbitClient.emit(JobConfig.ORDER_FULLFILMENT, { value: 'order' });
        return 'Hello World!';
    }

    getAll(params, offset = 0, limit = 20) {
        return this.orderRespository.findAll({
            where: params,
            offset,
            limit
        });
    }

    createOrder(order) {
        return this.orderRespository.create(
            order,
            {
                include: [
                    {
                        association: 'order_items',
                        attributes: [
                            'item_id',
                            'item_sku',
                            'item_name',
                            'item_original_price',
                            'item_price',
                            'total_quantity',
                            'total_price',
                        ]
                    }
                ],
            }
        );
    }

    replaceOrder(orderId, newOrder) {
        return this.orderRespository.update(
            newOrder,
            {
                where: {
                    id: orderId
                },
                individualHooks: true
            }
        )
    }
}

