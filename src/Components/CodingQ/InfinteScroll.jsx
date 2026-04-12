import React, { useEffect, useState } from "react";
import "./infinite.css";

function InfinteScroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  console.log(data, "data");
  console.log("roidon");
  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`,
        );
        if (!response.ok) {
          throw new Error("Api failed");
        }
        const res = await response.json();
        setData((prev) => [...prev, ...res]);
      } catch (e) {
        console.log(e);
      }
    };
    apiCall();
  }, [page]);

  function handleInfiniteScroll() {
    const innerHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    try {
      if (innerHeight + scrollTop + 1 > scrollHeight) {
        setPage((prev) => prev + 1);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);
  return (
    <div className="parentContainer">
      {data?.map((ele, index) => (
        <div key={index} className="card">
          <div>{ele.id}</div>
          <div>{ele.title}</div>
        </div>
      ))}
    </div>
  );
}

export default InfinteScroll;
