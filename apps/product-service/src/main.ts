import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api';

async function bootstrap() {
    const app = await NestFactory.create(ApiModule);
    const configService = app.get(ConfigService);
    const port = configService.get('PORT');

    // app register
    Logger.log(`🚀 Application is running on: http://localhost:${port}`);
    await app.listen(port);
}
bootstrap();
