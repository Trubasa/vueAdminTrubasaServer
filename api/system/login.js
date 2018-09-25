/**
 * Created by Trubasa 1141521502@qq.com on 2018/9/25.
 */
const express=require('express');
const pretreat=require('../pretreat');
let router=express.Router();

router.get('/',function (req,res) {
    if(req.body.username == 'admin' && req.body.password == '123456'){
        req.session.userName = req.body.username; // 登录成功，设置 session
        var end=api.response();
        end.msg="登陆成功";
        end.state='10000';
        end.data=req.body;
        res.send(JSON.stringify(end));
    }else{
        var end=api.response();
        end.msg="账号名或密码错误！";
        end.state='20000'
        res.send(JSON.stringify(end));
    }
})