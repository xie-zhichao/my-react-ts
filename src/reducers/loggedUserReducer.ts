/**
 * 用户登录状态管理
 */
import { ReducerAction } from '../store';

// 初始化状态
const initialState = {
  pending: true,
  logged: false
}

const loggedUserReducer = (state = initialState, action: ReducerAction) => {
  
  if (action.type === 'GET_LOGGED_USER') {
    return Object.assign({}, state, {
      pending: false
    })
  }
  
  if (action.type === 'SET_LOGGED_USER') {
    return Object.assign({}, state, {
      pending: false,
      logged: action.logged
    })
  }
  
  return state;
}

export default loggedUserReducer;