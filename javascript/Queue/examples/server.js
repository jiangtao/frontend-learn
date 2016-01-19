/*
 1. 对一组数据做操作 把这一组数据置为已被抢购

 需要数据：
 存储在mongodb中 创建一组数据
 */
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var url = 'mongodb://localhost:27017/test';
// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    var collections = db.collection('test');
    collections.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        docs.forEach(function (item) {
            console.log(item);
            console.log(item._id);
            console.log('hello world')
        });
    });
});
