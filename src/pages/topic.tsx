import React from "react"
import { RouteComponentProps } from "react-router-dom"

const Topic: React.FC<RouteComponentProps> = ({ match }) => {
  const { topicId } = match.params as IBaseParams
  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  )
}

export default Topic
