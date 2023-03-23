import fs from 'fs';

export default function getFiles(){
    const files = fs.readdirSync('./public/files');
    return files;
}
