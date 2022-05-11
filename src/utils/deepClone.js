/*
 * @Description: 
 * @Author: shiby
 * @Date: 2022-05-11 15:18:39
 * @LastEditTime: 2022-05-11 16:49:53
 * @LastEditors: shiby
 * @Reference: 
 */
/**
 * @description: 递归方式实现深拷贝
 * @param {obj} 需要拷贝的值 
 * @return {*}
 */
export function deepClone (obj) {
  let objClone = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          objClone = deepClone(obj[key])
        } else {
          objClone[key] = obj[key]
        }
      }
    }
  }
  return objClone
}