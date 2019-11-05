/**
 * 菜单配置
 */
export interface IRouteItem {
  name: string;
  path: string;
  icon: string;
  component?: string;
  permission?: string | string[];
  showMenu?: boolean;
  exact?: boolean;
  children?: IRouteItem[]
}

const routes: IRouteItem[] = [
  {
    name: '首页',
    path: '/home',
    icon: 'user',
    component: '../pages/home',
    permission: ['admin']
  },
  {
    name: '话题',
    path: '/topics',
    icon: 'man',
    component: '../pages/topics',
    children: [
      {
        name: '渲染',
        path: '/topics',
        icon: 'woman',
        component: '../pages/topics/rendering'
      }
    ]
  },
  {
    name: '关于',
    path: '/about',
    icon: 'medicine-box',
    component: '../pages/about'
  }
]

export default routes
