import React, { lazy, Suspense } from 'react'
import { Spin } from 'antd'

export interface IWaitLazyComponentProps extends IBaseProps {
  component: any
}

const WaitLazyComponent: React.FC<IWaitLazyComponentProps> = (props: IWaitLazyComponentProps) => {
  const { component } = props
  const Component = lazy(component)

  return (
    <Suspense
      fallback={
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Spin tip="Loading..." />
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  )
}

export default WaitLazyComponent
