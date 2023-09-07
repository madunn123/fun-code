import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginReducer from '../reducer/loginReducer';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export default function useLogin() {
  const user = JSON.parse(localStorage.getItem('user-register'));
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [state, dispatch] = useReducer(loginReducer, initialState);

  function onSubmit(props, e) {
    e.preventDefault();

    const { username, password } = props;
    dispatch({ type: 'LOGIN_REQUEST' });

    try {
      setTimeout(() => {
        if (!username.value && !password.value) {
          dispatch({ type: 'LOGIN_ERROR', payload: 'username & password tidak tersedia' });
        } else if (username?.value && password?.value === user?.username && user?.password) {
          const users = { username: username?.value, password: password?.value };
          dispatch({ type: 'LOGIN_SUCCESS', payload: { username: username?.value, password: password?.value } });
          localStorage.setItem('user', JSON.stringify(users));
          navigate('/home');
        } else {
          dispatch({ type: 'LOGIN_ERROR', payload: 'username & password tidak tersedia' });
        }
      }, 2000);
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', payload: error });
    }
  }

  function handleLogout() {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
    navigate('/');
  }

  return {
    onSubmit,
    state,
    visible,
    setVisible,
    handleLogout,
  };
}
