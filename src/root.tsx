import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";
// Import Swiper styles
import "swiper/css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />

        <script
          src="
https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js
"
        ></script>
        <link
          href="
https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css
"
          rel="stylesheet"
        />

        <script
          defer
          dangerouslySetInnerHTML=" document.addEventListener( 'DOMContentLoaded', function () {
          
           
           
            var main = new Splide( '#main-carousel', {
              type      : 'fade',
              rewind    : true,
              pagination: false,
              arrows    : false,
            } );
          
            var thumbnails = new Splide( '#thumbnail-carousel', {
              fixedWidth  : 100,
              fixedHeight : 60,
              gap         : 10,
              rewind      : true,
              pagination  : false,
              isNavigation: true,
              breakpoints : {
                600: {
                  fixedWidth : 60,
                  fixedHeight: 44,
                },
              },
            } );
          
            main.sync( thumbnails );
            main.mount();
            thumbnails.mount();
          } );"
        ></script>
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
