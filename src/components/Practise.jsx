import React from 'react'

function Practise() {
    const name ="React"
  return (
    <>
    {/* Always we should close the tag in react  */}
    <img src ="photo.jpg" alt ="photo" />
    <h1>Hello {name} ...</h1>
    <label htmlFor='Name' value={name}>Name</label>
    <input type = "text" placeholder='Enter FullName'  value={name} />
    {/* here new is an object of date function and toString is a method for converting date object into string */}
    <p>Today : {new Date().toString()}</p>
    </>
  )
}

export default Practise