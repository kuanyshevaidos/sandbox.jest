const packages = {
    'simple': 10,
    'premium': 30
};

export class PackagesSource {
    static get(): Promise<{[key: string]: number}> {
        return new Promise((resolve) => {
            resolve(packages);
        })
    }
}