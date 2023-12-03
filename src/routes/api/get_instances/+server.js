import { json } from '@sveltejs/kit';
import * as fs from 'fs';

export async function GET(request) {
    try {
        const profiles_directory = process.cwd() + "/profiles";
        var profiles = [];
        for (const file of fs.readdirSync(profiles_directory)) {
            if (file.endsWith(".json")) {
                profiles.push(JSON.parse(fs.readFileSync(profiles_directory + "/" + file, 'utf8')));
            }
        }
        return json(profiles);
    } catch (err) {
        if (err.code === 'ENOENT') {
            fs.mkdirSync(process.cwd() + "/profiles");
            return json([]);
        }
    }
}