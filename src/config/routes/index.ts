import Home from '@/pages/home'
import topicsMenu from './topics'
import errorMenu from './error'
import { isEmptyArray } from '@/common/utils/arrayUtils'

export const hasChild = (menu: IMenuTree) => !isEmptyArray(menu.children)

/**
 * 菜单配置
 */
const menuTree: IMenuTree[] = [
  {
    path: '/',
    redirect: '/home',
    exact: true,
    hideMenu: true
  },
  {
    name: '首页',
    path: '/home',
    exact: true,
    icon: 'home',
    component: Home,
    permission: ['admin'],
    children: [
      ...topicsMenu,
      {
        name: '关于',
        path: '/about',
        exact: true,
        icon: 'team',
        component: () => import('@/pages/about'),
        lazy: true
      }
    ]
  },
  ...errorMenu
]

export default menuTree
