import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();

const { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } = process.env;

export const AppDataSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: DB_HOST,
  port: parseInt(DB_PORT ?? '5432'),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: ['/entities/*.ts'],
  migrations: [__dirname + '/migrations/*.ts'],
});
