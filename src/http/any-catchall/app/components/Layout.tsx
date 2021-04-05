import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <div className='relative top-0 h-24 bg-brand-primary'></div>
      {children}
    </>
  );
}
