    var cat;
    var filename = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);
    console.log(filename);
    if (filename == "show_politics.html")
        cat = 3;
    else if (filename == "show_economy.html")
        cat = 4;
    else if (filename == "show_society.html")
        cat = 5;
    else if (filename == "show_world.html")
        cat = 6;
    else if (filename == "show_opinion.html")
        cat = 7;
    else if (filename == "show_IT.html")
        cat = 8;
    else if (filename == "show_culture.html")
        cat = 9;
    else if (filename == "show_etc.html")
        cat = 10;
    var data_url = 'null'; //You must type server URL for transmitting.
    $.getJSON(data_url, print_list);
    function print_list(categorized) {
        var tmp = false;
        console.log(categorized);
        for (var i = 0 ; i < categorized.length ; i++) {
            if (categorized[i].category == cat) {
                str = document.getElementById("show_text");
                str.innerHTML += "<a href=\"" + categorized[i].url + "\" target=_blank style=\"font-weight: bold; color: black; text-decoration: none; font-size: medium\">" + categorized[i].title + "</a>";
                str.innerHTML += '<br><br/>';
            }
        }
    }