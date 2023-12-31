import { component$, useSignal } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { createContextId } from "@builder.io/qwik";

export const DataContext = createContextId("docs.theme-context");

import FilterModalMobile from "~/components/FilterModalMobile";
import Filters from "~/components/Filters";
import { ArrowDownIcon, BasketIcon, FilterIcon, LoadIcon, StarIcon } from "~/components/starter/icons/qwik";

export const useProductsApi = routeLoader$(async () => {
  const response = await fetch(
    "https://api.fysia.se/procarenordicapi/slugData?canonicalRoot=fysia.se&slug=45m",
    {
      headers: { Accept: "application/json" },
    }
  );
  return await response.json();
});

export default component$(() => {
  const isOpen = useSignal(false);
  // useContextProvider(DataContext, isOpen);

  function formatImageUrl(item) {
    return `https://s.fysia.se/${item.image.imageName}-${item.image.number}-${item.image.sizes[2]}.${item.image.formats[0]}`;
  }
  const prods = useProductsApi();

  return (
    <main class="section mt-[54px] text-xl">
      {isOpen.value && (
        <FilterModalMobile onClick$={() => (isOpen.value = false)} />
      )}
      <section class="">
        <div class="container mx-auto">
          <div class="w-full flex flex-wrap lg:flex-nowrap gap-[60px] mb-[89px]">
            <div class="w-full hidden lg:block lg:w-auto">
              <Filters />
            </div>

            <div class="w-full lg:w-3/4 px-0 ">
              <h4 class="text-[#232F3E] text-[32px] font-bold mb-[10px]">
                Name of the category
              </h4>

              <p class="text-[#5F6061] line-clamp-2 lg:line-clamp-none text-base leading-[24px] ">
                In this category, you'll find a wide range of [insert relevant
                products]. Whether you're looking for [insert specific product
                need or benefit], [insert another specific product need or
                benefit], or [insert third specific product need or benefit],
                <br />
                we've got you covered.
              </p>
              <span class="text-[#1D6EC1] lg:hidden font-Roboto text-[14px] font-normal leading-[21px]">
                Read More
              </span>

              <hr class="border-t border-[#EBEFF3] ws-full my-4 mt-[22px]" />

              <div class="w-full">
                <div class="filters flex justify-between items-center">
                  <div class="text-[#5F6061] hidden lg:block text-base leading-[33px]">
                    Showing 24 of 36 products
                  </div>
                  <div class="flex items-center justify-center gap-[12px]">
                    <span class=" hidden lg:block text-[ #5F6061] text-base leading-[33px]">
                      Sort by:
                    </span>

                    <div
                      class="select flex lg:hidden px-[12px] justify-center gap-4 w-[134px] h-[42px] items-center rounded-[5px] relative border border-[#ddd]"
                      onClick$={() => (isOpen.value = true)}
                      style="background: linear-gradient(180deg, #FFF 0%, #FAFAFA 100%);
box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.10);"
                    >
                      <span class="text-[#232F3E] font-bold text-base">
                        Filter
                      </span>
                      <span>
<FilterIcon />
                      </span>
                    </div>
                    <div
                      class="select flex px-[12px] justify-between w-[134px] h-[42px] items-center rounded-[5px] relative border border-[#ddd]"
                      style="background: linear-gradient(180deg, #FFF 0%, #FAFAFA 100%);
box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.10);"
                    >
                      <span class="text-[#232F3E] font-bold text-base">
                        Newest First
                      </span>
                      <span>
                        <ArrowDownIcon />
                      </span>
                    </div>
                  </div>
                </div>

                <div class="flex items-center justify-center">
                  <div class="text-[#5F6061] lg:hidden  text-base leading-[33px]">
                    Showing 24 of 36 products
                  </div>
                </div>

                <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10 mb-[50px]">
                  {prods.value.products.map((item) => {
                    return (
                      <div
                        class="w-full lg:w-[250px] group"
                        key={item.identifier}
                      >
                        <div class="w-full h-[163px] flex-shrink-0 group-hover:lg:h-[243px] lg:h-[300px] lg:w-full   relative flex">
                          <img
                            src={formatImageUrl(item)}
                            alt={item.title}
                            class="h-full lg:hidden rounded-[10px] w-full object-cover"
                            width={163}
                            height={163}
                          />

                          <img
                            src={formatImageUrl(item)}
                            alt={item.title}
                            class="h-full hidden lg:block rounded-[10px] w-full object-cover"
                            width={250}
                            height={300}
                          />

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
                              style="  background:linear-gradient(0deg, #00AC00 0%, #3EC000 100%);
                            box-shadow: 0px 3px 13px 0px rgba(0, 153, 0, 0.36),
                            0px 2px 0px 0px #090;"
                            >
<BasketIcon />

                              <span
                                class="text-[18px] font-bold text-white"
                                style="text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);"
                              >
                                Add to cart
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {/* ITEM */}
                </div>

                <div class="w-full flex justify-center flex-col items-center mb-[28px]">
                  <p class="text-[#5F6061] text-base leading-[33px]">
                    You’ve viewed 24 of 36 products
                  </p>

                  <div class="w-[250px] h-[3px] rounded-[10x]  my-[7px] bg-[#E1E3E6] flex">
                    <div class="h-full w-3/4 bg-[#3B8FFF] flex rounded-tl-[10px] rounded-bl-[10px]"></div>
                  </div>
                </div>

                <div class="w-full flex justify-center flex-col items-center ">
                  <button
                    class="w-[311px] h-[56px] flex items-center justify-center rounded-[5px] gap-[11px]"
                    style="background: linear-gradient(180deg, #1D6EC1 0%, #265B9D 100%);"
                  >
                    <span>
<LoadIcon />
                    </span>

                    <p class="text-white text-center text-base font-bold">
                      Load 12 more products
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
});

export const head = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
