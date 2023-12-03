import {PrismaClient} from '@prisma/client';
import { json } from '@sveltejs/kit';

export async function GET(request) {
    const database = new PrismaClient();
    const c = await database.instances.findMany()    
    /*
    P(t) = c/1+ae^-b5

P(o) = c/1+a
 */
    return json(c);
}