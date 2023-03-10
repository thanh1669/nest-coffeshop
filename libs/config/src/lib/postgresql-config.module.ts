import { DynamicModule, Logger, Module } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import { SequelizeModule } from '@nestjs/sequelize';

@Module({})
export class PostgresqlModule {
    static register(): DynamicModule {
        Logger.log(
            '[PostgresqlConfig] Postgresql connection established!'
        );
        return {
            module: PostgresqlModule,
            exports: [PostgresqlModule],
            imports: [
                SequelizeModule.forRootAsync(
                    {
                        name: PostgresqlModule.name,
                        useFactory: (configService: ConfigService) => ({
                            uri: configService.get<string>('POSTGRESQL_URI'),
                            autoLoadModels: true,
                            synchronize: true,
                            benchmark: true,
                            logging: true,
                            // sync: { alter: true }
                        }),
                        inject: [ConfigService]
                    }
                )
            ]
        };
    }
}