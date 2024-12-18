'use client';

import { Profiler } from 'react';
import { NextPage } from 'next';
import { callback } from '../utils/profiler';
import { Results } from './components/Results';

const Search: NextPage = () => (
  <>
    <title>Search</title>
    <h1 className="text-4xl">Search</h1>
    <Profiler id="App" onRender={callback}>
      <Results />
    </Profiler>
  </>
);

export default Search;
