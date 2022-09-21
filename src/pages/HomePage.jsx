import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    Home
    <br />
    <Link to="/info">Info</Link>
    <br />
    <h2> Apps </h2>
    <Link to="/counter">Counter</Link>
    <br />
    <Link to="/todo">Todo App</Link>
  </div>
);

export default HomePage;

// Notes:
// function DemoPage() {
//   return (
// <div>
//     Home
//     <br />
//     <Link to="/info">Info</Link>
//   </div>
//   )
// }

// const DemoPage2  = function() {
// return (
//   <div>
//     Home
//     <br />
//     <Link to="/info">Info</Link>
//   </div>
// )
// }

// const DemoPage3 = () => (
//     <div>
//     Home
//     <br />
//     <Link to="/info">Info</Link>
//   </div>
// )
