import React from 'react';

export default function CultureSection() {
  return (
    <section className='grid grid-cols-2 h-culture-section'>
      <div>
        <h3 className='text-brand-primary text-2xl mb-4'>
          Culturally Strong and Self Sufficient
        </h3>
        <div className='bg-gray-300 h-culture-main-pic w-culture-main-pic'>
          Picture goes here
        </div>
      </div>
      <div className='grid grid-flow-row grid-cols-2 gap-4 mx-6 auto-cols-max'>
        <div className='h-culture-block w-culture-block'>
          <div className='bg-brand-primary text-center text-white text-lg py-2'>
            Our History
          </div>
          <div className='h-culture-pic bg-gray-300'></div>
          <div className='bg-brand-primary text-white text-center py-2'>
            History Brief Here
          </div>
        </div>
        <div className='h-culture-block w-culture-block'>
          <div className='bg-brand-primary text-center text-white text-lg py-2'>
            Our Elders
          </div>
          <div className='h-culture-pic bg-gray-300'></div>
          <div className='bg-brand-primary text-white text-center py-2'>
            Elders Brief Here
          </div>
        </div>
        <div className='h-culture-block w-culture-block'>
          <div className='bg-brand-primary text-center text-white text-lg py-2'>
            Our Land
          </div>
          <div className='h-culture-pic bg-gray-300'></div>
          <div className='bg-brand-primary text-white text-center py-2'>
            Land Brief Here
          </div>
        </div>
        <div className='h-culture-block w-culture-block'>
          <div className='bg-brand-primary text-center text-white text-lg py-2'>
            Our Community
          </div>
          <div className='h-culture-pic bg-gray-300'></div>
          <div className='bg-brand-primary text-white text-center py-2'>
            Community Brief Here
          </div>
        </div>
      </div>
    </section>
  );
}
