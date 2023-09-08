import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from './useForm';
import { awaiter } from '@/utils/helper';
import { useAuthContext } from '@/context/authContext';

export default function useLogin() {
  const navigate = useNavigate();
  const [state, dispatch] = useAuthContext();
  const { users } = state;

  const [visible, setVisible] = useState(false);
  const { formState, register } = useForm({ username: '', password: '' });

  async function onSubmit(e) {
    e.preventDefault();

    const { username, password } = formState;
    dispatch({ type: 'AUTH_REQUEST' });
    await awaiter(2000);

    try {
      if (!username || !password) throw new Error('Username dan password harus diisi.');

      const user = users.find((item) => item.username === username);
      if (username !== user?.username || password !== user?.password) throw new Error('Username atau password salah.');

      dispatch({ type: 'AUTH_LOGIN', payload: { username, password } });
      navigate('/home');
    } catch (error) {
      dispatch({ type: 'AUTH_ERROR', payload: error.message });
    }
  }

  function handleLogout() {
    dispatch({ type: 'AUTH_LOGOUT' });
    navigate('/');
  }

  return {
    onSubmit,
    state,
    visible,
    setVisible,
    handleLogout,
    register,
  };
}
