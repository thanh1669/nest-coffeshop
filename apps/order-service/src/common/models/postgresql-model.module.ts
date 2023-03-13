import { PostgresqlModule } from '@app/config';
import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderItem } from './order-item.model';
import { Order } from './order.model';

@Global()
@Module({
    imports: [
        SequelizeModule.forFeature(
            [
                Order,
                OrderItem
            ],
            PostgresqlModule.name
        ),
    ],
    exports: [SequelizeModule],
})
export class PostgresqlModelModule { }
