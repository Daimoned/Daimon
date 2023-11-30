import { json } from '@sveltejs/kit';
import { writeFile } from 'fs/promises';

export async function POST(request) {
    const deeta = await request.request.json()
    if (deeta.image == '') {
        const img_path = '/images/instances/default.webp'
        const r_data = {
            name: deeta.name,
            description: deeta.description,
            image: img_path,
            type: deeta.type,
            version: deeta.version,
        }
    } else {
        let base64Image = deeta.image.split(';base64,')
        console.log(base64Image[0])
        await writeFile( process.cwd() + `/static/images/instances/${deeta.name}.webp`,base64Image[1], {encoding: 'base64'});
        const img_path = `/images/instances/${deeta.name}.webp`
        const r_data = {
            name: deeta.name,
            description: deeta.description,
            image: img_path,
            type: deeta.type,
            version: deeta.version,
        }
    }
    return json(200)
};
