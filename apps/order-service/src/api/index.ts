import { AppConfig } from '@app/common/models';
import { EnviromentConfigModule, RabbitConfigModule } from '@app/config';
import { Module } from '@nestjs/common';
import { OrderRouteModule } from './routes/order.route';

@Module({
    imports: [
        EnviromentConfigModule.register('./apps/order-service/.env'),
        RabbitConfigModule.register(AppConfig.ORDER_SERVICE),
        OrderRouteModule
    ],
    controllers: [],
    providers: [],
})
export class ApiModule { }
