import { useReducer, useState } from 'react';
import registerReducer from '@/reducer/registerReducer';
import saveCredentials from '@/utils/saveCredentials';

const initialState = {
  user: null,
  loading: false,
  error: null,
  status: '',
};

export default function useRegister() {
  const [visible, setVisible] = useState(false);
  const [state, dispatch] = useReducer(registerReducer, initialState);

  async function onSubmit(props, e) {
    e.preventDefault();

    const { username, password, confirmPassword } = props;
    dispatch({ type: 'REGISTER_REQUEST' });

    try {
      setTimeout(() => {
        if (!password.value && !confirmPassword.value && !username.value) {
          dispatch({ type: 'REGISTER_ERROR', payload: 'username dan password tidak boleh kosong' });
        }

        if (password.value === confirmPassword.value) {
          dispatch({ type: 'REGISTER_SUCCESS', payload: { username, password } });
          saveCredentials({ username: username.value, password: password.value });
        } else {
          dispatch({ type: 'REGISTER_ERROR', payload: 'Password dan konfirmasi password tidak sama' });
        }
      }, 2000);
    } catch (error) {
      dispatch({ type: 'REGISTER_ERROR', payload: error });
      throw Error(error);
    }
  }

  return {
    onSubmit,
    state,
    visible,
    setVisible,
  };
}
