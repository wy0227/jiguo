function show() {
            var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
                ajax_.open('get','http://192.168.31.5:3000/useing/public',true);
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
                str += '<img src="'+data[i].img+'" width="220px" height="130px">';
                str += '<h2>'+data[i].text+'</h2>';
                str += '<div class = "jg">'+data[i].totalnum+'</div>';
                str += '<div class = "sl">'+data[i].num+'台</div>';
                str += '<div class="sq"><span>'+data[i].apply+'</span>申请</div>';
                str += '<p>'+data[i].info_ty+'</p>';
                str += '</li>';
            }
            var ul = document.getElementById('list');
            ul.innerHTML = str;
            }
        show();
    


        