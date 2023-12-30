import { component$, useStore, $ } from "@builder.io/qwik";

export default component$(({ images }) => {


  function formatImageUrl(item) {
    return `https://s.fysia.se/${item.imageName}-${item.number}-${item.sizes[1]}.${item.formats[1]}`;
  }
  const state = useStore({
    currentIndex: 0,
    items: [1,2,3,4,5] , // To store the width of each item
  });

  const updatePositions = $(() => {
    const items = document.querySelectorAll('.carousel-item');
    state.positions = Array.from(items).map((item) => item.getBoundingClientRect().width);
  });

  const moveToIndex = $(async (index) => {
  
    // Ensure we don't go beyond the bounds of our carousel
    if (index < 0 ) {
      return;
    }

    let newPosition =index * (-100);
    let thumbPos = (index-1) * 80
   const  slide = document.querySelector('.carousel-slide')
   const thumbnail = document.querySelector('.thumbnails')
    slide.style.transform = `translateX(${newPosition}%)`;
      // Scroll the thumbnails instead of translating
  thumbnail.scrollTo({
    top: 0,
    left: thumbPos,
    behavior: 'smooth' // Optional: add smooth scrolling
  });


    state.currentIndex = index; // Update current index
  });

  return (
    <div class="carousel-container relative">
      <div class="carousel-slide" >
        {images.map((item, index) => {
          return <div key={'carousel' + index} class="carousel-item flex w-full rounded-[10px]" >
          <img src={formatImageUrl(item)} alt="" height={'100%'} width={'100%'} class="object-cover w-full h-full rounded-[10px]"  srcset="" />
          </div>
        })}




        {/* Add more items here as needed */}
      </div>
            {/* Thumbnails */}
            <div class="thumbnails pl-40 mt-5 overflow-x-hidden inline-flex justify-center w-full   items-center gap-4 ">
        {images.map((item, index) => (
          <div key={index + 'thumbnail'} class={`thumbnail border  flex-none ${state.currentIndex === index ? 'border-black' : 'border-transparent' } rounded-[5px]  cursor-pointer`} onClick$={() => moveToIndex(index)} >
            <img src={formatImageUrl(item)} alt="" height={'60px'} width={'60px'} class="rounded-[5px] h-[60px] aspect-square object-cover" srcset="" />
          </div>
        ))}
      </div>
      <button
      onClick$={() => moveToIndex(state.currentIndex - 1)} disabled={state.currentIndex == 0}
      class=" prev absolute left-0 top-1/2 transform flex items-center justify-center -translate-y-[60%]  w-[60.968px] h-[90px] rounded  bg-[#1D6EC1] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              class="transform rotate-180"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              />
            </svg>
          </button>
          <button 
          onClick$={() => moveToIndex(state.currentIndex + 1)} disabled={state.currentIndex == images.length -1}
          class=" absolute right-0 top-1/2 arrow--next flex items-center justify-center  transform -translate-y-[60%] w-[60.968px] h-[90px] rounded  bg-[#1D6EC1] text-white">
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
    </div>
  );
});
