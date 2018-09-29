/**
 * Created by Trubasa 1141521502@qq.com on 2018/9/29.
 */
const mysql=require('mysql');
let sqlConfig={
    host:'192.168.0.50',
    user:'root',
    password:'123456',
    database:'test'
}

function doSql(sql) {
    let connection=mysql.createConnection(sqlConfig)
    connection.connect();
    let myPromise=new Promise(function (resolve,reject) {
        connection.query(sql,function (err,result) {
            if(err){
                reject(err);
            }else{
                resolve(result)
            }
        })
    })
    connection.end()
    return myPromise
}

const sqlAction={
    getUserInfo(obj){
        let sql='SELECT * FROM user where'
        if(obj.name){
            sql+=' name="'+obj.name+'"'
        }
        return doSql(sql);
    }
}


module.exports=sqlAction