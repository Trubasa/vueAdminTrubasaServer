/**
 * Created by Trubasa 1141521502@qq.com on 2018/9/7.
 */
const path=require('path')
const express=require('express');
const session=require('express-session');
const bodyParser=require('body-parser');
const serverConfig=require(path.resolve('./config/serverConfig.js'));
let api=require(path.resolve('./api/api.js'));
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

let router=express.Router();
//全局处理
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
app.use('*',router);

// 引入接口路由 开始
const systemRouter=require('./api/system')
app.use('/system',systemRouter)
const userRouter=require('./api/user')
app.use('/user',userRouter)
// 引入接口路由 结束


app.get('/server',function (req,res) {
    console.log('get server');
    if(req.session.userName){  //判断session 状态，如果有效，则返回主页，否则转到登录页面
        /*res.render('home',{username : req.session.userName});*/
        console.log('has session');
        res.send(api.response())
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
    },1000)
})
app.get('/userList',function (req,res) {
    var end=api.response();
    end.data={use:'maik',age:'18'}
    setTimeout(()=>{
        res.send(JSON.stringify(end))
    },3000)
})



app.listen(serverConfig.port,function () {
    console.log('server is running at '+serverConfig.port);
})