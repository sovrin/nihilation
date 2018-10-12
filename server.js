// Nihilation
// 11.11.18
//

const express = require('express');
const next = require('next');
const debug = require('debug');
const dotenv = require('dotenv');

dotenv.config();
const d = debug('N');
const port = process.env.PORT;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();
        server.use(require('./routes'));

        server.get('*', (req, res) => handle(req, res));

        server.listen(port, (err) => {
            if (err) throw err;

            d(`> Ready on http://localhost:${port}`);
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    })
;
