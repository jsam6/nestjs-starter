import { DataSourceOptions, DataSource } from 'typeorm';
import 'dotenv/config'
import { Player } from 'src/module/player/entities/player.entity';

export const DbConfig: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    migrationsRun: true,
    entities: [Player],
    // migrations: ['dist/db/migration/*{.ts,.js}'],
};

