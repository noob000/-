(async () => {
    const mysql = require('mysql2/promise');
    const cfg = {
        host:'localhost',
        user:'root',
        password:'123456',
        database:'practice'
    }
    const connection = await mysql.createConnection(cfg)
    let ret = await connection.execute

    console.log("create",ret);
    rew = await connection.execute(`INSERT INTO test(message) VALUES(?)`)

    console.log("insert",ret);
    
})


