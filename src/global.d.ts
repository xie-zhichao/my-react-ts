/**
 * global declares
 */

declare interface IBaseProps {
  [propName: string]: any
}

declare interface IBaseParams {
  [key: string]: any
}

/**
 * 状态操作参数
 */
declare interface IReducerAction<T> {
  type: string,
  payload: T
}

/**
 * 菜单树元素接口
 * 
 * component动态导入时需配置lazy
 */
declare interface IMenuTree {
  name?: string;
  path: string;
  icon?: string;
  component?: any;
  lazy?: boolean;
  permission?: string | string[];
  hideMenu?: boolean;
  exact?: boolean;
  children?: IMenuTree[],
  redirect?: string
}

declare type PickRequired<T, K extends keyof T> = T & Required<Pick<T, K>>

declare type React_Node = React.ReactNode
