import * as React from "react";

export const Counter = () => {
 const [counter, setCounter] = React.useState(0)
 const [like, setLike] = React.useState(0)
 const CurrentPress = e => {
    setLike(e.currentTarget.id);
    console.log(like);
  };
 return (
    <div className="Counter">
      <h1>Result: { counter }</h1>
      <button className="plus" onClick={() => setCounter(counter + 1)}>+</button>
      <button className="minus" onClick={() => setCounter(counter - 1)}>-</button>
      <button CurrentPress={CurrentPress} className="minus" onClick={() => setLike(like + 1)}>{like}</button>
      <button CurrentPress={CurrentPress} className="minus" onClick={() => setLike(like - 1)}>{like}</button>
    </div>
  );
}