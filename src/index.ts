import {PrismaBetterSQLite3} from '@prisma/adapter-better-sqlite3';
import {PrismaClient} from './generated/index';
import {databasePath, readUserDirectly} from './sqlite';
import {Decimal} from '@prisma/client/runtime/client';

const createdUser = await new PrismaClient({
        adapter: new PrismaBetterSQLite3({
            url: databasePath
        })
    }).user.create({data: {
        value: 42
    }})
    
console.log('from PrismaClient:');
console.log(createdUser);
console.log('\nfrom SQLite:');
console.log(readUserDirectly());

if (!(createdUser.createdAt instanceof Date) && !Reflect.ownKeys(createdUser.createdAt).length) {
    throw new Error('createdAt is empty');
} else if (!(createdUser.value instanceof Decimal)) {
    throw new Error('Decimal still a number')
}