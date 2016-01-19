/**
 * Created by jiangtao on 1/19/16.
 */
import base from './base';
export const wait = (duration, callback) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(callback());
        }, duration)
    });
};