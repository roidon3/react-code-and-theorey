import React from 'react'

function Form() {
  return (
    <div>Form</div>
  )
}

export default Form


//Basic example
// import React, { useState } from "react";
// function FormExample() {
//   const [name, setName] = useState("");
//   function handleSubmit(e) {
//     e.preventDefault(); // prevent page reload
//     console.log(name);
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter name"
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default FormExample;