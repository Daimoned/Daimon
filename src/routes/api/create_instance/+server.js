import { json } from '@sveltejs/kit';
import { writeFile } from 'fs/promises';
import * as fs from 'fs';

export async function POST(request) {
    try {
        const deeta = await request.request.json()
        if (deeta.image == '') {
            const img_path = '/images/instances/default.webp'
            const r_data = {
                name: deeta.name,
                description: deeta.description,
                background_image: img_path,
                framework: deeta.type,
                version: deeta.version,
            }
            fs.writeFileSync(process.cwd() + `/profiles/${deeta.name}.json`, JSON.stringify(r_data));
        } else {
            let base64Image = deeta.image.split(';base64,')
            if (base64Image[0] == 'data:application/octet-stream') {
                const img_path = '/images/instances/default.webp'
                const r_data = {
                    name: deeta.name,
                    description: deeta.description,
                    background_image: img_path,
                    framework: deeta.type,
                    version: deeta.version,
                }
            }
            try {
                await writeFile( process.cwd() + `/static/images/instances/${deeta.name}.webp`,base64Image[1], {encoding: 'base64'});
            } catch (err) {
                if (err.code === 'ENOENT') {
                    fs.mkdirSync(process.cwd() + "/static/images/instances");
                    await writeFile( process.cwd() + `/static/images/instances/${deeta.name}.webp`,base64Image[1], {encoding: 'base64'});
                }
            }
            const img_path = `/images/instances/${deeta.name}.webp`
            const r_data = {
                name: deeta.name,
                description: deeta.description,
                background_image: img_path,
                framework: deeta.type,
                version: deeta.version,
            }
            fs.writeFileSync(process.cwd() + `/profiles/${deeta.name}.json`, JSON.stringify(r_data));
        }
        return json(200)
    } catch (err) {
        if (err.code === 'ENOENT') {
            fs.mkdirSync(process.cwd() + "/profiles");
            const deeta = await request.request.json()
            if (deeta.image == '') {
                const img_path = '/images/instances/default.webp'
                const r_data = {
                    name: deeta.name,
                    description: deeta.description,
                    background_image: img_path,
                    framework: deeta.type,
                    version: deeta.version,
                }
                fs.writeFileSync(process.cwd() + `/profiles/${deeta.name}.json`, JSON.stringify(r_data));
            } else {
                let base64Image = deeta.image.split(';base64,')
                if (base64Image[0] == 'data:application/octet-stream') {
                    const img_path = '/images/instances/default.webp'
                    const r_data = {
                        name: deeta.name,
                        description: deeta.description,
                        background_image: img_path,
                        framework: deeta.type,
                        version: deeta.version,
                    }
                }
                await writeFile( process.cwd() + `/static/images/instances/${deeta.name}.webp`,base64Image[1], {encoding: 'base64'});
                const img_path = `/images/instances/${deeta.name}.webp`
                const r_data = {
                    name: deeta.name,
                    description: deeta.description,
                    background_image: img_path,
                    framework: deeta.type,
                    version: deeta.version,
                }
                fs.writeFileSync(process.cwd() + `/profiles/${deeta.name}.json`, JSON.stringify(r_data));    
                return json(200)
            }
        }        
    }
};
