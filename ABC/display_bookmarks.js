//const file_location = chrome.runtime.getURL("/../../AppData/Local/Google/Chrome/User Data/Default/Bookmarks");

var num = { Value: 0 };
function url_info() {
    var name = "";
    var category = "";
    var url = "";
}
chrome.bookmarks.getTree(function (itemTree) {
    itemTree.forEach(function (item) {
        processNode(item);
    });
});
var Url_info = new Array();

function processNode(node, i) {
    if (node.children) {
        node.children.forEach(function (child) { processNode(child, num.Value); });
    }
    var data_url = 'null'; //You must type server URL for transmitting.
    $.getJSON(data_url, print_list);
    function print_list(categorized) {
        var tmp = false;
        console.log(categorized);
        if (node.url) {
            for (var i = 0 ; i < categorized.length ; i++) {
                if (categorized == null)
                    break;
                else if (categorized[i].url == node.url) {
                    tmp = true;
                    break;
                }
            }
           if (tmp == false) {
                str = document.getElementById("text");
                Url_info[num.Value] = new url_info();
                Url_info[num.Value].name = node.title;
                Url_info[num.Value].url = node.url;
                Url_info[num.Value].category = 0;
                str.innerHTML += "<a href=\"" + Url_info[num.Value].url + "\" target=_blank style=\"font-weight: bold; color: black; text-decoration: none; font-size: medium\">" + Url_info[num.Value].name + "  </a>";
                var chk_box = "<input type='checkbox' id=" + "chk_" + num.Value + ">";
                num.Value++;
                str.innerHTML += chk_box + '<br>';
                str.innerHTML += '<br>';
            }
        }
    }
}
