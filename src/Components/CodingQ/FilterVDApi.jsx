//here make a search input feild and debounce it
//depending on click of the saerch feild store data in the table
import React, { useEffect, useState } from "react";
function FilterVDApi() {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const[data,setData]=useState([])
  const[debounce,setDebounce]=useState("")
  console.log(searchData, "searchData");
  console.log(search, "search");
  console.log(debounce,"debounce");

  useEffect(()=>{
    const timer=setTimeout(()=>{
      setDebounce(search)
    },300)
    return ()=>clearTimeout(timer)
  },[search])
  
  useEffect(() => {
    if(!debounce)return
    async function apiCall() {
      try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${debounce}`);
        if (!response.ok) {
          throw new Error("api failed");
        }
        const res = await response.json();
        setSearchData(res);
      } catch (e) {
        console.log(e);
      }
    }
    apiCall();
  }, [debounce]);

function handleClick(ele) {
  const exists = data.some(item => item.id === ele.id);
  if (!exists) {
    setData([...data, ele]);
  }
}

  return (
    <div>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search for todo"
        />
        <div>
          <span>Search result from api</span>
          <div>
            {searchData?.map((ele, index) => (
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }} onClick={()=>handleClick(ele)}
              >
                <div>{ele.id}</div>
                <div>{ele.title}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span>Data Table</span>
           {data?.map((ele, index) => (
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <div>{ele.id}</div>
                <div>{ele.title}</div>
              </div>
            ))}
          
        </div>
      </div>
    </div>
  );
}

export default FilterVDApi;
