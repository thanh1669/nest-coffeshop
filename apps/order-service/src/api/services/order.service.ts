import { AppConfig, JobConfig } from '@app/common/models';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrderService {
    constructor(
        @Inject(AppConfig.ORDER_SERVICE) private rabbitClient: ClientProxy
    ) { }
    getHello(): string {
        this.rabbitClient.emit(JobConfig.ORDER_FULLFILMENT, { value: 'order' });
        return 'Hello World!';
    }
}
