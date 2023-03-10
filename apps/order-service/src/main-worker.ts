import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { WorkerModule } from './worker';

async function worker() {
    // worker register
    await NestFactory.create(WorkerModule);
    Logger.log(`🚀 Worker is running`);
}
worker();
