import React from 'react';
import EventContainer from './EventContainer';
import NewsContainer from './NewsContainer';

export default function NewsSection() {
  return (
    <section className='h-news grid grid-cols-2 gap-0'>
      <NewsContainer />
      <EventContainer />
    </section>
  );
}
