import React, { useState } from "react";

export const HelloWorld = () => {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  const handleChange = (e) => setValue(e.target.value);
  const handleClick = () => value === "hello" && setVisible((prev) => !prev);

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} id="search" />
      <button type="button" onClick={handleClick} id="toggle">
        Hello World!
      </button>
      {visible && <h1 id="hello">Hello World!</h1>}
    </div>
  );
};
