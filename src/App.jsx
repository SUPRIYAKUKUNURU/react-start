import React from 'react'
import Counter from './components/Counter'
import Child from './components/Child'
import Practise from './components/Practise'
function App() {
  return (
    <>
    <Counter/>
    <Child name = "Supriya" status = "React Learner"  />
    <Practise />
    
    </>
  )
}

export default App