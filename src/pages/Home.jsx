import React, { useDeferredValue, useMemo, useState } from 'react';
import Footer from '@/components/common/Footer';
import Darkmode from '@/components/common/Darkmode';
import Card from '@/components/home/Card';
import Category from '@/components/home/Category';
import { useTodosContext } from '@/context/todosContext';

export default function Home() {
  const { state } = useTodosContext();
  const [tab, setTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const deferredQuery = useDeferredValue(searchQuery);

  // Gunakan useMemo untuk menghitung filterData
  const filterData = useMemo(() => {
    if (!deferredQuery) {
      return state?.todos;
    }
    return state?.todos?.filter(
      (query) => query?.title.toLowerCase().includes(deferredQuery.toLowerCase()),
    );
  }, [state?.todos, deferredQuery]);

  return (
    <>
      <section className="grid grid-cols-1 gap-10">
        <Category setSearchQuery={setSearchQuery} data={filterData} setTab={setTab} />
        <Card filterdata={filterData} tab={tab} />
        <Footer />
      </section>
      <Darkmode />
    </>
  );
}
