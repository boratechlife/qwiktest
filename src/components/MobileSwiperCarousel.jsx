import { component$ } from "@builder.io/qwik";
import { NextIcon, PrevIcon } from "./starter/icons/qwik";

export default component$(() => {
  return (
    <div class="w-full mx-auto py-20 relative">
      <div class="swiper swiperMobile w-full mx-auto relative py-10 ">
        <div
          id="mobile-prev-button"
          class="custom-button-prev  left-0  transform  flex items-center justify-center -translate-y-1/2 w-[60.968px] h-[90px] rounded  bg-[#1D6EC1] text-white absolute   z-[99999] top-1/2"
        >
          <PrevIcon />
        </div>
        <div
          id="mobile-next-button"
          class="custom-button-next  transform flex items-center justify-center -translate-y-1/2  w-[60.968px] h-[90px] rounded  bg-[#1D6EC1] text-white right-0  absolute  z-[99999]  top-1/2"
        >
          <NextIcon />
        </div>

        <div class="mobile-carousel-wrapper  flex overflow-hidden flex-nowrap">
          <div class="mobile-carousel-slide w-screen flex-none ">
            <div class="bg-[#E1E3E6]">
              <img
                src="https://picsum.photos/200"
                class="shadow-xl"
                height={"100%"}
                width={"100%"}
                alt=""
              />
            </div>
          </div>
          <div class="mobile-carousel-slide w-screen flex-none ">
            <div class="bg-[#E1E3E6]">
              <img
                src="https://picsum.photos/200"
                class="shadow-xl"
                height={"100%"}
                width={"100%"}
                alt=""
              />
            </div>
          </div>
          <div class="mobile-carousel-slide w-screen flex-none ">
            <div class="bg-[#E1E3E6]">
              <img
                src="https://picsum.photos/200"
                class="shadow-xl"
                height={"100%"}
                width={"100%"}
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="swiper-pagination"></div>

        <script
          dangerouslySetInnerHTML={`
window.addEventListener('load', ()=> {
  const prev = document.querySelector('#mobile-prev-button')

  const next = document.querySelector('#mobile-next-button')
  const container = document.querySelector('.mobile-carousel-wrapper')

  const clientW = window.outerWidth


  // Function to update the state of buttons
  const updateButtonState = () => {
    if (container.scrollLeft <= 0) {
      prev.classList.add('bg-black');
      prev.classList.add('opacity-10');
    } else {
      prev.classList.remove('bg-black');
      prev.classList.remove('opacity-10');

    }

    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth-10) {
     
      next.classList.add('bg-black');
      next.classList.add('opacity-10');
    } else {
 
      next.classList.remove('bg-black');
      next.classList.remove('opacity-10');
    }
  };

  // Initial check
  updateButtonState();

  prev.addEventListener('click',()=> {
    // Scroll to the left smoothly
    container.scrollBy({ left: -clientW, behavior: 'smooth' });
    setTimeout(updateButtonState, 300); // Adjust time as needed
  })

  next.addEventListener('click',()=> {

    // Scroll to the right smoothly
    container.scrollBy({ left: clientW, behavior: 'smooth' });
    setTimeout(updateButtonState, 300); // Adjust time as needed
  })
})
`}
        ></script>
      </div>
    </div>
  );
});
