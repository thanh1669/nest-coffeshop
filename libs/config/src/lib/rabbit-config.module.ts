import { DynamicModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

export class RabbitConfigModule {
    static register(name: 'ORDER_SERVICE' | 'PRODUCT_SERVICE'): DynamicModule {
        return {
            module: RabbitConfigModule,
            imports: [
                ClientsModule.registerAsync([
                    {
                        name,
                        useFactory: (configService: ConfigService) => ({
                            transport: Transport.RMQ,
                            options: {
                                queue: name,
                                urls: [configService.get<string>('RABBITMQ_URI')],
                            },
                        }),
                        inject: [ConfigService],
                    },
                ]),
            ],
            exports: [ClientsModule]
        }
    }
}
