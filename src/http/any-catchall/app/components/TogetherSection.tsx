import React from 'react';

export default function TogetherSection() {
  return (
    <section className='h-together my-16'>
      <h3 className='text-brand-primary text-5xl uppercase my-5 w-together-text ml-20'>
        Working Together For a brighter tomorrow
      </h3>
      <div className='grid grid-cols-4 gap-2 h-48 mx-4'>
        <div className='h-together-block w-together-block bg-gray-300'>
          <p className='uppercase'>Jobs</p>
        </div>
        <div className='h-together-block w-together-block bg-gray-300'>
          <p className='uppercase'>contact</p>
        </div>
        <div className='h-together-block w-together-block bg-gray-300'>
          <p className='uppercase'>about us</p>
        </div>
        <div className='h-together-block w-together-block bg-gray-300'>
          <p className='uppercase'>forms & documents</p>
        </div>
      </div>
    </section>
  );
}
