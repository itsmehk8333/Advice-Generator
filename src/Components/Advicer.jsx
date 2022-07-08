import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Advice.css';
import pic from '../images/pattern-divider-desktop.svg';
import pic2 from '../images/icon-dice.svg'

function Advicer() {

    const[arr, SetArr] = useState({
     
    });
   
useEffect(()=>{
    fetch("https://api.adviceslip.com/advice").then(data => data.json()).then(data => SetArr(data.slip))

},[])
console.log(arr);

  return (
    <div>
  <div className='Contianer'>
  <h2 className='id'>Advice#{arr.id}</h2>
  <h1 className='h1'>"{arr.advice}"</h1>
  <img src={pic} className="cross" />

 
   </div>
  <button onClick={()=>{
        fetch("https://api.adviceslip.com/advice").then(data => data.json()).then(data =>SetArr(data.slip))
    }}  className="button"><img src={pic2}  className="img2" /></button>
    </div>
  )
}

export default Advicer