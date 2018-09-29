/**
 * Created by Trubasa 1141521502@qq.com on 2018/9/29.
 */
const mysql=require('mysql');
let connection=mysql.createConnection({
    host:'192.168.0.50',
    user:'root',
    password:'123456',
    database:'test'
})


/*connection.connect();
connection.end();
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});*/

module.exports=connection;