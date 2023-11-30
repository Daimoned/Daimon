import { json } from '@sveltejs/kit';
import { writeFile } from 'fs/promises';

export async function POST(request) {
    const deeta = await request.request.json()
    console.log(deeta)
    return json('200');
};
