import Home from '@/pages/home'
/**
 * 菜单配置
 */

/**
 * 菜单树元素接口
 * 
 * component动态导入时需配置lazy
 */
export interface IMenuTree {
  name?: string;
  path: string;
  icon?: string;
  component?: any;
  lazy?: boolean;
  permission?: string | string[];
  hideMenu?: boolean;
  exact?: boolean;
  children?: IMenuTree[],
  redirect?: string
}

export const hasChild = (menu: IMenuTree) => {
  return Array.isArray(menu.children) && menu.children.length > 0
}

const menuTree: IMenuTree[] = [
  {
    path: '/',
    redirect: '/home',
    exact: true
  },
  {
    name: '首页',
    path: '/home',
    exact: true,
    icon: 'home',
    component: Home,
    permission: ['admin'],
    children: [
      {
        name: '话题',
        path: '/topics',
        icon: 'message',
        component: () => import('@/pages/topics'),
        lazy: true
      },
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
  {
    name: '404',
    path: '/404',
    exact: true,
    component: () => import('@/pages/404'),
    lazy: true,
    hideMenu: true
  }
]

export default menuTree
