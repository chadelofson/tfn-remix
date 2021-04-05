import React from 'react';
import Nav from './Nav';

export default function Header() {
  return (
    <header className='absolute top-0 z-10 w-full bg-transparent pt-2 pr-7 pb-0 pl-0 h-20 flex flex-col justify-end align-bottom'>
      <Nav />
    </header>
  );
}
