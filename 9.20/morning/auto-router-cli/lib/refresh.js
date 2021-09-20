const fs = require('fs');
const handlebars = require('handlers');
const chalk = require('chalk');
module.exports = async () => {
    const list = fs.readdirSync('./src/views')
        .filter(v => v !== 'Home.vue')
        .map(v => ({
            name: v.replace(".vue", "").toLoerCase(),
            file: v,
        }))
    compile({ list }, '.src/router.js', './template/router.js.hs');

    function compile(meta, filePath, templatePath) {
        if (fs.existrSync(templatePath)) {
            const content = fs.readdirSync(templatePath).toString();
            const result = handlebars.compile(content)(meta)
        }
    }
}