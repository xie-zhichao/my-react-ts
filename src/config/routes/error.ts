const errorMenu = [
  {
    name: '404',
    path: '/404',
    exact: true,
    component: () => import('@/pages/404'),
    lazy: true,
    hideMenu: true
  }
]

export default errorMenu
