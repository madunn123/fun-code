import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import useLogin from '@/hooks/useLogin';
import useInputForm from '@/hooks/useInputForm';
import Darkmode from '@/components/common/Darkmode';

export default function Login() {
  const {
    onSubmit, visible, setVisible, state,
  } = useLogin();
  const username = useInputForm('');
  const password = useInputForm('');

  return (
    <>
      <section className="flex items-center justify-center h-screen">
        <div className="xl:w-[501px] p-10 xl:p-20 xl:mb-36 border-login">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-[7px]">
              <h1 className="m-0 text-[#6A6A6A] font-bold text-2xl">X.TDOs</h1>
              <small className="text-[#969696] text-sm font-medium">Welcome and enjoy the features.</small>
            </div>

            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => onSubmit({ username, password }, e)}
            >
              <div className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="email / username"
                  {...username}
                  className="border-[2px] text-sm placeholder:capitalize lowercase px-4 border-secondary-colors bg-inherit outline-none p-2.5 text-[#999999]"
                />

                <div className="relative">
                  <input
                    type={visible ? 'text' : 'password'}
                    placeholder="password"
                    {...password}
                    className=" w-full border-[2px] text-sm placeholder:capitalize lowercase px-4 border-secondary-colors bg-inherit outline-none p-2.5 text-[#999999]"
                  />
                  <button
                    type="button"
                    onClick={() => setVisible(!visible)}
                    className="absolute top-3 xl:top-2.5 right-4"
                  >
                    {visible ? <AiOutlineEye className="text-xl text-fourty-colors xl:text-2xl" /> : <AiOutlineEyeInvisible className="text-xl text-fourty-colors xl:text-2xl" />}
                  </button>

                  {state?.error && <small className="text-xs text-red-400 capitalize">{state?.error}</small>}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button type="submit" className="text-sm text-fourty-colors bg-[#6A6A6A] p-3 uppercase font-bold">
                  {state?.loading ? 'Loading...' : 'sign in'}
                </button>
                <Link to="/register" className="text-sm text-[#969696]">
                  Don’t have account?
                  {' '}
                  <b className="text-fourty-colors">Create now</b>
                </Link>
              </div>
            </form>

          </div>
        </div>
      </section>

      <Darkmode />
    </>
  );
}
