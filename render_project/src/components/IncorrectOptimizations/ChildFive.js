import React from 'react'

export const ChildFive = ({name}) => {
    console.log('ChildFour Render')
  return <div>Hello {name}</div>
}

export const MemoizedChildFive = React.memo(ChildFive)