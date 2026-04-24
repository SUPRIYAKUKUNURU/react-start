import React from 'react'

function Practise() {
    const name ="react"
  return (
    <>
    {/* Always we should close the tag in react  */}
    <img src ="photo.jpg" alt ="photo" />
    <h1>Hello {name} ...</h1>
    <label htmlFor='Name' value={name}>Name</label>
    <input type = "text" placeholder='Enter FullName' />
    </>
  )
}

export default Practise