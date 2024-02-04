import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [isToggled, setIsToggled] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setData({});
    }, 100);

    return () => clearTimeout(timerId);
  }, []);

  const handleClick = () => setIsToggled((prev) => !prev);
  const handleChange = (e) => setValue(e.target.value);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2 data-testid="value-elem">{value}</h2>
      {/* data-testid для получения элемента по testId */}
      <button type="button" onClick={handleClick} data-testid="toggle-btn">
        Click me!
      </button>
      <input type="text" value={value} onChange={handleChange} placeholder="Input value..." />
      {data && <div style={{ color: "red" }}>data</div>}
      {isToggled && <div data-testid="toggle-elem">toggle</div>}
    </div>
  );
}

export default App;
