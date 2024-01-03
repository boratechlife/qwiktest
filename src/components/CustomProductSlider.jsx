// CustomProductSlider.tsx
import { component$, useStore, $, useOnWindow } from "@builder.io/qwik";
import { BasketIcon, NextIcon, PrevIcon, StarIcon } from "./starter/icons/qwik";

export default component$(({ bestSellerProducts }) => {

  const images = $(()=>{
    return bestSellerProducts.map(item)
  })
  const formatImageUrl = $((item) => {

    if (item.image.formats[0] === undefined) {
      return null;
    }
    console.log("Image",`https://s.fysia.se/${item.image.imageName}-${item.image.number}-${item.image.sizes[2]}.${item.image.formats[2]}`)
    return `https://s.fysia.se/${item.image.imageName}-${item.image.number}-${item.image.sizes[2]}.${item.image.formats[2]}`;
  });

  return (
    <section class="w-full h-full  bg-[#F0F2F5] custom-product-slider">
      <div class="w-full flex items-center justify-center">
        <h4 class="text-[#232F3E] text-center font-Roboto text-[32px] mb-10 font-bold leading-[118.75%]">
          Shop by best-sellers
        </h4>
      </div>

      <div class="w-full mx-auto relative">
        <div
          id="seller-prev"
          class="custom-button-prev  -left-24  transform  flex items-center justify-center -translate-y-1/2 w-[60.968px] h-[90px] rounded  bg-[#1D6EC1] text-white absolute   z-[99999] top-1/2"
        >
          <PrevIcon />
        </div>
        <div id="seller-next" class="custom-button-next  transform flex items-center justify-center -translate-y-1/2  w-[60.968px] h-[90px] rounded  bg-[#1D6EC1] text-white -right-16  absolute  z-[99999]  top-1/2">
          <NextIcon />
        </div>

        <div class="custom custom-products w-full mx-auto  py-10 ">
          <div id="custom-slider" class="flex custom-slider gap-8  flex-nowrap overflow-hidden">
            {bestSellerProducts &&
              bestSellerProducts.map((item, index) => {
                return (
                  <div class=" custom-item w-full" key={"item" + index}>
                    <div
                      class="w-full lg:w-[250px] group"
                      key={item.identifier}
                    >
                      <img src={formatImageUrl(item)} alt="" />
                      <div class="w-full h-[163px] flex-shrink-0 group-hover:lg:h-[243px] lg:h-[300px] lg:w-full   relative flex">
                        {(
                          <img
                            src={formatImageUrl(item)}
                            alt={item.title}
                            class="h-full lg:hidden rounded-[10px] w-full object-cover"
                            width={163}
                            height={163}
                          />
                        )}

                        {formatImageUrl(item) && (
                          <img
                            src={formatImageUrl(item)}
                            alt={item.title}
                            class="h-full hidden lg:block rounded-[10px] w-full object-cover"
                            width={250}
                            height={300}
                          />
                        )}

                        <div class="absolute group-hover:lg:hidden bottom-1 flex left-1 items-center gap-0.5">
                          <div class="bg-[#1D6EC1] w-[37px] rounded h-[22px] text-white flex items-center justify-center text-[12px]">
                            -40%
                          </div>

                          <div class="flex gap-1 items-center">
                            <div class="w-[12px] h-[12px] flex-shrink-0 bg-black rounded-full"></div>
                            <div class="w-[12px] h-[12px] flex-shrink-0 bg-[#004EE5] rounded-full"></div>
                            <div class="w-[12px] h-[12px] flex-shrink-0 bg-[#3DBD00] rounded-full"></div>

                            <span class="text-[#5F6061] font-Roboto text-[12px] leading-[253.846%]">
                              +3 more
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="group-hover:lg:hidden">
                        <div class="flex gap-[5px] items-center">
                          <span class=" font-Roboto text-[18px] font-bold  text-[#CA232C] lg:text-[20px]  leading-[30px]">
                            ${item.salesPrice}
                          </span>

                          <span class="text-[#999] text-[12px] lg:text-sm line-through">
                            ${item.discountPrice}
                          </span>
                        </div>
                        <div class="text-base lg:text-lg text-[#232F3E] font-bold ">
                          {item.title}
                        </div>
                        <div class="flex gap-1 lg:gap-2 items-center">
                          <div class="flex items-center text-yellow-500">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                          </div>
                          <div class="text-[13px] text-[#5F6061]">
                            3 reviews
                          </div>
                        </div>
                      </div>
                      <div class="hidden group-hover:lg:block">
                        <h4 class="text-[#3E4956] text-[20px] font-bold leading-[30px]">
                          $18.90
                        </h4>

                        <h5 class="text-[18px] font-bold leading-[40px] text-[#232F3E]">
                          Name of your product
                        </h5>
                        <div class="w-full flex">
                          <button
                            class="flex w-full h-[56px] rounded-[8px] justify-center items-center"
                            style={{
                              background:
                                "linear-gradient(0deg, #00AC00 0%, #3EC000 100%)",
                              boxShadow:
                                "0px 3px 13px 0px rgba(0, 153, 0, 0.36), 0px 2px 0px 0px #090",
                            }}
                          >
                            <BasketIcon />

                            <span
                              class="text-[18px] font-bold text-white"
                              style={{
                                textShadow: "0px 1px 1px rgba(0, 0, 0, 0.15)",
                              }}
                            >
                              Add to cart
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* <div class="swiper-pagination"></div> */}

<script dangerouslySetInnerHTML={`
window.addEventListener('load', ()=> {
  const prev = document.querySelector('#seller-prev')
  const next = document.querySelector('#seller-next')
  const container = document.querySelector('#custom-slider')

  clientW = document.querySelector('.custom-item').clientWidth


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
`}>

</script>
        </div>
      </div>
    </section>
  );
});
