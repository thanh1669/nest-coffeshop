import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './category.model';
import { Item } from './item.model';

@Global()
@Module({
    imports: [
        SequelizeModule.forFeature(
            [
                Item,
                Category
            ]
        ),
    ],
    exports: [SequelizeModule],
})
export class PostgresqlModelModule { }
