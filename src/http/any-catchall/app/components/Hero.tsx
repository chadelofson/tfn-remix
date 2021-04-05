import React from 'react';
import background from '../../img/hero.png';

export default function Hero() {
  return (
    <section
      style={{ backgroundImage: `url(${background})` }}
      className='relative top-0 left-0 h-screen w-full overflow-hidden text-right bg-left-top bg-no-repeat bg-center bg-cover h-screen flex flex-row justify-end items-center'
    >
      <h2 className='text-left text-white text-4xl font-bold mr-32 w-72'>
        Ts'kw'aylaxw First
        <br />
        Nation
      </h2>
    </section>
  );
}
