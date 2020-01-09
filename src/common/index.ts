/**
 * 常用工具
 */

export const enum VariableTypes {
  Number = '[object Number]',
  String = '[object String]',
  Boolean = '[object Boolean]',
  Undefined = '[object Undefined]',
  Null = '[object Null]',
  Object = '[object Object]',
  Array = '[object Array]',
  Date = '[object Date]',
  Error = '[object Error]',
  RegExp = '[object RegExp]',
  Function = '[object Function]',
  Math = '[object Math]',
  JSON = '[object JSON]'
}

export function checkType(val: any): string {
  const toString = Object.prototype.toString
  return toString.call(val)
}
