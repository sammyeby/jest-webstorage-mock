
interface IStorage {
    [key: string]: string;
}

const storageMock = () => {
    let store: IStorage = {};

    return {
        getItem: jest.fn().mockImplementation((key: string): string | null => {
            return store[key] || null
        }),
        setItem: jest.fn().mockImplementation((key: string, value: string): void => {
            store[key] = value;
        }),
        removeItem: jest.fn().mockImplementation((key: string): void => {
            delete store[key];
        }),
        clear: jest.fn().mockImplementation((): void => {
            store = {}
        })
    }
};

Object.defineProperty(window, 'localStorage', {
    value: storageMock
});


Object.defineProperty(window, 'sessionStorage', {
    value: storageMock
});