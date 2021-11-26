
//获取输入框，span标签和button按钮
var haoma = document.getElementById('haoma');
var code1 = document.getElementById('code1');
var code2 = document.getElementById('code2');
var usename = document.getElementById('usename');
var password = document.getElementById('password');
var password_ = document.getElementById('password_');
var sp1 = document.getElementById('sp1');
var sp2 = document.getElementById('sp2');
var sp3 = document.getElementById('sp3');
var sp4 = document.getElementById('sp4');
var sp5 = document.getElementById('sp5');
var sp6 = document.getElementById('sp6');
var submit = document.getElementById('submit');
//手机号码获得焦点
haoma.onfocus = function () {
    sp1.innerHTML = '请输入手机号码'
    //点击span标签时透明度为1
    sp1.style.opacity = '1'
    //背景图片
    sp1.style.background = 'url(../img/sprite.jpg) no-repeat 5px -3px';
}
//手机号码失去焦点
haoma.onblur = function () {
    sp1.style.background = 'url(../img/sprite.jpg) no-repeat 5px -59px';
    //正则
    reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    //定义变量接受号码输入的值
    var a = haoma.value
    if (reg.test(a) == true) {
        sp1.style.background = 'url(../img/sprite.jpg) no-repeat 5px -33px';
        sp1.innerHTML = '手机号码输入正确'
        return true;
    } else if (a === '') {
        sp1.innerHTML = '手机号码不能为空';
        return false;
    }
    else {
        sp1.innerHTML = '手机号码输入错误'
        return false;
    }
}
code1.onfocus = function () {
    sp2.innerHTML = '请输入图片验证码'
    sp2.style.opacity = '1'
    sp2.style.background = 'url(../img/sprite.jpg) no-repeat 5px -3px';
}
code1.onblur = function () {
    sp2.style.background = 'url(../img/sprite.jpg) no-repeat 5px -59px';
    var b = code1.value
    if (b == 'r2b7') {
        sp2.style.background = 'url(../img/sprite.jpg) no-repeat 5px -33px';
        sp2.innerHTML = '图片验证输入正确'
        return true;
    } else if (b === '') {
        sp2.innerHTML = '图片验证不能为空';
        return false;
    }
    else {
        sp2.innerHTML = '图片验证输入错误'
        return false;
    }
}

code2.onfocus = function () {
    sp3.innerHTML = '请输入验证码'
    sp3.style.opacity = '1'
    sp3.style.background = 'url(../img/sprite.jpg) no-repeat 5px -3px';
}
code2.onblur = function () {
    sp3.style.background = 'url(../img/sprite.jpg) no-repeat 5px -59px';
    var c = code2.value
    reg = /^[a-z0-9]+$/i
    if (reg.test(c) == true) {
        sp3.style.background = 'url(../img/sprite.jpg) no-repeat 5px -33px';
        sp3.innerHTML = '验证码输入正确'
        return true;
    } else if (c === '') {
        sp3.innerHTML = '验证码不能为空';
        return false;
    }
    else {
        sp3.innerHTML = '验证码输入错误'
        return false;
    }
}
usename.onfocus = function () {
    sp4.innerHTML = '请输入用户名'
    sp4.style.opacity = '1'
    sp4.style.background = 'url(../img/sprite.jpg) no-repeat 5px -3px';
}
usename.onblur = function () {
    sp4.style.background = 'url(../img/sprite.jpg) no-repeat 5px -59px';
    var d = usename.value
    reg = /^[a-z0-9]+$/i;
    if (reg.test(d) == true) {
        sp4.style.background = 'url(../img/sprite.jpg) no-repeat 5px -33px';
        sp4.innerHTML = '用户名输入正确'
        return true;
    } else if (d === '') {
        sp4.innerHTML = '用户名不能为空';
        return false;
    }
    else {
        sp4.innerHTML = '用户名码格式错误'
        return false;
    }
}
//密码  获取焦点
password.onfocus = function () {
    sp5.innerHTML = '长度在6-12个字符';
    sp5.style.opacity = '1';
    sp5.style.background = 'url(../img/sprite.jpg) no-repeat 5px -3px';
}
//密码 失去焦点
password.onblur = function () {

    sp5.style.background = 'url(../img/sprite.jpg) no-repeat 5px -59px';
    reg = /\w{6,12}/;
    var e = password.value
    if (reg.test(e) == true) {
        sp5.style.background = 'url(../img/sprite.jpg) no-repeat 5px -33px';
        sp5.innerHTML = '密码输入正确'
        return true;
    }
    else if (e === '') {
        sp5.innerHTML = '密码不能为空';
        return false;
    } else {

        sp5.innerHTML = '密码格式错误'
        return false;
    }
}
//重复密码  获取焦点
password_.onfocus = function () {
    sp6.innerHTML = '请输入相同密码';
    sp6.style.opacity = '1';
    sp6.style.background = 'url(../img/sprite.jpg) no-repeat 5px -3px';
}
//重复密码 失去焦点
password_.onblur = function () {

    sp6.style.background = 'url(../img/sprite.jpg) no-repeat 5px -59px';

    reg = /\w{6,12}/;
    var f = password_.value
    if (f === '') {
        sp6.innerHTML = '密码不能为空';
        return false;
    }
    else if (password.value === password_.value) {
        sp6.style.background = 'url(../img/sprite.jpg) no-repeat 5px -33px';
        sp6.innerHTML = '密码输入正确'
        return true;
    } else {
        sp6.innerHTML = '两次密码不一致'
        return false;
    }
}
function subt() {

    if (haoma.onblur() && code1.onblur() && code2.onblur() && usename.onblur() && password.onblur() && password_.onblur()) {

        haoma.value = '';
        code1.value = '';
        code2.value = '';
        usename.value = '';
        password.value = '';
        password_.value = '';
        alert('注册成功')
        submit.href = './login.html';
    }
}