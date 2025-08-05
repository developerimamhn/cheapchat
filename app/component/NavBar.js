"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from './image/logo.svg'
import righticon from './image/righticon.png';


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false); // For background styling
    const [isVisible, setIsVisible] = useState(true); // For show/hide
    const [prevScrollPos, setPrevScrollPos] = useState(0); // Tracks scroll direction

    // Handle clicks outside to close the menu
    const handleClickOutside = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Smooth scroll to section
    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: "smooth",
            });
            setToggle(false);
        }
    };

    // Scroll logic for show/hide and background change
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Update scrolled state for background styling
            if (currentScrollPos > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Show/hide navbar based on scroll direction
            if (currentScrollPos < 50) {
                setIsVisible(true); // Show near the top
            } else if (currentScrollPos > prevScrollPos) {
                setIsVisible(false); // Hide when scrolling down
            } else {
                setIsVisible(true); // Show when scrolling up
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    const handleScrollToTop   = (e, targetId) => {
        e.preventDefault();
        if (targetId === "") {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
      

    return (
        <div className={` header ${scrolled ? "scrolled" : " "} z-[150] w-full header backgronsdvg${
            isVisible ? "translate-y-0 transition-transform duration-300 " : "-translate-y-full transition-transform duration-300 "
        }`}>
            
            <header className='px-[24px] container mx-auto  flex  justify-between items-center pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[110px] pb-[20px] sm:pb-[24px] md:pb-[32px] lg:pb-[36px] xl:pb-[40px] 2xl:pb-[49px] relative  sm:overflow-hidden backgroundimage sm:px-0'>
            <dev className='linersext absolute bottom-0 left-0 w-full h-[2px] z-10'></dev>
            <Link onClick={(e) => handleScrollToTop(e, "")} href='#' className='cursor-pointer relative flex  items-center justify-start Froggo-Logo'>
                <Image className='w-[40px] md:w-[48px] lg:w-[70px] xl:w-[110px] 2xl:w-[140px] select-none pointer-events-none' src={logo} alt=''/></Link>
                 

                
                
                <ul className='flex gap-[10px] sm:gap-[11px] md:gap-[12px] lg:gap-[13px] xl:gap-[14px] 2xl:gap-[15px] ml-atuo'>
                <button className='rounedourtext  cursor-pointer flex items-center justify-center py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] group gap-[7.50px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[29px] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] backdrop-blur-[50px]'>
                   <span className='rounedourtextbtn pl-[14px] sm:pl-[15px] md:pl-[16px] lg:pl-[20px] xl:pl-[24px] 2xl:pl-[29px]'> БЕСПЛАТНЫЙ</span><span>⭐️</span>
                </button>
                <button className='w-[40] sm:w-[48px] xl:w-[64px] 2xl:w-[90px] h-[40] sm:h-[48px] xl:h-[64px] 2xl:h-[90px] rounedourtext flex items-center justify-center '>
                    <svg className='w-[20px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[50px]' viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16675 6.25H9.37508L9.97032 10.4167M35.4167 35.4167C33.1156 35.4167 31.2501 37.2821 31.2501 39.5833C31.2501 41.8845 33.1156 43.75 35.4167 43.75C37.7179 43.75 39.5834 41.8845 39.5834 39.5833C39.5834 37.2821 37.7179 35.4167 35.4167 35.4167ZM35.4167 35.4167H18.7501M18.7501 35.4167C16.4489 35.4167 14.5834 37.2821 14.5834 39.5833C14.5834 41.8845 16.4489 43.75 18.7501 43.75C21.0513 43.75 22.9167 41.8845 22.9167 39.5833C22.9167 37.2821 21.0513 35.4167 18.7501 35.4167ZM18.7501 35.4167H13.5417L12.6489 29.1667M12.6489 29.1667H37.5001L43.7501 10.4167H9.97032M12.6489 29.1667L9.97032 10.4167" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </button>
                <button className='w-[40] sm:w-[48px] xl:w-[64px] 2xl:w-[90px] h-[40] sm:h-[48px] xl:h-[64px] 2xl:h-[90px] rounedourtext flex items-center justify-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[50px]' viewBox="0 0 50 50" fill="none">
                    <path d="M31.2499 37.5C31.2499 38.3208 31.0883 39.1335 30.7742 39.8918C30.4601 40.6501 29.9997 41.3391 29.4193 41.9194C28.839 42.4998 28.15 42.9602 27.3917 43.2742C26.6334 43.5883 25.8207 43.75 24.9999 43.75C24.1792 43.75 23.3664 43.5883 22.6081 43.2742C21.8499 42.9602 21.1609 42.4998 20.5805 41.9194C20.0001 41.3391 19.5398 40.6501 19.2257 39.8918C18.9116 39.1335 18.7499 38.3208 18.7499 37.5V35.4167H8.33325C8.33325 35.4167 12.4999 27.0833 12.4999 18.75C12.4999 11.9417 18.1916 6.25 24.9999 6.25C31.8083 6.25 37.4999 11.9417 37.4999 18.75C37.4999 25 41.6666 35.4167 41.6666 35.4167H31.2499V37.5Z" fill="black" fill-opacity="0.15"/>
                    <path d="M18.7499 35.4167V37.5C18.7499 38.3208 18.9116 39.1335 19.2257 39.8918C19.5398 40.6501 20.0001 41.3391 20.5805 41.9194C21.1609 42.4998 21.8499 42.9602 22.6081 43.2742C23.3664 43.5883 24.1792 43.75 24.9999 43.75C25.8207 43.75 26.6334 43.5883 27.3917 43.2742C28.15 42.9602 28.839 42.4998 29.4193 41.9194C29.9997 41.3391 30.4601 40.6501 30.7742 39.8918C31.0883 39.1335 31.2499 38.3208 31.2499 37.5V35.4167M18.7499 35.4167H8.33325C8.33325 35.4167 12.4999 27.0833 12.4999 18.75C12.4999 11.9417 18.1916 6.25 24.9999 6.25C31.8083 6.25 37.4999 11.9417 37.4999 18.75C37.4999 25 41.6666 35.4167 41.6666 35.4167H31.2499M18.7499 35.4167H31.2499" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>

                </ul>
                
                
            </header>
        </div>
    );
};

export default NavBar; 