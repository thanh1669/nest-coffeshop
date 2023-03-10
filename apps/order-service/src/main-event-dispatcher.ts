import { AppConfig } from '@app/common/models';
import { RabbitEventService } from '@app/common/services';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { EventAdapterModule } from './event-adapter';

async function event() {
    const app = await NestFactory.create(EventAdapterModule);
    const rabbitEvent = app.get<RabbitEventService>(RabbitEventService);

    // App register
    Logger.log(`🚀 Event dispatcher is running`);
    await app.connectMicroservice(rabbitEvent.init(AppConfig.PRODUCT_SERVICE));
    await app.startAllMicroservices();
}
event();
