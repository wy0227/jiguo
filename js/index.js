function fn(){
    var now=new Date();
    var today=new Date(2021,11,29);
    var cha=today-now;
    var a=Math.floor(cha/1000/60/60/24);
    var b=Math.floor(cha/1000/60/60%24);
    var c=Math.floor(cha/1000/60%60);
    var d=Math.floor(cha/1000%60);
   document.getElementsByClassName('trying')[0].innerHTML='申请时间剩余：'+a+'天'+b+'时'+c+'分'+d+'秒';
}
setInterval(fn,1000)

function show() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://192.168.31.5:3000/report/new', true)
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                showData(data);
            }
        } else {
            console.log('失败');
        }
    }
}
function showData(data) {
    var str = '';
    for (var i = 0; i < 8; i++) {
        str += '<li>';
        str += '<img src="' + data[i].img + '">';
        str += '<div class="wenzi">';
        str += '<p>';
        str += data[i].text;
        str += '</p>';
        str += '<p>';
        str += data[i].uName;
        str += '</p>';
        str += '</div>';
        str += '<div class="zan">';
        str += '<span>'
        str += data[i].num;
        str += '</span>'
        str += '<span>'
        str += data[i].num;
        str += '</span>'
        str += '</div>';
        str += '</li>';
    }
    var ul = document.getElementsByClassName('list')[0];
    ul.innerHTML = str;

    var str1 = '';
    for (var i = 0; i < 4; i++) {
        str1 += '<li>';
        str1 += '<img src="' + data[i].img + '">';
        str1 += '<div class="wenzi">';
        str1 += '<p>';
        str1 += data[i].text;
        str1 += '</p>';
        str1 += '</div>';
        str1 += '<div class="zan">';
        str1 += '<span>'
        str1 += data[i].num;
        str1 += '</span>'
        str1 += '<span>'
        str1 += data[i].num;
        str1 += '</span>'
        str1 += '</div>';
        str1 += '</li>';
    }
    var u2= document.getElementsByClassName('list')[1];
    u2.innerHTML = str1;

    var str2 = '';
    for (var i = 0; i < 12; i++) {
        str2 += '<li>';
        str2 += '<img src="' + data[i].img + '">';
        str2 += '<div class="wenzi">';
        str2 += '<p>';
        str2 += data[i].text;
        str2 += '</p>';
        str2 += '<p>';
        str2 += data[i].totalnum;
        str2 += '</p>';
        str2 += '</div>';
        str2 += '<div class="zan">';
        str2 += '<span>'
        str2 += data[i].num;
        str2 += '</span>'
        str2 += '<span>'
        str2 += data[i].num;
        str2 += '</span>'
        str2 += '</div>';
        str2 += '</li>';
    }
    var u3 = document.getElementsByClassName('list')[2];
    u3.innerHTML = str2;
}
