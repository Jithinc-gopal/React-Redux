import React from 'react'
// import { increment,decrement } from './component/action'
import { useDispatch, useSelector } from 'react-redux'


export const App = () => {
  const count = useSelector(state=>state.value)
  const dispatch = useDispatch()
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={()=>dispatch({type:"increment",payload:1})}>increment</button>
      <button onClick={()=>dispatch({type:"decrement",payload:1})}>decrement</button>
    </div>
  )
}
export default App