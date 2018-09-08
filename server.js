/**
 * Created by Trubasa 1141521502@qq.com on 2018/9/7.
 */
const path=require('path')
const express=require('express');
const session=require('express-session');
const bodyParser=require('body-parser');
const serverConfig=require(path.resolve('./config/serverConfig.js'));
let api=require(path.resolve('./api/index.js'));
let app=express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//使用session 中间件
app.use(session({
    secret :  'secret', // 对session id 相关的cookie 进行签名
    resave : true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
    },
}));

/*app.get('*',function (req,res) {
    console.log('get *');
})*/

app.get('/server',function (req,res) {
    console.log('get server');
    if(req.session.userName){  //判断session 状态，如果有效，则返回主页，否则转到登录页面
        /*res.render('home',{username : req.session.userName});*/
        console.log('has session');
    }else{
        res.redirect('/index.html#/login');
        console.log('no session');
    }
})

app.get('/',function (req,res) {
    console.log('hello');
    res.redirect('/index.html#/main')
})

app.get('/userInfo',function (req,res) {
    var end=api.response();
    end.data={use:'maik',age:'18'}
    setTimeout(()=>{
        res.send(JSON.stringify(end))
    },0)
})
app.get('/userList',function (req,res) {
    var end=api.response();
    end.data={use:'maik',age:'18'}
    setTimeout(()=>{
        res.send(JSON.stringify(end))
    },0)
})

app.post('/login',function (req,res) {

    if(req.body.username == 'admin' && req.body.password == '123456'){
        req.session.userName = req.body.username; // 登录成功，设置 session
        var end=api.response();
        end.msg="登陆成功";
        end.data=req.body
        res.send(JSON.stringify(end));
    }else{
        var end=api.response();
        end.msg="账号名或密码错误！";
        end.state='20000'
        res.send(JSON.stringify(end));
    }


})

app.listen(serverConfig.port,function () {
    console.log('server is running at '+serverConfig.port);
})