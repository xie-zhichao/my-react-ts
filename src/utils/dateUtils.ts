/**
 * date utils
 * @author xzc
 * @description 日期时间工具库
 */

const getKeys = <T, K extends keyof T>(data: T): K[]  => Object.keys(data) as K[];

/**
 * 日期时间格式化
 * @param date 
 * @param fmt 
 */
export function dateFtt(date: Date, fmt: string) {
  const o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }
  for (const k of getKeys(o))
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? String(o[k]) : ('00' + o[k]).substr(('' + o[k]).length)
      );
  return fmt;
};
