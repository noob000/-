//打印欢迎界面
const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const chalk = require('chalk');
const log = content => console.log(chalk.green(content));
const { clone } = require('./download');
const open  = require('open');
const spawn = async (...args) => {
    const { spawn, spawnSync } = require('child_process');
    return new Promise(resolve => {
        const proc = spawn(...args)
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr)
        proc.on('close', () => {
            resolve()
        })
    })
}
module.exports = async name => {
    clear();
    const data = await figlet('noob welcome');
    log(data)
    log('create' + name);
    await clone('github:su37josephxia/vue-template', name)
    log('install dependencies');
    await spawn('npm', ['install'], { cwd: `./${name}` })
    log(chalk.yellow(`
    安装完成:
    to get start:
    =====================
       cd ${name}
       npm run serve
    =====================
                     `))
    open('http://localhost:8080');
    await spawn('npm',['run','serve'] ,{ cwd: `./${name}` })

}