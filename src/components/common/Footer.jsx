import React from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 py-8 text-sm uppercase navbar dark:bg-fourty-colors dark:text-main-colors text-fourty-colors">
      <p className="max-w-3xl mx-auto text-center">
        website ini di buat hanya untuk kesenangan developer saja!, jika anda tidak menyukai
        website x.tdos.
        anda boleh melaporkan saya ke lurah /rt /rw terdekat agar saya segera mendapatkan bansos.
      </p>

      <Link to="/" className="flex flex-row items-center gap-2 mx-auto text-sm capitalize">
        <AiOutlineLinkedin className="xl:text-3xl" />
        <span>ramadhan_perkasa</span>
      </Link>
    </footer>
  );
}
