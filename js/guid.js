    function show() {
            var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
                ajax_.open('get','http://192.168.31.5:3000/guid/hot',true);
                ajax_.send();
    
                ajax_.onreadystatechange = function() {
                if(ajax_.readyState == 4) {
                    if(ajax_.status == 200) {
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
            for (var i = 0; i < 12;i++) {
                console.log(data[i]);
                str += '<li>';
                str += '<a>';
                str += '<img src="'+data[i].img+'" width="220px" height="130px">';
                str += '<div>';
                str += '<p class="name">'+data[i].text+'</p >';
                str += '</div>';
                str += '<div class = "center-icon">';
                str += '<span class="xin">'+data[i].like+'</span>';
                str += '<span class="look">'+data[i].words+'</span>';
                str += '</div>';
                str += '</a>';
                str += '</li>';
            }
            var ul = document.getElementById('list');
            ul.innerHTML = str;
            }
        show();
    