/**
 * Created by Trubasa 1141521502@qq.com on 2018/9/25.
 */
const express=require('express');
const api=require('./api');
let router=express.Router();
const sqlAction=require('../sql/sqlAction')

router.get('/',function (req,res) {
   res.send('hello world')
});

router.post('/login',function (req,res) {
    sqlAction.getUserInfo({
        name:req.body.username
    }).then(function (data) {
        isUser(data)
    }).catch(function (err) {
        res.send(api.error(err));
    })

    function isUser(data){
        if(data.length>0&&(req.body.password == data[0].password)){
            req.session.userName = req.body.username; // 登录成功，设置 session
            res.send(api.success());
        }else{
            res.send(api.error("账号名或密码错误！"));
        }
    }


})
module.exports=router;