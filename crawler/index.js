var request = require('request');
var url = require('url');
var util = require('util');
var fs = require('fs');
var mapState = {
    pn: 1
};
var count = 0, timer = null;
var getSearchURI = function (word, pn) {
    var searchURL = 'http://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=' + encodeURIComponent(word) + '&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=0&word=' + encodeURIComponent(word) + '&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&fr=%26fr%3D&pn=' + pn + '&rn=60&' + (new Date().getTime());
    return searchURL;
};

var fetch = function () {
    timer = setTimeout(fetch, 1000);
    if (count == 10) {
        clearTimeout(timer);
        timer = null;
        console.log('request end');
        return false;
    }
    request
        .get(getSearchURI('刘德华', ++count * 60))
        .on('error', function (err) {
            if (err) {
                clearTimeout(timer);
                timer = null;
                throw new Error(err);
            }
        })
        .pipe(fs.createWriteStream(count + '.json'))
};
fetch();

//request.get(getSearchURI('刘德华', 60)).on('response', function (response) {
//    var buffer = [];
//    response.on('data', function (data) {
//        buffer.push(data);
//    });
//    response.on('end', function(){
//        var result = Buffer.concat(buffer).toString();
//        console.log(result)
//    });
//});