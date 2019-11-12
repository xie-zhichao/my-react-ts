import React, { createContext, useReducer } from "react"
import { subscribe, trigger } from '@/common/eventBus'

export interface IUserState extends IModelState {
  userId?: string,
  userName?: string,
  logged: boolean
}

// 初始化状态
export const initialState: IUserState = {
  userId: undefined,
  userName: undefined,
  logged: false
}

export interface IUserContext {
  user: IUserState,
  dispatch: React.Dispatch<IReducerAction<IUserState>>
}

const EventName = 'UserStateChange'

// 创建 context
export const UserContext = createContext<IUserContext>({} as any)

// reducer
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
const reducer = (state: any, action: IReducerAction<IUserState>) => {
  switch (action.type) {
    case LOG_IN:
    case LOG_OUT:
      const newState = {
        ...state,
        ...action.payload
      }
      trigger(EventName, newState)
      return newState
    default:
      throw new Error(`there is no action "${action.type}" in user model.`)
  }
}

/**
 * 创建一个 UserProvider 组件
 * UserProvider 组件包裹的所有组件都可以访问到 user
 */
export const UserProvider: React.FC<IModelProviderProps> = ({ children, persister }) => {
  persister && subscribe(EventName, persister.persistModel)
  const [user, dispatch] = persister ? useReducer(reducer, initialState, persister.recoverModel)
    : useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}
