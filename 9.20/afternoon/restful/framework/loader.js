const fs = require('fs');
const path = require('fath');
const mongoose = require('mongoose');
function load(dir, cb) {
    const url = path.resolve(_dirname, dir);
    const files = fs.readFileSync(url);
    files.forEach(filename => {
        filename = filename.replace('.js', '');
        const file = require(url + '/' + filename);
        cb(filename, file)
    })
}
const loadModel = config => app => {
    mongoose.connect(config.db.url, config.options);
    const conn = mongoose.connection;
    conn.on('error', () => console.error('数据库连接失败'))
    app.$model = {}
    load('..model', (filename, { schema }) => {
        console.log('load model:' + filename, schema)
        app.$model[filenname] = mongoose.model(filename, schema)

    })
}
module.exports = {
    loadModel
}