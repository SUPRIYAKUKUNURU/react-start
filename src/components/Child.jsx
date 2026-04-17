import React from 'react'

function Child(props) {
  return(
    <>
   <h2>Hello {props.name}</h2>
  <h2>{props.status}</h2>
  </>
  )
}

export default Child;