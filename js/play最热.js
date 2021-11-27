show();
function show() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://192.168.31.5:3000/play/new', true);
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
    for (var i = 0; i < 4; i++) {
       for(var j=0;j<4;j++){
        str += '<li>';
        str += '<img src="' + data[i][j].img + '" width="220px" height="130px">';
        str += '<p>' + data[i][j].text + '</p>';
        str += '<p class="li-p">' + data[i][j].description + '</p >';
        str += '<div class = "center-icon">';
        str += '<span class="xin">' + data[i][j].words + '</span>';
        str += '<span class="look">' + data[i][j].like + '</span>';
        str += '</div>';
        str += '</li>';
       }
    }


    var ul = document.getElementById('list');
    ul.innerHTML = str;
}





