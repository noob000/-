

/**fs.readFile('./config.js',(err,data)=>{
    if(err) throw err;
    console.log(data)
})**/
(async () => {
    const fs = require('fs');
    const { promisify } = require('util');
    const readFile = promisify(fs.readFile);
    const data = await readFile('./config.js');
    console.log(data.toString())
})()
