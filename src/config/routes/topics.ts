const topicsMenu: IMenuTree[] = [
  {
    name: '话题',
    path: '/topics',
    icon: 'message',
    component: () => import('@/pages/topics'),
    lazy: true,
    children: [
      {
        name: '渲染',
        path: '/rendering',
        exact: true,
        component: () => import('@/pages/topic'),
        lazy: true,
        hideMenu: true
      },
      {
        name: '组件',
        path: '/components',
        exact: true,
        component: () => import('@/pages/topic'),
        lazy: true,
        hideMenu: true
      }
    ]
  },
]

export default topicsMenu
