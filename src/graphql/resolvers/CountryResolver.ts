import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Country } from '@/graphql/models/Country';
import { AppDataSource } from '@/ormconfig';

@Resolver()
export class CountryResolver {
    private countryRepository = AppDataSource.getRepository(Country);

    @Query(() => [Country])
    async countries() {
        return this.countryRepository.find();
    }

    @Query(() => Country)
    async country(@Arg('countryCode') countryCode: string) {
        return this.countryRepository.findOne({ where: { countryCode } });
    }

    @Query(() => [Country])
    async countriesByContinent(@Arg('continentCode') continentCode: string) {
        return this.countryRepository.find({ where: { continentCode } });
    }

    @Mutation(() => Country)
    async createCountry(
        @Arg('countryCode') countryCode: string,
        @Arg('countryName') countryName: string,
        @Arg('emoji') emoji: string,
        @Arg('continentCode') continentCode: string,
    ): Promise<Country> {
        const country = this.countryRepository.create({
            countryCode,
            countryName,
            emoji,
            continentCode,
        });
        return this.countryRepository.save(country);
    }
}
