import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { EventAdapterModule } from './event-adapter';

async function event() {
    // event dispatcher register
    await NestFactory.create(EventAdapterModule);
    Logger.log(`🚀 Event dispatcher is running`);
}
event();
