import Database from 'better-sqlite3';
import {resolve} from 'node:path';

export const databasePath = resolve(import.meta.dirname, '..', '.not-committed', 'dev.db');

export function readUserDirectly() {
    const database = new Database(databasePath)
    const users = database.prepare('SELECT * FROM user').all();
    return users;
}