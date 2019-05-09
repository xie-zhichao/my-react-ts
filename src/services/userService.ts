import store from '../store';

// 目前是模拟Http请求

export const getLoggedUser = () => {
  setTimeout(() => {
    store.dispatch({
      type: 'GET_LOGGED_USER'
    });
  }, 500);
};

export const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      store.dispatch({
        type: 'SET_LOGGED_USER',
        logged: true
      });
      resolve();
    }, 500);
  });
};

export const logout = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      store.dispatch({
        type: 'SET_LOGGED_USER',
        logged: false
      });
      resolve();
    }, 500);
  });
};
