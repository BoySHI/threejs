/*
 * @Description: 
 * @Author: shiby
 * @Date: 2022-05-11 10:37:25
 * @LastEditTime: 2022-05-11 14:02:41
 * @LastEditors: shiby
 * @Reference: 
 */
/**
  * @description: 防抖函数
  * @param  {func} 需要处理的函数
  * @return {wait} 时间 1000=1s
  */
export function debounce (func, wait = 1000) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, arguments)
    }, wait)
  }
}