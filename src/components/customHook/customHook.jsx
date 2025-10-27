import { useState } from "react";

function useToggle() {
  const [value, setValue] = useState('light');

  const toggle = () => {
    setValue((prev) => prev === 'light'? 'dark': 'light');
  };

  return [value, toggle];
}

export default useToggle;