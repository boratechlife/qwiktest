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

    const productDetails = useProductDetails();

    const { title, longDescription, images } = productDetails.value;

  return (<div class="w-full mx-auto py-20">
<swiper-container slides-per-view="3" slides-per-move="1"  pagination="true"  speed="500"  css-mode="true">
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>

<button id='slide-prev'>Prev</button>
<button id='slide-next'>Slide Next</button>


<script dangerouslySetInnerHTML="  const swiperEl = document.querySelector('swiper-container');
  const buttonEl = document.querySelector('#slide-next');
  const buttonElPrev = document.querySelector('#slide-prev');


  buttonElPrev.addEventListener('click', () => {
    swiperEl.swiper.slidePrev();
  });
  buttonEl.addEventListener('click', () => {
    swiperEl.swiper.slideNext();
  });
  "></script>
  </div>);
});