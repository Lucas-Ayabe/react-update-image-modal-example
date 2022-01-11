import { useState } from "react";

function useBoolean(initial = false) {
  const [bool, setBool] = useState(initial);
  const on = setBool.bind(null, true);
  const off = setBool.bind(null, false);
  const toggle = setBool.bind(null, (value) => !value);

  return { on, off, toggle, value: bool };
}

export default useBoolean;
