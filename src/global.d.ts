/**
 * global declares
 */

declare interface IBaseProps {
  [propName: string]: any
}

declare interface IBaseParams {
  [key: string]: any
}

declare interface IReducerAction<T> {
  type: string,
  payload: T
}

declare type PickRequired<T, K extends keyof T> = T & Required<Pick<T, K>>