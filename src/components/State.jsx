import React from 'react'
import {useState} from 'react' 

//state it is object ..objects are mutable
//useState is a built in react hook it is used to store a mutable value that changes after sometime
//when state value chnages react automatically rerenders the component to show the updated ui on the screeen

function State() {
    const [state ,SetState] = useState(0);
          return (
    <div>States</div>
  )
}

export default State