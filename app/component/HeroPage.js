'use client';


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from 'next/image';
import image1 from './image/image1 (2).png';



const HeroPage = () => {

  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  useEffect(() => {
    // Check if the screen width is greater than 768px (non-mobile)
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      // Animation for text elements
      gsap.from(textRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: 'power2.out',
      });

      // Animation for buttons
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });

      // Animation for image
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });
    }
  }, []);
  const itemRefs = useRef([]);
  useEffect(() => {
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      itemRefs.current.forEach((el, index) => {
        if (!el) return;

        gsap.fromTo(
          el,
          {
            autoAlpha: 0,
            y: 50,
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
  
  const dataone = [  {
  imagesvg : `<svg className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[79px]' viewBox="0 0 79 78" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="79" height="78" rx="39" fill="#897F7F" fill-opacity="0.2"/>
              <path d="M47.2917 37.9583H47.3125M38.9583 37.9583H38.9792M30.625 37.9583H30.6458M46.8751 53.7918L58.7501 57.7501L54.7917 45.8751C54.7917 45.8751 56.6667 43.1667 56.6667 37.9583C56.6667 28.1783 48.7384 20.25 38.9583 20.25C29.1783 20.25 21.25 28.1783 21.25 37.9583C21.25 47.7384 29.1783 55.6667 38.9583 55.6667C44.3431 55.6667 46.8751 53.7918 46.8751 53.7918Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              `,
  textone : 'Осталось лимитов <br/> 100%',
  terxttwo : 'Начнем<br/>новый<br/>диалог?',
  textbtn : 'НАЧАТЬ',
  backgroundimage : `<svg viewBox="0 0 526 514" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#paint0_angular_2007_2706_clip_path)" data-figma-skip-parse="true"><g transform="matrix(-0.197454 0.147266 -0.179868 -0.20861 456.285 331.49)"><foreignObject x="-2636.25" y="-2636.25" width="5272.49" height="5272.49"><div xmlns="http://www.w3.org/1999/xhtml" style="background:conic-gradient(from 90deg,rgba(122, 171, 240, 0.49) 0deg,rgba(245, 245, 245, 0.5) 90deg,rgba(0, 98, 236, 0.48) 270deg,rgba(122, 171, 240, 0.49) 360deg);height:100%;width:100%;opacity:0.4"></div></foreignObject></g></g><path d="M186 632H273.5C273.5 603.583 284.357 559.668 309.604 505.329C334.144 452.514 369.31 396.225 410.383 344.78C451.601 293.153 496.762 248.914 540.146 218.352C584.995 186.758 619.719 175.5 642 175.5V88V0.5C568.286 0.5 498.012 33.9709 439.362 75.2873C379.246 117.637 322.406 174.491 273.623 235.593C224.696 296.876 181.86 364.952 150.898 431.59C120.644 496.704 98.5 567.332 98.5 632H186Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.96078431606292725,&#34;g&#34;:0.96078431606292725,&#34;b&#34;:0.96078431606292725,&#34;a&#34;:0.50},&#34;position&#34;:0.250},{&#34;color&#34;:{&#34;r&#34;:0.0,&#34;g&#34;:0.38752788305282593,&#34;b&#34;:0.92788463830947876,&#34;a&#34;:0.47999998927116394},&#34;position&#34;:0.750}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.96078431606292725,&#34;g&#34;:0.96078431606292725,&#34;b&#34;:0.96078431606292725,&#34;a&#34;:0.50},&#34;position&#34;:0.250},{&#34;color&#34;:{&#34;r&#34;:0.0,&#34;g&#34;:0.38752788305282593,&#34;b&#34;:0.92788463830947876,&#34;a&#34;:0.47999998927116394},&#34;position&#34;:0.750}],&#34;transform&#34;:{&#34;m00&#34;:-394.90896606445312,&#34;m01&#34;:-359.73614501953125,&#34;m02&#34;:833.60748291015625,&#34;m10&#34;:294.53298950195312,&#34;m11&#34;:-417.21966552734375,&#34;m12&#34;:392.83352661132812},&#34;opacity&#34;:0.40000000596046448,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"/>
                    <g clip-path="url(#paint1_angular_2007_2706_clip_path)" data-figma-skip-parse="true"><g transform="matrix(-0.208246 -0.131564 0.130295 -0.24268 284.411 460.592)"><foreignObject x="-2636.25" y="-2636.25" width="5272.49" height="5272.49"><div xmlns="http://www.w3.org/1999/xhtml" style="background:conic-gradient(from 90deg,rgba(122, 171, 240, 0.49) 0deg,rgba(245, 245, 245, 0.5) 90deg,rgba(0, 98, 236, 0.48) 270deg,rgba(122, 171, 240, 0.49) 360deg);height:100%;width:100%;opacity:0.4"></div></foreignObject></g></g><path d="M-93 315.952L-61.6428 397.64C-35.1129 387.457 9.77545 381.855 69.5532 385.952C127.655 389.934 192.807 402.592 255.555 422.501C318.524 442.48 376.009 468.788 420.088 498.337C465.656 528.885 488.61 557.268 496.595 578.07L578.283 546.713L659.972 515.355C633.555 446.537 577.123 392.926 517.533 352.978C456.453 312.031 383.005 279.342 308.479 255.696C233.732 231.98 154.827 216.386 81.5195 211.361C9.88797 206.452 -63.9847 211.089 -124.357 234.264L-93 315.952Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.96078431606292725,&#34;g&#34;:0.96078431606292725,&#34;b&#34;:0.96078431606292725,&#34;a&#34;:0.50},&#34;position&#34;:0.250},{&#34;color&#34;:{&#34;r&#34;:0.0,&#34;g&#34;:0.38752788305282593,&#34;b&#34;:0.92788463830947876,&#34;a&#34;:0.47999998927116394},&#34;position&#34;:0.750}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.96078431606292725,&#34;g&#34;:0.96078431606292725,&#34;b&#34;:0.96078431606292725,&#34;a&#34;:0.50},&#34;position&#34;:0.250},{&#34;color&#34;:{&#34;r&#34;:0.0,&#34;g&#34;:0.38752788305282593,&#34;b&#34;:0.92788463830947876,&#34;a&#34;:0.47999998927116394},&#34;position&#34;:0.750}],&#34;transform&#34;:{&#34;m00&#34;:-416.49285888671875,&#34;m01&#34;:260.59014892578125,&#34;m02&#34;:362.36282348632812,&#34;m10&#34;:-263.12805175781250,&#34;m11&#34;:-485.36068725585938,&#34;m12&#34;:834.83605957031250},&#34;opacity&#34;:0.40000000596046448,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"/>
                    <defs>
                    <clipPath id="paint0_angular_2007_2706_clip_path"><path d="M186 632H273.5C273.5 603.583 284.357 559.668 309.604 505.329C334.144 452.514 369.31 396.225 410.383 344.78C451.601 293.153 496.762 248.914 540.146 218.352C584.995 186.758 619.719 175.5 642 175.5V88V0.5C568.286 0.5 498.012 33.9709 439.362 75.2873C379.246 117.637 322.406 174.491 273.623 235.593C224.696 296.876 181.86 364.952 150.898 431.59C120.644 496.704 98.5 567.332 98.5 632H186Z"/></clipPath><clipPath id="paint1_angular_2007_2706_clip_path"><path d="M-93 315.952L-61.6428 397.64C-35.1129 387.457 9.77545 381.855 69.5532 385.952C127.655 389.934 192.807 402.592 255.555 422.501C318.524 442.48 376.009 468.788 420.088 498.337C465.656 528.885 488.61 557.268 496.595 578.07L578.283 546.713L659.972 515.355C633.555 446.537 577.123 392.926 517.533 352.978C456.453 312.031 383.005 279.342 308.479 255.696C233.732 231.98 154.827 216.386 81.5195 211.361C9.88797 206.452 -63.9847 211.089 -124.357 234.264L-93 315.952Z"/></clipPath></defs>
                    </svg>
`
},
  {
  imagesvg : `<svg width="79" height="78" viewBox="0 0 79 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="79" height="78" rx="39" fill="#897F7F" fill-opacity="0.2"/>
<path d="M48.3333 45.25H31.6666C27.0642 45.25 23.3333 48.981 23.3333 53.5833V57.75H56.6666V53.5833C56.6666 48.981 52.9356 45.25 48.3333 45.25Z" fill="black" fill-opacity="0.15"/>
<path d="M39.9999 36.9167C44.6023 36.9167 48.3333 33.1857 48.3333 28.5833C48.3333 23.981 44.6023 20.25 39.9999 20.25C35.3975 20.25 31.6666 23.981 31.6666 28.5833C31.6666 33.1857 35.3975 36.9167 39.9999 36.9167Z" fill="black" fill-opacity="0.15"/>
<path d="M58.6523 41.0833V41.0729M54.5833 29.4167C55.1266 27.7262 56.7429 26.5 58.6523 26.5C61.0074 26.5 62.9166 28.3655 62.9166 30.6667C62.9166 34.0141 59.3384 32.3683 58.7499 35.875M31.6666 45.25H48.3333C52.9356 45.25 56.6666 48.981 56.6666 53.5833V57.75H23.3333V53.5833C23.3333 48.981 27.0642 45.25 31.6666 45.25ZM48.3333 28.5833C48.3333 33.1857 44.6023 36.9167 39.9999 36.9167C35.3975 36.9167 31.6666 33.1857 31.6666 28.5833C31.6666 23.981 35.3975 20.25 39.9999 20.25C44.6023 20.25 48.3333 23.981 48.3333 28.5833Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  textone : 'Готовые роли AI для конкретных задач',
  terxttwo : 'Готовые роли AI для <br/> конкретных задач',
  textbtn : 'ВЫБРАТЬ',
  backgroundimage : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 526 238" fill="none">
  <g clip-path="url(#paint0_angular_300_1781_clip_path)" data-figma-skip-parse="true"><g transform="matrix(-0.288569 0.0218358 -0.10388 -0.29214 297.893 238.105)"><foreignObject x="-2517.81" y="-2517.81" width="5035.62" height="5035.62"><div xmlns="http://www.w3.org/1999/xhtml" style="background:conic-gradient(from 90deg,rgba(122, 171, 240, 0.49) 0deg,rgba(245, 245, 245, 0.5) 90deg,rgba(0, 98, 236, 0.48) 270deg,rgba(122, 171, 240, 0.49) 360deg);height:100%;width:100%;opacity:0.4"></div></foreignObject></g></g><path d="M-143 358.051L-65.0369 397.775C-53.5186 375.17 -23.1871 342.626 30.3178 307.418C81.8506 273.509 147.241 242.156 217.521 218.466C287.826 194.766 360.177 179.695 425.305 176.402C491.546 173.052 543.425 182.206 578.276 199.963L618 122L657.724 44.0369C585.492 7.23267 499.499 -2.5733 416.467 1.62528C332.322 5.88014 244 24.8646 161.621 52.6337C79.2154 80.4115 -0.091001 117.94 -65.878 161.229C-129.693 203.22 -189.304 256.193 -220.963 318.327L-143 358.051Z" data-figma-gradient-fill="{&quot;type&quot;:&quot;GRADIENT_ANGULAR&quot;,&quot;stops&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.96078431606292725,&quot;g&quot;:0.96078431606292725,&quot;b&quot;:0.96078431606292725,&quot;a&quot;:0.50},&quot;position&quot;:0.250},{&quot;color&quot;:{&quot;r&quot;:0.0,&quot;g&quot;:0.38752788305282593,&quot;b&quot;:0.92788463830947876,&quot;a&quot;:0.47999998927116394},&quot;position&quot;:0.750}],&quot;stopsVar&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.96078431606292725,&quot;g&quot;:0.96078431606292725,&quot;b&quot;:0.96078431606292725,&quot;a&quot;:0.50},&quot;position&quot;:0.250},{&quot;color&quot;:{&quot;r&quot;:0.0,&quot;g&quot;:0.38752788305282593,&quot;b&quot;:0.92788463830947876,&quot;a&quot;:0.47999998927116394},&quot;position&quot;:0.750}],&quot;transform&quot;:{&quot;m00&quot;:-577.1386718750,&quot;m01&quot;:-207.75950622558594,&quot;m02&quot;:690.34210205078125,&quot;m10&quot;:43.671615600585938,&quot;m11&quot;:-584.28094482421875,&quot;m12&quot;:508.41006469726562},&quot;opacity&quot;:0.40000000596046448,&quot;blendMode&quot;:&quot;NORMAL&quot;,&quot;visible&quot;:true}"/>
  <defs>
    <clipPath id="paint0_angular_300_1781_clip_path"><path d="M-143 358.051L-65.0369 397.775C-53.5186 375.17 -23.1871 342.626 30.3178 307.418C81.8506 273.509 147.241 242.156 217.521 218.466C287.826 194.766 360.177 179.695 425.305 176.402C491.546 173.052 543.425 182.206 578.276 199.963L618 122L657.724 44.0369C585.492 7.23267 499.499 -2.5733 416.467 1.62528C332.322 5.88014 244 24.8646 161.621 52.6337C79.2154 80.4115 -0.091001 117.94 -65.878 161.229C-129.693 203.22 -189.304 256.193 -220.963 318.327L-143 358.051Z"/></clipPath></defs>
    </svg>
`,
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
  terxttwo : 'Обработать документ',
  textbtn : 'ВЫБРАТЬ',
  backgroundimage : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 354 187" fill="none">
  <g clip-path="url(#paint0_angular_300_1806_clip_path)" data-figma-skip-parse="true"><g transform="matrix(-0.106885 -0.221926 0.239097 -0.136759 59.4246 408.659)"><foreignObject x="-2636.25" y="-2636.25" width="5272.49" height="5272.49"><div xmlns="http://www.w3.org/1999/xhtml" style="background:conic-gradient(from 90deg,rgba(122, 171, 240, 0.49) 0deg,rgba(245, 245, 245, 0.5) 90deg,rgba(0, 98, 236, 0.48) 270deg,rgba(122, 171, 240, 0.49) 360deg);height:100%;width:100%;opacity:0.4"></div></foreignObject></g></g><path d="M-183.991 86L-200.687 171.892C-172.792 177.315 -131.756 196.351 -83.2325 231.503C-36.0699 265.669 12.4747 310.93 55.1376 361.065C97.9512 411.377 132.76 464.149 154.482 512.566C176.939 562.62 181.364 598.854 177.113 620.726L263.005 637.422L348.897 654.118C362.963 581.758 343.516 506.388 314.149 440.933C284.049 373.84 239.084 307.197 188.413 247.652C137.592 187.929 78.9404 132.891 19.4344 89.7833C-38.7109 47.6608 -103.816 12.4468 -167.295 0.107635L-183.991 86Z" data-figma-gradient-fill="{&quot;type&quot;:&quot;GRADIENT_ANGULAR&quot;,&quot;stops&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.96078431606292725,&quot;g&quot;:0.96078431606292725,&quot;b&quot;:0.96078431606292725,&quot;a&quot;:0.50},&quot;position&quot;:0.250},{&quot;color&quot;:{&quot;r&quot;:0.0,&quot;g&quot;:0.38752788305282593,&quot;b&quot;:0.92788463830947876,&quot;a&quot;:0.47999998927116394},&quot;position&quot;:0.750}],&quot;stopsVar&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.96078431606292725,&quot;g&quot;:0.96078431606292725,&quot;b&quot;:0.96078431606292725,&quot;a&quot;:0.50},&quot;position&quot;:0.250},{&quot;color&quot;:{&quot;r&quot;:0.0,&quot;g&quot;:0.38752788305282593,&quot;b&quot;:0.92788463830947876,&quot;a&quot;:0.47999998927116394},&quot;position&quot;:0.750}],&quot;transform&quot;:{&quot;m00&quot;:-213.76937866210938,&quot;m01&quot;:478.19497680664062,&quot;m02&quot;:-72.788238525390625,&quot;m10&quot;:-443.85287475585938,&quot;m11&quot;:-273.51748657226562,&quot;m12&quot;:767.34411621093750},&quot;opacity&quot;:0.40000000596046448,&quot;blendMode&quot;:&quot;NORMAL&quot;,&quot;visible&quot;:true}"/>
  <defs>
    <clipPath id="paint0_angular_300_1806_clip_path"><path d="M-183.991 86L-200.687 171.892C-172.792 177.315 -131.756 196.351 -83.2325 231.503C-36.0699 265.669 12.4747 310.93 55.1376 361.065C97.9512 411.377 132.76 464.149 154.482 512.566C176.939 562.62 181.364 598.854 177.113 620.726L263.005 637.422L348.897 654.118C362.963 581.758 343.516 506.388 314.149 440.933C284.049 373.84 239.084 307.197 188.413 247.652C137.592 187.929 78.9404 132.891 19.4344 89.7833C-38.7109 47.6608 -103.816 12.4468 -167.295 0.107635L-183.991 86Z"/></clipPath></defs>
    </svg>
`,
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
        <div id="hero" ref={buttonRef} className='relative z-10'>
          <div className='relative z-[2] container mx-auto'>
              <div className='pt-[80px] sm:pt-[81px] md:pt-[150px] xl:pt-[210px] 2xl:pt-[300px] w-full relative'>
                <div className=''>
                  <div className=''>
                    <h1 ref={textRef} className='text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[55px]'>
                      <span className='tesfastaas'>Слава тебе чемпион, $username</span><span>👋</span>
                      </h1>
                      <h1 className='tesfastaastas text-[80px] pt-[12px] sm:pt-[13px] md:pt-[14px] lg:pt-[15px] xl:pt-[16px] 2xl:pt-[19spx] inline-block'>
                        Чем я могу тебе помочь?
                      </h1>
                      <div className='grid grid-cols-2 pt-[24px] sm:pt-[32px] md:pt-[36px] lg:pt-[40px] xl:pt-[48px] 2xl:pt-[55px] gap-[42px]'>
                        <div className='paddinoiurethees pt-[20px] sm:pt-[24px] md:pt-[32px] lg:pt-[36px] xl:pt-[40px] 2xl:pt-[47px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[45px] pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[65px] relative overflow-hidden flex flex-col justify-between'>
                          <div className='w-full absolute right-0 bottom-0' dangerouslySetInnerHTML={{ __html: dataone[0].backgroundimage }} />
                          <div className='w-[79px]' dangerouslySetInnerHTML={{ __html: dataone[0].imagesvg }} />
                          <h1 className='imageonedata text-[32px] inline-block pt-[10px] sm:pt-[11px] md:pt-[12px] lg:pt-[13px]' dangerouslySetInnerHTML={{ __html: dataone[0].textone }}></h1>
                          <h1 className='imageonedatathre text-[70px] pt-[88px] pb-[78px]' dangerouslySetInnerHTML={{ __html: dataone[0].terxttwo }}></h1>
                          <button className='texndserbtnback w-full py-[26px]' ><span className='texndserbtn text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]' dangerouslySetInnerHTML={{ __html: dataone[0].textbtn }}></span></button>
                        </div>
                        <div className='grid grid-rows-2 gap-[47px]'>
                          <div className='paddinoiuretheessnap !border-[#00000026] !border-[1px] pt-[20px] sm:pt-[24px] md:pt-[32px] lg:pt-[36px] xl:pt-[40px] 2xl:pt-[47px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[45px] pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[65px] relative overflow-hidden'>
                              <div className='w-full absolute right-0 bottom-0' dangerouslySetInnerHTML={{ __html: dataone[1].backgroundimage }} />
                              <div className='w-[79px]' dangerouslySetInnerHTML={{ __html: dataone[1].imagesvg }} />
                              <h1 className='imageonedatathreon text-[40px] pt-[15px] pb-[17px]' dangerouslySetInnerHTML={{ __html: dataone[1].terxttwo }}></h1>
                              <div className='flex gap-[33px]'>
                                <button className='texndserbtnback !bg-[#454e71c9] w-full py-[24px]' ><span className='texndserbtn text-[30px]' dangerouslySetInnerHTML={{ __html: dataone[1].textbtn }}></span></button>
                                <div className='w-[77px]' dangerouslySetInnerHTML={{ __html: dataone[1].svgbutton }} />
                              </div>
                          </div>
                        <div className='paddinoiuretheessnap !border-[#00000026] !border-[1px] pt-[20px] sm:pt-[24px] md:pt-[32px] lg:pt-[36px] xl:pt-[40px] 2xl:pt-[47px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[45px] pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[65px] relative overflow-hidden flex flex-col justify-between'>
                            <div className='w-full absolute right-0 bottom-0' dangerouslySetInnerHTML={{ __html: dataone[2].backgroundimage }} />
                            <div className='w-[79px]' dangerouslySetInnerHTML={{ __html: dataone[2].imagesvg }} />
                            <h1 className='imageonedatathreon text-[40px] pt-[15px] pb-[17px]' dangerouslySetInnerHTML={{ __html: dataone[2].terxttwo }}></h1>
                            <div className='flex gap-[33px]'>
                              <button className='texndserbtnback !bg-[#454e71c9] w-full py-[24px]' ><span className='texndserbtn text-[30px]' dangerouslySetInnerHTML={{ __html: dataone[2].textbtn }}></span></button>
                              <div className='w-[77px]' dangerouslySetInnerHTML={{ __html: dataone[2].svgbutton }} />
                            </div>
                        </div>
                      </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default HeroPage;