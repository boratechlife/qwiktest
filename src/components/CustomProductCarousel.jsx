import { component$, useStore, $ } from "@builder.io/qwik";
import { NextIcon, PrevIcon } from "./starter/icons/qwik";

export default component$(({ images }) => {
  function formatImageUrl(item) {
    return `https://s.fysia.se/${item.imageName}-${item.number}-${item.sizes[1]}.${item.formats[1]}`;
  }
  const state = useStore({
    currentIndex: 0,
    items: [1, 2, 3, 4, 5], // To store the width of each item
  });

  const updatePositions = $(() => {
    const items = document.querySelectorAll(".carousel-item");
    state.positions = Array.from(items).map(
      (item) => item.getBoundingClientRect().width
    );
  });

  const moveToIndex = $(async (index) => {
    // Ensure we don't go beyond the bounds of our carousel
    if (index < 0) {
      return;
    }
    const slide = document.querySelector(".carousel-slide");

    let newPosition = slide.clientWidth * -1 * index + 10 * index * -1;
    let thumbPos = (index - 1) * 80;

    const thumbnail = document.querySelector(".thumbnails");
    slide.style.transform = `translateX(${newPosition}px)`;
    // Scroll the thumbnails instead of translating
    thumbnail.scrollTo({
      top: 0,
      left: thumbPos,
      behavior: "smooth", // Optional: add smooth scrolling
    });

    state.currentIndex = index; // Update current index
  });

  return (
    <div class="carousel-container relative">
      <div class="carousel-slide">
        {images.map((item, index) => {
          return (
            <div
              key={"carousel" + index}
              class="carousel-item flex w-full rounded-[10px]"
            >
              <img
                src={formatImageUrl(item)}
                alt=""
                height={"100%"}
                width={"100%"}
                class="object-cover w-full h-full rounded-[10px]"
                srcset=""
              />
            </div>
          );
        })}

        {/* Add more items here as needed */}
      </div>
      {/* Thumbnails */}
      <div class="thumbnails pl-40 mt-5 overflow-x-hidden inline-flex justify-center w-full   items-center gap-4 ">
        {images.map((item, index) => (
          <div
            key={index + "thumbnail"}
            class={`thumbnail border  flex-none ${
              state.currentIndex === index
                ? "border-black"
                : "border-transparent"
            } rounded-[5px]  cursor-pointer`}
            onClick$={() => moveToIndex(index)}
          >
            <img
              src={formatImageUrl(item)}
              alt=""
              height={"60px"}
              width={"60px"}
              class="rounded-[5px] h-[60px] aspect-square object-cover"
              srcset=""
            />
          </div>
        ))}
      </div>
      <button
        onClick$={() => moveToIndex(state.currentIndex - 1)}
        disabled={state.currentIndex == 0}
        class={`prev absolute left-0 top-1/2 transform flex items-center ${
          state.currentIndex == 0 ? "bg-black opacity-10" : "bg-[#1D6EC1]"
        } justify-center -translate-y-[90%]  w-[60.968px] h-[90px] rounded    text-white`}
      >
        <PrevIcon />
      </button>
      <button
        onClick$={() => moveToIndex(state.currentIndex + 1)}
        disabled={state.currentIndex == images.length - 1}
        class={` absolute ${
          state.currentIndex == images.length - 1
            ? "bg-black opacity-10"
            : "bg-[#1D6EC1] opacity-100"
        } right-0 top-1/2 arrow--next flex items-center justify-center  transform -translate-y-[90%] w-[60.968px] h-[90px] rounded   text-white`}
      >
        <NextIcon />
      </button>
    </div>
  );
});
