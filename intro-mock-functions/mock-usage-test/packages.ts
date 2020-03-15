import { resolveFeature } from './feature-resolver';
import { PackagesSource } from './packages-source';

export class Packages {
    static async get() {
        const discountAvailable = await resolveFeature('discount-available');
        const packages = await PackagesSource.get();

        return Object.keys(packages)
            .reduce((packagesWithDiscount, packageName) => ({
                ...packagesWithDiscount,
                [packageName]: {
                    discountAvailable: discountAvailable,
                    price: packages[packageName]
                }
            }), {})
    }
}