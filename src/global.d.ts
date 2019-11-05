/**
 * global declares
 */

declare interface BaseProps {
  [propName: string]: any
}

declare interface BaseParams {
  [key: string]: any
}

declare type PickRequired<T, K extends keyof T> = T & Required<Pick<T, K>>