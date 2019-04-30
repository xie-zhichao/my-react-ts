/**
 * 验证器组
 * 提供常用的验证器
 */
import Validator, * as ValidatorTypes from './validator';

/**
 * 非空校验
 */
export const required = new Validator("required", (value: ValidatorTypes.ValidateTarget): boolean => {
  if(value === undefined || value === null || (typeof value === "string" && /\S+$/.test(value))) {
    return true;
  }
  return false;
}, {
  errorMessage: "不能为空"
});

/**
 * 手机号校验
 */
export const isMobile = new Validator("isMobile", /^1\d{10}$/, {
  errorMessage: "手机号必须是1开头的11位数字"
});

/**
 * Email校验
 */
export const isEmail = new Validator("isEmail", /^[\w]+@[\w]+\.[a-zA-Z]{2,4}$/, {
  errorMessage: "非法的Email地址"
});

export default {
  required,
  isMobile,
  isEmail
};