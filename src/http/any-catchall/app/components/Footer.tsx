import React from 'react';

export default function Footer() {
  return (
    <footer className='grid grid-cols-4 gap-2 h-footer'>
      <div></div>
      <div>
        <div className='mt-12 mb-5'>
          <h3 className='text-brand-primary mb-7'>Office Address</h3>
          <p>
            35100 HWY 99 N<br />
            Box 2200
            <br />
            Lillooet, BC V0K 1V0
          </p>
        </div>
        <h3 className='text-brand-primary mb-7'>Office Hours</h3>
        <p>
          Mon - Fri
          <br />
          8:30am - 4:30pm
        </p>
      </div>
      <div>
        <div className='mt-12'>
          <h3 className='text-brand-primary mb-7'>Contact</h3>
          <p>info@tskwaylaxw.com</p>
          <p>250-256-4204</p>
        </div>
      </div>
      <div>
        <div className='mt-12'>
          <h3 className='text-brand-primary mb-7'>Social Media</h3>
          <p>Ts'kw'aylaxw First Nation</p>
        </div>
      </div>
    </footer>
  );
}
