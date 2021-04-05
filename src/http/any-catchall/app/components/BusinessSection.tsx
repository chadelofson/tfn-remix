import React from 'react';

export default function BusinessSection() {
  return (
    <section className='flex justify-center items-center h-tfn-companies'>
      <div>
        <h3 className='text-brand-primary text-5xl font-medium text-center mb-8'>
          TS'KW'AYLAXW FIRST NATION COMPANIES
        </h3>
        <div className='container mx-auto grid grid-cols-4 gap-4'>
          <div className='w-48 h-24 px-4 py-2 text-center leading-10 bg-gray-300'>
            Logo 1
          </div>
          <div className='w-48 h-24 px-4 py-2 text-center leading-10 bg-gray-300'>
            Logo 2
          </div>
          <div className='w-48 h-24 px-4 py-2 text-center leading-10 bg-gray-300'>
            Logo 3
          </div>
          <div className='w-48 h-24 px-4 py-2 text-center leading-10 bg-gray-300'>
            Logo 4
          </div>
        </div>
      </div>
    </section>
  );
}
