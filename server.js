/**
 * Created by Trubasa 1141521502@qq.com on 2018/9/7.
 */
const path=require('path')
const express=require('express');
const serverConfig=require(path.resolve('./config/serverConfig.js'));
let api=require(path.resolve('./api/index.js'));
let app=express();

app.get('/userInfo',function (req,res) {
    var end=api.response();
    end.data=[{use:'maik',age:'18'}]
    setTimeout(()=>{
        res.send(JSON.stringify(end))
    },2000)
})
app.get('/userList',function (req,res) {
    var end=api.response();
    end.data=[{use:'maik',age:'18'}]
    setTimeout(()=>{
        res.send(JSON.stringify(end))
    },1000)
})

app.post('/login',function (req,res) {
    var end=api.response();
    end.msg="登陆成功"
    res.send(JSON.stringify(end));
})

app.listen(serverConfig.port,function () {
    console.log('server is running at '+serverConfig.port);
})