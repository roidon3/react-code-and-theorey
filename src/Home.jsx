import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      This is Home Page
      <Link to="/apiCalls">API CALL</Link>
    </div>
  );
}
