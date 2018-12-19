// Nihilation
// 11.11.18
//

const express = require('express');
const next = require('next');
const debug = require('debug');
const compression = require('compression');
const bodyParser = require('body-parser');
const {config: parseEnv} = require('dotenv');
const {PORT} = require('./config');

parseEnv();
const d = debug('N');
const port = PORT || process.env.PORT;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();
        server.use(compression());
        server.use(bodyParser.json());
        server.use(require('./routes'));
        server.use('/static', express.static('static'));

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
