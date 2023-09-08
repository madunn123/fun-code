import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from './useForm';
import { awaiter } from '@/utils/helper';
import { useAuthContext } from '@/context/authContext';

export default function useRegister() {
  const navigate = useNavigate();
  const [state, dispatch] = useAuthContext();

  const [visible, setVisible] = useState(false);
  const { formState, register } = useForm({ username: '', password: '', confirmPassword: '' });

  async function onSubmit(e) {
    e.preventDefault();

    const { username, password, confirmPassword } = formState;
    dispatch({ type: 'AUTH_REQUEST' });
    await awaiter(2000);

    try {
      if (!password && !confirmPassword && !username) return dispatch({ type: 'AUTH_ERROR', payload: 'username dan password tidak boleh kosong' });
      if (password !== confirmPassword) return dispatch({ type: 'AUTH_ERROR', payload: 'Password dan konfirmasi password tidak sama' });

      dispatch({ type: 'AUTH_REGISTER', payload: { username, password } });
      navigate('/home');

      return formState;
    } catch (error) {
      dispatch({ type: 'AUTH_ERROR', payload: error });
    }

    return null;
  }

  return {
    onSubmit,
    state,
    visible,
    setVisible,
    register,
  };
}
