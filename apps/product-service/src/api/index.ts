import { AppConfig } from '@app/common/models';
import { EnviromentConfigModule, PostgresqlModule, RabbitConfigModule } from '@app/config';
import { Module } from '@nestjs/common';
import { PostgresqlModelModule } from '../common/models';
import { ProductRouteModule } from './routes/product.route';

@Module({
    imports: [
        EnviromentConfigModule.register('./apps/product-service/.env'),
        RabbitConfigModule.register(AppConfig.PRODUCT_SERVICE),
        PostgresqlModule.register(),
        PostgresqlModelModule,
        ProductRouteModule
    ],
    controllers: [],
    providers: [],
})
export class ApiModule { }
