/**
 * Created by Trubasa 1141521502@qq.com on 2018/9/7.
 */
function response() {
    return {
        state:'10000',   // 请求的状态 10000 为成功 不是该状态的时候前端会弹出错误提示
        data:null,
        msg:'',
    }
}
module.exports={
    response
}