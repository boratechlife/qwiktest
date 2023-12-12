import { type Signal, component$, useSignal } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { createContextId } from "@builder.io/qwik";

export const DataContext =
  createContextId<Signal<boolean>>("docs.theme-context");

import type { DocumentHead } from "@builder.io/qwik-city";
import FilterModalMobile from "~/components/FilterModalMobile";
import Filters from "~/components/Filters";

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

  function formatImageUrl(item: {
    image: { imageName: any; number: any; sizes: any[]; formats: any[] };
  }) {
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="13"
                          viewBox="0 0 15 13"
                          fill="none"
                        >
                          <path
                            d="M14.7944 1.51439L9.38208 7.97382V12.3031C9.38208 12.8695 8.73794 13.1939 8.27529 12.8736L5.92977 11.2492C5.74066 11.1192 5.62925 10.9045 5.62925 10.6782V7.97382L0.216236 1.51439C-0.292155 0.907646 0.152848 0 0.958739 0H14.0526C14.8589 0 15.2781 0.907646 14.7944 1.51439Z"
                            fill="#99A0A7"
                          />
                        </svg>
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5 6L10 0H0L5 6Z"
                            fill="black"
                          />
                        </svg>
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
                  {prods.value.products.map((item: any) => {
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
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                class="h-3 w-3 lg:h-[17px] lg:w-[17px]"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                class="h-3 w-3 lg:h-[17px] lg:w-[17px]"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                class="h-3 w-3 lg:h-[17px] lg:w-[17px]"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                class="h-3 w-3 lg:h-[17px] lg:w-[17px]"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                class="h-3 w-3 lg:h-[17px] lg:w-[17px]"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
                                />
                              </svg>
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
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="21"
                                viewBox="0 0 22 21"
                                fill="none"
                              >
                                <g
                                  opacity="0.5"
                                  filter="url(#filter0_d_49_5905)"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.696 15.4375C15.7421 15.4375 14.9688 16.235 14.9688 17.2188C14.9688 18.2025 15.7421 19 16.696 19C17.65 19 18.4233 18.2025 18.4233 17.2188C18.4233 16.235 17.65 15.4375 16.696 15.4375ZM6.33274 15.4375C5.37878 15.4375 4.60547 16.235 4.60547 17.2188C4.60547 18.2025 5.37878 19 6.33274 19C7.28671 19 8.06002 18.2025 8.06002 17.2188C8.06002 16.235 7.28671 15.4375 6.33274 15.4375ZM20.4945 1.66005C20.2746 1.35972 19.9395 1.1875 19.5746 1.1875H4.38861L4.303 0.724004C4.22542 0.303926 3.86928 0 3.45462 0H0.863638C0.386658 0 0 0.39874 0 0.890625C0 1.38251 0.386658 1.78125 0.863638 1.78125H2.73993L4.90921 13.526C4.98679 13.9461 5.34293 14.25 5.75759 14.25H17.5606C18.0376 14.25 18.4243 13.8513 18.4243 13.3594C18.4243 12.8675 18.0376 12.4688 17.5606 12.4688H6.47221L6.14324 10.6875H17.6004C18.1148 10.6875 18.5668 10.3359 18.7082 9.82586L20.6823 2.70145C20.7823 2.33963 20.7137 1.96041 20.4945 1.66005Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <filter
                                    id="filter0_d_49_5905"
                                    x="-1"
                                    y="0"
                                    width="22.7266"
                                    height="21"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                  >
                                    <feFlood
                                      flood-opacity="0"
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      type="matrix"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      result="hardAlpha"
                                    />
                                    <feOffset dy="1" />
                                    <feGaussianBlur stdDeviation="0.5" />
                                    <feColorMatrix
                                      type="matrix"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_49_5905"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_49_5905"
                                      result="shape"
                                    />
                                  </filter>
                                </defs>
                              </svg>

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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          opacity="0.5"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.99448 2.90323C10.5564 2.90185 12.0287 3.48416 13.1632 4.54645L11.6481 6.06154C11.0994 6.61025 11.488 7.54839 12.264 7.54839H17.129C17.6101 7.54839 18 7.15845 18 6.67742V1.81237C18 1.03642 17.0619 0.647819 16.5132 1.19649L15.2171 2.4926C13.6013 0.948484 11.4114 0 9 0C4.60208 0 0.941117 3.1545 0.155903 7.32426C0.105569 7.59168 0.312278 7.83871 0.584383 7.83871H2.66393C2.86458 7.83871 3.03797 7.70128 3.08675 7.50665C3.75677 4.83307 6.18351 2.90569 8.99448 2.90323ZM5.73601 10.4516H0.870968C0.38994 10.4516 0 10.8416 0 11.3226V16.1876C0 16.9636 0.938141 17.3522 1.48681 16.8035L2.78292 15.5074C4.39871 17.0515 6.58858 18 9 18C13.3979 18 17.0589 14.8455 17.8441 10.6758C17.8945 10.4084 17.6878 10.1614 17.4157 10.1614H15.3361C15.1354 10.1614 14.962 10.2988 14.9133 10.4934C14.2429 13.1682 11.8152 15.0943 9.00566 15.0968C7.44369 15.0982 5.97128 14.5159 4.83677 13.4536L6.3519 11.9385C6.90057 11.3898 6.51197 10.4516 5.73601 10.4516Z"
                          fill="white"
                        />
                      </svg>
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

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
