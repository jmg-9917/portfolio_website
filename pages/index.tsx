import * as React from 'react';
import type { NextPage } from 'next';
import { Line } from '../components/line/line';
const Home: NextPage = () => {

  const onSubmit = () =>{
    console.log('Submit on enter click!')
  }

  return (
    <div >
      <form onSubmit={onSubmit}>
      <Line input={true} />
        </form>
    </div>
  )
}

export default Home
