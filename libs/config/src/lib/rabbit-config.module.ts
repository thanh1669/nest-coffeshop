import { RabbitEventService } from '@app/common/services';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Global()
@Module({
    providers: [RabbitEventService],
    exports: [RabbitEventService]
})
export class RabbitConfigModule {
    static register(name: string): DynamicModule {
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
