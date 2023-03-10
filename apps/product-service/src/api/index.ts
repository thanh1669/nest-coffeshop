import { AppConfig } from '@app/common/models';
import { EnviromentConfigModule, RabbitConfigModule } from '@app/config';
import { Module } from '@nestjs/common';
import { OrderRouteModule } from './routes/product.route';

@Module({
    imports: [
        EnviromentConfigModule.register('./apps/product-service/.env'),
        RabbitConfigModule.register(AppConfig.PRODUCT_SERVICE),
        OrderRouteModule
    ],
    controllers: [],
    providers: [],
})
export class ApiModule { }
