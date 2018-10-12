const database = require('../services/database');
const {resolve} = require('path');
const file = resolve(__dirname, '..',  'cache', 'member.json');

(async () => {

    const test = get('sat');

    set("testo2", "wat");

    save();
    console.info(test);

})();

