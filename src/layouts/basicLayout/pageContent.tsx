import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import menuTree, { hasChild } from '@/config/routes';
import { redirectRender, lazyRender } from '@/common/render/renderUtils';
import NoMatch from '@/components/NoMatch';

import './index.scss';

const PageContent: React.FC<RouteComponentProps> = () => {

  function genSubRoutes(menus: IMenuTree[], prePath: string): React.FC<RouteComponentProps> {
    const SubRoute = () => (
      <Switch>
        {genRoutes(menus, prePath)}
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    );

    return SubRoute;
  }

  function genRoute(menu: IMenuTree, prePath: string): React_Node {
    const { path, redirect, component, lazy, children, hideChildrenInMenu, ...rest } = menu;

    if (!path || (!component && !redirect)) {
      return null;
    }

    const fullPath = `${prePath}${path}`;
    const renderRoute = (props: RouteComponentProps) => {
      const Comp = redirect ? redirectRender(redirect) : lazy ? lazyRender(component) : component;
      const SubRoutes =
        children && hideChildrenInMenu ? genSubRoutes(children, fullPath) : undefined;

      return <Comp {...props}>{SubRoutes ? <SubRoutes {...props} /> : undefined}</Comp>;
    };

    return <Route path={fullPath} key={fullPath} {...rest} render={renderRoute} />;
  }

  function genRoutes(menus: IMenuTree[], prePath = ''): React_Node[] {
    return menus.reduce<React_Node[]>((prev: React_Node[], next: IMenuTree) => {
      return prev
        .concat(genRoute(next, prePath))
        .concat(
          hasChild(next) && !next.hideChildrenInMenu
            ? genRoutes(next.children || [], `${prePath}${next.path}`)
            : [],
        );
    }, []);
  }

  return (
    <div
      style={{
        margin: '24px',
      }}
    >
      <Switch>
        {genRoutes(menuTree)}
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
};

export default PageContent;
