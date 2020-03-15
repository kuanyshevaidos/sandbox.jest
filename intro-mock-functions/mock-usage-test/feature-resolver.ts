const config = require('./config.json');

export const resolveFeature = (featureName: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        try {
            if (config.features.has(featureName)) {
                return resolve(!!config.reatures[featureName]);
            }

            throw new Error('Feature does not exist');
        } catch(e) {
            return reject(e);
        }
    });
};