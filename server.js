import fs from 'fs';
import { createServer } from 'https';
import next from 'next';
import { parse } from 'url';

const app = next({ dev: false });
const handle = app.getRequestHandler();

const preparedApp = app.prepare();

const options = {
    key: fs.readFileSync('/etc/certs/ssl.key'),
    cert: fs.readFileSync('/etc/certs/ssl.crt'),
};
preparedApp.then(() => {
    createServer(options, (req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(443, (err) => {
        if (err) {
            throw err;
        }
    });
});
