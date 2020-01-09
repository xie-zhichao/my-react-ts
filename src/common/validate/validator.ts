/**
 * 验证器类库
 * @author xzc
 * @description 定义验证器类
 */

/**
 * 参数类型定义
 */
export type ValidateTarget = string | number | null | undefined;
export type ValidateMethod = (target: ValidateTarget) => boolean;

/**
 * 验证器配置项
 */
export type IValidatorOptions = {
  errorMessage: string | undefined;
};

/**
 * 验证器测试类返回结果
 */
export type IValidatorResult = {
  success: boolean;
  message: string | undefined;
};

/**
 * 验证器测试类异常
 */
export type IValidatorError = {
  message: string | undefined;
  error: any;
};

/**
 * 验证器接口声明
 */
export default class Validator {
  /**
   * 验证器名称
   */
  readonly name: string;
  readonly rule: RegExp | ValidateMethod;
  readonly options: IValidatorOptions;

  constructor(name = "anonymous validator", rule: RegExp | ValidateMethod, options?: IValidatorOptions) {
    this.name = name;
    this.rule = rule;
    this.options = {
      errorMessage: "Not pass",
      ...options
    };
  }

  /**
   * 校验执行方法
   * @param target 
   */
  protected validate(target: ValidateTarget): IValidatorResult {
    let result;
    try {
      if (this.rule instanceof RegExp && target !== undefined && target !== null) {
        if (typeof target === "string") {
          result = this.rule.test(target);
        }
        result = this.rule.test(target.toString());
      } else if (typeof this.rule === "function") {
        result = this.rule(target);
      } else {
        result = false;
      }

      const { errorMessage } = this.options;
      return {
        success: result,
        message: result ? "Pass" : errorMessage
      };
    } catch (error) {
      const validateError: IValidatorError = {
        message: "Get error when processing.",
        error: error
      }
      throw validateError;
    }

  }

}
