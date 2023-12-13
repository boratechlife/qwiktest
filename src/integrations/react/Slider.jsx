/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";

// Create React component standard way
function Greetings({ images }) {
  function formatImageUrl(item) {
    return `https://s.fysia.se/${item.imageName}-${item.number}-${item.sizes[1]}.${item.formats[1]}`;
  }
  return (
    <p className="w-full h-full flex relative">
      <section
        id="main-carousel"
        className="splide"
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
      >
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev  transform  w-[60.968px] h-[90px] rounded  bg-[#1D6EC1] text-white">
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
          <button className="splide__arrow splide__arrow--next transform w-[60.968px] h-[90px] rounded  bg-[#1D6EC1] text-white">
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
            {images &&
              images.map((imageMain, index) => {
                return (
                  <li className="splide__slide relative" key={"index" + index}>
                    <div className="w-[42px] h-[20px] flex-shrink-0 rounded-[3px] bg-[#3DBD00] absolute right-10 top-10 z-50 text-white text-center font-Roboto text-[12px] inline-flex items-center justify-center font-bold leading-[14px]">
                      New
                    </div>

                    {formatImageUrl(imageMain) && (
                      <img
                        width="100%"
                        height="100%"
                        src={formatImageUrl(imageMain)}
                        alt=""
                      />
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </section>

      <section
        id="thumbnail-carousel"
        className="splide"
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
      >
        <div className="splide__track">
          <ul className="splide__list">
            {images &&
              images.map((imageThumb, index) => {
                return (
                  <li className="splide__slide" key={"thumb" + index}>
                    <img
                      width="100%"
                      height="100%"
                      src={formatImageUrl(imageThumb)}
                      alt=""
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    </p>
  );
}

// Convert React component to Qwik component
export const Carousel = qwikify$(Greetings);
