/**
 * Created by Trubasa 1141521502@qq.com on 2018/9/29.
 */
const express=require('express');
const api=require('./api')
let sqlAction=require('../sql/sqlAction')

let router=express.Router();

router.get('/:name',function (req,res) {
    let name=req.params.name;
    sqlAction.getUserInfo().then(function (data) {
        res.send(api.success(data));
    }).catch(function (err) {
        res.send(api.error(err))
    });
    /*connection.query('SELECT * FROM user where name="'+name+'"',function (err,result) {
        if(err){
            res.send(api.error(err))
        }else{
            res.send(api.success(result));
        }
    })*/

})

module.exports=router;