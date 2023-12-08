/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";

// Create React component standard way
function Greetings({ images }) {
  function formatImageUrl(item) {
    return `https://s.fysia.se/${item.imageName}-${item.number}-${item.sizes[1]}.${item.formats[1]}`;
  }
  return (
    <p className="w-full h-full flex">
      <section
        id="main-carousel"
        class="splide"
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
      >
        <div class="splide__track">
          <ul class="splide__list">
            {images &&
              images.map((imageMain) => {
                return (
                  <li class="splide__slide">
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
        class="splide"
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
      >
        <div class="splide__track">
          <ul class="splide__list">
            {images &&
              images.map((imageThumb) => {
                return (
                  <li class="splide__slide">
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
