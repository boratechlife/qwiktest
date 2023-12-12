/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";

import SampleImage from "~/media/sample_image.png";

// Create React component standard way
function MobileCarousel() {
  function formatImageUrl(item) {
    return `https://s.fysia.se/${item.image.imageName}-${item.image.number}-${item.image.sizes[2]}.${item.image.formats[0]}`;
  }
  return (
    <p className="w-full h-full flex bg-[#F0F2F5] ">
      <section
        id="mobile-carousel"
        className="splide"
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
      >
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev  transform lg:-translate-x-[6.5rem] w-[60.968px] h-[90px] rounded  bg-[#1D6EC1] text-white">
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
          <button className="splide__arrow splide__arrow--next transform lg:translate-x-10 w-[60.968px] h-[90px] rounded  bg-[#1D6EC1] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              className="transform rotate-180"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
              />
            </svg>
          </button>
        </div>

        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide  ">
              <div className="bg-[#E1E3E6]">
                <img
                  src="https://picsum.photos/200"
                  className="shadow-xl"
                  height={"100%"}
                  width={"100%"}
                  alt=""
                />
              </div>
            </li>
            <li className="splide__slide">
              <div className="bg-[#E1E3E6]">
                <img
                  src="https://picsum.photos/200"
                  className="shadow-xl"
                  height={"100%"}
                  width={"100%"}
                  alt=""
                />
              </div>
            </li>
            <li className="splide__slide">
              <div className="bg-[#E1E3E6]">
                <img
                  src="https://picsum.photos/200"
                  className="shadow-xl"
                  height={"100%"}
                  width={"100%"}
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </p>
  );
}

// Convert React component to Qwik component
export const MobileCarouselSlide = qwikify$(MobileCarousel);
