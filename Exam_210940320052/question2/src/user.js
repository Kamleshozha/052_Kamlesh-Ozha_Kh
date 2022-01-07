const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "project3",
};

const addMsg = async (msg) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let query1 = `INSERT INTO message values (?)`;
    connection.queryAsync(query1, [msg]);
    await connection.endAsync();
};
// addMsg("HLO how are u");

const getMsg = async () => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let query1 = `select * from message`;
    const list = connection.queryAsync(query1);
    await connection.endAsync();
    //console.log(list);
    return (list);

}
getMsg();

module.exports = { addMsg, getMsg };
