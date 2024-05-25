import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './module/player/player.module';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DbConfig } from './db/config'
import { DataSource } from 'typeorm';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot(DbConfig),
        PlayerModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private dataSource: DataSource) { }
}
