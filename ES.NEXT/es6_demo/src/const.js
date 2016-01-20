/**
 * Created by jiangtao on 1/18/16.
 */
import base from './common/base';
import constants from './common/constants';
// constants.ERROR = 10; 使用Object.freeze是constants所有引用类型只可读，编译会报错

console.log(constants.SUCCESS);
console.log(constants.ERROR);
console.log(constants.USER_OR_PASSWORD_ERROR);

