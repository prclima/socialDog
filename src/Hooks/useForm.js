import { useState } from "react";

function useForm() {
  const [value, setValue] = useState("");

  function onChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    setValue,
    onChange,
  };
}

export default useForm;
