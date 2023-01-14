import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import 'animate.css';
function Home() {
    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },
    
        {
          url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
      ];

      const [currentIndex, setCurrentIndex] = useState(0);

      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    return (
    <section className='max-w-[full] h-[700px] w-1300px bg-[#0F2E71]' id='home'>
   <div class="h-56 grid grid-cols-1 gap-4 content-start ... md:grid-cols-2">
  
<div class="max-w-[1100px] h-[650px] w-1100px m-auto py-20 px-10 relative group ">
<h1 class="animate__animated animate__fadeInLeft mb-4 text-7xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl "><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Titulo</span> Principal</h1>
<p class="text-2xl font-normal text-white lg:text-xl ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
    <div class="items-center justify-center py-14 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        
        <a href="#contact" class="w-full sm:w-auto text-white rounded-lg inline-flex items-center justify-center px-6 py-5 bg-sky-500/100  hover:bg-blue  focus:border-blue-400 ">
          <div class="text-left">
                <div class="-mt-1 font-sans text-x font-semibold">Contactanos</div>
            </div>
        </a>
    </div>
</div>

  <div><div className='animate__animated animate__fadeInRight max-w-[1100px] h-[650px] w-1100px m-auto py-6 px-4 relative group hidden md:block'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500  '
      >
      </div>
      
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer '
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div></div>
</div>
   

</section>
  )
}

export default Home