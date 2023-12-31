import { component$ } from '@builder.io/qwik';
import { NextIcon, PrevIcon } from './starter/icons/qwik';




export default component$(() => {


  return (
  
  <div class="w-full mx-auto py-20 relative">

<div class="swiper swiperMobile w-full mx-auto relative py-10 ">
<div class="custom-button-prev  left-0  transform  flex items-center justify-center -translate-y-1/2 w-[60.968px] h-[90px] rounded  bg-[#1D6EC1] text-white absolute   z-[99999] top-1/2">
<PrevIcon />
</div>
<div class="custom-button-next  transform flex items-center justify-center -translate-y-1/2  w-[60.968px] h-[90px] rounded  bg-[#1D6EC1] text-white right-0  absolute  z-[99999]  top-1/2">
<NextIcon />
</div>


<div class="swiper-wrapper  ">
  
  <div class="swiper-slide ">

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
  <div class="swiper-slide ">

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
  <div class="swiper-slide ">

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

</div>
  </div>);
});