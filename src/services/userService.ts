// 目前是模拟Http请求

export const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
          userId: '1',
          userName: 'admin',
          logged: true
      })
    }, 500)
  })
}

export const logout = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(200)
    }, 500)
  })
}
