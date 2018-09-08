/**
 * Created by Trubasa 1141521502@qq.com on 2018/9/7.
 */
const path=require('path')
const express=require('express');
const bodyParser=require('body-parser');
const serverConfig=require(path.resolve('./config/serverConfig.js'));
let api=require(path.resolve('./api/index.js'));
let app=express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/userInfo',function (req,res) {
    var end=api.response();
    end.data={use:'maik',age:'18'}
    setTimeout(()=>{
        res.send(JSON.stringify(end))
    },1000)
})
app.get('/userList',function (req,res) {
    var end=api.response();
    end.data={use:'maik',age:'18'}
    setTimeout(()=>{
        res.send(JSON.stringify(end))
    },500)
})

app.post('/login',function (req,res) {

    var end=api.response();
    end.msg="登陆成功";
    end.data=req.body
    res.send(JSON.stringify(end));
})

app.listen(serverConfig.port,function () {
    console.log('server is running at '+serverConfig.port);
})