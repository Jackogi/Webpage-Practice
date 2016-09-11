
//自动返回顶部
var clientHeight = document.documentElement.clientHeight;
var obtn = document.getElementById('gotop');
var otime = null;
//第二屏时显示按钮
window.onscroll = function(){
    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(osTop >= clientHeight){
        obtn.style.display = '';
    }
    else{
        obtn.style.display = 'none';
    }
}
obtn.onclick = function(){
    //设置定时器
    otime = setInterval(function(){
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        var ospeed = osTop / 3;
        document.body.scrollTop = document.documentElement.scrollTop = osTop - ospeed;
        //清除定时器
        if(osTop == 0){
            clearInterval(otime);
        }
    },50); 
}

//输入不能为空 & 查询系统正在维护 
function JTrim(s){
    return s.replace(/\s+/g, "");
}

var txtCx = document.getElementById('txtCx');
var btnCx = document.getElementById('btnCx');
btnCx.onclick = function(){
    if(JTrim(txtCx.value) == ''){
        alert('请输入需要查询的企业名称/法人名称');
        return false;
    }
    else{
        alert('非常抱歉，系统正在维护中！');
        return false;
    } 
}
