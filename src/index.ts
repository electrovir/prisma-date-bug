import {PrismaBetterSQLite3} from '@prisma/adapter-better-sqlite3';
import {PrismaClient} from './generated/index';
import {databasePath, readUserDirectly} from './sqlite';

const createdUser = await new PrismaClient({
        adapter: new PrismaBetterSQLite3({
            url: databasePath
        })
    }).user.create({data: {}})
    
console.log('from PrismaClient:');
console.log(createdUser);
console.log('\nfrom SQLite:');
console.log(readUserDirectly());

if (!(createdUser.createdAt instanceof Date) && !Reflect.ownKeys(createdUser.createdAt).length) {
    throw new Error('createdAt is empty');
}