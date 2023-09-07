import React, { useMemo, useState } from 'react';

export default function TestTabs() {
  const [tabs, setTabs] = useState('all');
  const dummyData = [
    {
      id: 1,
      name: 'test1',
      type: 'test1',
    },
    {
      id: 2,
      name: 'test2',
      type: 'test2',
    },
    {
      id: 3,
      name: 'test3',
      type: 'test3',
    },
    {
      id: 4,
      name: 'test4',
      type: 'test4',
    },
  ];

  return (
    <div>
      <div className="flex flex-row items-center gap-4">
        {
                dummyData?.map((value) => (
                  <button
                    key={value?.id}
                    type="button"
                    onClick={() => setTabs(value?.type)}
                    className="p-3 rounded-lg bg-slate-300"
                  >
                    {value?.type}
                  </button>
                ))
            }
        <Todos tabs={tabs} todos={dummyData} />
      </div>
    </div>
  );
}

function Todos({ tabs, todos }) {
  const filteredTodos = useMemo(() => {
    if (tabs === 'all') {
      return todos;
    }
    return todos.filter((todo) => todo.type === tabs);
  }, [tabs, todos]);

  return (
    <div>
      {filteredTodos.map((value) => (
        <span key={value.id}>{value.name}</span>
      ))}
    </div>
  );
}
