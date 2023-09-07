/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import AnimationFade from '../common/AnimationFade';
import { useTodosContext } from '@/context/todosContext';

export default function Card({ filterdata, tab }) {
  const { dispatch } = useTodosContext();
  const filterTodos = useMemo(() => {
    if (tab === 'all') {
      return filterdata;
    }
    return filterdata?.filter((todo) => todo?.type === tab);
  }, [filterdata, tab]);

  return (
    <div className="grid grid-cols-4 gap-y-6 gap-x-5">
      {filterTodos.map((todo, i) => (
        <AnimationFade key={i}>
          <div className="flex flex-col gap-10 px-4 py-6 border-input">
            <div className="flex flex-row items-center justify-between">
              <span className="text-xs font-medium uppercase text-fourty-colors">{todo?.type}</span>
              <span className="text-xs font-medium uppercase text-fourty-colors">{todo?.status}</span>
            </div>

            <div className="flex flex-col gap-2.5">
              <h1 className="m-0 text-sm font-medium uppercase text-[#6A6A6A] dark:text-fourty-colors">{todo?.title}</h1>
              <p className="m-0 text-xs font-normal text-[#838383] dark:text-secondary-colors">
                {todo?.description}
              </p>
            </div>

            <div className="flex flex-row items-center gap-2.5">
              <button
                type="button"
                className="w-full py-2 text-xs font-semibold text-red-300 uppercase border-input"
                onClick={() => dispatch({ type: 'DELETE_TODO', id: todo?.id })}
              >
                remove
              </button>
            </div>
          </div>
        </AnimationFade>
      ))}
    </div>
  );
}
