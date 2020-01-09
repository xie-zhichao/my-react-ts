import React from 'react'
import { RouteComponentProps, Redirect } from "react-router"
import WaitLazyComponent from "@/components/WaitLazyComponent"

export function redirectRender(redirect: string) {
  const Redirector =  () => {
    return <Redirect to={`${redirect || '/auth/login'}`} />
  }

  return Redirector
}

export function lazyRender(component: any) {
  const LazyWrapper = (props: RouteComponentProps) => {
    return <WaitLazyComponent {...props} component={component} />
  }

  return LazyWrapper
}
