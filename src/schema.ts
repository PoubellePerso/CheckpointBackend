import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { CountryResolver } from '@/graphql/resolvers/CountryResolver';

export const createSchema = async () => {
    return await buildSchema({
        resolvers: [CountryResolver],
    });
};
