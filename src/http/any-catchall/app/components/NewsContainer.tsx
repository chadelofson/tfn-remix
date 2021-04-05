import React from 'react';
import NewsItem from './NewsItem';

export default function NewsContainer() {
  return (
    <div className='grid grid-cols-2 gap-2 bg-brand-primary'>
      <div className='flex justify-center items-center'>
        <h3 className='text-white text-5xl font-bold'>Recent News</h3>
      </div>
      <div className='flex flex-col justify-around mr-1'>
        <NewsItem />
        <NewsItem />
        <button className='block py-2 px-4 text-white border-white border-2 w-1/4'>
          MORE
        </button>
      </div>
    </div>
  );
}
