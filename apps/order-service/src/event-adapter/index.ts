import { RabbitConfigModule } from '@app/config';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        RabbitConfigModule
    ],
    controllers: [],
    providers: [],
})
export class EventAdapterModule { }
