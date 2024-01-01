import { component$, useOnWindow, $ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  useOnWindow('load',$((event) => {
    
    const swiper = new Swiper(".swiper-products", {
      // Optional parameters
      loop: true,
      speed:500,
      cssMode:true,
      slidesPerView:4,
      modules: [Navigation, Pagination],
      pagination: {
        el: ".swiper-pagination",
      },
    
      // Navigation arrows
      navigation: {
        nextEl: ".custom-button-next",
        prevEl: ".custom-button-prev",
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });


    const swiperMobile = new Swiper(".swiperMobile", {
      // Optional parameters
      loop: true,
      speed:500,
      cssMode:true,
      slidesPerView:1,
      modules: [Navigation, Pagination],
      //  pagination="false"  
    
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },
    
      // Navigation arrows
      navigation: {
        nextEl: ".custom-button-next",
        prevEl: ".custom-button-prev",
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  }))

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />





        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
