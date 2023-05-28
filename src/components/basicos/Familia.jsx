import React, { cloneElement } from 'react';

export default props => {

  return (
    <div>
      {
        props.children.map((element, id) => {
          return cloneElement(element, { ...props, key: id })
        })
      }
    </div>
  )
}