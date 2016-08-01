/**
 *
 * Created by jiangtao on 1/19/16.
 */

import util from 'util';
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
// 常用constant
const constants = {
    SUCCESS: 1,
    ERROR: 2,
    USER_OR_PASSWORD_ERROR: 3
};
freeze(constants);

export default constants;

