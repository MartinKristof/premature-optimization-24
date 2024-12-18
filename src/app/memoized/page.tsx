'use client';

import { Profiler } from 'react';
import { NextPage } from 'next';
import { MemoizedApp } from './components/MemoizedApp';
import { callback } from '../utils/profiler';

const Memoized: NextPage = () => (
  <>
    <title>Memoized</title>
    <h1 className="text-4xl">Memoized</h1>
    <Profiler id="MemoizedApp" onRender={callback}>
      <MemoizedApp />
    </Profiler>
  </>
);

export default Memoized;
