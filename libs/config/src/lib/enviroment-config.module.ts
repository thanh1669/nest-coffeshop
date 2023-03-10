import { DynamicModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

export class EnviromentConfigModule {
    static register(path: string): DynamicModule {
        return {
            module: EnviromentConfigModule,
            imports: [
                ConfigModule.forRoot({
                    isGlobal: true,
                    envFilePath: path,
                }),
            ],
            exports: [ConfigModule]
        }
    }
}
