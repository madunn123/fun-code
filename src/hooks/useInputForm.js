import { useCallback, useState } from 'react';

export default function useInputForm(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, [initialValue]);

  return {
    value,
    onChange: handleChange,
  };
}
