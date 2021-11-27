function show() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://192.168.31.5:3000/report/hot', true);
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
    for (var i = 0; i < 12; i++) {
        str += '<img src="' + data[i].img + '">';
        str += '<div class="wen">';
        str += '<p>';
        str += data[i].text;
        str += '</p>';
        str += '<span class="name">'
        str += data[i].uName;
        str += '</span>'
        str += '<span class="time">'
        str += data[i].endTime;
        str += '</span>'
        str += '<span class="zan_">'
        str += data[i].num;
        str += '</span>'
        str += '<span class="like_">'
        str += data[i].apply;
        str += '</span>'
        str += '</div>' 
    }
    var div = document.getElementsByClassName('main_')[0];
    div.innerHTML = str;

}
show()