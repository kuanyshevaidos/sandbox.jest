const data = 'some data';

export const fetchDataViaCallback = (cb: (data: string) => void) => {
    setTimeout(function() {
        cb(data);
    }, 5000);
};

export const fetchDataViaPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(data);
        }, 5000);
    })
};

export const fetchErrorViaPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            reject('some data');
        }, 5000);
    })
};
