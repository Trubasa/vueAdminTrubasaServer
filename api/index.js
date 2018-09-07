/**
 * Created by Trubasa 1141521502@qq.com on 2018/9/7.
 */
function response() {
    return {
        state:'10000',   // 请求的状态 10000 为成功 不是该状态的时候前端会弹出错误提示
        data:null,
        msg:'',
        show:2,  //侵短弹框的样式类型 0 不显示 1 default 2 info 3 warning 4 error
    }
}
module.exports={
    response
}