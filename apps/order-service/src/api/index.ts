import { Module } from '@nestjs/common';
import { AppConfig } from '@app/common/models';
import { EnviromentConfigModule, PostgresqlModule, RabbitConfigModule } from '@app/config';
import { PostgresqlModelModule } from '../common/models';
import { OrderRouteModule } from './routes/order.route';

@Module({
    imports: [
        EnviromentConfigModule.register('./apps/order-service/.env'),
        RabbitConfigModule.register(AppConfig.ORDER_SERVICE),
        PostgresqlModule.register(),
        PostgresqlModelModule,
        OrderRouteModule
    ],
    controllers: [],
    providers: [],
})
export class ApiModule { }
