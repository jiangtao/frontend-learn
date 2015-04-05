/**
 * 男神向女神表白
 * 女神说 你只要搞定我老爸 搞定老妈 搞定姐姐 就可以
 *       如果搞不定老爸 就不能找老妈
 *       如果搞不定老妈 就不能找姐姐
 *       如果姐姐搞不定 就不能直接表白
 */
var NanShen = {
    name: 'Nan Shen',
    height: 180,
    weight: 82,
    request: function(obj){
        if(Math.random() > 0.3){
            obj.success();
        }else{
            obj.error();
        }
    }
};
var Request = function(name){
    return new Promise(function (resolve, reject) {
        var failed = 0;
        var request = function(){
            NanShen.request({
                name: name,
                success: function(){
                    console.log('成功拿下 %s', name);
                    failed = 0;
                    resolve();
                },
                error: function () {
                    if(failed == 0){
                        console.log('第一次没能拿下 %s', name);
                        failed = 1;
                        request();
                    }else{
                        console.log('再试一次没能拿下 %s', name);
                        reject();
                    }
                }
            })
        }
        request();
    })
};

Request('岳父')
    .then(function () {
        return Request('岳母');
    })
    .then(function () {
        return Request('姐姐');
    })
    .then(function () {
        NanShen.request({
            name: '女神',
            success: function(){
                console.log('女神同意了!');
            },
            error: function(){
                console.log('女神不同意');
            }
        })
    })




