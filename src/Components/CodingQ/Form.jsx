// import React from 'react'

// function Form() {
//   return (
//     <div>Form</div>
//   )
// }

// export default Form

//Form with validation
// import React, { useState } from "react";
// function FormExample() {
//   const [formdata, setFormData] = useState({
//     name: "",
//     emailId: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData({
//       ...formdata,
//       [name]: value,
//     });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     const validationErrors = validate();
//     console.log(validationErrors, "validationErrors");
//     setErrors(validationErrors);
//     if (Object.keys(validationErrors).length === 0) {
//       console.log("Form submitted:", formdata);
//     }
//   }

//   function validate() {
//     let newErrors = {};

//     // Name validation (length > 5)
//     if (formdata.name.length <= 5) {
//       newErrors.name = "Name must be more than 5 characters";
//     }

//     // Email validation (must include @)
//     if (!formdata.emailId.includes("@")) {
//       newErrors.emailId = "Email must include @";
//     }

//     // Password validation (number + special char + letter)
//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).+$/;
//     if (!passwordRegex.test(formdata.password)) {
//       newErrors.password =
//         "Password must contain letters, numbers, and a special character";
//     }

//     return newErrors;
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formdata.name}
//           onChange={handleChange}
//           placeholder="Enter name"
//         />
//         {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

//         <input
//           type="email"
//           name="emailId"
//           value={formdata.emailId}
//           onChange={handleChange}
//           placeholder="Enter email"
//         />
//         {errors.emailId && <p style={{ color: "red" }}>{errors.emailId}</p>}

//         <input
//           type="password"
//           name="password"
//           value={formdata.password}
//           onChange={handleChange}
//           placeholder="Enter password"
//         />
//         {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default FormExample;

//pass one field from another component

import React, { useState } from "react";
import Form1 from "./Form1";

function Form() {
  const [form, setForm] = useState({ name: "", address: "", password: "" });
 function handleChange(e){
  setForm({...form,[e.target.name]:e.target.value})


  }
  function handleSubmit(e){
    e.preventDefault();
      console.log(form,"form");
  }

  return (
    <div>
      <div>Login Form</div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={form?.name} onChange={(e)=>handleChange(e)} placeholder="name" autoComplete="off"/>
             <Form1 address={form.address} handleChange={handleChange}/>
              <input type="password" name="password" value={form?.password} onChange={(e)=>handleChange(e)}placeholder="password"/>
              <button type="submit">Submit</button>
     
        </form>
      </div>
  );
}

export default Form;
