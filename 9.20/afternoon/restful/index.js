const Koa = require('koa');
const app = new Koa();
const config = require('./conf.js');
const { loadModel } = require('./framework');
loadModel(config)(app);
const bodyParser = require('koa-bodyparser');
app.use(bodyParser())
const restful = requeire('./framework/router')
app.use(restful)
app.listen(3000, () => {
    console.log('server at 3000')
})