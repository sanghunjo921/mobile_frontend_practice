import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import Title from "./Title";

export const Counter = () => {
  const [user, setUser] = useContext(UserContext);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  const onDoublcClick = () => {
    setCount2(count2 + 2);
  };

  return (
    <div>
      <Title>{`Hello, ${user}`}</Title>
      <Title>{`Current count is ${count}, ${count2}`}</Title>
      <button onClick={onClick}>+</button>
      <button onClick={onDoublcClick}>++</button>
    </div>
  );
};
