import React from 'react';

export default function EventContainer() {
  return (
    <div className='flex justify-center items-center bg-brand-secondary'>
      <div>
        <h3 className='text-white text-3xl font-bold uppercase mb-12'>
          Upcoming Events
        </h3>
        <p className='block py-2 px-4 text-white border-white border-2 w-1/2 mx-auto'>
          More Events
        </p>
      </div>
    </div>
  );
}
