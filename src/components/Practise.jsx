import React from 'react'

function Practise() {
    const name ="React"
    style={
        backgroundColor:"purple",
        color:'white'
    }
  return (
    <>

    {/* Hoisting in js moves all functions and variable declarations to the top of the scope */}
    {/* Always we should close the tag in react  */}
    {/* Hello */}
    {/* React is a open source js library used for building reusable ui components and sps's */}
    <img src ="photo.jpg" alt ="photo" />
    <h1>Hello {name} ...</h1>
    <label htmlFor='Name' value={name}>Name</label>
    <input type = "text" placeholder='Enter FullName'  value={name} />
    {/* here new is an object of date function and toString is a method for converting date object into string */}
    <p>Today : {new Date().toUTCString()}</p>

    <h1 style={{backgroundColor:"red" , color:"white"}}>Supriya</h1>
    <h1 style={style}>Kukunuru</h1>
    </>
  )
}

export default Practise