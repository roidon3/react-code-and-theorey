//this is just a ellustrution when to use return and when not if u use () return is not required

//  <ul>
//       {data.map((item) => (
//         <li key={item.id}>
//           {item.id}: {item.title}
//         </li>
//       ))}
//     </ul>

//     👉 Here you are using parentheses (), so:
// Arrow function does implicit return
// You don’t need to write return
// 💡 Think of it like:
// (item) => expression
// ➡️ automatically returns expression

//  {data &&
//       data?.map((item) => {
//         return (
//           <div

//           >
//             <p> {item.id}</p>
//             <div> {item.title}</div>
//           </div>
//         );
//       })}
//   </div>

// 👉 Here you are using curly braces {}, so:
// You must explicitly write return
// Otherwise it returns undefined
// 💡 Think of it like:
// (item) => {
//   // logic
//   return something;
// }

//1.normal api call and loading and error handling

// import React, { useEffect, useState } from "react";
// function ApiCalls() {
//   const [data, setData] = useState([]);
//   const APIurl = "https://jsonplaceholder.typicode.com/todos?_limit=10";
//   useEffect(() => {
//     const apiCall = async () => {
//       try {
//         const response = await fetch(APIurl);
//         if (!response.ok) {
//           throw new Error("API failed");
//         }
//         const res = await response.json();
//         setData(res);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     apiCall();
//   }, []);

//   return (
//     <div>
//       <div>This is the API data</div>
//       <div>
//         {data &&
//           data?.map((item) => {
//             return (
//               <div
//                 style={{
//                   border: "1px solid blue",
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "center",
//                   gap: "10px",
//                 }}
//               >
//                 <p> {item.id}</p>
//                 <div> {item.title}</div>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// }

// export default ApiCalls;

//2.show data in html table

// import React, { useEffect, useState } from "react";

// function ApiCalls() {
//   const [data, setData] = useState([]);
//   const APIurl = "https://jsonplaceholder.typicode.com/todos?_limit=10";
//   useEffect(() => {
//     const apiCall = async () => {
//       try {
//         const response = await fetch(APIurl);
//         if (!response.ok) {
//           throw new Error("API failed");
//         }
//         const res = await response.json();
//         setData(res);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     apiCall();
//   }, []);

//   return (
//     <div>
//       <div>This is the API data</div>
//       <div>

//         <table style={{border:"1px solid red",borderCollapse:"collapse"}}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid red" }}>id</th>
//               <th style={{ border: "1px solid red" }}>title</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data?.map((item) => {
//               return(
//               <tr key={item.id} style={{color:"red"}}>
//                 <td style={{ border: "1px solid red" }}>{item.id}</td>
//                 <td style={{ border: "1px solid red" }}>{item.title}</td>
//               </tr>)
//             })}
//           </tbody>
//         </table>

//       </div>
//     </div>
//   );
// }

// export default ApiCalls;

//3. Search / Filter Data
// import React, { useEffect, useMemo, useState } from "react";

// function ApiCalls() {
//   const [data, setData] = useState([]);
//   const [filterData, setFilteredData] = useState("");
//   const [debouncedSearch, setDebouncedSearch] = useState("");
//   useEffect(() => {
//     const apiCall = async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/todos?_limit=20",
//       );
//       if (!response.ok) {
//         throw new Error("api failed");
//       }
//       const res = await response.json();
//       setData(res);
//     };
//     apiCall();
//   }, []);
//   //debounce
//   useEffect(()=>{
//     const timer=setTimeout(() => {
//       setDebouncedSearch(filterData)

//     }, 500);
//     return ()=>clearTimeout(timer)
//   },[filterData])
//   //filter after debounce see the dependency array
//   const dataFiltered = useMemo(() =>
//      data?.filter((item) =>
//       item.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
//     )
//   , [data, debouncedSearch]);

//   // const dataFiltered = useMemo(() =>
//   //    data?.filter((item) =>
//   //     item.title.toLowerCase().includes(filterData.toLowerCase()),
//   //   )
//   // , [data, filterData]);

//   // const dataFiltered = data?.filter((item)=>item.title.toLowerCase().includes(filterData.toLowerCase()))

//   return (
//     <div>
//       <div style={{ color: "blue", textAlign: "center", fontSize: "24px" }}>
//         This is the API data
//       </div>
//       <div>
//         <input
//           type="text"
//           value={filterData}
//           onChange={(e) => setFilteredData(e.target.value)}
//           placeholder="enter data"
//         />
//       </div>
//       <div>
//         {dataFiltered?.map((item) => (
//           <div key={item.id} style={{ display: "flex", gap: "10px" }}>
//             <div>{item.id}</div>
//             <div>{item.title}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ApiCalls;

// //4.call a nested api and show any 2 feilds

// import React, { useEffect, useState } from "react";

// function ApiCalls() {
//   const [data, setData] = useState([]);
//   console.log(data, "data");
//   const APIurl = "https://jsonplaceholder.typicode.com/users";
//   useEffect(() => {
//     const apiCall = async () => {
//       try {
//         const response = await fetch(APIurl);
//         if (!response.ok) {
//           throw new Error("API failed");
//         }
//         const res = await response.json();
//         setData(res);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     apiCall();
//   }, []);

//   return (
//     <div>
//       <div>This is the API data</div>
//       {/* Labels */}
//       <div style={{ display: "flex", gap: "20px", fontWeight: "bold" }}>
//         <div>Name</div>
//         <div>Email</div>
//         <div>City</div>
//         <div>Company</div>
//       </div>

//       <div>
//         {/* {data.map((user) => (
//   <div key={user.id} style={{display:"flex",gap:"20px",border:"1px solid red"}}>
//     <div>{user.name}</div>
//     <div>{user.email}</div>
//     <div>{user.address.city}</div>
//     <div>{user.company.name}</div>
//   </div>
// ))} */}
//         {data?.map((user) => {
//           const {
//             name,
//             email,
//             address: { city },
//             company:{name:companyName},
//           } = user;
//           return (
//             <div
//               key={user.id}
//               style={{ display: "flex", gap: "20px", border: "1px solid red" }}
//             >
//               <div>{name}</div>
//               <div>{email}</div>
//               <div>{city}</div>
//               <div>{companyName}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default ApiCalls;

//4.onClick of button show the desc
import React, { useEffect, useState } from "react";
function ApiCalls() {
  const [data, setData] = useState([]);
  const [id, setId] = useState([]);
  console.log(id, "id");
  const APIurl = "https://jsonplaceholder.typicode.com/todos?_limit=10";
  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await fetch(APIurl);
        if (!response.ok) {
          throw new Error("API failed");
        }
        const res = await response.json();
        setData(res);
      } catch (err) {
        console.log(err);
      }
    };
    apiCall();
  }, []);
  function handleClick(id) {
    // setId(id) //only one at a time
    //  setId(prev=>[...prev,id]) //if i do like this it'll store duplicate
    setId((prev) =>prev.includes(id) ? prev.filter((ele) => ele !== id) : [...prev, id]);
  }

  return (
    <div>
      <div>This is the API data</div>
      <div>
        {data &&
          data?.map((item) => {
            return (
              <div
                style={{
                  border: "1px solid blue",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <p> {item.id}</p>
                <button onClick={() => handleClick(item.id)}>show desc</button>
                {/* {id === item.id && <div> {item.title}</div>} */}
                {id.includes(item.id) && <div>{item.title}</div>}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ApiCalls;

//pagenation
//sorting
