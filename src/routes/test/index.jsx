import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from "@builder.io/qwik-city";

import CustomProductCarousel from '~/components/CustomProductCarousel';
export const useProductDetails = routeLoader$(async () => {
  const response = await fetch(
    "https://api.fysia.se/procarenordicapi/slugData?canonicalRoot=fysia.se&slug=theraband-traningsband-45m-rod",
    {
      headers: { Accept: "application/json" },
    }
  );
  return await response.json();
});

export default component$(() => {

  return (
  

<div class="swiper w-1/2 mx-auto relative py-10 ">


  <div class="swiper-wrapper  ">
    
    <div class="swiper-slide px-20">
      <div class="h-40 bg-black"></div>
    </div>
    <div class="swiper-slide px-20">
      <div class="h-40 bg-red-500"></div>
    </div>
    <div class="swiper-slide px-20">
      <div class="h-40 bg-green-500"></div>
    </div>
    
  </div>



  <div class="swiper-pagination"></div>




          {/* <div class="">
        <button id='slide-prev' class="splide__arrow splide__arrow--prev  transform -translate-x-[6.5rem] w-[60.968px] h-[90px] rounded  bg-[#1D6EC1] text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
            />
          </svg>
        </button>
        <button id='slide-next' class="splide__arrow splide__arrow--next transform translate-x-10 w-[60.968px] h-[90px] rounded  bg-[#1D6EC1] text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            class="transform rotate-180"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
            />
          </svg>
        </button>
      </div> */}

 

  <div class="custom-button-prev    transform  flex items-center justify-center -translate-y-1/2 w-[60.968px] h-[90px] rounded  bg-[#1D6EC1] text-white absolute  left-0 z-[99999] top-1/2">
  <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
            />
          </svg>
  </div>
  <div class="custom-button-next  transform flex items-center justify-center -translate-y-1/2  w-[60.968px] h-[90px] rounded  bg-[#1D6EC1] text-white right-0  absolute  z-[99999]  top-1/2">
  <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            class="transform rotate-180"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
            />
          </svg>
  </div>


  <div class="swiper-scrollbar"></div>

</div>
    );
});