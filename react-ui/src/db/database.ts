import { openDB, type DBSchema } from 'idb';

interface MyReduxDB extends DBSchema {
    'redux-state': {
        key: string;
        value: any;
    };
}

const DB_NAME = 'react-ui-db';
const STORE_NAME = 'redux-state';

export const initDB = async () => {
    return openDB<MyReduxDB>(DB_NAME, 1, {
        upgrade(db) {
            // Create a store of objects
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        },
    });
};

export const saveState = async (state: any) => {
    const db = await initDB();
    await db.put(STORE_NAME, state, 'playground'); // specific key for playground slice
};

export const loadState = async () => {
    const db = await initDB();
    const state = await db.get(STORE_NAME, 'playground');
    return state;
};
