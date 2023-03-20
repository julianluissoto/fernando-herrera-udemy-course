import React from 'react'
import { useState } from 'react'
import PropTypes from "prop-types"

/* function handleAdd (event) {
    console.log(event)
    } */
const CounterApp = ({value}) => {

 const handleAdd = ()=>{
        setCounter(counter+1)
    }
    
 const handleSustract = ()=>{
    setCounter(counter-1)
 }
 const handleReset = ()=>{
    setCounter(value)
 }

const [counter, setCounter]= useState(value)
  return (
    <div >
        <h1> Counter App </h1>
        <h2>  { counter } </h2>
        <button onClick={handleAdd
         }> +1 </button>
         <button onClick={handleSustract}> -1 </button>
         <button aria-label='btn-reset'  onClick={handleReset}> Reset </button>
    </div>
  )
}
CounterApp.propTypes={
value:PropTypes.number

}

export default CounterApp