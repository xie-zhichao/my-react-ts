const topicsMenu = [
  {
    name: '话题',
    path: '/topics',
    icon: 'message',
    component: () => import('@/pages/topics'),
    lazy: true
  },
]

export default topicsMenu
