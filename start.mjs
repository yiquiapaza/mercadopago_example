import app from './app.mjs';
import fs from 'fs';
import https from 'https';

const csr = fs.readFileSync('./domain.crt');
const key = fs.readFileSync('./domain.key');

https.createServer({
    cert: csr,
    key: key,
}, app).listen(3000, () => {
    console.log(`Express is running on port 3000`);
});
