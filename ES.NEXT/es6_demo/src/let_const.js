/**
 * Created by jiangtao on 1/18/16.
 */
import base from './base';
//import constants from './_constants';
import * as constants from './constants';
import util from 'util';
/**
 * 冻结对象，使对象只可读
 * @param obj
 */
const freeze = (obj) => {
    Object.freeze(obj);
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (util.isObject(obj[i]) || util.isArray(obj[i])) {
                freeze(obj[i]);
            }
        }
    }
};
freeze(constants);

console.log(constants.SUCCESS);
console.log(constants.ERROR);
console.log(constants.USER_OR_PASSWORD_ERROR);

