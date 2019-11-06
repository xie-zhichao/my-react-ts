import React from 'react'

/**
 * Input组件参数接口
 */
export interface InputProps {
  label?: string,
  name: string,
  value?: string,
  theme?: (string|object),
  autoFocus?: boolean,
  [rootProps: string]: any,
}
/**
 * 无状态Input组件
 * @param props 
 * @param context 
 */
export default function input(props: InputProps, context: any) {
  const { label, name, value, theme, autoFocus, ...rootProps } = props
  const { defaultLabel, defaultTheme } = context

  return (
    <React.Fragment>
      <label
        htmlFor={name}
        children={label || defaultLabel}
        {...rootProps}
      />
      <input
        name={name}
        type="text"
        value={value || ''}
        theme={theme || defaultTheme}
        {...props}
      />
    </React.Fragment>
  )
}
/**
 * Input组件context
 */
input.contextTypes = {
  defaultLabel: "",
  defaultTheme: Object,
}