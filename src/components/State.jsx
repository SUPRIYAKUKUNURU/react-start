import React from 'react'
import {useState} from 'react' 
import { useEffect } from 'react'
// react is a open source javascript library used to build user interface especially for single page applications(SPA)
//state it is object ..objects are mutable
//useState is a built in react hook it is used to store a mutable value that changes after sometime
//when state value chnages react automatically rerenders the component to show the updated ui on the screeen
// hoisting in javascript moves the declaration functions and variables to the top of the scope before code execution.

function State() {
  useEffect(()=>{
    console.log("useEffect is called")
  },[])
    const [state ,SetState] = useState(0);
          return (
    <div>States</div>
  )
}

export default State