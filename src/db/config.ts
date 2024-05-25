import { DataSourceOptions, DataSource } from 'typeorm';
import 'dotenv/config'

export const DbConfig: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    migrationsRun: true,
    entities: ['dist/db/schema/*{ .ts,.js}'],
    migrations: ['dist/db/migration/*{.ts,.js}'],
};

