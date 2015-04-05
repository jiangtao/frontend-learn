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
        if(Math.random() > 0.1){
            obj.success();
        }else{
            obj.error();
        }
    }
};
var Request = function(names, success){
    var index = 0,
        first = 0;
    var request = function(){
        var name = names[index];
        if(name){
            NanShen.request({
                name: name,
                success: function(){
                    first = 0;
                    console.log('成功拿下 %s', name);
                    index++;
                    request();
                },
                error: function(){
                    if(first == 1){
                        console.log('依然没能拿下 %s', name);
                        return;
                    }else{
                        console.log('没能拿下 %s', name);
                        first = 1;
                        request();
                    }
                }
            });
        }else{
            success();
        }
    }
    request();
};

Request(['岳父', '岳母', '姐姐'], function () {
    NanShen.request({
        name: '女神',
        success: function(){
            console.log('女神同意!');
        },
        error: function(){
            console.log('女神不同意!');
        }
    })
})




