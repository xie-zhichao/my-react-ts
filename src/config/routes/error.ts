const errorMenu: IMenuTree[] = [
  {
    name: '404',
    path: '/404',
    exact: true,
    component: () => import('@/pages/404'),
    lazy: true,
    hideInMenu: true
  }
]

export default errorMenu
