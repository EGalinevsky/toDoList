import React, { useEffect, useState } from "react";

export const Hooks1 = () => {
  const [count, setCount] = useState(0);
  const [type, setType] = useState("users");
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  return (
    <div>
      <p>колчество кликов {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Увеличить</button>
      <button onClick={() => setCount((prev) => prev - 1)}>уменьшить</button>
      <br />
      <br />
      <div>
        <p>{type}</p>
        
        <button onClick={() => setType("users")}>users</button>
        <button onClick={() => setType("posts")}>posts</button>
        <button onClick={() => setType("todos")}>todos</button>

        <div>
            {JSON.stringify(data, null, 2)}
        </div>
      </div>
    </div>
  );
};
