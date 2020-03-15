jest.mock('./feature-resolver');
import { resolveFeature } from './feature-resolver';

jest.mock('./packages-source');
import { PackagesSource } from './packages-source';
import { Packages } from './packages';

describe('packages class test', () => {
    test('discount should be true in packages object in case there is enabled discount feature', async () => {
        // TODO: how to awoid using as jest.Mock ?
        (resolveFeature as jest.Mock).mockReturnValueOnce(new Promise(resolve => resolve(true)));
        (PackagesSource.get as jest.Mock).mockReturnValueOnce(new Promise(resolve => resolve({
            'simple': 50,
            'premium': 200
        })));

        const result = await Packages.get();

        expect(result).toEqual({
            simple: {
                discountAvailable: true,
                price: 50
            },
            premium: {
                discountAvailable: true,
                price: 200
            }
        });

    });

    test('discount should be false in packages object in case there is disabled discount feature', async () => {
        (resolveFeature as jest.Mock).mockReturnValueOnce(new Promise(resolve => resolve(false)));
        (PackagesSource.get as jest.Mock).mockReturnValueOnce(new Promise(resolve => resolve({
            'simple': 599,
            'vip': 999
        })));

        const result = await Packages.get();

        expect(result).toEqual({
            simple: {
                discountAvailable: false,
                price: 599
            },
            vip: {
                discountAvailable: false,
                price: 999
            }
        })
    });

});