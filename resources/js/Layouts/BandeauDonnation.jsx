import React, { useEffect, useRef } from 'react';
import star from '../../img/Star4.png';

export default function Bandeau() {
    const FirstwrapperRef = useRef(null);
    const SecondwrapperRef = useRef(null);

  useEffect(() => {
    const Firstwrapper = FirstwrapperRef.current;
    const FirsttextWidth = Firstwrapper.offsetWidth;
    const FirstwrapperWidth = Firstwrapper.parentElement.offsetWidth;

    const Secondwrapper = SecondwrapperRef.current;
    const SecondtextWidth = Secondwrapper.offsetWidth;
    const SecondwrapperWidth = Secondwrapper.parentElement.offsetWidth;

    const animation = () => {
      Firstwrapper.style.transform = `translateX(${FirstwrapperWidth}px)`;
      Secondwrapper.style.transform = `translateX(${SecondwrapperWidth}px)`;
      Firstwrapper.style.transition = 'transform 60s linear';
      Secondwrapper.style.transition = 'transform 40s linear';

      setTimeout(() => {
        Firstwrapper.style.transform = `translateX(-${FirsttextWidth}px)`;
        Secondwrapper.style.transform = `translateX(-${SecondtextWidth}px)`;
        Firstwrapper.style.transition = 'transform 60s linear';
        Secondwrapper.style.transition = 'transform 40s linear';
      }, 10);
    };

    const handleTransitionEnd = () => {
      Firstwrapper.style.transition = 'none';
      Secondwrapper.style.transition = 'none';
      Firstwrapper.style.transform = `translateX(${FirstwrapperWidth}px)`;
      Secondwrapper.style.transform = `translateX(${SecondwrapperWidth}px)`;

      setTimeout(() => {
        Firstwrapper.style.transition = 'transform 60s linear';
        Secondwrapper.style.transition = 'transform 40s linear';
        Firstwrapper.style.transform = `translateX(-${FirsttextWidth}px)`;
        Secondwrapper.style.transform = `translateX(-${SecondtextWidth}px)`;
      }, 10);
    };

    animation();
    Firstwrapper.addEventListener('transitionend', handleTransitionEnd);
    Secondwrapper.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      Firstwrapper.removeEventListener('transitionend', handleTransitionEnd);
      Secondwrapper.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);

    return (
      <>
        <div className="bg-bleu text-white text-4xl overflow-hidden rotate-[-7deg] w-[110%] ml-[-50px]">
            <div className='w-[200%] my-[15px]' ref={FirstwrapperRef}>
                <span className='flex gap-3'>S’entraider pour mieux s’en sortir <img className=' w-12 h-12' src={star}/> S’entraider pour mieux s’en sortir <img className=' w-12 h-12' src={star}/> S’entraider pour mieux s’en sortir <img className=' w-12 h-12' src={star}/> S’entraider pour mieux s’en sortir <img className=' w-12 h-12' src={star}/> </span>
            </div>
        </div>
        <div className="bg-bleu_fonce text-white text-4xl overflow-hidden rotate-[7deg] w-[110%] ml-[-50px]">
          <div className='w-[200%] my-[15px]' ref={SecondwrapperRef}>
              <span className='flex gap-3'>S’entraider pour mieux s’en sortir <img className=' w-12 h-12' src={star}/> S’entraider pour mieux s’en sortir <img className=' w-12 h-12' src={star}/> S’entraider pour mieux s’en sortir <img className=' w-12 h-12' src={star}/> S’entraider pour mieux s’en sortir <img className=' w-12 h-12' src={star}/> </span>
          </div>
      </div>
      </>
    );
}