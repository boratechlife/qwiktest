import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Carousel } from "~/integrations/react/Slider";
import { BestSellerCarousel } from "~/integrations/react/SliderBestSellers.jsx";
import Image from "~/media/stars.png?jsx";
import Bitmap from "~/media/Bitmap.png?jsx";
import TrustPilot from "~/media/trust-pilot.png?jsx";
import ReviewCard from "~/components/ReviewCard";
import MobileProductCard from "~/components/MobileProductCard";
import ProductImageReviews from "~/components/ProductImageReviews";
import { MobileCarouselSlide } from "~/integrations/react/MobileCarousel";
import CustomProductCarousel from "~/components/CustomProductCarousel";
import CustomProductSlider from "~/components/CustomProductSlider";
import MobileSwiperCarousel from "~/components/MobileSwiperCarousel";

export const useProducts = routeLoader$(async () => {
  const response = await fetch(
    "https://api.fysia.se/procarenordicapi/slugData?canonicalRoot=fysia.se&slug=45m",
    {
      headers: { Accept: "application/json" },
    }
  );
  return await response.json();
});

export const useProductDetails = routeLoader$(async () => {
  const response = await fetch(
    "https://api.fysia.se/procarenordicapi/slugData?canonicalRoot=fysia.se&slug=theraband-traningsband-45m-rod",
    {
      headers: { Accept: "application/json" },
    }
  );
  return await response.json();
});

export default component$(() => {
  const productDetails = useProductDetails();

  const { title, longDescription, images } = productDetails.value;

  const bestSellerProducts = useProducts();

  return (
    <main class="  w-full mt-[35px] lg:mt-[55px]">
      <section class=" w-full">
        <div class="container mx-auto w-full max-sm:p-0">
          <div class="w-full flex flex-wrap lg:flex-nowrap  gap-[36px]">
            <div class="w-full lg:w-1/2 mx-4 lg:mx-auto">
              <div class=" bg-gray-100 ">
                <CustomProductCarousel images={images} />
              </div>
              <div class="w-full hidden lg:block">
                <ReviewCard />
              </div>

              <div>
                <h4 class="text-[36px] hidden lg:block mb-[20px] mt-[25px] font-bold text-[#232F3E]">
                  {title}
                </h4>

                <div
                  dangerouslySetInnerHTML={longDescription}
                  class="text-[#5F6061] hidden lg:block text-[18px] space-y-2 pb-10"
                ></div>
              </div>
            </div>

            <div class="w-full lg:w-1/2 ">
              <p class="text-red-500 mx-1 lg:mx-auto flex items-center gap-1 lg:gap-[9px]">
                <span>
                  <svg
                    width="17"
                    height="20"
                    viewBox="0 0 17 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.74805 4.34082C10.3542 3.54492 11.0378 2.75391 11.7943 2.00195C14.4375 4.62891 16.3333 8.9209 16.3333 11.001C16.3333 15.9717 12.6784 20 8.16667 20C3.65495 20 0 15.9717 0 11.001C0 8.20316 2.54297 3.55957 6.125 0C7.51953 1.38672 8.75456 2.87598 9.74805 4.34082ZM8.2687 16C9.29216 16 10.2359 15.6484 11.0068 15.0576C12.7524 13.71 13.1601 11.1025 12.1898 9.06152C12.0701 8.8125 11.9372 8.54883 11.791 8.28516L9.71306 10.8975C9.71306 10.8975 6.45659 6.3125 6.20848 6C4.48941 8.27051 3.62988 9.59863 3.62988 11.1074C3.62988 14.1348 5.71225 16 8.2687 16Z"
                      fill="#CA232C"
                    />
                  </svg>
                </span>

                <span class="text-sm font-weight text-[#CA232C] leading-[30px]">
                  16 people are currently looking at this product!
                </span>
              </p>

              <h4 class="font-bold mx-4 lg:mx-auto lg:leading-[42px] text-[20px] lg:text-[36px] mb-2 text-[#232F3E]">
                Headline with a product name and product’s key benefit
              </h4>

              <div class="max-sm:shadow-large max-sm:rounded-2xl">
                <div class="flex mx-4 lg:mx-auto gap-2 items-center mb-[14px]">
                  <div class="flex items-center text-yellow-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      class="h-[17px] w-[17px]"
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
                      class="h-[17px] w-[17px]"
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
                      class="h-[17px] w-[17px]"
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
                      class="h-[17px] w-[17px]"
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
                      class="h-[17px] w-[17px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
                      />
                    </svg>
                  </div>

                  <div class="text-[13px] text-sm font-medium text-[#1D6EC1] ">
                    4.8 based on 25 reviews
                  </div>
                </div>

                {/* BENEFITS */}
                <div class="w-full mx-4 lg:mx-auto">
                  <h4 class="text-[#232F3E] text-[18px] font-bold leading-[25px] mb-[8px]">
                    Craft a compelling sub-headline that clearly conveys the
                    product's key benefit or unique selling proposition.
                  </h4>
                  <ul class="space-y-2 mb-[11px]">
                    <li class="flex  items-center gap-[7px]">
                      <span>
                        <svg
                          width="19"
                          height="14"
                          viewBox="0 0 19 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.5725 3.40179L8.14482 13.5874C7.5815 14.1375 6.66839 14.1375 6.1056 13.5874L0.422493 8.03956C-0.140831 7.48994 -0.140831 6.59748 0.422493 6.04707L1.44121 5.05126C2.00471 4.50094 2.91854 4.50094 3.48132 5.05126L7.12254 8.60835L15.5145 0.412609C16.078 -0.137536 16.9909 -0.137536 17.5537 0.412609L18.5733 1.40842C19.1424 1.95795 19.1424 2.8505 18.5725 3.40179Z"
                            fill="#3DBD00"
                          />
                        </svg>
                      </span>

                      <span class="text-base text-[#5F6061]">
                        {" "}
                        Other Product Benefits
                      </span>
                    </li>
                    <li class="flex  items-center gap-[7px]">
                      <span>
                        <svg
                          width="19"
                          height="14"
                          viewBox="0 0 19 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.5725 3.40179L8.14482 13.5874C7.5815 14.1375 6.66839 14.1375 6.1056 13.5874L0.422493 8.03956C-0.140831 7.48994 -0.140831 6.59748 0.422493 6.04707L1.44121 5.05126C2.00471 4.50094 2.91854 4.50094 3.48132 5.05126L7.12254 8.60835L15.5145 0.412609C16.078 -0.137536 16.9909 -0.137536 17.5537 0.412609L18.5733 1.40842C19.1424 1.95795 19.1424 2.8505 18.5725 3.40179Z"
                            fill="#3DBD00"
                          />
                        </svg>
                      </span>

                      <span class="text-base text-[#5F6061]">
                        {" "}
                        Other Product Benefits
                      </span>
                    </li>
                    <li class="flex  items-center gap-[7px]">
                      <span>
                        <svg
                          width="19"
                          height="14"
                          viewBox="0 0 19 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.5725 3.40179L8.14482 13.5874C7.5815 14.1375 6.66839 14.1375 6.1056 13.5874L0.422493 8.03956C-0.140831 7.48994 -0.140831 6.59748 0.422493 6.04707L1.44121 5.05126C2.00471 4.50094 2.91854 4.50094 3.48132 5.05126L7.12254 8.60835L15.5145 0.412609C16.078 -0.137536 16.9909 -0.137536 17.5537 0.412609L18.5733 1.40842C19.1424 1.95795 19.1424 2.8505 18.5725 3.40179Z"
                            fill="#3DBD00"
                          />
                        </svg>
                      </span>

                      <span class="text-base text-[#5F6061]">
                        {" "}
                        Other Product Benefits
                      </span>
                    </li>
                    <li class="flex  items-center gap-[7px]">
                      <span>
                        <svg
                          width="19"
                          height="14"
                          viewBox="0 0 19 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.5725 3.40179L8.14482 13.5874C7.5815 14.1375 6.66839 14.1375 6.1056 13.5874L0.422493 8.03956C-0.140831 7.48994 -0.140831 6.59748 0.422493 6.04707L1.44121 5.05126C2.00471 4.50094 2.91854 4.50094 3.48132 5.05126L7.12254 8.60835L15.5145 0.412609C16.078 -0.137536 16.9909 -0.137536 17.5537 0.412609L18.5733 1.40842C19.1424 1.95795 19.1424 2.8505 18.5725 3.40179Z"
                            fill="#3DBD00"
                          />
                        </svg>
                      </span>

                      <span class="text-base text-[#5F6061]">
                        {" "}
                        Other Product Benefits
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="w-full lg:hidden relative h-[208px] flex-shrink-0 bg-gradient-to-b from-[#324358] to-[#232F3E] flex  flex-col items-center justify-center ">
                <div class="absolute w-[22px] h-[22px] transform rotate-45 bg-[#fff] -top-2.5"></div>
                <h4 class="text-[#FFF] text-center font-Roboto text-lg font-bold ">
                  Take advantage of the discounted offer and order your product
                  today!
                </h4>

                {/* ORDER BUTTON */}
                <div class="flex w-full  items-center my-[14px] justify-center">
                  <button
                    class="lg:hidden inline-flex w-[90%] justify-center  mx-auto  rounded-[5px] bg-[#090] h-[62px] items-center gap-2"
                    style="background: linear-gradient(0deg, #00AC00 0%, #3EC000 100%);box-shadow: 0px 3px 13px 0px rgba(0, 153, 0, 0.36), 0px 2px 0px 0px #090;"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <g opacity="0.5" filter="url(#filter0_d_52_11678)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.333 17.875C18.2284 17.875 17.333 18.7984 17.333 19.9375C17.333 21.0766 18.2284 22 19.333 22C20.4376 22 21.333 21.0766 21.333 19.9375C21.333 18.7984 20.4376 17.875 19.333 17.875ZM7.33301 17.875C6.22843 17.875 5.33301 18.7984 5.33301 19.9375C5.33301 21.0766 6.22843 22 7.33301 22C8.4376 22 9.33302 21.0766 9.33302 19.9375C9.33302 18.7984 8.4376 17.875 7.33301 17.875ZM23.7304 1.92216C23.4759 1.57442 23.0878 1.375 22.6653 1.375H5.08155L4.98243 0.83832C4.89259 0.351914 4.48022 0 4.00009 0H1C0.447709 0 0 0.461699 0 1.03125C0 1.6008 0.447709 2.0625 1 2.0625H3.17255L5.68434 15.6617C5.77418 16.1481 6.18655 16.5 6.66668 16.5H20.3334C20.8857 16.5 21.3334 16.0383 21.3334 15.4688C21.3334 14.8992 20.8857 14.4375 20.3334 14.4375H7.49414L7.11322 12.375H20.3795C20.975 12.375 21.4984 11.9679 21.6621 11.3773L23.9479 3.128C24.0638 2.70905 23.9843 2.26995 23.7304 1.92216Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_52_11678"
                          x="-1"
                          y="0"
                          width="26"
                          height="24"
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
                            result="effect1_dropShadow_52_11678"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_52_11678"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>

                    <span class="text-white text-center text-shadow font-Roboto text-[20px] font-bold leading-[30px]">
                      Order now
                    </span>

                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <g filter="url(#filter0_d_52_11682)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.65383 0.241237L15.1845 6.36629C15.3608 6.53149 15.4605 6.76041 15.4605 6.99994C15.4605 7.23948 15.3608 7.46807 15.1845 7.63359L8.65383 13.7586C8.29784 14.0913 7.73434 14.0788 7.39445 13.729C7.0547 13.3827 7.06747 12.8267 7.4246 12.4916L12.3486 7.87595H1.89092C1.39926 7.87595 1 7.48366 1 7.00058C1 6.5175 1.39926 6.12594 1.89092 6.12594H12.3463L7.42228 1.51027C7.06569 1.17458 7.05456 0.618584 7.39222 0.271133C7.7336 -0.0788696 8.26422 -0.0912656 8.65383 0.241237Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_52_11682"
                            x="0"
                            y="0"
                            width="16.4609"
                            height="16"
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
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_52_11682"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_52_11682"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </span>
                  </button>
                </div>

                <div class="inline-flex justify-between items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="none"
                  >
                    <path
                      d="M13.6009 9.84678L4.26803 17.7215C4.04928 17.9066 3.77472 18 3.50019 18C3.25978 18 3.01941 17.9291 2.81433 17.7852C2.37344 17.4765 2.21281 16.9146 2.42813 16.4318L5.23093 10.1253H1.16696C0.680463 10.1253 0.245297 9.83472 0.0743802 9.39583C-0.0964999 8.95747 0.0333646 8.46257 0.399078 8.15386L9.73197 0.27915C10.1421 -0.0685802 10.7459 -0.0932951 11.1857 0.215412C11.6266 0.524119 11.7872 1.08606 11.5719 1.56889L8.76907 7.87536H12.833C13.3195 7.87536 13.7547 8.16596 13.9256 8.60481C14.0965 9.04318 13.9666 9.53807 13.6009 9.84678Z"
                      fill="#F9BF3B"
                    />
                  </svg>

                  <span class=" text-[#FFF]  text-center font-Roboto text-[14px] font-bold leading-6">
                    <b class="text-[#F9BF3B]">79 units</b> sold in the last 24
                    hours
                  </span>
                </div>
              </div>

              <section class="bg-[#F0F2F5]  w-full rounded-[10px] lg:p-[22px]">
                <div class="mb-[17px] mx-4 lg:mx-auto">
                  <h5 class="text-base font-bold text-[#5F6061] mb-[10px]">
                    By More, Save More
                  </h5>
                  <ul class="inline-flex border divide-x">
                    <li class="w-[104px]  h-[56px] lg:w-[151px] lg:h-[56px] rounded-tl-[5px] rounded-bl-[5px] cursor-pointer border-[2px] bg-[#FFF5E3] border-[#F09831] flex items-center flex-col justify-center relative text-sm font-bold text-center text-[#232F3E]">
                      <div>1x</div>
                      <div>$79,99/piece</div>
                    </li>

                    <li class="w-[104px] h-[56px] lg:w-[151px] lg:h-[56px]  bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center text-[12px] lg:test-sm ">
                      <div class="absolute -top-3 rounded-[3px] bg-[#CA232C] text-white text-center font-Roboto text-[12px] font-bold leading-[14px] w-[97px] h-[20px] flex items-center justify-center">
                        Recommended
                      </div>
                      <div>1x</div>
                      <div>$79,99/piece</div>
                    </li>
                    <li class="w-[104px] h-[56px] lg:w-[151px] lg:h-[56px]  bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center text-[12px] lg:test-sm  ">
                      <div class="absolute -top-3 rounded-[3px] bg-[#1D6EC1] text-white text-center font-Roboto text-[12px] font-bold leading-[14px] w-[68px] h-[20px] flex items-center justify-center ">
                        Best Value
                      </div>
                      <div>1x</div>
                      <div>$79,99/piece</div>
                    </li>
                  </ul>
                </div>

                {/* SIZE */}
                <div class="mb-[15px] mx-4 lg:mx-auto ">
                  <h5 class="w-full inline-flex justify-between lg:w-2/3">
                    <span class="text-base font-bold text-[#5F6061] mb-[10px]">
                      Choose Size
                    </span>
                    <a href="#" class="underline text-[#99A0A7] text-sm">
                      Size Chart
                    </a>
                  </h5>
                  <ul class="inline-flex border divide-x ">
                    <li class="w-[76px] lg:w-[96px] h-[56px]  rounded-tl-[5px] rounded-bl-[5px] cursor-pointer border-[2px] bg-[#FFF5E3] border-[#F09831] flex items-center flex-col justify-center relative text-sm font-bold text-center text-[#232F3E]">
                      <div>S</div>
                    </li>

                    <li class="w-[76px] lg:w-[96px] h-[56px]  bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center test-sm">
                      <div>M</div>
                    </li>
                    <li class="w-[76px] lg:w-[96px] h-[56px]  bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center test-sm">
                      <div>L</div>
                    </li>

                    <li class="w-[76px] lg:w-[96px] h-[56px] rounded-tr-[5px] rounded-br-[5px] bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center test-sm">
                      <div>XL</div>
                    </li>
                  </ul>
                </div>

                {/* Color */}
                <div class="mb-[15px] lg:hidden mx-4 lg:mx-auto">
                  <h5 class="w-full flex justify-between">
                    <span class="text-base font-bold text-[#5F6061] mb-[10px]">
                      Choose a Color:
                    </span>
                  </h5>
                  <div class="flex gap-0 items-center ">
                    <div class="w-[85px] h-[85px] flex-shrink-0 rounded-t-[5px] rounded-b-[5px] flex flex-col justify-center items-center border-2 border-[#F09831] bg-[#FFF5E3]">
                      <div class="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                        >
                          <g filter="url(#filter0_i_52_11703)">
                            <circle
                              cx="15"
                              cy="15"
                              r="15"
                              fill="url(#paint0_linear_52_11703)"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_52_11703"
                              x="0"
                              y="0"
                              width="30"
                              height="32"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_52_11703"
                              />
                            </filter>
                            <linearGradient
                              id="paint0_linear_52_11703"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="30"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#13EADA" />
                              <stop offset="1" stop-color="#08D0B3" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <h4 class="text-[#232F3E] text-center font-Roboto text-[14px] font-bold leading-normal">
                        Turquoise
                      </h4>
                    </div>

                    <div class="w-[85px] h-[85px] flex-shrink-0  flex flex-col justify-center items-center  rounded-l-[0] rounded-r-[5px] border border-solid border-[#DDD] bg-white shadow-md">
                      <div class="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                        >
                          <g filter="url(#filter0_i_52_11704)">
                            <circle
                              cx="15"
                              cy="15"
                              r="15"
                              fill="url(#paint0_linear_52_11704)"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_52_11704"
                              x="0"
                              y="0"
                              width="30"
                              height="32"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_52_11704"
                              />
                            </filter>
                            <linearGradient
                              id="paint0_linear_52_11704"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="30"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#F9C95F" />
                              <stop offset="1" stop-color="#F09831" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <h4 class="text-[#232F3E] text-center font-Roboto text-[14px] font-normal leading-normal">
                        Orange
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Price */}
                <div class="flex flex-col mx-4 lg:mx-auto">
                  <p class="text-[#99A0A7] text-base leading-[30px]">
                    Regular price:
                    <span class="line-through"> $99.90</span>
                  </p>
                  <h4 class="relative flex items-center gap-5">
                    <span class="text-[#CA232C] text-[30px] font-bold tracking-[-0.5px]">
                      {" "}
                      $59.90
                    </span>
                    <span class=" p-1 text-xs bg-transparent text-white relative">
                      <div class="h-[22px] w-[63px]"></div>
                      <span class="z-50 absolute top-1/4 w-full ">
                        {" "}
                        40% OFF
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="63"
                        height="22"
                        viewBox="0 0 63 22"
                        class="absolute top-0 -left-2 h-full"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.89463 20.423C7.65115 21.4167 8.82837 22 10.0773 22H59C61.2091 22 63 20.2091 63 18V4C63 1.79086 61.2091 0 59 0H10.1572C8.86346 0 7.64959 0.625746 6.89906 1.67957L0 11.3667L6.89463 20.423Z"
                          fill="#1D6EC1"
                        />
                      </svg>
                    </span>
                  </h4>
                </div>

                {/* IN STOCK */}
                <div class="flex items-center gap-2 mb-[15px] mx-4 lg:mx-auto">
                  <span>
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.64 2.86466L6.8588 11.442C6.38442 11.9053 5.61548 11.9053 5.14156 11.442L0.355783 6.77016C-0.118594 6.30732 -0.118594 5.55577 0.355783 5.09227L1.21365 4.25369C1.68818 3.79026 2.45771 3.79026 2.93164 4.25369L5.99793 7.24913L13.0649 0.34746C13.5394 -0.11582 14.3082 -0.11582 14.7821 0.34746L15.6407 1.18604C16.1199 1.6488 16.1199 2.40042 15.64 2.86466Z"
                        fill="#3DBD00"
                      />
                    </svg>
                  </span>

                  <p class="text-[#5F6061] text-[12px] lg:text-sm">
                    <span class="text-[#3DBD00] text-[12px] lg:text-sm font-bold">
                      In stock.
                    </span>
                    Order in the next{" "}
                    <span class="text-black text-[12px] lg:text-sm font-bold ">
                      5h 43m 33s
                    </span>{" "}
                    and the product will be with you on
                    <span class="text-black text-[12px] lg:text-sm font-bold ">
                      Monday 25 September
                    </span>{" "}
                  </p>
                </div>

                {/* ORDER BUTTON */}
                <div class="flex items-center justify-center">
                  <button
                    class="lg:hidden inline-flex w-[90%] justify-center  mx-auto  rounded-[5px] bg-[#090] h-[62px] items-center gap-2"
                    style="background: linear-gradient(0deg, #00AC00 0%, #3EC000 100%);box-shadow: 0px 3px 13px 0px rgba(0, 153, 0, 0.36), 0px 2px 0px 0px #090;"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <g opacity="0.5" filter="url(#filter0_d_52_11678)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.333 17.875C18.2284 17.875 17.333 18.7984 17.333 19.9375C17.333 21.0766 18.2284 22 19.333 22C20.4376 22 21.333 21.0766 21.333 19.9375C21.333 18.7984 20.4376 17.875 19.333 17.875ZM7.33301 17.875C6.22843 17.875 5.33301 18.7984 5.33301 19.9375C5.33301 21.0766 6.22843 22 7.33301 22C8.4376 22 9.33302 21.0766 9.33302 19.9375C9.33302 18.7984 8.4376 17.875 7.33301 17.875ZM23.7304 1.92216C23.4759 1.57442 23.0878 1.375 22.6653 1.375H5.08155L4.98243 0.83832C4.89259 0.351914 4.48022 0 4.00009 0H1C0.447709 0 0 0.461699 0 1.03125C0 1.6008 0.447709 2.0625 1 2.0625H3.17255L5.68434 15.6617C5.77418 16.1481 6.18655 16.5 6.66668 16.5H20.3334C20.8857 16.5 21.3334 16.0383 21.3334 15.4688C21.3334 14.8992 20.8857 14.4375 20.3334 14.4375H7.49414L7.11322 12.375H20.3795C20.975 12.375 21.4984 11.9679 21.6621 11.3773L23.9479 3.128C24.0638 2.70905 23.9843 2.26995 23.7304 1.92216Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_52_11678"
                          x="-1"
                          y="0"
                          width="26"
                          height="24"
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
                            result="effect1_dropShadow_52_11678"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_52_11678"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>

                    <span class="text-white text-center text-shadow font-Roboto text-[20px] font-bold leading-[30px]">
                      Order now
                    </span>

                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <g filter="url(#filter0_d_52_11682)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.65383 0.241237L15.1845 6.36629C15.3608 6.53149 15.4605 6.76041 15.4605 6.99994C15.4605 7.23948 15.3608 7.46807 15.1845 7.63359L8.65383 13.7586C8.29784 14.0913 7.73434 14.0788 7.39445 13.729C7.0547 13.3827 7.06747 12.8267 7.4246 12.4916L12.3486 7.87595H1.89092C1.39926 7.87595 1 7.48366 1 7.00058C1 6.5175 1.39926 6.12594 1.89092 6.12594H12.3463L7.42228 1.51027C7.06569 1.17458 7.05456 0.618584 7.39222 0.271133C7.7336 -0.0788696 8.26422 -0.0912656 8.65383 0.241237Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_52_11682"
                            x="0"
                            y="0"
                            width="16.4609"
                            height="16"
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
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_52_11682"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_52_11682"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </span>
                  </button>
                </div>

                {/* MESSAGE SUCCESS */}
                <div
                  class="bg-[#090] hidden mx-4 lg:mx-auto  w-full py-2 h-[62px] px-4 lg:flex rounded-[5px] justify-center items-center lg:gap-4 text-white"
                  style="box-shadow: 0px 2px 0px 0px #090;"
                >
                  <svg
                    width="20"
                    height="15"
                    class="w-[16px]  h-[11px] "
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.55 3.64477L8.57349 14.5579C7.98052 15.1474 7.01936 15.1474 6.42695 14.5579L0.444729 8.61382C-0.148243 8.02494 -0.148243 7.06872 0.444729 6.479L1.51707 5.41206C2.11023 4.82243 3.07214 4.82243 3.66455 5.41206L7.49741 9.22323L16.3311 0.442081C16.9242 -0.14736 17.8852 -0.14736 18.4776 0.442081L19.5509 1.50902C20.1499 2.0978 20.1499 3.05411 19.55 3.64477Z"
                      fill="white"
                    />
                  </svg>

                  <span
                    class="text-white text-[20px] font-bold"
                    style="text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);"
                  >
                    Product added to your cart
                  </span>
                </div>

                {/* DONT FORGET */}

                <div class="w-full hidden lg:block rounded-[7px] mt-5  border-2 border-[#F09831] pb-1.5 bg-white divide-y relative">
                  <div class="absolute -top-3.5 left-10 rounded-[3px] bg-[#F09831]  h-[25px] flex-shrink-0 uppercase inline-flex px-2.5 text-white font-bold items-center justify-center">
                    DON’T FORGET
                  </div>
                  <div class="flex w-full h-[65px]  bg-[#F09831] rounded-[2px] bg-opacity-[.2] justify-between px-4 -y-2 items-center">
                    <div class="flex items-center gap-4">
                      <label
                        class="custom-input flex items-center justify-center rounded-[4px] bg-[#F09831] h-[32px] w-[32px]"
                        for="additional"
                        tabIndex={1}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="14"
                          viewBox="0 0 19 14"
                          fill="none"
                        >
                          <path
                            d="M6.45324 13.725L0.278237 7.62349C-0.0927457 7.25692 -0.0927457 6.66257 0.278237 6.29596L1.62171 4.96843C1.99269 4.60182 2.59424 4.60182 2.96522 4.96843L7.125 9.07869L16.0348 0.274927C16.4058 -0.0916425 17.0073 -0.0916425 17.3783 0.274927L18.7218 1.60246C19.0927 1.96903 19.0927 2.56338 18.7218 2.92998L7.79675 13.7251C7.42573 14.0916 6.82423 14.0916 6.45324 13.725Z"
                            fill="white"
                          />
                        </svg>
                      </label>
                      <div class="inline-flex gap-5 items-center">
                        <span class="text-base font-semibold text-[#232F3E]">
                          Additional Product
                        </span>
                        <span class=" p-1 text-xs bg-transparent text-white relative">
                          <div class="h-[25px] w-[66px]"></div>
                          <span class="z-50 absolute top-1/4 w-full ">
                            {" "}
                            40% OFF
                          </span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute top-0 -left-2 h-full"
                            width="66"
                            height="25"
                            viewBox="0 0 66 25"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7915 0.864591C12.3529 0.310608 13.1099 0 13.8987 0H63C64.6569 0 66 1.34315 66 3V22C66 23.6569 64.6569 25 63 25H13.8987C13.1099 25 12.3529 24.6894 11.7915 24.1354L1.44271 13.9236C0.649052 13.1405 0.649051 11.8595 1.44271 11.0764L11.7915 0.864591Z"
                              fill="#CA232C"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div
                        class="w-[66px] h-[42px] bg-white shadow border border-[#DDD] rounded-[5px] flex items-center gap-4 px-2.5 py-2"
                        style="background: linear-gradient(180deg, #FFF 0%, #FAFAFA 100%);
                      box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.10);"
                      >
                        <span>1x</span>
                        <span>
                          <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                  <div class="flex w-full h-[65px]   bg-white justify-between px-4 -y-2 items-center">
                    <div class="flex items-center gap-4">
                      <label
                        class="custom-input border border-[#CCC] flex items-center justify-center rounded-[4px] bg-white h-[32px] w-[32px]"
                        for="additional"
                        style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
                        tabIndex={1}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="14"
                          viewBox="0 0 19 14"
                          fill="none"
                        >
                          <path
                            d="M6.45324 13.725L0.278237 7.62349C-0.0927457 7.25692 -0.0927457 6.66257 0.278237 6.29596L1.62171 4.96843C1.99269 4.60182 2.59424 4.60182 2.96522 4.96843L7.125 9.07869L16.0348 0.274927C16.4058 -0.0916425 17.0073 -0.0916425 17.3783 0.274927L18.7218 1.60246C19.0927 1.96903 19.0927 2.56338 18.7218 2.92998L7.79675 13.7251C7.42573 14.0916 6.82423 14.0916 6.45324 13.725Z"
                            fill="#F0F2F5"
                          />
                        </svg>
                      </label>

                      <div class="inline-flex gap-5 items-center">
                        <span class="text-base font-semibold text-[#232F3E]">
                          Additional Product
                        </span>
                        <span class=" p-1 text-xs bg-transparent text-white relative">
                          <div class="h-[25px] w-[66px]"></div>
                          <span class="z-50 absolute top-1/4 w-full ">
                            {" "}
                            40% OFF
                          </span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute top-0 -left-2 h-full"
                            width="66"
                            height="25"
                            viewBox="0 0 66 25"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7915 0.864591C12.3529 0.310608 13.1099 0 13.8987 0H63C64.6569 0 66 1.34315 66 3V22C66 23.6569 64.6569 25 63 25H13.8987C13.1099 25 12.3529 24.6894 11.7915 24.1354L1.44271 13.9236C0.649052 13.1405 0.649051 11.8595 1.44271 11.0764L11.7915 0.864591Z"
                              fill="#CA232C"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div
                        class="w-[66px] h-[42px] bg-white shadow border border-[#DDD] rounded-[5px] flex items-center gap-4 px-2.5 py-2"
                        style="background: linear-gradient(180deg, #FFF 0%, #FAFAFA 100%);
                      box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.10);"
                      >
                        <span>1x</span>
                        <span>
                          <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                  <div class="flex w-full h-[65px]   bg-white justify-between px-4 -y-2 items-center">
                    <div class="flex items-center gap-4">
                      <label
                        class="custom-input border border-[#CCC] flex items-center justify-center rounded-[4px] bg-white h-[32px] w-[32px]"
                        for="additional"
                        style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
                        tabIndex={1}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="14"
                          viewBox="0 0 19 14"
                          fill="none"
                        >
                          <path
                            d="M6.45324 13.725L0.278237 7.62349C-0.0927457 7.25692 -0.0927457 6.66257 0.278237 6.29596L1.62171 4.96843C1.99269 4.60182 2.59424 4.60182 2.96522 4.96843L7.125 9.07869L16.0348 0.274927C16.4058 -0.0916425 17.0073 -0.0916425 17.3783 0.274927L18.7218 1.60246C19.0927 1.96903 19.0927 2.56338 18.7218 2.92998L7.79675 13.7251C7.42573 14.0916 6.82423 14.0916 6.45324 13.725Z"
                            fill="#F0F2F5"
                          />
                        </svg>
                      </label>

                      <div class="inline-flex gap-5 items-center">
                        <span class="text-base font-semibold text-[#232F3E]">
                          Additional Product
                        </span>
                        <span class=" p-1 text-xs bg-transparent text-white relative">
                          <div class="h-[25px] w-[66px]"></div>
                          <span class="z-50 absolute top-1/4 w-full ">
                            {" "}
                            40% OFF
                          </span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute top-0 -left-2 h-full"
                            width="66"
                            height="25"
                            viewBox="0 0 66 25"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7915 0.864591C12.3529 0.310608 13.1099 0 13.8987 0H63C64.6569 0 66 1.34315 66 3V22C66 23.6569 64.6569 25 63 25H13.8987C13.1099 25 12.3529 24.6894 11.7915 24.1354L1.44271 13.9236C0.649052 13.1405 0.649051 11.8595 1.44271 11.0764L11.7915 0.864591Z"
                              fill="#CA232C"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div
                        class="w-[66px] h-[42px] bg-white shadow border border-[#DDD] rounded-[5px] flex items-center gap-4 px-2.5 py-2"
                        style="background: linear-gradient(180deg, #FFF 0%, #FAFAFA 100%);
                      box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.10);"
                      >
                        <span>1x</span>
                        <span>
                          <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                </div>
                {/* LIST */}
                <div class="flex mx-4 lg:mx-auto flex-col gap-2 mt-3">
                  <div class="flex items-center gap-4">
                    <span>
                      <svg
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4 1.2C10.4 0.53725 9.8625 0 9.2 0H1.2C0.53725 0 0 0.53725 0 1.2V9.2C0 9.8625 0.53725 10.4 1.2 10.4H1.6C1.6 11.725 2.6525 12.8 4 12.8C5.325 12.8 6.4 11.725 6.4 10.4H9.6C9.6 11.725 10.6525 12.8 12 12.8C13.325 12.8 14.4 11.725 14.4 10.4H15.2C15.6425 10.4 16 10.0425 16 9.6C16 9.1575 15.6425 8.8 15.2 8.8V5.9325C15.2 5.5075 15.0325 5.1 14.7325 4.8L12.8 2.8675C12.4775 2.5675 12.0925 2.4 11.6675 2.4H10.4V1.2ZM10.4 6.4V4H11.6675L13.6 5.9325V6.4H10.4ZM4 9.2C3.3375 9.2 2.8 9.7375 2.8 10.4C2.8 11.0625 3.3375 11.6 4 11.6C4.6625 11.6 5.2 11.0625 5.2 10.4C5.2 9.7375 4.6625 9.2 4 9.2ZM13.2 10.4C13.2 11.0625 12.6625 11.6 12 11.6C11.3375 11.6 10.8 11.0625 10.8 10.4C10.8 9.7375 11.3375 9.2 12 9.2C12.6625 9.2 13.2 9.7375 13.2 10.4Z"
                          fill="#3DBD00"
                        />
                      </svg>
                    </span>

                    <span class=" text-[#5F6061] text-sm font-bold">
                      <b class="text-[#3DBD00] text-[14px] font-bold mr-1">
                        Free delivery
                      </b>
                      on all orders over $69
                    </span>
                  </div>
                  <div class="flex items-center gap-4">
                    <span>
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.02638 4.64258C7.27087 4.73148 7.5487 4.8315 7.75985 4.86206C8.23772 4.93986 8.62947 4.84817 8.66109 4.65966L8.66114 4.65933C8.68361 4.52756 8.69703 4.44891 7.81814 4.19735L7.63761 4.14526L7.63379 4.14412C7.12524 3.99325 5.79056 3.59726 6.00395 2.22627C6.14287 1.56281 6.63463 1.11772 7.33588 0.959077V0.666797C7.33588 0.29867 7.634 0 8.00212 0C8.37025 0 8.66892 0.29867 8.66892 0.666797V0.979358C8.83284 1.01723 9.00838 1.06532 9.21958 1.13831C9.56773 1.25889 9.75163 1.63846 9.63189 1.98653C9.51214 2.3346 9.13207 2.51777 8.78394 2.39883C8.5539 2.31895 8.3752 2.2699 8.238 2.24819C7.76819 2.17404 7.37522 2.26555 7.3431 2.45354C7.34247 2.45724 7.34182 2.46093 7.34117 2.46459C7.32176 2.57366 7.30571 2.66392 8.01268 2.86445L8.15979 2.91529C8.8691 3.11783 10.191 3.49596 9.94959 4.88651C9.86013 5.5497 9.37086 5.99776 8.66878 6.15676V6.44571C8.66878 6.81383 8.37011 7.1125 8.00198 7.1125C7.63386 7.1125 7.33574 6.81383 7.33574 6.44571V6.1042C7.07152 6.0426 6.81053 5.95831 6.57476 5.87326L6.44543 5.82725C6.099 5.7039 5.91783 5.29826 6.04007 4.97597C6.16232 4.65369 6.54295 4.44809 6.89024 4.59534L7.02638 4.64258ZM14.2325 9.1082C14.7268 8.74171 15.4219 8.84868 15.7864 9.3435C16.1504 9.83804 16.0448 10.5326 15.503 10.8969L11.7495 13.6618C11.2555 14.0253 10.6474 14.225 10.0353 14.225H0.419527C0.201456 14.225 0 14.025 0 13.7799V11.1133C0 10.8716 0.201456 10.6438 0.419527 10.6438L1.95816 10.6688L3.25008 9.62025C3.83353 9.14793 4.58423 8.89094 5.30937 8.89094H9.77886C10.3206 8.89094 10.7477 9.37381 10.6574 9.92947C10.5846 10.3668 10.1498 10.6691 9.73024 10.6691H7.5562C7.3381 10.6691 7.13668 10.8705 7.13668 11.1136C7.13668 11.3564 7.31315 11.5578 7.5562 11.5578H10.9069L14.2325 9.1082Z"
                          fill="#5F6061"
                        />
                      </svg>
                    </span>
                    <span class="text-[#5F6061] text-sm font-bold">
                      Cash on delivery
                    </span>
                  </div>

                  <div class="flex items-center gap-4">
                    <span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.775862 0C1.2042 0 1.55172 0.347522 1.55172 0.775862V4.07651C2.83513 1.92575 5.18211 0.520797 7.76185 0.520797C11.7543 0.520797 15 3.76616 15 7.75862C15 11.7511 11.7543 14.9968 7.76185 14.9968C6.0708 14.9968 4.42241 14.4042 3.12284 13.3232C2.79343 13.0484 2.74914 12.5596 3.02386 12.2302C3.29864 11.8998 3.78873 11.8565 4.11685 12.1312C5.13685 12.9795 6.42996 13.4483 7.75862 13.4483C10.8954 13.4483 13.4483 10.8954 13.4483 7.75862C13.4483 4.62187 10.8944 2.06897 7.75862 2.06897C5.60754 2.06897 3.65948 3.30647 2.69935 5.17241H5.94828C6.37823 5.17241 6.72414 5.52155 6.72414 5.94828C6.72414 6.375 6.37823 6.72414 5.94828 6.72414H0.775862C0.347522 6.72414 0 6.37823 0 5.94828V0.775862C0 0.347522 0.347522 0 0.775862 0Z"
                          fill="#5F6061"
                        />
                      </svg>
                    </span>
                    <span class="text-[#5F6061] text-sm font-bold">
                      14-day money-back guarantee
                    </span>
                  </div>

                  <div class="flex items-center gap-4">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85664 0.523476L10.8098 4.41752L15.18 5.04368C15.9642 5.15533 16.2782 6.10513 15.7098 6.64924L12.5486 9.65212L13.2964 13.9315C13.4309 14.7053 12.6029 15.2814 11.9086 14.9226L7.99992 12.9291L4.09243 14.9497C3.3969 15.3085 2.57003 14.732 2.70436 13.9585L3.45213 9.67918L0.290016 6.64983C-0.278048 6.10572 0.0358049 5.15603 0.81987 5.04427L5.19005 4.41811L7.1432 0.524064C7.49544 -0.178952 8.50739 -0.170217 8.85664 0.523476Z"
                          fill="#5F6061"
                        />
                      </svg>
                    </span>
                    <span class="text-[#5F6061] text-sm font-bold">
                      97% rate Your Shop as EXCELLENT
                    </span>
                  </div>
                </div>

                {/* PAYMENT MODES */}

                <div class="flex mx-4 lg:mx-auto gap-1 lg:gap-2 items-center mt-4">
                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <svg
                      width="23"
                      height="21"
                      viewBox="0 0 23 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3347 15.4412C14.9806 14.9596 14.3054 14.8555 13.8253 15.2122L10.5948 17.5964H7.33999C7.10389 17.5964 6.93246 17.4003 6.93246 17.164C6.93246 16.9274 7.12813 16.7314 7.33999 16.7314H9.45181C9.85934 16.7314 10.2817 16.4371 10.3524 16.0115C10.4401 15.4707 10.0253 15.0007 9.49904 15.0007H5.15745C4.45306 15.0007 3.72383 15.2509 3.15708 15.7106L1.90213 16.7311L0.407522 16.7067C0.195692 16.7067 0 16.9285 0 17.1637V19.7591C0 19.9976 0.195692 20.1923 0.407522 20.1923H9.74814C10.3427 20.1923 10.9335 19.9979 11.4133 19.6442L15.0594 16.9531C15.5857 16.5986 15.6883 15.9225 15.3347 15.4412Z"
                        fill="#1D6EC1"
                      />
                      <path
                        opacity="0.5"
                        d="M7.20826 4.75119C7.56235 5.23279 8.23759 5.33689 8.71771 4.9802L11.9482 2.59599L15.203 2.59599C15.4391 2.59599 15.6105 2.79204 15.6105 3.02837C15.6105 3.26498 15.4148 3.46103 15.203 3.46103H13.0912C12.6836 3.46103 12.2613 3.75524 12.1906 4.18086C12.1028 4.72168 12.5177 5.19166 13.0439 5.19166H17.3855C18.0899 5.19166 18.8191 4.94153 19.3859 4.48183L20.6408 3.4613L22.1354 3.48567C22.3473 3.48567 22.543 3.26393 22.543 3.02867V0.433272C22.543 0.19477 22.3473 7.53403e-05 22.1354 7.53403e-05L12.7948 7.53403e-05C12.2003 7.53403e-05 11.6095 0.194446 11.1297 0.548197L7.48354 3.23932C6.95727 3.59383 6.85472 4.26986 7.20826 4.75119Z"
                        fill="#99A0A7"
                      />
                      <path
                        d="M11.6431 7.76654C11.4126 7.62513 11.1163 7.55441 10.787 7.55441C10.0954 7.55441 9.60147 7.90794 9.27218 8.57967H11.3797V9.42816H9.04167C9.00875 9.56957 9.00875 9.71099 9.00875 9.88775C9.00875 10.0292 9.00875 10.1706 9.00875 10.2413H11.3797V11.0898H9.20633C9.37097 11.4433 9.56855 11.7261 9.86492 11.9382C10.1284 12.1504 10.4577 12.2564 10.8199 12.2564C11.1492 12.2564 11.4785 12.2211 11.709 12.0797C11.9395 11.9382 12.203 11.7261 12.4664 11.4079L13.125 12.2918C12.5323 13.0342 11.7749 13.4231 10.787 13.4231C10.1284 13.4231 9.56855 13.211 9.04167 12.7514C8.5148 12.3271 8.15256 11.7615 7.95498 11.0544H7V10.2766H7.79032C7.79032 10.2059 7.79032 10.0645 7.79032 9.92311C7.79032 9.7817 7.79032 9.60493 7.82325 9.46352H7V8.61504H8.02083C8.21841 7.94333 8.58065 7.41302 9.0746 7.02413C9.56855 6.63523 10.1613 6.4231 10.787 6.4231C11.7419 6.4231 12.4993 6.77663 13.0591 7.55441L12.4005 8.4029C12.1371 8.12007 11.8737 7.90794 11.6431 7.76654Z"
                        fill="#1D6EC1"
                      />
                    </svg>

                    <span class="text-xs">Cash on delivery</span>
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <svg
                      width="34"
                      height="9"
                      viewBox="0 0 34 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.257 2.66943H26.1255C26.73 2.66943 27.2246 2.81383 27.5544 3.05449C27.7742 3.29516 27.8841 3.68021 27.7742 4.11341C27.6093 5.17232 26.8949 5.70178 25.6309 5.70178H25.0264C24.8615 5.70178 24.7516 5.79804 24.7516 5.89431L24.5318 7.09762C24.5318 7.19388 24.4769 7.24201 24.367 7.24201H23.3778C23.2678 7.24201 23.2129 7.19388 23.2129 7.09762L23.9823 2.86196C24.0372 2.7657 24.1471 2.66943 24.257 2.66943ZM25.2462 4.83539C25.7408 4.83539 26.2354 4.83539 26.3453 4.2578C26.3453 4.01714 26.3453 3.87274 26.2354 3.82461C26.0706 3.63208 25.7408 3.63208 25.4111 3.63208H25.3012C25.1913 3.63208 25.1363 3.68021 25.1363 3.72835L24.9165 4.83539H25.2462Z"
                        fill="#139AD6"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.1227 2.68115H12.915C13.5476 2.68115 13.9694 2.82367 14.2857 3.06121C14.4965 3.29875 14.6019 3.67881 14.4965 4.10637C14.3384 5.15153 13.6531 5.67411 12.4406 5.67411H11.8607C11.7026 5.67411 11.5971 5.76913 11.5971 5.86414L11.3863 7.00432C11.3336 7.09933 11.2281 7.19435 11.1227 7.19435H10.2792C10.1738 7.19435 10.1211 7.14684 10.1211 7.05183L10.8591 2.87118C10.9118 2.77617 11.0173 2.68115 11.1227 2.68115ZM12.0716 4.81898C12.546 4.81898 13.0205 4.81898 13.1259 4.24889C13.1786 4.01136 13.1259 3.86884 13.0732 3.82133C12.915 3.6313 12.5987 3.6313 12.2824 3.6313H12.177C12.0716 3.6313 12.0189 3.67881 12.0189 3.72631L11.808 4.81898H12.0716Z"
                        fill="#263B80"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.5006 4.20146H18.3441C18.3968 4.20146 18.5023 4.29647 18.555 4.34398L18.0805 7.00439C18.0278 7.09941 17.9224 7.19442 17.8169 7.19442H17.0262C16.9208 7.19442 16.8681 7.14691 16.8681 7.0519L16.9208 6.81436C16.9208 6.81436 16.499 7.24193 15.7083 7.24193C15.2339 7.24193 14.8649 7.14691 14.6013 6.86187C14.3377 6.57683 14.1795 6.14926 14.285 5.67419C14.4431 4.77155 15.2866 4.10645 16.2355 4.10645C16.6572 4.10645 17.0262 4.20146 17.2371 4.439L17.2898 4.53401L17.3425 4.29647C17.3425 4.24897 17.4479 4.20146 17.5006 4.20146ZM16.13 6.48181C16.6572 6.48181 17.0262 6.14926 17.1316 5.72169C17.1316 5.53167 17.0789 5.29413 16.9208 5.15161C16.7626 5.05659 16.6045 4.96158 16.3409 4.96158C15.8665 4.96158 15.4447 5.29413 15.392 5.72169C15.392 5.95923 15.4447 6.14926 15.5502 6.29178C15.6556 6.3868 15.8665 6.48181 16.13 6.48181Z"
                        fill="#263B80"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M30.7018 4.20146H31.5453C31.598 4.20146 31.7034 4.29647 31.7561 4.34398L31.2817 7.00439C31.229 7.09941 31.1235 7.19442 31.0181 7.19442H30.2274C30.1219 7.19442 30.0692 7.14691 30.0692 7.0519L30.1219 6.81436C30.1219 6.81436 29.7002 7.24193 28.9095 7.24193C28.435 7.24193 28.066 7.14691 27.8024 6.86187C27.5389 6.57683 27.3807 6.14926 27.4861 5.67419C27.6443 4.77155 28.4878 4.10645 29.4366 4.10645C29.8584 4.10645 30.2274 4.20146 30.4382 4.439L30.491 4.53401L30.5437 4.29647C30.5437 4.24897 30.6491 4.20146 30.7018 4.20146ZM29.3312 6.48181C29.8584 6.48181 30.2274 6.14926 30.3328 5.72169C30.3328 5.53167 30.2801 5.29413 30.1219 5.15161C29.9638 5.05659 29.8056 4.96158 29.5421 4.96158C29.0676 4.96158 28.6459 5.29413 28.5932 5.72169C28.5932 5.95923 28.6459 6.14926 28.7513 6.29178C28.8568 6.3868 29.0676 6.48181 29.3312 6.48181Z"
                        fill="#139AD6"
                      />
                      <path
                        d="M23.0779 4.30249H22.1694C22.0625 4.30249 22.0091 4.35129 21.9556 4.4001L20.7799 6.05944L20.2455 4.49771C20.1921 4.4001 20.1386 4.35129 19.9783 4.35129H19.1232C19.0163 4.35129 18.9629 4.4489 18.9629 4.54651L19.9248 7.13314L19.0163 8.30444C18.9629 8.40205 19.0163 8.54846 19.1232 8.54846H19.9783C20.0852 8.54846 20.1386 8.49965 20.1921 8.45085L23.1314 4.59532C23.2917 4.4489 23.1848 4.30249 23.0779 4.30249Z"
                        fill="#263B80"
                      />
                      <path
                        d="M32.4035 2.78411L31.7148 7.09821C31.7148 7.19408 31.764 7.24201 31.8624 7.24201H32.5511C32.6495 7.24201 32.7479 7.14615 32.7971 7.05028L33.4858 2.83204C33.4858 2.73617 33.4366 2.68824 33.3382 2.68824H32.5511C32.5019 2.6403 32.4527 2.68824 32.4035 2.78411Z"
                        fill="#139AD6"
                      />
                      <path
                        d="M6.1404 1.28934C5.77829 0.902924 5.1058 0.709717 4.17465 0.709717H1.58813C1.43294 0.709717 1.27775 0.854623 1.22601 0.999528L0.191406 7.32708C0.191406 7.47198 0.294867 7.56859 0.398328 7.56859H2.00197L2.41581 5.20179V5.2984C2.46754 5.15349 2.62274 5.00859 2.77793 5.00859H3.55388C5.05407 5.00859 6.19214 4.42896 6.55425 2.835C6.55425 2.7867 6.55425 2.7384 6.55425 2.6901C6.50252 2.6901 6.50252 2.6901 6.55425 2.6901C6.60598 2.06217 6.50252 1.67576 6.1404 1.28934Z"
                        fill="#263B80"
                      />
                      <path
                        d="M6.65357 2.66943C6.65357 2.71884 6.65357 2.76824 6.65357 2.81764C6.28874 4.49737 5.14213 5.04081 3.63069 5.04081H2.84891C2.69255 5.04081 2.5362 5.18902 2.48408 5.33723L1.96289 8.35085C1.96289 8.44966 2.01501 8.54847 2.17137 8.54847H3.52645C3.68281 8.54847 3.83916 8.44966 3.83916 8.30145V8.25204L4.09976 6.72053V6.62172C4.09976 6.47351 4.25611 6.37471 4.41247 6.37471H4.62094C5.92391 6.37471 6.96629 5.88067 7.22688 4.39856C7.33112 3.80572 7.279 3.26228 6.96629 2.91645C6.91417 2.81764 6.80993 2.71884 6.65357 2.66943Z"
                        fill="#139AD6"
                      />
                      <path
                        d="M6.09438 2.48975C6.04191 2.48975 5.98944 2.44076 5.93696 2.44076C5.88449 2.44076 5.83202 2.44076 5.77955 2.39177C5.56966 2.34277 5.35977 2.34277 5.09741 2.34277H3.05101C2.99854 2.34277 2.94607 2.34277 2.8936 2.39177C2.78865 2.44076 2.73618 2.53874 2.73618 2.63673L2.31641 5.18431V5.28229C2.36888 5.13531 2.52629 4.98834 2.68371 4.98834H3.47079C4.99247 4.98834 6.14685 4.40043 6.51416 2.7837C6.51416 2.73471 6.51416 2.68572 6.56663 2.63673C6.46168 2.58773 6.40921 2.53874 6.30427 2.53874C6.14685 2.48975 6.14685 2.48975 6.09438 2.48975Z"
                        fill="#232C65"
                      />
                    </svg>
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <svg
                      width="28"
                      height="20"
                      viewBox="0 0 28 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.4607 19.2834C22.4854 19.2834 22.5045 19.2888 22.5173 19.2996C22.531 19.3114 22.5374 19.3258 22.5374 19.3448C22.5374 19.3601 22.5328 19.3736 22.5219 19.3836C22.5109 19.3944 22.4954 19.3998 22.4762 19.4025L22.5392 19.4747H22.4899L22.4315 19.4034H22.4124V19.4747H22.3713V19.2834H22.4607ZM22.448 19.5406C22.4708 19.5406 22.4918 19.5361 22.5109 19.528C22.5301 19.519 22.5465 19.5081 22.562 19.4937C22.5766 19.4793 22.5876 19.4621 22.5958 19.4422C22.6049 19.4233 22.6086 19.4025 22.6086 19.38C22.6086 19.3574 22.6049 19.3366 22.5958 19.3177C22.5876 19.2978 22.5766 19.2807 22.562 19.2662C22.5465 19.2518 22.5301 19.241 22.5109 19.2328C22.4918 19.2247 22.4708 19.2202 22.448 19.2202C22.4251 19.2202 22.4042 19.2247 22.3841 19.2328C22.364 19.241 22.3467 19.2518 22.3321 19.2662C22.3175 19.2807 22.3065 19.2978 22.2983 19.3177C22.2892 19.3366 22.2855 19.3574 22.2855 19.38C22.2855 19.4025 22.2892 19.4233 22.2983 19.4422C22.3065 19.4621 22.3175 19.4793 22.3321 19.4937C22.3467 19.5081 22.364 19.519 22.3841 19.528C22.4042 19.5361 22.4251 19.5406 22.448 19.5406ZM22.448 19.1742C22.4772 19.1742 22.5045 19.1796 22.5301 19.1904C22.5556 19.2012 22.5784 19.2157 22.5976 19.2346C22.6168 19.2527 22.6323 19.2753 22.6432 19.2996C22.6542 19.3249 22.6597 19.352 22.6597 19.38C22.6597 19.4079 22.6542 19.435 22.6432 19.4594C22.6323 19.4847 22.6168 19.5063 22.5976 19.5244C22.5784 19.5433 22.5556 19.5587 22.5301 19.5695C22.5045 19.5804 22.4772 19.5858 22.448 19.5858C22.4178 19.5858 22.3905 19.5804 22.364 19.5695C22.3384 19.5587 22.3156 19.5433 22.2965 19.5244C22.2782 19.5063 22.2627 19.4847 22.2518 19.4594C22.2408 19.435 22.2353 19.4079 22.2353 19.38C22.2353 19.352 22.2408 19.3249 22.2518 19.2996C22.2627 19.2753 22.2782 19.2527 22.2965 19.2346C22.3156 19.2157 22.3384 19.2012 22.364 19.1904C22.3905 19.1796 22.4178 19.1742 22.448 19.1742ZM19.3015 17.3562C19.3928 17.3562 19.5242 17.3743 19.6246 17.4131L19.4849 17.8364C19.3882 17.7976 19.2924 17.785 19.2002 17.785C18.9036 17.785 18.7549 17.9745 18.7549 18.3166V19.4747H18.3005V17.4086H18.7503V17.6595C18.8681 17.4781 19.0387 17.3562 19.3015 17.3562ZM17.7283 17.8193H16.9846V18.7535C16.9846 18.9602 17.0594 19.0992 17.2866 19.0992C17.4043 19.0992 17.5531 19.0604 17.6881 18.9819L17.8195 19.3673C17.6754 19.4666 17.4481 19.5271 17.251 19.5271C16.7136 19.5271 16.5256 19.2419 16.5256 18.7617V17.8193H16.1021V17.4086H16.5256V16.7812H16.9846V17.4086H17.7283V17.8193ZM15.5437 17.9357C15.4168 17.8581 15.1586 17.7588 14.8921 17.7588C14.643 17.7588 14.4943 17.85 14.4943 18.0007C14.4943 18.1388 14.6521 18.1785 14.8483 18.2038L15.0628 18.2336C15.5172 18.2986 15.7928 18.4891 15.7928 18.8528C15.7928 19.2455 15.4433 19.5271 14.8401 19.5271C14.4988 19.5271 14.184 19.4404 13.9358 19.259L14.1493 18.9088C14.3026 19.0252 14.5298 19.1245 14.8447 19.1245C15.1549 19.1245 15.321 19.0343 15.321 18.8736C15.321 18.7571 15.2024 18.6921 14.9533 18.6578L14.7397 18.6281C14.2716 18.5631 14.0179 18.3555 14.0179 18.0179C14.0179 17.6072 14.3592 17.3562 14.8885 17.3562C15.2206 17.3562 15.5218 17.4303 15.7408 17.5729L15.5437 17.9357ZM12.0733 18.2598C12.1216 17.9619 12.3051 17.7588 12.6281 17.7588C12.921 17.7588 13.109 17.9402 13.1574 18.2598H12.0733ZM13.6292 18.4421C13.6246 17.7976 13.2231 17.3562 12.6372 17.3562C12.0258 17.3562 11.5969 17.7976 11.5969 18.4421C11.5969 19.0992 12.0423 19.5271 12.6673 19.5271C12.9822 19.5271 13.2705 19.4495 13.5242 19.2373L13.3016 18.9043C13.1264 19.0433 12.9037 19.1209 12.6938 19.1209C12.4009 19.1209 12.1344 18.9864 12.0687 18.6145H13.621C13.6246 18.5586 13.6292 18.5026 13.6292 18.4421ZM20.8829 17.7796C20.789 17.7796 20.7023 17.7958 20.6229 17.8274C20.5426 17.8599 20.4741 17.9059 20.4157 17.9637C20.3573 18.0224 20.3117 18.0919 20.2779 18.1731C20.2451 18.2544 20.2277 18.3437 20.2277 18.4421C20.2277 18.5396 20.2451 18.629 20.2779 18.7102C20.3117 18.7914 20.3573 18.8618 20.4157 18.9196C20.4741 18.9783 20.5426 19.0234 20.6229 19.0559C20.7023 19.0884 20.789 19.1047 20.8829 19.1047C20.976 19.1047 21.0618 19.0884 21.1421 19.0559C21.2224 19.0234 21.2918 18.9783 21.3502 18.9196C21.4095 18.8618 21.4551 18.7914 21.4889 18.7102C21.5226 18.629 21.5391 18.5396 21.5391 18.4421C21.5391 18.3437 21.5226 18.2544 21.4889 18.1731C21.4551 18.0919 21.4095 18.0224 21.3502 17.9637C21.2918 17.9059 21.2224 17.8599 21.1421 17.8274C21.0618 17.7958 20.976 17.7796 20.8829 17.7796ZM20.8829 17.3544C21.0436 17.3544 21.1932 17.3824 21.331 17.4375C21.4688 17.4925 21.5874 17.5684 21.6869 17.6658C21.7882 17.7633 21.8667 17.878 21.9232 18.0097C21.9798 18.1424 22.0081 18.2869 22.0081 18.4421C22.0081 18.5974 21.9798 18.7409 21.9232 18.8736C21.8667 19.0063 21.7882 19.1209 21.6869 19.2175C21.5874 19.315 21.4688 19.3908 21.331 19.4468C21.1932 19.5018 21.0436 19.5298 20.8829 19.5298C20.7214 19.5298 20.5718 19.5018 20.434 19.4468C20.2971 19.3908 20.1785 19.315 20.0781 19.2175C19.9786 19.1209 19.9011 19.0063 19.8445 18.8736C19.787 18.7409 19.7587 18.5974 19.7587 18.4421C19.7587 18.2869 19.787 18.1424 19.8445 18.0097C19.9011 17.878 19.9786 17.7633 20.0781 17.6658C20.1785 17.5684 20.2971 17.4925 20.434 17.4375C20.5718 17.3824 20.7214 17.3544 20.8829 17.3544ZM9.46433 18.4421C9.46433 18.0783 9.70524 17.7805 10.0985 17.7805C10.4736 17.7805 10.7273 18.0657 10.7273 18.4421C10.7273 18.8176 10.4736 19.1029 10.0985 19.1029C9.70524 19.1029 9.46433 18.805 9.46433 18.4421ZM11.1562 18.4421V17.4086H10.7017V17.6595C10.5566 17.4736 10.3385 17.3562 10.0411 17.3562C9.45521 17.3562 8.9962 17.8103 8.9962 18.4421C8.9962 19.0731 9.45521 19.5271 10.0411 19.5271C10.3385 19.5271 10.5566 19.4107 10.7017 19.2247V19.4747H11.1562V18.4421ZM8.59468 19.4747V18.1785C8.59468 17.6893 8.27986 17.3607 7.77248 17.3562C7.50602 17.3526 7.23044 17.4348 7.0388 17.7245C6.89462 17.4952 6.6674 17.3562 6.34801 17.3562C6.12535 17.3562 5.90634 17.4212 5.73569 17.664V17.4086H5.28125V19.4747H5.74026V18.3293C5.74026 17.9709 5.94193 17.7805 6.25128 17.7805C6.55333 17.7805 6.70664 17.9745 6.70664 18.3248V19.4747H7.16565V18.3293C7.16565 17.9709 7.37553 17.7805 7.67667 17.7805C7.98693 17.7805 8.13568 17.9745 8.13568 18.3248V19.4747H8.59468Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.98828 14.3274H16.8672V2.4082H9.98828V14.3274Z"
                        fill="#7375CF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.6175 8.19241C10.6175 5.78828 11.7877 3.64691 13.6093 2.26676C12.2767 1.25762 10.5958 0.655273 8.76879 0.655273C4.44357 0.655273 0.9375 4.03014 0.9375 8.19241C0.9375 12.3547 4.44357 15.7295 8.76879 15.7295C10.5958 15.7295 12.2767 15.1272 13.6093 14.1181C11.7877 12.7379 10.6175 10.5965 10.6175 8.19241Z"
                        fill="#EB001B"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M26.2811 8.19241C26.2811 12.3547 22.7751 15.7295 18.4498 15.7295C16.622 15.7295 14.941 15.1272 13.6094 14.1181C15.4309 12.7379 16.6011 10.5965 16.6011 8.19241C16.6011 5.78828 15.4309 3.64691 13.6094 2.26676C14.941 1.25762 16.622 0.655273 18.4498 0.655273C22.7751 0.655273 26.2811 4.03014 26.2811 8.19241Z"
                        fill="#00A2E5"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27.149 13.6288V12.5745H27.0196L26.8726 13.2983L26.7241 12.5745H26.5962V13.6288H26.6858V12.8325L26.8255 13.5186H26.9196L27.0578 12.8294V13.6288H27.149ZM26.3344 13.6288V12.7539H26.4991V12.5745H26.0801V12.7539H26.2448V13.6288H26.3344Z"
                        fill="#00A2E5"
                      />
                    </svg>
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <svg
                      width="24"
                      height="18"
                      viewBox="0 0 24 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.33306 16.5403C5.33306 16.1896 5.54768 15.9017 5.89807 15.9017C6.23383 15.9017 6.45983 16.1775 6.45983 16.5403C6.45983 16.9031 6.23383 17.1788 5.89807 17.1788C5.54768 17.1788 5.33306 16.8909 5.33306 16.5403ZM6.84192 16.5403V15.5432H6.43625V15.7851C6.3078 15.6059 6.11269 15.4928 5.84767 15.4928C5.32493 15.4928 4.91601 15.9312 4.91601 16.5403C4.91601 17.1493 5.32493 17.5877 5.84767 17.5877C6.11269 17.5877 6.3078 17.4746 6.43625 17.2954V17.5373H6.84192V16.5403ZM20.5355 16.5403C20.5355 16.1896 20.7493 15.9017 21.1005 15.9017C21.4354 15.9017 21.6622 16.1775 21.6622 16.5403C21.6622 16.9031 21.4354 17.1788 21.1005 17.1788C20.7493 17.1788 20.5355 16.8909 20.5355 16.5403ZM22.7313 17.3537C22.7532 17.3537 22.7703 17.3589 22.7817 17.3702C22.7939 17.3807 22.7996 17.3946 22.7996 17.4129C22.7996 17.4285 22.7947 17.4407 22.7857 17.4503C22.776 17.4599 22.7622 17.4659 22.7451 17.4686L22.8012 17.5382H22.7573L22.7053 17.4694H22.6882V17.5382H22.6516V17.3537H22.7313ZM22.7199 17.6017C22.7402 17.6017 22.7589 17.5973 22.776 17.5895C22.7931 17.5808 22.8085 17.5703 22.8215 17.5564C22.8345 17.5425 22.8443 17.526 22.8516 17.5068C22.8589 17.4886 22.863 17.4686 22.863 17.4468C22.863 17.4251 22.8589 17.405 22.8516 17.3868C22.8443 17.3676 22.8345 17.3511 22.8215 17.3372C22.8085 17.3233 22.7931 17.3128 22.776 17.305C22.7589 17.2963 22.7402 17.2928 22.7199 17.2928C22.6996 17.2928 22.6809 17.2963 22.663 17.305C22.6451 17.3128 22.6297 17.3233 22.6167 17.3372C22.6036 17.3511 22.5939 17.3676 22.5866 17.3868C22.5784 17.405 22.5752 17.4251 22.5752 17.4468C22.5752 17.4686 22.5784 17.4886 22.5866 17.5068C22.5939 17.526 22.6036 17.5425 22.6167 17.5564C22.6297 17.5703 22.6451 17.5808 22.663 17.5895C22.6809 17.5973 22.6996 17.6017 22.7199 17.6017ZM22.7199 17.2484C22.7459 17.2484 22.7703 17.2537 22.7931 17.2641C22.8158 17.2745 22.8362 17.2885 22.8532 17.3067C22.8703 17.325 22.8841 17.3459 22.8939 17.3702C22.9036 17.3937 22.9085 17.4198 22.9085 17.4468C22.9085 17.4738 22.9036 17.4999 22.8939 17.5234C22.8841 17.5477 22.8703 17.5686 22.8532 17.5869C22.8362 17.6043 22.8158 17.6182 22.7931 17.6295C22.7703 17.6399 22.7459 17.6452 22.7199 17.6452C22.6939 17.6452 22.6687 17.6399 22.6451 17.6295C22.6223 17.6182 22.602 17.6043 22.5849 17.5869C22.5679 17.5686 22.5549 17.5477 22.5451 17.5234C22.5354 17.4999 22.5305 17.4738 22.5305 17.4468C22.5305 17.4198 22.5354 17.3937 22.5451 17.3702C22.5549 17.3459 22.5679 17.325 22.5849 17.3067C22.602 17.2885 22.6223 17.2745 22.6451 17.2641C22.6687 17.2537 22.6939 17.2484 22.7199 17.2484ZM22.0443 16.5403V14.7419H21.6387V15.7851C21.5094 15.6059 21.3151 15.4928 21.0501 15.4928C20.5273 15.4928 20.1184 15.9312 20.1184 16.5403C20.1184 17.1493 20.5273 17.5877 21.0501 17.5877C21.3151 17.5877 21.5094 17.4746 21.6387 17.2954V17.5373H22.0443V16.5403ZM11.8717 15.8808C12.1327 15.8808 12.3002 16.0565 12.3432 16.3654H11.3766C11.4189 16.0774 11.5831 15.8808 11.8717 15.8808ZM11.879 15.4928C11.3335 15.4928 10.9514 15.9191 10.9514 16.5403C10.9514 17.1745 11.349 17.5877 11.9067 17.5877C12.1872 17.5877 12.4449 17.5129 12.6709 17.3085L12.4717 16.9866C12.3164 17.1206 12.1172 17.1954 11.9303 17.1954C11.6685 17.1954 11.4311 17.0657 11.3726 16.7073H12.757C12.7603 16.6534 12.7644 16.5985 12.7644 16.5403C12.7603 15.9191 12.4018 15.4928 11.879 15.4928ZM16.7723 16.5403C16.7723 16.1896 16.9869 15.9017 17.3381 15.9017C17.6738 15.9017 17.899 16.1775 17.899 16.5403C17.899 16.9031 17.6738 17.1788 17.3381 17.1788C16.9869 17.1788 16.7723 16.8909 16.7723 16.5403ZM18.2819 16.5403V15.5432H17.8763V15.7851C17.747 15.6059 17.5527 15.4928 17.2869 15.4928C16.7649 15.4928 16.3552 15.9312 16.3552 16.5403C16.3552 17.1493 16.7649 17.5877 17.2869 17.5877C17.5527 17.5877 17.747 17.4746 17.8763 17.2954V17.5373H18.2819V16.5403ZM14.4838 16.5403C14.4838 17.1449 14.8781 17.5877 15.478 17.5877C15.7585 17.5877 15.9463 17.5208 16.1487 17.3502L15.9536 16.9996C15.8016 17.1162 15.6422 17.1788 15.4666 17.1788C15.1431 17.1745 14.9049 16.9239 14.9049 16.5403C14.9049 16.1566 15.1431 15.906 15.4666 15.9017C15.6422 15.9017 15.8016 15.9643 15.9536 16.0818L16.1487 15.7311C15.9463 15.5598 15.7585 15.4928 15.478 15.4928C14.8781 15.4928 14.4838 15.9356 14.4838 16.5403ZM19.7087 15.4928C19.4746 15.4928 19.3225 15.6102 19.2177 15.7851V15.5432H18.8152V17.5373H19.2209V16.4193C19.2209 16.0896 19.3534 15.906 19.6193 15.906C19.7006 15.906 19.7867 15.9191 19.8721 15.9565L19.9973 15.5476C19.9079 15.5102 19.7908 15.4928 19.7087 15.4928ZM8.84587 15.7016C8.65076 15.5641 8.38249 15.4928 8.08575 15.4928C7.61424 15.4928 7.31019 15.7355 7.31019 16.1314C7.31019 16.4567 7.53619 16.6577 7.95324 16.7195L8.14429 16.7491C8.36623 16.7821 8.47191 16.8448 8.47191 16.9579C8.47191 17.1119 8.32314 17.1997 8.04673 17.1997C7.76626 17.1997 7.56302 17.104 7.42644 16.9909L7.2354 17.3294C7.45815 17.5042 7.73862 17.5877 8.04267 17.5877C8.58085 17.5877 8.89303 17.3163 8.89303 16.937C8.89303 16.5864 8.64751 16.4028 8.24184 16.3402L8.0508 16.3106C7.8752 16.2853 7.73455 16.2479 7.73455 16.1148C7.73455 15.9687 7.86707 15.8808 8.08982 15.8808C8.3272 15.8808 8.55727 15.9774 8.67027 16.0522L8.84587 15.7016ZM14.074 15.4928C13.8407 15.4928 13.6887 15.6102 13.583 15.7851V15.5432H13.1814V17.5373H13.5871V16.4193C13.5871 16.0896 13.7196 15.906 13.9846 15.906C14.0667 15.906 14.1529 15.9191 14.2383 15.9565L14.3626 15.5476C14.2732 15.5102 14.1561 15.4928 14.074 15.4928ZM10.6165 15.5432H9.95313V14.9377H9.54421V15.5432H9.16537V15.9399H9.54421V16.8491C9.54421 17.312 9.71168 17.5877 10.1913 17.5877C10.3669 17.5877 10.5694 17.5295 10.6978 17.4329L10.5807 17.0623C10.4604 17.1371 10.3279 17.1745 10.2222 17.1745C10.0198 17.1745 9.95313 17.0414 9.95313 16.8404V15.9399H10.6165V15.5432ZM4.55668 17.5373V16.2853C4.55668 15.8147 4.27621 15.4971 3.8242 15.4928C3.586 15.4893 3.34049 15.5685 3.16895 15.8477C3.04051 15.6267 2.83808 15.4928 2.55273 15.4928C2.35437 15.4928 2.15926 15.5554 2.00723 15.7894V15.5432H1.60156V17.5373H2.0113V16.4315C2.0113 16.0852 2.19015 15.9017 2.46737 15.9017C2.73646 15.9017 2.87304 16.0896 2.87304 16.4272V17.5373H3.28196V16.4315C3.28196 16.0852 3.46894 15.9017 3.73803 15.9017C4.01525 15.9017 4.14776 16.0896 4.14776 16.4272V17.5373H4.55668Z"
                        fill="#231F20"
                      />
                      <mask
                        id="mask0_10208_820"
                        style="mask-type:luminance"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="18"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.5 17.2823H23.2764V0.22583H0.5V17.2823Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_10208_820)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.94922 12.5646H14.827V1.67749H8.94922V12.5646Z"
                          fill="#FF5F00"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.19951 6.93954C9.19951 4.79806 10.2512 2.89063 11.8882 1.66126C10.6906 0.762367 9.17994 0.22583 7.53803 0.22583C3.65093 0.22583 0.5 3.23199 0.5 6.93954C0.5 10.6471 3.65093 13.6532 7.53803 13.6532C9.17994 13.6532 10.6906 13.1167 11.8882 12.2178C10.2512 10.9885 9.19951 9.08102 9.19951 6.93954Z"
                          fill="#EB001B"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M23.2769 6.93954C23.2769 10.6471 20.1259 13.6532 16.2388 13.6532C14.5961 13.6532 13.0855 13.1167 11.8887 12.2178C13.5257 10.9885 14.5774 9.08102 14.5774 6.93954C14.5774 4.79806 13.5257 2.89063 11.8887 1.66126C13.0855 0.762367 14.5961 0.22583 16.2388 0.22583C20.1259 0.22583 23.2769 3.23199 23.2769 6.93954Z"
                          fill="#F79E1B"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M23.5865 11.8088V11.113H23.4601L23.3165 11.5907L23.1714 11.113H23.0465V11.8088H23.1341V11.2833L23.2705 11.7361H23.3624L23.4974 11.2813V11.8088H23.5865ZM22.7909 11.8088V11.2314H22.9517V11.113H22.541V11.2314H22.7033V11.8088H22.7909Z"
                          fill="#F79E1B"
                        />
                      </g>
                    </svg>
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <svg
                      width="29"
                      height="9"
                      viewBox="0 0 29 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.86859 5.76667L9.00829 0.45166V0.452519H11.319L7.8853 8.26685H5.57456L3.61523 1.54207C4.99949 2.19488 6.23987 3.5091 6.6355 4.7185L6.86859 5.76667ZM12.1995 0.45166L10.8332 8.27466H13.0171L14.3826 0.45166H12.1995ZM18.787 3.63831C18.0238 3.29156 17.556 3.05752 17.556 2.70287C17.5653 2.38041 17.9516 2.05005 18.8143 2.05005C19.5238 2.03365 20.0453 2.18707 20.441 2.33972L20.6391 2.4211L20.9361 0.784336C20.5047 0.630919 19.8207 0.461877 18.9759 0.461877C16.8192 0.461877 15.3006 1.49356 15.2912 2.9691C15.2733 4.05796 16.3784 4.66218 17.2054 5.02465C18.0503 5.39647 18.3378 5.63755 18.3378 5.9679C18.3285 6.47512 17.6547 6.70915 17.026 6.70915C16.1548 6.70915 15.6869 6.58861 14.9765 6.30599L14.6889 6.18545L14.3835 7.88644C14.8965 8.09626 15.84 8.28093 16.8193 8.29037C19.1113 8.29037 20.6027 7.27431 20.6214 5.70176C20.6289 4.83912 20.0462 4.17841 18.787 3.63831ZM24.8453 0.47587H26.535L28.296 8.28093H26.2745L25.947 6.72246H23.3827L22.7515 8.27466H20.4595L23.7035 1.10525C23.929 0.613663 24.3246 0.47587 24.8453 0.47587ZM24.0186 5.156C24.0652 5.15206 24.8981 2.62217 24.8981 2.62217L25.5634 5.156H24.0186Z"
                        fill="#2394BC"
                      />
                      <path
                        d="M5.72079 1.44762C5.55695 0.857888 5.03445 0.460148 4.32482 0.45166H0.995227L0.960938 0.594765C3.55825 1.18756 5.7383 3.01159 6.44555 4.72732L5.72079 1.44762Z"
                        fill="#EFC75E"
                      />
                    </svg>
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-[#26A6D1] rounded h-[30px]">
                    <svg
                      width="31"
                      height="8"
                      viewBox="0 0 31 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.14029 0.45166L0.845703 7.41045H4.78979L5.27874 6.30093H6.39637L6.88533 7.41045H11.2267V6.56363L11.6135 7.41045H13.8592L14.246 6.54573V7.41045H23.2748L24.3726 6.32974L25.4006 7.41045L30.038 7.4194L26.733 3.95048L30.038 0.45166H25.4726L24.4039 1.5124L23.4082 0.45166H13.5861L12.7427 2.24778L11.8795 0.45166H7.94361V1.26967L7.50578 0.45166H4.14029ZM4.90345 1.43982H6.82598L9.01128 6.15861V1.43982H11.1173L12.8052 4.82317L14.3608 1.43982H16.4564V6.43321H15.1813L15.1709 2.52042L13.3119 6.43321H12.1713L10.3019 2.52042V6.43321H7.67878L7.18149 5.31376H4.49477L3.9985 6.43223H2.59305L4.90345 1.43982ZM22.8077 1.43982H17.6229V6.43026H22.7274L24.3726 4.77635L25.9584 6.43026H27.6161L25.2067 3.9495L27.6161 1.43982H26.0303L24.3935 3.07474L22.8077 1.43982ZM5.8387 2.28467L4.95353 4.27889H6.72284L5.8387 2.28467ZM18.9033 3.38525V2.4737V2.47283H22.1384L23.55 3.93062L22.0759 5.39638H18.9033V4.40123H21.7318V3.38525H18.9033Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>

                {/* MONEY GUARANTEE */}

                <div class="bg-[#E8D7AF] px-4 py-2 lg:h-[100px] border border-[#E8D7AF] flex w-full  mt-4 lg:px-16 justify-center items-center gap-[10px] ">
                  <div class="w-[49px] h-[49px] lg:h-[63px] lg:w-[63px]">
                    <Bitmap />
                  </div>

                  <div>
                    <h4 class="text-[#232F3E] text-sm lg:text-base font-bold">
                      14-day money-back guarantee
                    </h4>

                    <p class="text-[#5B6064] text-[12px] lg:text-[13px]">
                      If you are not satisfied with the product, simply return
                      it and we will refund your money.
                    </p>
                  </div>
                </div>

                {/* TRUST */}

                <div class="flex mx-4 lg:mx-auto gap-2 items-center py-[10px] mb-[46px]">
                  <div class=" w-[92px] h-[22px] -mt-2">
                    <TrustPilot class="object-fit align-middle" />
                  </div>

                  <div class="text-[#181818] text-[12px] lg:text-sm font-bold">
                    Your Shop
                  </div>
                  <div class=" w-[100px]  ">
                    <Image class="object-fit align-middle" />
                  </div>

                  <p class="text-[#181818] text-[12px] lg:text-sm font-bold">
                    4.9 out of 5
                  </p>
                </div>
              </section>

              <MobileProductCard
                hasDescription={true}
                hasReview={true}
                hasBenefits={true}
              />

              <div class="mt-4">
                <MobileProductCard
                  hasDescription={false}
                  hasReview={false}
                  hasBenefits={true}
                />
              </div>

              <div class="mt-4">
                <MobileProductCard
                  hasDescription={true}
                  hasReview={false}
                  hasBenefits={false}
                />
              </div>
              <div class="mt-4">
                <MobileProductCard
                  hasDescription={true}
                  hasReview={false}
                  hasBenefits={true}
                />
              </div>

              <section class="lg:hidden">
                <div class="flex my-3 items-center flex-col justify-center">
                  <p class="text-[#232F3E] text-center font-Roboto text-2xl font-bold leading-[29px]">
                    Why customers simply love Your Product name?
                  </p>
                </div>

                <div class="flex mb-3 justify-center">
                  <div class="flex">
                    <span class="w-[23px] rounded-full h-[23px] bg-[#D9D9D9] border-[3px] border-white"></span>
                    <span class="w-[23px] -ml-2 rounded-full h-[23px] bg-[#D9D9D9] border-[3px] border-white"></span>
                    <span class="w-[23px] -ml-2 rounded-full h-[23px] bg-[#D9D9D9] border-[3px] border-white"></span>
                    <span class="w-[23px] -ml-2 rounded-full h-[23px] bg-[#D9D9D9] border-[3px] border-white"></span>
                  </div>

                  <div class="inline-flex ">
                    <span class="text-[#F9BF3B]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        class="h-[18px] w-[18px] "
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
                        />
                      </svg>
                    </span>

                    <span class="text-[#F9BF3B]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        class="h-[18px] w-[18px] "
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
                        />
                      </svg>
                    </span>
                    <span class="text-[#F9BF3B]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        class="h-[18px] w-[18px] "
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
                        />
                      </svg>
                    </span>
                    <span class="text-[#F9BF3B]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        class="h-[18px] w-[18px] "
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
                        />
                      </svg>
                    </span>
                    <span class="text-[#F9BF3B]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        class="h-[18px] w-[18px] "
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
                        />
                      </svg>
                    </span>
                  </div>

                  <div class="text-[#5F6061] text-center font-Roboto text-[14px] font-bold leading-6">
                    4.8 - based on 24 opinions
                  </div>
                </div>
              </section>

              <section class="">
                <ProductImageReviews />
              </section>

              <section class="px-4 py-10 relative lg:hidden">
                <div class="absolute h-[30px] w-[30px] bg-white transform rotate-45 -bottom-1 left-1/2 -translate-1/2"></div>
                <div
                  class="w-full h-[56px] flex items-center gap-3 justify-center text-[#232F3E] text-center font-Roboto text-base font-bold leading-[30px]"
                  style="background: linear-gradient(180deg, #F0F2F5 0%, #E3E6E8 100%);"
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.99448 2.90323C10.5564 2.90185 12.0287 3.48416 13.1632 4.54645L11.6481 6.06154C11.0994 6.61025 11.488 7.54839 12.264 7.54839H17.129C17.6101 7.54839 18 7.15845 18 6.67742V1.81237C18 1.03642 17.0619 0.647819 16.5132 1.19649L15.2171 2.4926C13.6013 0.948484 11.4114 0 9 0C4.60208 0 0.941117 3.1545 0.155903 7.32426C0.105569 7.59168 0.312278 7.83871 0.584383 7.83871H2.66393C2.86458 7.83871 3.03797 7.70128 3.08675 7.50665C3.75677 4.83307 6.18351 2.90569 8.99448 2.90323ZM5.73601 10.4516H0.870968C0.38994 10.4516 0 10.8416 0 11.3226V16.1876C0 16.9636 0.938141 17.3522 1.48681 16.8035L2.78292 15.5074C4.39871 17.0515 6.58858 18 9 18C13.3979 18 17.0589 14.8455 17.8441 10.6758C17.8945 10.4084 17.6878 10.1614 17.4157 10.1614H15.3361C15.1354 10.1614 14.962 10.2988 14.9133 10.4934C14.2429 13.1682 11.8152 15.0943 9.00566 15.0968C7.44369 15.0982 5.97128 14.5159 4.83677 13.4536L6.3519 11.9385C6.90057 11.3898 6.51197 10.4516 5.73601 10.4516Z"
                        fill="#99A0A7"
                      />
                    </svg>
                  </span>
                  <span>Show next 5 reviews</span>
                </div>
              </section>

              <section class="flex flex-col bg-[#F0F2F5] justify-center items-center text-[#232F3E] text-center py-6 font-Roboto text-[20px] font-bold leading-[25px] gap-2 lg:hidden">
                <h4>Hurry up! If you order in the next </h4>
                <h4 class="text-[#CA232C]">6 hours : 7 min : 29 sec</h4>
                <h4>we will ship your product today</h4>
  
                <MobileSwiperCarousel  />

                <div class="flex flex-col w-full px-2">
                  <div class="flex items-center mb-1  gap-2 justify-start">
                    <svg
                      width="17"
                      height="20"
                      viewBox="0 0 17 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.74805 4.34082C10.3542 3.54492 11.0378 2.75391 11.7943 2.00195C14.4375 4.62891 16.3333 8.9209 16.3333 11.001C16.3333 15.9717 12.6784 20 8.16667 20C3.65495 20 0 15.9717 0 11.001C0 8.20316 2.54297 3.55957 6.125 0C7.51953 1.38672 8.75456 2.87598 9.74805 4.34082ZM8.2687 16C9.29216 16 10.2359 15.6484 11.0068 15.0576C12.7524 13.71 13.1601 11.1025 12.1898 9.06152C12.0701 8.8125 11.9372 8.54883 11.791 8.28516L9.71306 10.8975C9.71306 10.8975 6.45659 6.3125 6.20848 6C4.48941 8.27051 3.62988 9.59863 3.62988 11.1074C3.62988 14.1348 5.71225 16 8.2687 16Z"
                        fill="#CA232C"
                      />
                    </svg>

                    <span class="text-[#CA232C] font-Roboto text-base font-bold leading-[30px]">
                      Stock is running low due to high demand
                    </span>
                  </div>

                  <div class="w-full  rounded-[4px] flex h-[4px] bg-[#DCDEE0]">
                    <div class="h-full  rounded-l-[4px]  w-1/4 bg-[#CA232C]"></div>
                  </div>
                </div>
              </section>

              <section class="bg-[#F0F2F5]  lg:hidden w-full rounded-[10px] lg:p-[22px]">
                <div class="mb-[17px] mx-4 lg:mx-auto">
                  <h5 class="text-base font-bold text-[#5F6061] mb-[10px]">
                    By More, Save More
                  </h5>
                  <ul class="inline-flex border divide-x">
                    <li class="w-[104px]  h-[56px] lg:w-[151px] lg:h-[56px] rounded-tl-[5px] rounded-bl-[5px] cursor-pointer border-[2px] bg-[#FFF5E3] border-[#F09831] flex items-center flex-col justify-center relative text-sm font-bold text-center text-[#232F3E]">
                      <div>1x</div>
                      <div>$79,99/piece</div>
                    </li>

                    <li class="w-[104px] h-[56px] lg:w-[151px] lg:h-[56px]  bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center text-[12px] lg:test-sm ">
                      <div class="absolute -top-3 rounded-[3px] bg-[#CA232C] text-white text-center font-Roboto text-[12px] font-bold leading-[14px] w-[97px] h-[20px] flex items-center justify-center">
                        Recommended
                      </div>
                      <div>1x</div>
                      <div>$79,99/piece</div>
                    </li>
                    <li class="w-[104px] h-[56px] lg:w-[151px] lg:h-[56px]  bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center text-[12px] lg:test-sm  ">
                      <div class="absolute -top-3 rounded-[3px] bg-[#1D6EC1] text-white text-center font-Roboto text-[12px] font-bold leading-[14px] w-[68px] h-[20px] flex items-center justify-center ">
                        Best Value
                      </div>
                      <div>1x</div>
                      <div>$79,99/piece</div>
                    </li>
                  </ul>
                </div>

                {/* SIZE */}
                <div class="mb-[15px] mx-4 lg:mx-auto ">
                  <h5 class="w-full inline-flex justify-between lg:w-2/3">
                    <span class="text-base font-bold text-[#5F6061] mb-[10px]">
                      Choose Size
                    </span>
                    <a href="#" class="underline text-[#99A0A7] text-sm">
                      Size Chart
                    </a>
                  </h5>
                  <ul class="inline-flex border divide-x ">
                    <li class="w-[76px] lg:w-[96px] h-[56px]  rounded-tl-[5px] rounded-bl-[5px] cursor-pointer border-[2px] bg-[#FFF5E3] border-[#F09831] flex items-center flex-col justify-center relative text-sm font-bold text-center text-[#232F3E]">
                      <div>S</div>
                    </li>

                    <li class="w-[76px] lg:w-[96px] h-[56px]  bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center test-sm">
                      <div>M</div>
                    </li>
                    <li class="w-[76px] lg:w-[96px] h-[56px]  bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center test-sm">
                      <div>L</div>
                    </li>

                    <li class="w-[76px] lg:w-[96px] h-[56px] rounded-tr-[5px] rounded-br-[5px] bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center test-sm">
                      <div>XL</div>
                    </li>
                  </ul>
                </div>

                {/* Color */}
                <div class="mb-[15px] lg:hidden mx-4 lg:mx-auto">
                  <h5 class="w-full flex justify-between">
                    <span class="text-base font-bold text-[#5F6061] mb-[10px]">
                      Choose a Color:
                    </span>
                  </h5>
                  <div class="flex gap-0 items-center ">
                    <div class="w-[85px] h-[85px] flex-shrink-0 rounded-t-[5px] rounded-b-[5px] flex flex-col justify-center items-center border-2 border-[#F09831] bg-[#FFF5E3]">
                      <div class="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                        >
                          <g filter="url(#filter0_i_52_11703)">
                            <circle
                              cx="15"
                              cy="15"
                              r="15"
                              fill="url(#paint0_linear_52_11703)"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_52_11703"
                              x="0"
                              y="0"
                              width="30"
                              height="32"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_52_11703"
                              />
                            </filter>
                            <linearGradient
                              id="paint0_linear_52_11703"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="30"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#13EADA" />
                              <stop offset="1" stop-color="#08D0B3" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <h4 class="text-[#232F3E] text-center font-Roboto text-[14px] font-bold leading-normal">
                        Turquoise
                      </h4>
                    </div>

                    <div class="w-[85px] h-[85px] flex-shrink-0  flex flex-col justify-center items-center  rounded-l-[0] rounded-r-[5px] border border-solid border-[#DDD] bg-white shadow-md">
                      <div class="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                        >
                          <g filter="url(#filter0_i_52_11704)">
                            <circle
                              cx="15"
                              cy="15"
                              r="15"
                              fill="url(#paint0_linear_52_11704)"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_52_11704"
                              x="0"
                              y="0"
                              width="30"
                              height="32"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_52_11704"
                              />
                            </filter>
                            <linearGradient
                              id="paint0_linear_52_11704"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="30"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#F9C95F" />
                              <stop offset="1" stop-color="#F09831" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <h4 class="text-[#232F3E] text-center font-Roboto text-[14px] font-normal leading-normal">
                        Orange
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Price */}
                <div class="flex flex-col mx-4 lg:mx-auto">
                  <p class="text-[#99A0A7] text-base leading-[30px]">
                    Regular price:
                    <span class="line-through"> $99.90</span>
                  </p>
                  <h4 class="relative flex items-center gap-5">
                    <span class="text-[#CA232C] text-[30px] font-bold tracking-[-0.5px]">
                      {" "}
                      $59.90
                    </span>
                    <span class=" p-1 text-xs bg-transparent text-white relative">
                      <div class="h-[22px] w-[63px]"></div>
                      <span class="z-50 absolute top-1/4 w-full ">
                        {" "}
                        40% OFF
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="63"
                        height="22"
                        viewBox="0 0 63 22"
                        class="absolute top-0 -left-2 h-full"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.89463 20.423C7.65115 21.4167 8.82837 22 10.0773 22H59C61.2091 22 63 20.2091 63 18V4C63 1.79086 61.2091 0 59 0H10.1572C8.86346 0 7.64959 0.625746 6.89906 1.67957L0 11.3667L6.89463 20.423Z"
                          fill="#1D6EC1"
                        />
                      </svg>
                    </span>
                  </h4>
                </div>

                {/* IN STOCK */}
                <div class="flex items-center gap-2 mb-[15px] mx-4 lg:mx-auto">
                  <span>
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.64 2.86466L6.8588 11.442C6.38442 11.9053 5.61548 11.9053 5.14156 11.442L0.355783 6.77016C-0.118594 6.30732 -0.118594 5.55577 0.355783 5.09227L1.21365 4.25369C1.68818 3.79026 2.45771 3.79026 2.93164 4.25369L5.99793 7.24913L13.0649 0.34746C13.5394 -0.11582 14.3082 -0.11582 14.7821 0.34746L15.6407 1.18604C16.1199 1.6488 16.1199 2.40042 15.64 2.86466Z"
                        fill="#3DBD00"
                      />
                    </svg>
                  </span>

                  <p class="text-[#5F6061] text-[12px] lg:text-sm">
                    <span class="text-[#3DBD00] text-[12px] lg:text-sm font-bold">
                      In stock.
                    </span>
                    Order in the next{" "}
                    <span class="text-black text-[12px] lg:text-sm font-bold ">
                      5h 43m 33s
                    </span>{" "}
                    and the product will be with you on
                    <span class="text-black text-[12px] lg:text-sm font-bold ">
                      Monday 25 September
                    </span>{" "}
                  </p>
                </div>

                {/* ORDER BUTTON */}
                <div class="flex items-center justify-center">
                  <button
                    class="lg:hidden inline-flex w-[90%] justify-center  mx-auto  rounded-[5px] bg-[#090] h-[62px] items-center gap-2"
                    style="background: linear-gradient(0deg, #00AC00 0%, #3EC000 100%);box-shadow: 0px 3px 13px 0px rgba(0, 153, 0, 0.36), 0px 2px 0px 0px #090;"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <g opacity="0.5" filter="url(#filter0_d_52_11678)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.333 17.875C18.2284 17.875 17.333 18.7984 17.333 19.9375C17.333 21.0766 18.2284 22 19.333 22C20.4376 22 21.333 21.0766 21.333 19.9375C21.333 18.7984 20.4376 17.875 19.333 17.875ZM7.33301 17.875C6.22843 17.875 5.33301 18.7984 5.33301 19.9375C5.33301 21.0766 6.22843 22 7.33301 22C8.4376 22 9.33302 21.0766 9.33302 19.9375C9.33302 18.7984 8.4376 17.875 7.33301 17.875ZM23.7304 1.92216C23.4759 1.57442 23.0878 1.375 22.6653 1.375H5.08155L4.98243 0.83832C4.89259 0.351914 4.48022 0 4.00009 0H1C0.447709 0 0 0.461699 0 1.03125C0 1.6008 0.447709 2.0625 1 2.0625H3.17255L5.68434 15.6617C5.77418 16.1481 6.18655 16.5 6.66668 16.5H20.3334C20.8857 16.5 21.3334 16.0383 21.3334 15.4688C21.3334 14.8992 20.8857 14.4375 20.3334 14.4375H7.49414L7.11322 12.375H20.3795C20.975 12.375 21.4984 11.9679 21.6621 11.3773L23.9479 3.128C24.0638 2.70905 23.9843 2.26995 23.7304 1.92216Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_52_11678"
                          x="-1"
                          y="0"
                          width="26"
                          height="24"
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
                            result="effect1_dropShadow_52_11678"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_52_11678"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>

                    <span class="text-white text-center text-shadow font-Roboto text-[20px] font-bold leading-[30px]">
                      Order now
                    </span>

                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <g filter="url(#filter0_d_52_11682)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.65383 0.241237L15.1845 6.36629C15.3608 6.53149 15.4605 6.76041 15.4605 6.99994C15.4605 7.23948 15.3608 7.46807 15.1845 7.63359L8.65383 13.7586C8.29784 14.0913 7.73434 14.0788 7.39445 13.729C7.0547 13.3827 7.06747 12.8267 7.4246 12.4916L12.3486 7.87595H1.89092C1.39926 7.87595 1 7.48366 1 7.00058C1 6.5175 1.39926 6.12594 1.89092 6.12594H12.3463L7.42228 1.51027C7.06569 1.17458 7.05456 0.618584 7.39222 0.271133C7.7336 -0.0788696 8.26422 -0.0912656 8.65383 0.241237Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_52_11682"
                            x="0"
                            y="0"
                            width="16.4609"
                            height="16"
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
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_52_11682"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_52_11682"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </span>
                  </button>
                </div>

                {/* MESSAGE SUCCESS */}
                <div
                  class="bg-[#090] hidden mx-4 lg:mx-auto  w-full py-2 h-[62px] px-4 lg:flex rounded-[5px] justify-center items-center lg:gap-4 text-white"
                  style="box-shadow: 0px 2px 0px 0px #090;"
                >
                  <svg
                    width="20"
                    height="15"
                    class="w-[16px]  h-[11px] "
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.55 3.64477L8.57349 14.5579C7.98052 15.1474 7.01936 15.1474 6.42695 14.5579L0.444729 8.61382C-0.148243 8.02494 -0.148243 7.06872 0.444729 6.479L1.51707 5.41206C2.11023 4.82243 3.07214 4.82243 3.66455 5.41206L7.49741 9.22323L16.3311 0.442081C16.9242 -0.14736 17.8852 -0.14736 18.4776 0.442081L19.5509 1.50902C20.1499 2.0978 20.1499 3.05411 19.55 3.64477Z"
                      fill="white"
                    />
                  </svg>

                  <span
                    class="text-white text-[20px] font-bold"
                    style="text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);"
                  >
                    Product added to your cart
                  </span>
                </div>

                {/* DONT FORGET */}

                <div class="w-full hidden lg:block rounded-[7px] mt-5  border-2 border-[#F09831] pb-1.5 bg-white divide-y relative">
                  <div class="absolute -top-3.5 left-10 rounded-[3px] bg-[#F09831]  h-[25px] flex-shrink-0 uppercase inline-flex px-2.5 text-white font-bold items-center justify-center">
                    DON’T FORGET
                  </div>
                  <div class="flex w-full h-[65px]  bg-[#F09831] rounded-[2px] bg-opacity-[.2] justify-between px-4 -y-2 items-center">
                    <div class="flex items-center gap-4">
                      <label
                        class="custom-input flex items-center justify-center rounded-[4px] bg-[#F09831] h-[32px] w-[32px]"
                        for="additional"
                        tabIndex={1}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="14"
                          viewBox="0 0 19 14"
                          fill="none"
                        >
                          <path
                            d="M6.45324 13.725L0.278237 7.62349C-0.0927457 7.25692 -0.0927457 6.66257 0.278237 6.29596L1.62171 4.96843C1.99269 4.60182 2.59424 4.60182 2.96522 4.96843L7.125 9.07869L16.0348 0.274927C16.4058 -0.0916425 17.0073 -0.0916425 17.3783 0.274927L18.7218 1.60246C19.0927 1.96903 19.0927 2.56338 18.7218 2.92998L7.79675 13.7251C7.42573 14.0916 6.82423 14.0916 6.45324 13.725Z"
                            fill="white"
                          />
                        </svg>
                      </label>
                      <div class="inline-flex gap-5 items-center">
                        <span class="text-base font-semibold text-[#232F3E]">
                          Additional Product
                        </span>
                        <span class=" p-1 text-xs bg-transparent text-white relative">
                          <div class="h-[25px] w-[66px]"></div>
                          <span class="z-50 absolute top-1/4 w-full ">
                            {" "}
                            40% OFF
                          </span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute top-0 -left-2 h-full"
                            width="66"
                            height="25"
                            viewBox="0 0 66 25"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7915 0.864591C12.3529 0.310608 13.1099 0 13.8987 0H63C64.6569 0 66 1.34315 66 3V22C66 23.6569 64.6569 25 63 25H13.8987C13.1099 25 12.3529 24.6894 11.7915 24.1354L1.44271 13.9236C0.649052 13.1405 0.649051 11.8595 1.44271 11.0764L11.7915 0.864591Z"
                              fill="#CA232C"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div
                        class="w-[66px] h-[42px] bg-white shadow border border-[#DDD] rounded-[5px] flex items-center gap-4 px-2.5 py-2"
                        style="background: linear-gradient(180deg, #FFF 0%, #FAFAFA 100%);
                      box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.10);"
                      >
                        <span>1x</span>
                        <span>
                          <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                  <div class="flex w-full h-[65px]   bg-white justify-between px-4 -y-2 items-center">
                    <div class="flex items-center gap-4">
                      <label
                        class="custom-input border border-[#CCC] flex items-center justify-center rounded-[4px] bg-white h-[32px] w-[32px]"
                        for="additional"
                        style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
                        tabIndex={1}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="14"
                          viewBox="0 0 19 14"
                          fill="none"
                        >
                          <path
                            d="M6.45324 13.725L0.278237 7.62349C-0.0927457 7.25692 -0.0927457 6.66257 0.278237 6.29596L1.62171 4.96843C1.99269 4.60182 2.59424 4.60182 2.96522 4.96843L7.125 9.07869L16.0348 0.274927C16.4058 -0.0916425 17.0073 -0.0916425 17.3783 0.274927L18.7218 1.60246C19.0927 1.96903 19.0927 2.56338 18.7218 2.92998L7.79675 13.7251C7.42573 14.0916 6.82423 14.0916 6.45324 13.725Z"
                            fill="#F0F2F5"
                          />
                        </svg>
                      </label>

                      <div class="inline-flex gap-5 items-center">
                        <span class="text-base font-semibold text-[#232F3E]">
                          Additional Product
                        </span>
                        <span class=" p-1 text-xs bg-transparent text-white relative">
                          <div class="h-[25px] w-[66px]"></div>
                          <span class="z-50 absolute top-1/4 w-full ">
                            {" "}
                            40% OFF
                          </span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute top-0 -left-2 h-full"
                            width="66"
                            height="25"
                            viewBox="0 0 66 25"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7915 0.864591C12.3529 0.310608 13.1099 0 13.8987 0H63C64.6569 0 66 1.34315 66 3V22C66 23.6569 64.6569 25 63 25H13.8987C13.1099 25 12.3529 24.6894 11.7915 24.1354L1.44271 13.9236C0.649052 13.1405 0.649051 11.8595 1.44271 11.0764L11.7915 0.864591Z"
                              fill="#CA232C"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div
                        class="w-[66px] h-[42px] bg-white shadow border border-[#DDD] rounded-[5px] flex items-center gap-4 px-2.5 py-2"
                        style="background: linear-gradient(180deg, #FFF 0%, #FAFAFA 100%);
                      box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.10);"
                      >
                        <span>1x</span>
                        <span>
                          <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                  <div class="flex w-full h-[65px]   bg-white justify-between px-4 -y-2 items-center">
                    <div class="flex items-center gap-4">
                      <label
                        class="custom-input border border-[#CCC] flex items-center justify-center rounded-[4px] bg-white h-[32px] w-[32px]"
                        for="additional"
                        style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
                        tabIndex={1}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="14"
                          viewBox="0 0 19 14"
                          fill="none"
                        >
                          <path
                            d="M6.45324 13.725L0.278237 7.62349C-0.0927457 7.25692 -0.0927457 6.66257 0.278237 6.29596L1.62171 4.96843C1.99269 4.60182 2.59424 4.60182 2.96522 4.96843L7.125 9.07869L16.0348 0.274927C16.4058 -0.0916425 17.0073 -0.0916425 17.3783 0.274927L18.7218 1.60246C19.0927 1.96903 19.0927 2.56338 18.7218 2.92998L7.79675 13.7251C7.42573 14.0916 6.82423 14.0916 6.45324 13.725Z"
                            fill="#F0F2F5"
                          />
                        </svg>
                      </label>

                      <div class="inline-flex gap-5 items-center">
                        <span class="text-base font-semibold text-[#232F3E]">
                          Additional Product
                        </span>
                        <span class=" p-1 text-xs bg-transparent text-white relative">
                          <div class="h-[25px] w-[66px]"></div>
                          <span class="z-50 absolute top-1/4 w-full ">
                            {" "}
                            40% OFF
                          </span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute top-0 -left-2 h-full"
                            width="66"
                            height="25"
                            viewBox="0 0 66 25"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7915 0.864591C12.3529 0.310608 13.1099 0 13.8987 0H63C64.6569 0 66 1.34315 66 3V22C66 23.6569 64.6569 25 63 25H13.8987C13.1099 25 12.3529 24.6894 11.7915 24.1354L1.44271 13.9236C0.649052 13.1405 0.649051 11.8595 1.44271 11.0764L11.7915 0.864591Z"
                              fill="#CA232C"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div
                        class="w-[66px] h-[42px] bg-white shadow border border-[#DDD] rounded-[5px] flex items-center gap-4 px-2.5 py-2"
                        style="background: linear-gradient(180deg, #FFF 0%, #FAFAFA 100%);
                      box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.10);"
                      >
                        <span>1x</span>
                        <span>
                          <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                </div>
                {/* LIST */}
                <div class="flex mx-4 lg:mx-auto flex-col gap-2 mt-3">
                  <div class="flex items-center gap-4">
                    <span>
                      <svg
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4 1.2C10.4 0.53725 9.8625 0 9.2 0H1.2C0.53725 0 0 0.53725 0 1.2V9.2C0 9.8625 0.53725 10.4 1.2 10.4H1.6C1.6 11.725 2.6525 12.8 4 12.8C5.325 12.8 6.4 11.725 6.4 10.4H9.6C9.6 11.725 10.6525 12.8 12 12.8C13.325 12.8 14.4 11.725 14.4 10.4H15.2C15.6425 10.4 16 10.0425 16 9.6C16 9.1575 15.6425 8.8 15.2 8.8V5.9325C15.2 5.5075 15.0325 5.1 14.7325 4.8L12.8 2.8675C12.4775 2.5675 12.0925 2.4 11.6675 2.4H10.4V1.2ZM10.4 6.4V4H11.6675L13.6 5.9325V6.4H10.4ZM4 9.2C3.3375 9.2 2.8 9.7375 2.8 10.4C2.8 11.0625 3.3375 11.6 4 11.6C4.6625 11.6 5.2 11.0625 5.2 10.4C5.2 9.7375 4.6625 9.2 4 9.2ZM13.2 10.4C13.2 11.0625 12.6625 11.6 12 11.6C11.3375 11.6 10.8 11.0625 10.8 10.4C10.8 9.7375 11.3375 9.2 12 9.2C12.6625 9.2 13.2 9.7375 13.2 10.4Z"
                          fill="#3DBD00"
                        />
                      </svg>
                    </span>

                    <span class=" text-[#5F6061] text-sm font-bold">
                      <b class="text-[#3DBD00] text-[14px] font-bold mr-1">
                        Free delivery
                      </b>
                      on all orders over $69
                    </span>
                  </div>
                  <div class="flex items-center gap-4">
                    <span>
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.02638 4.64258C7.27087 4.73148 7.5487 4.8315 7.75985 4.86206C8.23772 4.93986 8.62947 4.84817 8.66109 4.65966L8.66114 4.65933C8.68361 4.52756 8.69703 4.44891 7.81814 4.19735L7.63761 4.14526L7.63379 4.14412C7.12524 3.99325 5.79056 3.59726 6.00395 2.22627C6.14287 1.56281 6.63463 1.11772 7.33588 0.959077V0.666797C7.33588 0.29867 7.634 0 8.00212 0C8.37025 0 8.66892 0.29867 8.66892 0.666797V0.979358C8.83284 1.01723 9.00838 1.06532 9.21958 1.13831C9.56773 1.25889 9.75163 1.63846 9.63189 1.98653C9.51214 2.3346 9.13207 2.51777 8.78394 2.39883C8.5539 2.31895 8.3752 2.2699 8.238 2.24819C7.76819 2.17404 7.37522 2.26555 7.3431 2.45354C7.34247 2.45724 7.34182 2.46093 7.34117 2.46459C7.32176 2.57366 7.30571 2.66392 8.01268 2.86445L8.15979 2.91529C8.8691 3.11783 10.191 3.49596 9.94959 4.88651C9.86013 5.5497 9.37086 5.99776 8.66878 6.15676V6.44571C8.66878 6.81383 8.37011 7.1125 8.00198 7.1125C7.63386 7.1125 7.33574 6.81383 7.33574 6.44571V6.1042C7.07152 6.0426 6.81053 5.95831 6.57476 5.87326L6.44543 5.82725C6.099 5.7039 5.91783 5.29826 6.04007 4.97597C6.16232 4.65369 6.54295 4.44809 6.89024 4.59534L7.02638 4.64258ZM14.2325 9.1082C14.7268 8.74171 15.4219 8.84868 15.7864 9.3435C16.1504 9.83804 16.0448 10.5326 15.503 10.8969L11.7495 13.6618C11.2555 14.0253 10.6474 14.225 10.0353 14.225H0.419527C0.201456 14.225 0 14.025 0 13.7799V11.1133C0 10.8716 0.201456 10.6438 0.419527 10.6438L1.95816 10.6688L3.25008 9.62025C3.83353 9.14793 4.58423 8.89094 5.30937 8.89094H9.77886C10.3206 8.89094 10.7477 9.37381 10.6574 9.92947C10.5846 10.3668 10.1498 10.6691 9.73024 10.6691H7.5562C7.3381 10.6691 7.13668 10.8705 7.13668 11.1136C7.13668 11.3564 7.31315 11.5578 7.5562 11.5578H10.9069L14.2325 9.1082Z"
                          fill="#5F6061"
                        />
                      </svg>
                    </span>
                    <span class="text-[#5F6061] text-sm font-bold">
                      Cash on delivery
                    </span>
                  </div>

                  <div class="flex items-center gap-4">
                    <span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.775862 0C1.2042 0 1.55172 0.347522 1.55172 0.775862V4.07651C2.83513 1.92575 5.18211 0.520797 7.76185 0.520797C11.7543 0.520797 15 3.76616 15 7.75862C15 11.7511 11.7543 14.9968 7.76185 14.9968C6.0708 14.9968 4.42241 14.4042 3.12284 13.3232C2.79343 13.0484 2.74914 12.5596 3.02386 12.2302C3.29864 11.8998 3.78873 11.8565 4.11685 12.1312C5.13685 12.9795 6.42996 13.4483 7.75862 13.4483C10.8954 13.4483 13.4483 10.8954 13.4483 7.75862C13.4483 4.62187 10.8944 2.06897 7.75862 2.06897C5.60754 2.06897 3.65948 3.30647 2.69935 5.17241H5.94828C6.37823 5.17241 6.72414 5.52155 6.72414 5.94828C6.72414 6.375 6.37823 6.72414 5.94828 6.72414H0.775862C0.347522 6.72414 0 6.37823 0 5.94828V0.775862C0 0.347522 0.347522 0 0.775862 0Z"
                          fill="#5F6061"
                        />
                      </svg>
                    </span>
                    <span class="text-[#5F6061] text-sm font-bold">
                      14-day money-back guarantee
                    </span>
                  </div>

                  <div class="flex items-center gap-4">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85664 0.523476L10.8098 4.41752L15.18 5.04368C15.9642 5.15533 16.2782 6.10513 15.7098 6.64924L12.5486 9.65212L13.2964 13.9315C13.4309 14.7053 12.6029 15.2814 11.9086 14.9226L7.99992 12.9291L4.09243 14.9497C3.3969 15.3085 2.57003 14.732 2.70436 13.9585L3.45213 9.67918L0.290016 6.64983C-0.278048 6.10572 0.0358049 5.15603 0.81987 5.04427L5.19005 4.41811L7.1432 0.524064C7.49544 -0.178952 8.50739 -0.170217 8.85664 0.523476Z"
                          fill="#5F6061"
                        />
                      </svg>
                    </span>
                    <span class="text-[#5F6061] text-sm font-bold">
                      97% rate Your Shop as EXCELLENT
                    </span>
                  </div>
                </div>

                {/* PAYMENT MODES */}

                <div class="flex mx-4 lg:mx-auto gap-1 lg:gap-2 items-center mt-4">
                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <svg
                      width="23"
                      height="21"
                      viewBox="0 0 23 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3347 15.4412C14.9806 14.9596 14.3054 14.8555 13.8253 15.2122L10.5948 17.5964H7.33999C7.10389 17.5964 6.93246 17.4003 6.93246 17.164C6.93246 16.9274 7.12813 16.7314 7.33999 16.7314H9.45181C9.85934 16.7314 10.2817 16.4371 10.3524 16.0115C10.4401 15.4707 10.0253 15.0007 9.49904 15.0007H5.15745C4.45306 15.0007 3.72383 15.2509 3.15708 15.7106L1.90213 16.7311L0.407522 16.7067C0.195692 16.7067 0 16.9285 0 17.1637V19.7591C0 19.9976 0.195692 20.1923 0.407522 20.1923H9.74814C10.3427 20.1923 10.9335 19.9979 11.4133 19.6442L15.0594 16.9531C15.5857 16.5986 15.6883 15.9225 15.3347 15.4412Z"
                        fill="#1D6EC1"
                      />
                      <path
                        opacity="0.5"
                        d="M7.20826 4.75119C7.56235 5.23279 8.23759 5.33689 8.71771 4.9802L11.9482 2.59599L15.203 2.59599C15.4391 2.59599 15.6105 2.79204 15.6105 3.02837C15.6105 3.26498 15.4148 3.46103 15.203 3.46103H13.0912C12.6836 3.46103 12.2613 3.75524 12.1906 4.18086C12.1028 4.72168 12.5177 5.19166 13.0439 5.19166H17.3855C18.0899 5.19166 18.8191 4.94153 19.3859 4.48183L20.6408 3.4613L22.1354 3.48567C22.3473 3.48567 22.543 3.26393 22.543 3.02867V0.433272C22.543 0.19477 22.3473 7.53403e-05 22.1354 7.53403e-05L12.7948 7.53403e-05C12.2003 7.53403e-05 11.6095 0.194446 11.1297 0.548197L7.48354 3.23932C6.95727 3.59383 6.85472 4.26986 7.20826 4.75119Z"
                        fill="#99A0A7"
                      />
                      <path
                        d="M11.6431 7.76654C11.4126 7.62513 11.1163 7.55441 10.787 7.55441C10.0954 7.55441 9.60147 7.90794 9.27218 8.57967H11.3797V9.42816H9.04167C9.00875 9.56957 9.00875 9.71099 9.00875 9.88775C9.00875 10.0292 9.00875 10.1706 9.00875 10.2413H11.3797V11.0898H9.20633C9.37097 11.4433 9.56855 11.7261 9.86492 11.9382C10.1284 12.1504 10.4577 12.2564 10.8199 12.2564C11.1492 12.2564 11.4785 12.2211 11.709 12.0797C11.9395 11.9382 12.203 11.7261 12.4664 11.4079L13.125 12.2918C12.5323 13.0342 11.7749 13.4231 10.787 13.4231C10.1284 13.4231 9.56855 13.211 9.04167 12.7514C8.5148 12.3271 8.15256 11.7615 7.95498 11.0544H7V10.2766H7.79032C7.79032 10.2059 7.79032 10.0645 7.79032 9.92311C7.79032 9.7817 7.79032 9.60493 7.82325 9.46352H7V8.61504H8.02083C8.21841 7.94333 8.58065 7.41302 9.0746 7.02413C9.56855 6.63523 10.1613 6.4231 10.787 6.4231C11.7419 6.4231 12.4993 6.77663 13.0591 7.55441L12.4005 8.4029C12.1371 8.12007 11.8737 7.90794 11.6431 7.76654Z"
                        fill="#1D6EC1"
                      />
                    </svg>

                    <span class="text-xs">Cash on delivery</span>
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <svg
                      width="34"
                      height="9"
                      viewBox="0 0 34 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.257 2.66943H26.1255C26.73 2.66943 27.2246 2.81383 27.5544 3.05449C27.7742 3.29516 27.8841 3.68021 27.7742 4.11341C27.6093 5.17232 26.8949 5.70178 25.6309 5.70178H25.0264C24.8615 5.70178 24.7516 5.79804 24.7516 5.89431L24.5318 7.09762C24.5318 7.19388 24.4769 7.24201 24.367 7.24201H23.3778C23.2678 7.24201 23.2129 7.19388 23.2129 7.09762L23.9823 2.86196C24.0372 2.7657 24.1471 2.66943 24.257 2.66943ZM25.2462 4.83539C25.7408 4.83539 26.2354 4.83539 26.3453 4.2578C26.3453 4.01714 26.3453 3.87274 26.2354 3.82461C26.0706 3.63208 25.7408 3.63208 25.4111 3.63208H25.3012C25.1913 3.63208 25.1363 3.68021 25.1363 3.72835L24.9165 4.83539H25.2462Z"
                        fill="#139AD6"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.1227 2.68115H12.915C13.5476 2.68115 13.9694 2.82367 14.2857 3.06121C14.4965 3.29875 14.6019 3.67881 14.4965 4.10637C14.3384 5.15153 13.6531 5.67411 12.4406 5.67411H11.8607C11.7026 5.67411 11.5971 5.76913 11.5971 5.86414L11.3863 7.00432C11.3336 7.09933 11.2281 7.19435 11.1227 7.19435H10.2792C10.1738 7.19435 10.1211 7.14684 10.1211 7.05183L10.8591 2.87118C10.9118 2.77617 11.0173 2.68115 11.1227 2.68115ZM12.0716 4.81898C12.546 4.81898 13.0205 4.81898 13.1259 4.24889C13.1786 4.01136 13.1259 3.86884 13.0732 3.82133C12.915 3.6313 12.5987 3.6313 12.2824 3.6313H12.177C12.0716 3.6313 12.0189 3.67881 12.0189 3.72631L11.808 4.81898H12.0716Z"
                        fill="#263B80"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.5006 4.20146H18.3441C18.3968 4.20146 18.5023 4.29647 18.555 4.34398L18.0805 7.00439C18.0278 7.09941 17.9224 7.19442 17.8169 7.19442H17.0262C16.9208 7.19442 16.8681 7.14691 16.8681 7.0519L16.9208 6.81436C16.9208 6.81436 16.499 7.24193 15.7083 7.24193C15.2339 7.24193 14.8649 7.14691 14.6013 6.86187C14.3377 6.57683 14.1795 6.14926 14.285 5.67419C14.4431 4.77155 15.2866 4.10645 16.2355 4.10645C16.6572 4.10645 17.0262 4.20146 17.2371 4.439L17.2898 4.53401L17.3425 4.29647C17.3425 4.24897 17.4479 4.20146 17.5006 4.20146ZM16.13 6.48181C16.6572 6.48181 17.0262 6.14926 17.1316 5.72169C17.1316 5.53167 17.0789 5.29413 16.9208 5.15161C16.7626 5.05659 16.6045 4.96158 16.3409 4.96158C15.8665 4.96158 15.4447 5.29413 15.392 5.72169C15.392 5.95923 15.4447 6.14926 15.5502 6.29178C15.6556 6.3868 15.8665 6.48181 16.13 6.48181Z"
                        fill="#263B80"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M30.7018 4.20146H31.5453C31.598 4.20146 31.7034 4.29647 31.7561 4.34398L31.2817 7.00439C31.229 7.09941 31.1235 7.19442 31.0181 7.19442H30.2274C30.1219 7.19442 30.0692 7.14691 30.0692 7.0519L30.1219 6.81436C30.1219 6.81436 29.7002 7.24193 28.9095 7.24193C28.435 7.24193 28.066 7.14691 27.8024 6.86187C27.5389 6.57683 27.3807 6.14926 27.4861 5.67419C27.6443 4.77155 28.4878 4.10645 29.4366 4.10645C29.8584 4.10645 30.2274 4.20146 30.4382 4.439L30.491 4.53401L30.5437 4.29647C30.5437 4.24897 30.6491 4.20146 30.7018 4.20146ZM29.3312 6.48181C29.8584 6.48181 30.2274 6.14926 30.3328 5.72169C30.3328 5.53167 30.2801 5.29413 30.1219 5.15161C29.9638 5.05659 29.8056 4.96158 29.5421 4.96158C29.0676 4.96158 28.6459 5.29413 28.5932 5.72169C28.5932 5.95923 28.6459 6.14926 28.7513 6.29178C28.8568 6.3868 29.0676 6.48181 29.3312 6.48181Z"
                        fill="#139AD6"
                      />
                      <path
                        d="M23.0779 4.30249H22.1694C22.0625 4.30249 22.0091 4.35129 21.9556 4.4001L20.7799 6.05944L20.2455 4.49771C20.1921 4.4001 20.1386 4.35129 19.9783 4.35129H19.1232C19.0163 4.35129 18.9629 4.4489 18.9629 4.54651L19.9248 7.13314L19.0163 8.30444C18.9629 8.40205 19.0163 8.54846 19.1232 8.54846H19.9783C20.0852 8.54846 20.1386 8.49965 20.1921 8.45085L23.1314 4.59532C23.2917 4.4489 23.1848 4.30249 23.0779 4.30249Z"
                        fill="#263B80"
                      />
                      <path
                        d="M32.4035 2.78411L31.7148 7.09821C31.7148 7.19408 31.764 7.24201 31.8624 7.24201H32.5511C32.6495 7.24201 32.7479 7.14615 32.7971 7.05028L33.4858 2.83204C33.4858 2.73617 33.4366 2.68824 33.3382 2.68824H32.5511C32.5019 2.6403 32.4527 2.68824 32.4035 2.78411Z"
                        fill="#139AD6"
                      />
                      <path
                        d="M6.1404 1.28934C5.77829 0.902924 5.1058 0.709717 4.17465 0.709717H1.58813C1.43294 0.709717 1.27775 0.854623 1.22601 0.999528L0.191406 7.32708C0.191406 7.47198 0.294867 7.56859 0.398328 7.56859H2.00197L2.41581 5.20179V5.2984C2.46754 5.15349 2.62274 5.00859 2.77793 5.00859H3.55388C5.05407 5.00859 6.19214 4.42896 6.55425 2.835C6.55425 2.7867 6.55425 2.7384 6.55425 2.6901C6.50252 2.6901 6.50252 2.6901 6.55425 2.6901C6.60598 2.06217 6.50252 1.67576 6.1404 1.28934Z"
                        fill="#263B80"
                      />
                      <path
                        d="M6.65357 2.66943C6.65357 2.71884 6.65357 2.76824 6.65357 2.81764C6.28874 4.49737 5.14213 5.04081 3.63069 5.04081H2.84891C2.69255 5.04081 2.5362 5.18902 2.48408 5.33723L1.96289 8.35085C1.96289 8.44966 2.01501 8.54847 2.17137 8.54847H3.52645C3.68281 8.54847 3.83916 8.44966 3.83916 8.30145V8.25204L4.09976 6.72053V6.62172C4.09976 6.47351 4.25611 6.37471 4.41247 6.37471H4.62094C5.92391 6.37471 6.96629 5.88067 7.22688 4.39856C7.33112 3.80572 7.279 3.26228 6.96629 2.91645C6.91417 2.81764 6.80993 2.71884 6.65357 2.66943Z"
                        fill="#139AD6"
                      />
                      <path
                        d="M6.09438 2.48975C6.04191 2.48975 5.98944 2.44076 5.93696 2.44076C5.88449 2.44076 5.83202 2.44076 5.77955 2.39177C5.56966 2.34277 5.35977 2.34277 5.09741 2.34277H3.05101C2.99854 2.34277 2.94607 2.34277 2.8936 2.39177C2.78865 2.44076 2.73618 2.53874 2.73618 2.63673L2.31641 5.18431V5.28229C2.36888 5.13531 2.52629 4.98834 2.68371 4.98834H3.47079C4.99247 4.98834 6.14685 4.40043 6.51416 2.7837C6.51416 2.73471 6.51416 2.68572 6.56663 2.63673C6.46168 2.58773 6.40921 2.53874 6.30427 2.53874C6.14685 2.48975 6.14685 2.48975 6.09438 2.48975Z"
                        fill="#232C65"
                      />
                    </svg>
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <svg
                      width="28"
                      height="20"
                      viewBox="0 0 28 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.4607 19.2834C22.4854 19.2834 22.5045 19.2888 22.5173 19.2996C22.531 19.3114 22.5374 19.3258 22.5374 19.3448C22.5374 19.3601 22.5328 19.3736 22.5219 19.3836C22.5109 19.3944 22.4954 19.3998 22.4762 19.4025L22.5392 19.4747H22.4899L22.4315 19.4034H22.4124V19.4747H22.3713V19.2834H22.4607ZM22.448 19.5406C22.4708 19.5406 22.4918 19.5361 22.5109 19.528C22.5301 19.519 22.5465 19.5081 22.562 19.4937C22.5766 19.4793 22.5876 19.4621 22.5958 19.4422C22.6049 19.4233 22.6086 19.4025 22.6086 19.38C22.6086 19.3574 22.6049 19.3366 22.5958 19.3177C22.5876 19.2978 22.5766 19.2807 22.562 19.2662C22.5465 19.2518 22.5301 19.241 22.5109 19.2328C22.4918 19.2247 22.4708 19.2202 22.448 19.2202C22.4251 19.2202 22.4042 19.2247 22.3841 19.2328C22.364 19.241 22.3467 19.2518 22.3321 19.2662C22.3175 19.2807 22.3065 19.2978 22.2983 19.3177C22.2892 19.3366 22.2855 19.3574 22.2855 19.38C22.2855 19.4025 22.2892 19.4233 22.2983 19.4422C22.3065 19.4621 22.3175 19.4793 22.3321 19.4937C22.3467 19.5081 22.364 19.519 22.3841 19.528C22.4042 19.5361 22.4251 19.5406 22.448 19.5406ZM22.448 19.1742C22.4772 19.1742 22.5045 19.1796 22.5301 19.1904C22.5556 19.2012 22.5784 19.2157 22.5976 19.2346C22.6168 19.2527 22.6323 19.2753 22.6432 19.2996C22.6542 19.3249 22.6597 19.352 22.6597 19.38C22.6597 19.4079 22.6542 19.435 22.6432 19.4594C22.6323 19.4847 22.6168 19.5063 22.5976 19.5244C22.5784 19.5433 22.5556 19.5587 22.5301 19.5695C22.5045 19.5804 22.4772 19.5858 22.448 19.5858C22.4178 19.5858 22.3905 19.5804 22.364 19.5695C22.3384 19.5587 22.3156 19.5433 22.2965 19.5244C22.2782 19.5063 22.2627 19.4847 22.2518 19.4594C22.2408 19.435 22.2353 19.4079 22.2353 19.38C22.2353 19.352 22.2408 19.3249 22.2518 19.2996C22.2627 19.2753 22.2782 19.2527 22.2965 19.2346C22.3156 19.2157 22.3384 19.2012 22.364 19.1904C22.3905 19.1796 22.4178 19.1742 22.448 19.1742ZM19.3015 17.3562C19.3928 17.3562 19.5242 17.3743 19.6246 17.4131L19.4849 17.8364C19.3882 17.7976 19.2924 17.785 19.2002 17.785C18.9036 17.785 18.7549 17.9745 18.7549 18.3166V19.4747H18.3005V17.4086H18.7503V17.6595C18.8681 17.4781 19.0387 17.3562 19.3015 17.3562ZM17.7283 17.8193H16.9846V18.7535C16.9846 18.9602 17.0594 19.0992 17.2866 19.0992C17.4043 19.0992 17.5531 19.0604 17.6881 18.9819L17.8195 19.3673C17.6754 19.4666 17.4481 19.5271 17.251 19.5271C16.7136 19.5271 16.5256 19.2419 16.5256 18.7617V17.8193H16.1021V17.4086H16.5256V16.7812H16.9846V17.4086H17.7283V17.8193ZM15.5437 17.9357C15.4168 17.8581 15.1586 17.7588 14.8921 17.7588C14.643 17.7588 14.4943 17.85 14.4943 18.0007C14.4943 18.1388 14.6521 18.1785 14.8483 18.2038L15.0628 18.2336C15.5172 18.2986 15.7928 18.4891 15.7928 18.8528C15.7928 19.2455 15.4433 19.5271 14.8401 19.5271C14.4988 19.5271 14.184 19.4404 13.9358 19.259L14.1493 18.9088C14.3026 19.0252 14.5298 19.1245 14.8447 19.1245C15.1549 19.1245 15.321 19.0343 15.321 18.8736C15.321 18.7571 15.2024 18.6921 14.9533 18.6578L14.7397 18.6281C14.2716 18.5631 14.0179 18.3555 14.0179 18.0179C14.0179 17.6072 14.3592 17.3562 14.8885 17.3562C15.2206 17.3562 15.5218 17.4303 15.7408 17.5729L15.5437 17.9357ZM12.0733 18.2598C12.1216 17.9619 12.3051 17.7588 12.6281 17.7588C12.921 17.7588 13.109 17.9402 13.1574 18.2598H12.0733ZM13.6292 18.4421C13.6246 17.7976 13.2231 17.3562 12.6372 17.3562C12.0258 17.3562 11.5969 17.7976 11.5969 18.4421C11.5969 19.0992 12.0423 19.5271 12.6673 19.5271C12.9822 19.5271 13.2705 19.4495 13.5242 19.2373L13.3016 18.9043C13.1264 19.0433 12.9037 19.1209 12.6938 19.1209C12.4009 19.1209 12.1344 18.9864 12.0687 18.6145H13.621C13.6246 18.5586 13.6292 18.5026 13.6292 18.4421ZM20.8829 17.7796C20.789 17.7796 20.7023 17.7958 20.6229 17.8274C20.5426 17.8599 20.4741 17.9059 20.4157 17.9637C20.3573 18.0224 20.3117 18.0919 20.2779 18.1731C20.2451 18.2544 20.2277 18.3437 20.2277 18.4421C20.2277 18.5396 20.2451 18.629 20.2779 18.7102C20.3117 18.7914 20.3573 18.8618 20.4157 18.9196C20.4741 18.9783 20.5426 19.0234 20.6229 19.0559C20.7023 19.0884 20.789 19.1047 20.8829 19.1047C20.976 19.1047 21.0618 19.0884 21.1421 19.0559C21.2224 19.0234 21.2918 18.9783 21.3502 18.9196C21.4095 18.8618 21.4551 18.7914 21.4889 18.7102C21.5226 18.629 21.5391 18.5396 21.5391 18.4421C21.5391 18.3437 21.5226 18.2544 21.4889 18.1731C21.4551 18.0919 21.4095 18.0224 21.3502 17.9637C21.2918 17.9059 21.2224 17.8599 21.1421 17.8274C21.0618 17.7958 20.976 17.7796 20.8829 17.7796ZM20.8829 17.3544C21.0436 17.3544 21.1932 17.3824 21.331 17.4375C21.4688 17.4925 21.5874 17.5684 21.6869 17.6658C21.7882 17.7633 21.8667 17.878 21.9232 18.0097C21.9798 18.1424 22.0081 18.2869 22.0081 18.4421C22.0081 18.5974 21.9798 18.7409 21.9232 18.8736C21.8667 19.0063 21.7882 19.1209 21.6869 19.2175C21.5874 19.315 21.4688 19.3908 21.331 19.4468C21.1932 19.5018 21.0436 19.5298 20.8829 19.5298C20.7214 19.5298 20.5718 19.5018 20.434 19.4468C20.2971 19.3908 20.1785 19.315 20.0781 19.2175C19.9786 19.1209 19.9011 19.0063 19.8445 18.8736C19.787 18.7409 19.7587 18.5974 19.7587 18.4421C19.7587 18.2869 19.787 18.1424 19.8445 18.0097C19.9011 17.878 19.9786 17.7633 20.0781 17.6658C20.1785 17.5684 20.2971 17.4925 20.434 17.4375C20.5718 17.3824 20.7214 17.3544 20.8829 17.3544ZM9.46433 18.4421C9.46433 18.0783 9.70524 17.7805 10.0985 17.7805C10.4736 17.7805 10.7273 18.0657 10.7273 18.4421C10.7273 18.8176 10.4736 19.1029 10.0985 19.1029C9.70524 19.1029 9.46433 18.805 9.46433 18.4421ZM11.1562 18.4421V17.4086H10.7017V17.6595C10.5566 17.4736 10.3385 17.3562 10.0411 17.3562C9.45521 17.3562 8.9962 17.8103 8.9962 18.4421C8.9962 19.0731 9.45521 19.5271 10.0411 19.5271C10.3385 19.5271 10.5566 19.4107 10.7017 19.2247V19.4747H11.1562V18.4421ZM8.59468 19.4747V18.1785C8.59468 17.6893 8.27986 17.3607 7.77248 17.3562C7.50602 17.3526 7.23044 17.4348 7.0388 17.7245C6.89462 17.4952 6.6674 17.3562 6.34801 17.3562C6.12535 17.3562 5.90634 17.4212 5.73569 17.664V17.4086H5.28125V19.4747H5.74026V18.3293C5.74026 17.9709 5.94193 17.7805 6.25128 17.7805C6.55333 17.7805 6.70664 17.9745 6.70664 18.3248V19.4747H7.16565V18.3293C7.16565 17.9709 7.37553 17.7805 7.67667 17.7805C7.98693 17.7805 8.13568 17.9745 8.13568 18.3248V19.4747H8.59468Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.98828 14.3274H16.8672V2.4082H9.98828V14.3274Z"
                        fill="#7375CF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.6175 8.19241C10.6175 5.78828 11.7877 3.64691 13.6093 2.26676C12.2767 1.25762 10.5958 0.655273 8.76879 0.655273C4.44357 0.655273 0.9375 4.03014 0.9375 8.19241C0.9375 12.3547 4.44357 15.7295 8.76879 15.7295C10.5958 15.7295 12.2767 15.1272 13.6093 14.1181C11.7877 12.7379 10.6175 10.5965 10.6175 8.19241Z"
                        fill="#EB001B"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M26.2811 8.19241C26.2811 12.3547 22.7751 15.7295 18.4498 15.7295C16.622 15.7295 14.941 15.1272 13.6094 14.1181C15.4309 12.7379 16.6011 10.5965 16.6011 8.19241C16.6011 5.78828 15.4309 3.64691 13.6094 2.26676C14.941 1.25762 16.622 0.655273 18.4498 0.655273C22.7751 0.655273 26.2811 4.03014 26.2811 8.19241Z"
                        fill="#00A2E5"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27.149 13.6288V12.5745H27.0196L26.8726 13.2983L26.7241 12.5745H26.5962V13.6288H26.6858V12.8325L26.8255 13.5186H26.9196L27.0578 12.8294V13.6288H27.149ZM26.3344 13.6288V12.7539H26.4991V12.5745H26.0801V12.7539H26.2448V13.6288H26.3344Z"
                        fill="#00A2E5"
                      />
                    </svg>
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <svg
                      width="24"
                      height="18"
                      viewBox="0 0 24 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.33306 16.5403C5.33306 16.1896 5.54768 15.9017 5.89807 15.9017C6.23383 15.9017 6.45983 16.1775 6.45983 16.5403C6.45983 16.9031 6.23383 17.1788 5.89807 17.1788C5.54768 17.1788 5.33306 16.8909 5.33306 16.5403ZM6.84192 16.5403V15.5432H6.43625V15.7851C6.3078 15.6059 6.11269 15.4928 5.84767 15.4928C5.32493 15.4928 4.91601 15.9312 4.91601 16.5403C4.91601 17.1493 5.32493 17.5877 5.84767 17.5877C6.11269 17.5877 6.3078 17.4746 6.43625 17.2954V17.5373H6.84192V16.5403ZM20.5355 16.5403C20.5355 16.1896 20.7493 15.9017 21.1005 15.9017C21.4354 15.9017 21.6622 16.1775 21.6622 16.5403C21.6622 16.9031 21.4354 17.1788 21.1005 17.1788C20.7493 17.1788 20.5355 16.8909 20.5355 16.5403ZM22.7313 17.3537C22.7532 17.3537 22.7703 17.3589 22.7817 17.3702C22.7939 17.3807 22.7996 17.3946 22.7996 17.4129C22.7996 17.4285 22.7947 17.4407 22.7857 17.4503C22.776 17.4599 22.7622 17.4659 22.7451 17.4686L22.8012 17.5382H22.7573L22.7053 17.4694H22.6882V17.5382H22.6516V17.3537H22.7313ZM22.7199 17.6017C22.7402 17.6017 22.7589 17.5973 22.776 17.5895C22.7931 17.5808 22.8085 17.5703 22.8215 17.5564C22.8345 17.5425 22.8443 17.526 22.8516 17.5068C22.8589 17.4886 22.863 17.4686 22.863 17.4468C22.863 17.4251 22.8589 17.405 22.8516 17.3868C22.8443 17.3676 22.8345 17.3511 22.8215 17.3372C22.8085 17.3233 22.7931 17.3128 22.776 17.305C22.7589 17.2963 22.7402 17.2928 22.7199 17.2928C22.6996 17.2928 22.6809 17.2963 22.663 17.305C22.6451 17.3128 22.6297 17.3233 22.6167 17.3372C22.6036 17.3511 22.5939 17.3676 22.5866 17.3868C22.5784 17.405 22.5752 17.4251 22.5752 17.4468C22.5752 17.4686 22.5784 17.4886 22.5866 17.5068C22.5939 17.526 22.6036 17.5425 22.6167 17.5564C22.6297 17.5703 22.6451 17.5808 22.663 17.5895C22.6809 17.5973 22.6996 17.6017 22.7199 17.6017ZM22.7199 17.2484C22.7459 17.2484 22.7703 17.2537 22.7931 17.2641C22.8158 17.2745 22.8362 17.2885 22.8532 17.3067C22.8703 17.325 22.8841 17.3459 22.8939 17.3702C22.9036 17.3937 22.9085 17.4198 22.9085 17.4468C22.9085 17.4738 22.9036 17.4999 22.8939 17.5234C22.8841 17.5477 22.8703 17.5686 22.8532 17.5869C22.8362 17.6043 22.8158 17.6182 22.7931 17.6295C22.7703 17.6399 22.7459 17.6452 22.7199 17.6452C22.6939 17.6452 22.6687 17.6399 22.6451 17.6295C22.6223 17.6182 22.602 17.6043 22.5849 17.5869C22.5679 17.5686 22.5549 17.5477 22.5451 17.5234C22.5354 17.4999 22.5305 17.4738 22.5305 17.4468C22.5305 17.4198 22.5354 17.3937 22.5451 17.3702C22.5549 17.3459 22.5679 17.325 22.5849 17.3067C22.602 17.2885 22.6223 17.2745 22.6451 17.2641C22.6687 17.2537 22.6939 17.2484 22.7199 17.2484ZM22.0443 16.5403V14.7419H21.6387V15.7851C21.5094 15.6059 21.3151 15.4928 21.0501 15.4928C20.5273 15.4928 20.1184 15.9312 20.1184 16.5403C20.1184 17.1493 20.5273 17.5877 21.0501 17.5877C21.3151 17.5877 21.5094 17.4746 21.6387 17.2954V17.5373H22.0443V16.5403ZM11.8717 15.8808C12.1327 15.8808 12.3002 16.0565 12.3432 16.3654H11.3766C11.4189 16.0774 11.5831 15.8808 11.8717 15.8808ZM11.879 15.4928C11.3335 15.4928 10.9514 15.9191 10.9514 16.5403C10.9514 17.1745 11.349 17.5877 11.9067 17.5877C12.1872 17.5877 12.4449 17.5129 12.6709 17.3085L12.4717 16.9866C12.3164 17.1206 12.1172 17.1954 11.9303 17.1954C11.6685 17.1954 11.4311 17.0657 11.3726 16.7073H12.757C12.7603 16.6534 12.7644 16.5985 12.7644 16.5403C12.7603 15.9191 12.4018 15.4928 11.879 15.4928ZM16.7723 16.5403C16.7723 16.1896 16.9869 15.9017 17.3381 15.9017C17.6738 15.9017 17.899 16.1775 17.899 16.5403C17.899 16.9031 17.6738 17.1788 17.3381 17.1788C16.9869 17.1788 16.7723 16.8909 16.7723 16.5403ZM18.2819 16.5403V15.5432H17.8763V15.7851C17.747 15.6059 17.5527 15.4928 17.2869 15.4928C16.7649 15.4928 16.3552 15.9312 16.3552 16.5403C16.3552 17.1493 16.7649 17.5877 17.2869 17.5877C17.5527 17.5877 17.747 17.4746 17.8763 17.2954V17.5373H18.2819V16.5403ZM14.4838 16.5403C14.4838 17.1449 14.8781 17.5877 15.478 17.5877C15.7585 17.5877 15.9463 17.5208 16.1487 17.3502L15.9536 16.9996C15.8016 17.1162 15.6422 17.1788 15.4666 17.1788C15.1431 17.1745 14.9049 16.9239 14.9049 16.5403C14.9049 16.1566 15.1431 15.906 15.4666 15.9017C15.6422 15.9017 15.8016 15.9643 15.9536 16.0818L16.1487 15.7311C15.9463 15.5598 15.7585 15.4928 15.478 15.4928C14.8781 15.4928 14.4838 15.9356 14.4838 16.5403ZM19.7087 15.4928C19.4746 15.4928 19.3225 15.6102 19.2177 15.7851V15.5432H18.8152V17.5373H19.2209V16.4193C19.2209 16.0896 19.3534 15.906 19.6193 15.906C19.7006 15.906 19.7867 15.9191 19.8721 15.9565L19.9973 15.5476C19.9079 15.5102 19.7908 15.4928 19.7087 15.4928ZM8.84587 15.7016C8.65076 15.5641 8.38249 15.4928 8.08575 15.4928C7.61424 15.4928 7.31019 15.7355 7.31019 16.1314C7.31019 16.4567 7.53619 16.6577 7.95324 16.7195L8.14429 16.7491C8.36623 16.7821 8.47191 16.8448 8.47191 16.9579C8.47191 17.1119 8.32314 17.1997 8.04673 17.1997C7.76626 17.1997 7.56302 17.104 7.42644 16.9909L7.2354 17.3294C7.45815 17.5042 7.73862 17.5877 8.04267 17.5877C8.58085 17.5877 8.89303 17.3163 8.89303 16.937C8.89303 16.5864 8.64751 16.4028 8.24184 16.3402L8.0508 16.3106C7.8752 16.2853 7.73455 16.2479 7.73455 16.1148C7.73455 15.9687 7.86707 15.8808 8.08982 15.8808C8.3272 15.8808 8.55727 15.9774 8.67027 16.0522L8.84587 15.7016ZM14.074 15.4928C13.8407 15.4928 13.6887 15.6102 13.583 15.7851V15.5432H13.1814V17.5373H13.5871V16.4193C13.5871 16.0896 13.7196 15.906 13.9846 15.906C14.0667 15.906 14.1529 15.9191 14.2383 15.9565L14.3626 15.5476C14.2732 15.5102 14.1561 15.4928 14.074 15.4928ZM10.6165 15.5432H9.95313V14.9377H9.54421V15.5432H9.16537V15.9399H9.54421V16.8491C9.54421 17.312 9.71168 17.5877 10.1913 17.5877C10.3669 17.5877 10.5694 17.5295 10.6978 17.4329L10.5807 17.0623C10.4604 17.1371 10.3279 17.1745 10.2222 17.1745C10.0198 17.1745 9.95313 17.0414 9.95313 16.8404V15.9399H10.6165V15.5432ZM4.55668 17.5373V16.2853C4.55668 15.8147 4.27621 15.4971 3.8242 15.4928C3.586 15.4893 3.34049 15.5685 3.16895 15.8477C3.04051 15.6267 2.83808 15.4928 2.55273 15.4928C2.35437 15.4928 2.15926 15.5554 2.00723 15.7894V15.5432H1.60156V17.5373H2.0113V16.4315C2.0113 16.0852 2.19015 15.9017 2.46737 15.9017C2.73646 15.9017 2.87304 16.0896 2.87304 16.4272V17.5373H3.28196V16.4315C3.28196 16.0852 3.46894 15.9017 3.73803 15.9017C4.01525 15.9017 4.14776 16.0896 4.14776 16.4272V17.5373H4.55668Z"
                        fill="#231F20"
                      />
                      <mask
                        id="mask0_10208_820"
                        style="mask-type:luminance"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="18"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.5 17.2823H23.2764V0.22583H0.5V17.2823Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_10208_820)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.94922 12.5646H14.827V1.67749H8.94922V12.5646Z"
                          fill="#FF5F00"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.19951 6.93954C9.19951 4.79806 10.2512 2.89063 11.8882 1.66126C10.6906 0.762367 9.17994 0.22583 7.53803 0.22583C3.65093 0.22583 0.5 3.23199 0.5 6.93954C0.5 10.6471 3.65093 13.6532 7.53803 13.6532C9.17994 13.6532 10.6906 13.1167 11.8882 12.2178C10.2512 10.9885 9.19951 9.08102 9.19951 6.93954Z"
                          fill="#EB001B"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M23.2769 6.93954C23.2769 10.6471 20.1259 13.6532 16.2388 13.6532C14.5961 13.6532 13.0855 13.1167 11.8887 12.2178C13.5257 10.9885 14.5774 9.08102 14.5774 6.93954C14.5774 4.79806 13.5257 2.89063 11.8887 1.66126C13.0855 0.762367 14.5961 0.22583 16.2388 0.22583C20.1259 0.22583 23.2769 3.23199 23.2769 6.93954Z"
                          fill="#F79E1B"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M23.5865 11.8088V11.113H23.4601L23.3165 11.5907L23.1714 11.113H23.0465V11.8088H23.1341V11.2833L23.2705 11.7361H23.3624L23.4974 11.2813V11.8088H23.5865ZM22.7909 11.8088V11.2314H22.9517V11.113H22.541V11.2314H22.7033V11.8088H22.7909Z"
                          fill="#F79E1B"
                        />
                      </g>
                    </svg>
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <svg
                      width="29"
                      height="9"
                      viewBox="0 0 29 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.86859 5.76667L9.00829 0.45166V0.452519H11.319L7.8853 8.26685H5.57456L3.61523 1.54207C4.99949 2.19488 6.23987 3.5091 6.6355 4.7185L6.86859 5.76667ZM12.1995 0.45166L10.8332 8.27466H13.0171L14.3826 0.45166H12.1995ZM18.787 3.63831C18.0238 3.29156 17.556 3.05752 17.556 2.70287C17.5653 2.38041 17.9516 2.05005 18.8143 2.05005C19.5238 2.03365 20.0453 2.18707 20.441 2.33972L20.6391 2.4211L20.9361 0.784336C20.5047 0.630919 19.8207 0.461877 18.9759 0.461877C16.8192 0.461877 15.3006 1.49356 15.2912 2.9691C15.2733 4.05796 16.3784 4.66218 17.2054 5.02465C18.0503 5.39647 18.3378 5.63755 18.3378 5.9679C18.3285 6.47512 17.6547 6.70915 17.026 6.70915C16.1548 6.70915 15.6869 6.58861 14.9765 6.30599L14.6889 6.18545L14.3835 7.88644C14.8965 8.09626 15.84 8.28093 16.8193 8.29037C19.1113 8.29037 20.6027 7.27431 20.6214 5.70176C20.6289 4.83912 20.0462 4.17841 18.787 3.63831ZM24.8453 0.47587H26.535L28.296 8.28093H26.2745L25.947 6.72246H23.3827L22.7515 8.27466H20.4595L23.7035 1.10525C23.929 0.613663 24.3246 0.47587 24.8453 0.47587ZM24.0186 5.156C24.0652 5.15206 24.8981 2.62217 24.8981 2.62217L25.5634 5.156H24.0186Z"
                        fill="#2394BC"
                      />
                      <path
                        d="M5.72079 1.44762C5.55695 0.857888 5.03445 0.460148 4.32482 0.45166H0.995227L0.960938 0.594765C3.55825 1.18756 5.7383 3.01159 6.44555 4.72732L5.72079 1.44762Z"
                        fill="#EFC75E"
                      />
                    </svg>
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-[#26A6D1] rounded h-[30px]">
                    <svg
                      width="31"
                      height="8"
                      viewBox="0 0 31 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.14029 0.45166L0.845703 7.41045H4.78979L5.27874 6.30093H6.39637L6.88533 7.41045H11.2267V6.56363L11.6135 7.41045H13.8592L14.246 6.54573V7.41045H23.2748L24.3726 6.32974L25.4006 7.41045L30.038 7.4194L26.733 3.95048L30.038 0.45166H25.4726L24.4039 1.5124L23.4082 0.45166H13.5861L12.7427 2.24778L11.8795 0.45166H7.94361V1.26967L7.50578 0.45166H4.14029ZM4.90345 1.43982H6.82598L9.01128 6.15861V1.43982H11.1173L12.8052 4.82317L14.3608 1.43982H16.4564V6.43321H15.1813L15.1709 2.52042L13.3119 6.43321H12.1713L10.3019 2.52042V6.43321H7.67878L7.18149 5.31376H4.49477L3.9985 6.43223H2.59305L4.90345 1.43982ZM22.8077 1.43982H17.6229V6.43026H22.7274L24.3726 4.77635L25.9584 6.43026H27.6161L25.2067 3.9495L27.6161 1.43982H26.0303L24.3935 3.07474L22.8077 1.43982ZM5.8387 2.28467L4.95353 4.27889H6.72284L5.8387 2.28467ZM18.9033 3.38525V2.4737V2.47283H22.1384L23.55 3.93062L22.0759 5.39638H18.9033V4.40123H21.7318V3.38525H18.9033Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>

                {/* MONEY GUARANTEE */}

                <div class="bg-[#E8D7AF] px-4 py-2 lg:h-[100px] border border-[#E8D7AF] flex w-full  mt-4 lg:px-16 justify-center items-center gap-[10px] ">
                  <div class="w-[49px] h-[49px] lg:h-[63px] lg:w-[63px]">
                    <Bitmap />
                  </div>

                  <div>
                    <h4 class="text-[#232F3E] text-sm lg:text-base font-bold">
                      14-day money-back guarantee
                    </h4>

                    <p class="text-[#5B6064] text-[12px] lg:text-[13px]">
                      If you are not satisfied with the product, simply return
                      it and we will refund your money.
                    </p>
                  </div>
                </div>

                {/* TRUST */}

                <div class="flex mx-4 lg:mx-auto gap-2 items-center py-[10px] mb-[46px]">
                  <div class=" w-[92px] h-[22px] -mt-2">
                    <TrustPilot class="object-fit align-middle" />
                  </div>

                  <div class="text-[#181818] text-[12px] lg:text-sm font-bold">
                    Your Shop
                  </div>
                  <div class=" w-[100px]  ">
                    <Image class="object-fit align-middle" />
                  </div>

                  <p class="text-[#181818] text-[12px] lg:text-sm font-bold">
                    4.9 out of 5
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>

        <script
          defer
          dangerouslySetInnerHTML=" document.addEventListener( 'DOMContentLoaded', function () {
          
           
  
          
            var thumbnails = new Splide( '#best-seller-carousel', {
              gap         : 4,
              perPage: 4,
              perMove:1,
             
              pagination  : false,
              isNavigation: false,
              breakpoints : {
                600: {
                 perPage:1
                },
              },
            } );
          
     
            thumbnails.mount();
          } );"
        ></script>

        <script
          defer
          dangerouslySetInnerHTML=" document.addEventListener( 'DOMContentLoaded', function () {
          
           
  
          
            var thumbnails = new Splide( '#mobile-carousel', {
              gap         : 4,
              perPage: 4,
              perMove:1,
             
              pagination  : true,
              isNavigation: false,
              breakpoints : {
                600: {
                 perPage:1
                },
              },
            } );
          
     
            thumbnails.mount();
          } );"
        ></script>
      </section>

      <section class=" bg-[#F0F2F5] mb-10 hidden lg:block">
        <div class="container mx-auto py-20">
          <div class="w-full">
            {bestSellerProducts.value.products && (
              <CustomProductSlider
                bestSellerProducts={bestSellerProducts.value.products}
              />
            )}
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
