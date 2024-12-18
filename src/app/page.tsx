'use client';

import { Profiler } from 'react';
import { NextPage } from 'next';
import { App } from './components/App';
import { callback } from './utils/profiler';

const Home: NextPage = () => (
  <>
    <title>Basic - without memoization</title>
    <h1 className="text-4xl">Basic - without memoization</h1>
    <Profiler id="App" onRender={callback}>
      <App />
    </Profiler>
  </>
);

export default Home;
