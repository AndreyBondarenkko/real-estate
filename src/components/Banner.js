import React from 'react';

//import Components
import Search from '../components/Search';

//import images
import Image from '../assets/img/house-banner.png';

const Banner = () => {
  return (
    <section className='mb-8 x1:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lf:mb-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className=' text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-violet-700'>Rent </span>
            Your Dream House With Us.
          </h1>
          <p className='max-w-[480px] mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, magnam dignissimos vel dicta quam excepturi ut ad enim? Ducimus, voluptate.
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt="banner image" />
        </div>
      </div>
      <Search />
    </section>
  )
};

export default Banner;
