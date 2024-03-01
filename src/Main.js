import { useEffect, useState } from "react";
function Main() {
  const [toggleOne, setToggleOne] = useState(false);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`useeffect with interval number ${count}`);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      {console.log("render/rerender")}
      <h1>Main comp</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {String(count)}
      </button>
    </div>
  );
}

export default Main;
