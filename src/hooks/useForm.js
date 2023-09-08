import { useState } from 'react';

export default function useForm(defaultValue = {}) {
  const [formState, setFormState] = useState(defaultValue);

  const onChange = (name) => (e) => {
    setFormState((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const register = (name) => ({ name, onChange: onChange(name), value: formState[name] });

  return { register, formState };
}
