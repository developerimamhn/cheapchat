'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import image2 from './image/iamsaseszas.png';
import image4 from './image/backgrundtexxt.png';
import image3 from './image/image4.png';
import image8 from './image/canada.png';
import image9 from './image/image5 (2).png';
import image10 from './image/numbeingss.png';


gsap.registerPlugin(ScrollTrigger);

const Pagetwo = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      // Animation for text elements (fade in down)
      gsap.from(textRef.current, {
        opacity: 0,
        y: -50, // Start above and move down
        duration: 1.5,
        ease: 'power2.out',
      });

      // Animation for buttons (fade in down)
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: -50, // Start above and move down
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });

      // Animation for image (fade in down)
      gsap.from(imageRef.current, {
        opacity: 0,
        y: -50, // Start above and move down
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });
    }
  }, []);

  // GSAP animation effect for items (fade in down)
  useEffect(() => {
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      itemRefs.current.forEach((el, index) => {
        if (!el) return;

        gsap.fromTo(
          el,
          {
            autoAlpha: 0,
            y: -50, // Start above and move down
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 100%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.1, // Delay between each item
          }
        );
      });
    }
  }, []);

  const datatwo = [  {
  imagesvg : `<svg className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[79px]' viewBox="0 0 79 78" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="79" height="78" rx="39" fill="#897F7F" fill-opacity="0.2"/>
              <path d="M47.2917 37.9583H47.3125M38.9583 37.9583H38.9792M30.625 37.9583H30.6458M46.8751 53.7918L58.7501 57.7501L54.7917 45.8751C54.7917 45.8751 56.6667 43.1667 56.6667 37.9583C56.6667 28.1783 48.7384 20.25 38.9583 20.25C29.1783 20.25 21.25 28.1783 21.25 37.9583C21.25 47.7384 29.1783 55.6667 38.9583 55.6667C44.3431 55.6667 46.8751 53.7918 46.8751 53.7918Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              `,
  textone : 'Выбери AI',
  terxttwo : 'Озвучить текст',
  textbtn : 'НАЧАТЬ',
  backgroundimage: image2
},
  {
  imagesvg : `<svg  viewBox="0 0 79 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="79" height="78" rx="39" fill="#897F7F" fill-opacity="0.2"/>
<path d="M48.3333 45.25H31.6666C27.0642 45.25 23.3333 48.981 23.3333 53.5833V57.75H56.6666V53.5833C56.6666 48.981 52.9356 45.25 48.3333 45.25Z" fill="black" fill-opacity="0.15"/>
<path d="M39.9999 36.9167C44.6023 36.9167 48.3333 33.1857 48.3333 28.5833C48.3333 23.981 44.6023 20.25 39.9999 20.25C35.3975 20.25 31.6666 23.981 31.6666 28.5833C31.6666 33.1857 35.3975 36.9167 39.9999 36.9167Z" fill="black" fill-opacity="0.15"/>
<path d="M58.6523 41.0833V41.0729M54.5833 29.4167C55.1266 27.7262 56.7429 26.5 58.6523 26.5C61.0074 26.5 62.9166 28.3655 62.9166 30.6667C62.9166 34.0141 59.3384 32.3683 58.7499 35.875M31.6666 45.25H48.3333C52.9356 45.25 56.6666 48.981 56.6666 53.5833V57.75H23.3333V53.5833C23.3333 48.981 27.0642 45.25 31.6666 45.25ZM48.3333 28.5833C48.3333 33.1857 44.6023 36.9167 39.9999 36.9167C35.3975 36.9167 31.6666 33.1857 31.6666 28.5833C31.6666 23.981 35.3975 20.25 39.9999 20.25C44.6023 20.25 48.3333 23.981 48.3333 28.5833Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  terxttwo : 'Готовые, популярные<br className="sm:block hidden" />промты',
  textbtn : 'ВЫБРАТЬ',
  backgroundimage : image3
,
  svgbutton : `<svg viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_300_1795)">
<rect width="77" height="77" rx="38.5" fill="#454E71" fill-opacity="0.79" shape-rendering="crispEdges"/>
<path d="M23.0237 39.0987L39 55.6667L54.9762 39.0987C56.7522 37.2569 57.75 34.7589 57.75 32.1543C57.75 26.7303 53.5101 22.3333 48.2798 22.3333C45.7682 22.3333 43.3594 23.368 41.5834 25.2098L39 27.8889L36.4166 25.2098C34.6406 23.368 32.2318 22.3333 29.7202 22.3333C24.4899 22.3333 20.25 26.7303 20.25 32.1543C20.25 34.7589 21.2477 37.2569 23.0237 39.0987Z" fill="black" fill-opacity="0.15"/>
<path d="M23.0237 39.0987L39 55.6667L54.9762 39.0987C56.7522 37.2569 57.75 34.7589 57.75 32.1543C57.75 26.7303 53.5101 22.3333 48.2798 22.3333C45.7682 22.3333 43.3594 23.368 41.5834 25.2098L39 27.8889L36.4166 25.2098C34.6406 23.368 32.2318 22.3333 29.7202 22.3333C24.4899 22.3333 20.25 26.7303 20.25 32.1543C20.25 34.7589 21.2477 37.2569 23.0237 39.0987Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_300_1795" x="0" y="0" width="91" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="10" dy="10"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_300_1795"/>
<feBlend mode="normal" in="BackgroundImageFix" in2="effect1_dropShadow_300_1795" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
</filter>
</defs>
</svg>
`
},
  {
  imagesvg : `<svg viewBox="0 0 79 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="79" height="78" rx="39" fill="#897F7F" fill-opacity="0.2"/>
<path d="M31.6667 41.0833H44.1667M31.6667 49.4167H48.3334M42.0834 20.25H25.4167V57.75H54.5834V32.75M42.0834 20.25H44.1667L54.5834 30.6667V32.75M42.0834 20.25V28.5833C42.0834 30.6667 44.1667 32.75 46.2501 32.75H54.5834" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`,
  textone : 'Готовые роли AI для конкретных задач',
  terxttwo : 'Обработать вашу<br className="sm:block hidden" />фотографию',
  textbtn : 'ВЫБРАТЬ',
  backgroundimage : image4
,
  svgbutton : `<svg viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_300_1795)">
<rect width="77" height="77" rx="38.5" fill="#454E71" fill-opacity="0.79" shape-rendering="crispEdges"/>
<path d="M23.0237 39.0987L39 55.6667L54.9762 39.0987C56.7522 37.2569 57.75 34.7589 57.75 32.1543C57.75 26.7303 53.5101 22.3333 48.2798 22.3333C45.7682 22.3333 43.3594 23.368 41.5834 25.2098L39 27.8889L36.4166 25.2098C34.6406 23.368 32.2318 22.3333 29.7202 22.3333C24.4899 22.3333 20.25 26.7303 20.25 32.1543C20.25 34.7589 21.2477 37.2569 23.0237 39.0987Z" fill="black" fill-opacity="0.15"/>
<path d="M23.0237 39.0987L39 55.6667L54.9762 39.0987C56.7522 37.2569 57.75 34.7589 57.75 32.1543C57.75 26.7303 53.5101 22.3333 48.2798 22.3333C45.7682 22.3333 43.3594 23.368 41.5834 25.2098L39 27.8889L36.4166 25.2098C34.6406 23.368 32.2318 22.3333 29.7202 22.3333C24.4899 22.3333 20.25 26.7303 20.25 32.1543C20.25 34.7589 21.2477 37.2569 23.0237 39.0987Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_300_1795" x="0" y="0" width="91" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="10" dy="10"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_300_1795"/>
<feBlend mode="normal" in="BackgroundImageFix" in2="effect1_dropShadow_300_1795" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
</filter>
</defs>
</svg>
`
},


]




  return (
    <div ref={buttonRef} className='relative pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[90px] md:px-7 px-6'>
      <div className='w-full container mx-auto'>
         <h1 className='tesfastaastas text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[96px] pt-[12px] sm:pt-[13px] md:pt-[14px] lg:pt-[15px] xl:pt-[16px] 2xl:pt-[19spx] inline-block'>
            Может тебе сгенерировать изображение?
          </h1>
          <div className='grid grid-cols-2 pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[85px] gap-[10px] sm:gap-[20px] md:gap-[24px] lg:gap-[32px] xl:gap-[36px] 2xl:gap-[42px]'>
            <div className='paddinoiuretheestwo rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[32px] xl:rounded-[36px] 2xl:rounded-[40px] pt-[20px] sm:pt-[24px] md:pt-[32px] lg:pt-[36px] xl:pt-[40px] 2xl:pt-[47px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[45px] pb-[15px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[65px] relative overflow-hidden flex flex-col justify-between'>
            <Image src={datatwo[0].backgroundimage} alt="test" className='absolute right-0 bottom-1 h-[86%]  2xl:h-[88%] w-[100%] sm:w-[50%]' />
              <Image src={image8} alt='ext' className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[79px]'/>
              <h1 className='imageonedata text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px] inline-block pt-[10px] sm:pt-[11px] md:pt-[12px] lg:pt-[13px]' dangerouslySetInnerHTML={{ __html: datatwo[0].textone }}></h1>
              <h1 className='imageonedatathre text-[20px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[96px] pt-[88px] pb-[78px]' dangerouslySetInnerHTML={{ __html: datatwo[0].terxttwo }}></h1>
              <button className='texndserbtnback w-full py-[8px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[18px]' ><span className='texndserbtn text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]' dangerouslySetInnerHTML={{ __html: datatwo[0].textbtn }}></span></button>
            </div>
            <div className='grid grid-rows-2 gap-[15px] sm:gap-[24px] md:gap-[32px] lg:gap-[36px] xl:gap-[40px] 2xl:gap-[47px]'>
              <div className='paddinoiuretheesonetwo rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[32px] xl:rounded-[36px] 2xl:rounded-[40px] !border-[#00000026] !border-[1px] pt-[20px] sm:pt-[24px] md:pt-[32px] lg:pt-[36px] xl:pt-[40px] 2xl:pt-[47px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[45px] pb-[15px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[65px] relative overflow-hidden'>
                  <Image src={datatwo[2].backgroundimage} alt="test" className='absolute left-0 -bottom-2 h-[76%] w-[100%] sm:w-[55%]' />
                  <Image src={image9} alt='ext' className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[79px]'/>
                  <h1 className='imageonedatathreon text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] pt-[15px] pb-[17px]' dangerouslySetInnerHTML={{ __html: datatwo[1].terxttwo }}></h1>
                  <div className='flex gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[33px] items-center '>
                    <button className='texndserbtnback hover:!bg-[#3e4870c9] !bg-[#454e71c9] w-full py-[2px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px]' ><span className='texndserbtn text-[10px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px]' dangerouslySetInnerHTML={{ __html: datatwo[1].textbtn }}></span></button>
                    <div className='w-[48px] xl:w-[64px] 2xl:w-[77px]' dangerouslySetInnerHTML={{ __html: datatwo[1].svgbutton }} />
                  </div>
              </div>
            <div className='paddinoiuretheesonetwo rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[32px] xl:rounded-[36px] 2xl:rounded-[40px] !border-[#00000026] !border-[1px] pt-[20px] sm:pt-[24px] md:pt-[32px] lg:pt-[36px] xl:pt-[40px] 2xl:pt-[47px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[45px] pb-[15px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[65px] relative overflow-hidden flex flex-col justify-between'>
                <Image src={datatwo[1].backgroundimage} alt="test" className='absolute left-0 bottom-0  h-full w-[95%] sm:w-[55%]' />
                 <Image src={image10} alt='ext' className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[79px]'/>
                <h1 className='imageonedatathreon text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] pt-[15px] pb-[17px]' dangerouslySetInnerHTML={{ __html: datatwo[2].terxttwo }}></h1>
                <div className='flex gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[33px] items-center '>
                  <button className='texndserbtnback hover:!bg-[#3e4870c9] !bg-[#454e71c9] w-full py-[2px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px]' ><span className='texndserbtn text-[10px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px]' dangerouslySetInnerHTML={{ __html: datatwo[2].textbtn }}></span></button>
                  <div className='w-[48px] xl:w-[64px] 2xl:w-[77px]' dangerouslySetInnerHTML={{ __html: datatwo[2].svgbutton }} />
                </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Pagetwo;