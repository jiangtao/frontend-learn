/**
 * Created by jiangtao on 1/20/16.
 */
'use strict';
if(true){
    console.log(js); // 在nodejs直接运行  报错，由于babel编译后使用var代替，变量提升，是undefined
    let js = 'what\'s javascript?';
}