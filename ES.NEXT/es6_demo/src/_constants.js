/**
 * Created by jiangtao on 1/19/16.
 */
import * as constants from './constants';
import util from 'util';
const freeze = (obj) => {
    for(let i in obj){
        if(obj.hasOwnProperty(i) && (util.isObject(obj[i]) || util.isArray(obj[i]))){
            freeze(obj[i]);
        }
    }
};
freeze(constants);
export default constants;