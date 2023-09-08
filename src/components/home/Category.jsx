import React, { useMemo, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import CreateTodos from '../modal/CreateTodos';

export default function Category({ setSearchQuery, data, setTab }) {
  const [open, setOpen] = useState(false);

  const uniqueCategories = useMemo(() => [...new Set(data.map((item) => item.type))], [data]);

  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="m-0 text-lg font-semibold uppercase text-fourty-colors">x.tDOs Category</h1>

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center max-w-xl gap-4 overflow-x-auto">
            <button
              type="button"
              className="p-2.5 px-6 text-center uppercase text-sm text-fourty-colors category-border"
              onClick={() => setTab('all')}
            >
              All
            </button>
            {uniqueCategories?.map((typeTodos) => (
              <button
                key={typeTodos}
                type="button"
                className="p-2.5 px-6 text-center uppercase text-sm text-fourty-colors category-border"
                onClick={() => setTab(typeTodos)}
              >
                {typeTodos}
              </button>
            ))}
          </div>

          <div className="flex flex-row items-center gap-3.5">
            <div className="relative">
              <input
                type="text"
                className="w-full border-input bg-inherit p-2.5 text-sm uppercase text-fourty-colors placeholder:text-fourty-colors outline-none xl:w-[400px]"
                placeholder="search x.tdos ..."
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <button
                type="button"
                className="absolute top-0 flex items-center h-full xl:text-2xl text-fourty-colors right-4"
              >
                <AiOutlineSearch />
              </button>
            </div>
            <button
              type="button"
              className="border-input bg-inherit p-2.5 text-sm uppercase text-fourty-colors font-medium"
              onClick={() => setOpen(!open)}
            >
              create new x.tdos
            </button>
          </div>
        </div>
      </div>

      {open && <CreateTodos />}
    </>
  );
}
