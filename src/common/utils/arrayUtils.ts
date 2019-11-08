/**
 * 数组操作工具类
 */
export const isEmptyArray = (arr: any[] | undefined | null) => {
  return arr === undefined || arr === null || arr.length ===0
}