/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Footer from '@/components/common/Footer';
import Darkmode from '@/components/common/Darkmode';
import Card from '@/components/home/Card';
import Category from '@/components/home/Category';
import { useTodosContext } from '@/context/todosContext';

export default function Home() {
  const { state } = useTodosContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [tab, setTab] = useState('all');

  const filterData = searchQuery
    ? state?.todos?.filter(
      (query) => query?.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    : state?.todos;

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
