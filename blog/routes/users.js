var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var users = {
  title: '用户列表'
};
var views = {
  dir: path.normalize(path.join(__dirname, '../views/users'))
};
router.get('/', function(req, res, next) {
  res.render('users/index', { title: users.title });
});
// 使用html作为模版 用来测试调试使用
router.get('/file/:name', function(req, res, next) {
  var name = req.params.name;
  res.sendFile(path.join(views.dir, name));
});

module.exports = router;
