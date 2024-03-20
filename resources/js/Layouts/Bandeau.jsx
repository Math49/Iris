import React, { useEffect, useRef } from 'react';

export default function Bandeau() {
    const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const textWidth = wrapper.offsetWidth;
    const wrapperWidth = wrapper.parentElement.offsetWidth;

    const animation = () => {
      wrapper.style.transform = `translateX(${wrapperWidth}px)`;
      wrapper.style.transition = 'transform 40s linear';

      setTimeout(() => {
        wrapper.style.transform = `translateX(-${textWidth}px)`;
        wrapper.style.transition = 'transform 40s linear';
      }, 10);
    };

    const handleTransitionEnd = () => {
      wrapper.style.transition = 'none';
      wrapper.style.transform = `translateX(${wrapperWidth}px)`;

      setTimeout(() => {
        wrapper.style.transition = 'transform 40s linear';
        wrapper.style.transform = `translateX(-${textWidth}px)`;
      }, 10);
    };

    animation();
    wrapper.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      wrapper.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);

    return (
        <div className="bg-bleu text-white h-7 text-sm overflow-hidden">
            <div className='w-[130%] mt-[2px]' ref={wrapperRef}>
                <span>Pour toute urgence, appeler le <span className="font-bold">3018</span>. Accompagne les jeunes, leur parents et les professionnels pour les problématiques du cyberharcèlement. Numéro gratuit et accessible 6 jours sur 7, de 9 heures à 20 heures, par téléphone, par tchat en direct, via Messenger et WhatsApp et sur <span className="font-bold">3018.fr</span>.</span>
            </div>                
        </div>
    );
}