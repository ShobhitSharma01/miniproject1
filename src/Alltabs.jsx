import React from "react";
import Counter from "./counter/Counter";
import Todolist from "./todolist/Todolist";
import Calculator from "./calculator/Calculator";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
const Alltabs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/counter");
  };
  const handleSubmit = () => {
    navigate("/todolist");
  };
  const handleChange = () => {
    navigate("/calculator");
  };
  return (
    <div className="main container">
      <div className=" button container">
        <button onClick={handleClick}>Counter</button>
        <button onClick={handleSubmit}>Todo App</button>
        <button onClick={handleChange}>calculator</button>
      </div>
      <div className="render container">
        <Routes>
          <Route path="/Counter" element={<Counter />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/todolist" element={<Todolist />} />
        </Routes>
      </div>
      <div className="footer">
        <button onClick={handleSubmit}>Go to Todo app</button>
        <button onClick={handleChange}>Go to Calculator App</button>
        <button onClick={handleClick}>Go to Counter</button>
      </div>
    </div>
  );
};

export default Alltabs;
