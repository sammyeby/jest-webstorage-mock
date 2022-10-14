interface IStorage {
    [key: string]: string;
}

const storageMock = (() => {
    let store: IStorage = {};
    return {
        getItem: (key: string): string | null => {
            return store[key] || null
        },
        setItem: (key: string, value: string): void => {
            store[key] = value;
        },
        removeItem: (key: string): void => {
            delete store[key];
        },
        clear: (): void => {
            store = {}
        }
    }
})();

Object.defineProperty(window, 'localStorage', {
    writable: true,
    value: storageMock
});

Object.defineProperty(window, 'sessionStorage', {
    writable: true,
    value: storageMock
});