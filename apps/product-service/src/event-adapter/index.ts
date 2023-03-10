import { AppConfig } from '@app/common/models';
import { EnviromentConfigModule, RabbitConfigModule } from '@app/config';
import { Module } from '@nestjs/common';
import { JobOrderFulllfilmentHandler } from './job-order-fullfilment-handler';

@Module({
    imports: [
        EnviromentConfigModule.register('./apps/product-service/.env'),
        RabbitConfigModule.register(AppConfig.PRODUCT_SERVICE),
    ],
    controllers: [JobOrderFulllfilmentHandler],
    providers: [],
})
export class EventAdapterModule { }
