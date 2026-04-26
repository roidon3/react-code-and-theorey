import React from 'react'

function Form1({address,handleChange}) {
  return (
    <div>
              <input type="text" name="address" value={address} onChange={(e)=>handleChange(e)} placeholder="address" autoComplete="off"/>
    </div>
  )
}

export default Form1