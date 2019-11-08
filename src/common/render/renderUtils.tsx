import React from 'react'
import { RouteComponentProps, Redirect } from "react-router"
import WaitLazyComponent from "@/components/WaitLazyComponent"

export function redirectRender(redirect: string) {
  return (props: RouteComponentProps) => {
    return <Redirect to={`${redirect || '/auth/login'}`} />
  }
}

export function lazyRender(component: any) {
  return (props: RouteComponentProps) => {
    return <WaitLazyComponent {...props} component={component} />
  } 
}
