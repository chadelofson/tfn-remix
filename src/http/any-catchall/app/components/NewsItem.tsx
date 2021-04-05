import React from 'react';

export default function NewsItem() {
  return (
    <div className='text-white border-2 border-gray-400 pl-4 py-4'>
      <h3 className='text-lg'>Example News Headline 1</h3>
      <p>A snippet of the article</p>
      <p>
        <a href='#'>Read More...</a>
      </p>
    </div>
  );
}
