//打印欢迎界面
const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const chalk = require('chalk');
const log = content => console.log(chalk.green(content));
const {clone} = require('./download');
const spawn =async function(){
    
}
module.exports = async name => {
    clear();
    const data = await figlet('noob welcome');
    log(data)
    log('create'+name);
    await clone('github:su37josephxia/vue-template',name)
    log('install depend');

}