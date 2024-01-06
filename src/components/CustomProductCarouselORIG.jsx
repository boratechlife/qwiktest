import { component$, useStore, $ } from "@builder.io/qwik";

export default component$(() => {
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

    let newPosition =index * -100;
   const  slide = document.querySelector('.carousel-slide')
    slide.style.transform = `translateX(${newPosition}%)`;

    state.currentIndex = index; // Update current index
  });

  return (
    <div class="carousel-container relative">
      <div class="carousel-slide" >
        {state.items.map(item => {
          return <div class="carousel-item w-full" >Item {item}</div>
        })}

        {/* Add more items here as needed */}
      </div>
      <button class="prev absolute top-1/2 transform -translate-y-1/2  left-0" onClick$={() => moveToIndex(state.currentIndex - 1)} disabled={state.currentIndex == 0}>Prev{state.currentIndex}</button>
      <button class="prev absolute top-1/2 transform -translate-y-1/2  right-0" onClick$={() => moveToIndex(state.currentIndex + 1)} disabled={state.currentIndex == state.items.length -1}>Next</button>
    </div>
  );
});
