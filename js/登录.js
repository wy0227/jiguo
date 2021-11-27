var user=document.getElementById('user');
var pass=document.getElementById('pass');
var index_=document.getElementById('index_');
function login(){
    var a=user.value;
    var b=pass.value;
    if(a=='159384'&& b=='159384'){
        alert('登录成功');
        index_.href = './index.html';
        
    }else{
       alert('账号或密码输入错误')
    }
    
}
