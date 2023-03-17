import { DynamicModule, Logger, Module } from '@nestjs/common';
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
                SequelizeModule.forRoot({
                    uri: process.env.POSTGRESQL_URI,
                    autoLoadModels: true,
                    synchronize: true,
                    benchmark: true,
                    logging: true,
                    // sync: { alter: true }
                })
            ]
        };
    }
}