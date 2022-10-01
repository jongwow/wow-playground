import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Items } from './components/Items';
import { AddItemButton } from './components/AddItemButton';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>WOW-TODO</title>
        <meta name="description" content="Simple To Do App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Simple To Do App!</a>
        </h1>
        <h6>(STD...A?)</h6>
        <AddItemButton />
        <Items />
      </main>
    </div>
  );
};

export default Home;
