 var t = document.getElementById("submit");
var Data;

t.addEventListener('click', function () {
    var transmit_num = 0;
    for (var i = 0 ; i < num.Value ; i++) {
        var string = new String('chk_' + i);
        var if_checked = document.getElementById(string);
        if (if_checked.checked) {
            transmit_num++;
            Data = { "url": Url_info[i].url, "title": Url_info[i].name };
            $.ajax({
                url: 'null', //You must type server URL for transmitting.
                type: 'POST',
                data: JSON.stringify(Data),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                async: false
            });
        }
    }
    alert(transmit_num + " URLs transmitted!");
});

