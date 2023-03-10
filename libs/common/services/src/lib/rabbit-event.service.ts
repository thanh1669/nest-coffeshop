import { Injectable } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import { RmqContext, RmqOptions, Transport } from "@nestjs/microservices";

@Injectable()
export class RabbitEventService {
    constructor(
        private configService: ConfigService
    ) { }

    init(queue: 'PRODUCT_SERVICE' | 'ORDER_SERVICE', noAck = false): RmqOptions {
        return {
            transport: Transport.RMQ,
            options: {
                urls: [this.configService.get<string>('RABBITMQ_URI')],
                persistent: true,
                queue: queue,
                noAck,
            }
        }
    }

    ack(context: RmqContext) {
        const channel = context.getChannelRef();
        const originalMessage = context.getMessage();
        channel.ack(originalMessage);
    }
}