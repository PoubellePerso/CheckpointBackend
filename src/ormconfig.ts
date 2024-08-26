import { DataSource } from 'typeorm';
import { Country } from '@/graphql/models/Country';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: './src/database/database.sqlite',
    synchronize: true,
    logging: false,
    entities: [Country],
    migrations: [],
    subscribers: [],
});
