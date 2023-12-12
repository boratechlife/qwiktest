import { component$ } from "@builder.io/qwik";
import LogoDark from "~/media/Logo - dark.svg?jsx";
import HeaderTopBottom from "./HeaderTopBottom";

export default component$(() => {
  return (
    <header class="w-full ">
      <nav class="w-full bg-black  py-4">
        <div class="container mx-auto">
          <div class="flex gap-4">
            <div class="flex-1">
              <div class="w-full flex text-white items-center gap-[20px]">
                {/* MENU ICON */}
                <div class="">
                  <svg
                    width="22"
                    height="19"
                    viewBox="0 0 22 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.52723 0H20.4286C21.2978 0 22 0.702232 22 1.57143C22 2.44062 21.2978 3.14286 20.3844 3.14286H1.52723C0.703705 3.14286 0 2.35076 0 1.52723C0 0.703705 0.703705 0 1.52723 0ZM20.4286 7.85714H1.52723C0.703705 7.85714 0 8.55937 0 9.42857C0 10.2978 0.703705 11 1.52723 11H20.3844C21.2978 11 22 10.2978 22 9.42857C22 8.55937 21.2978 7.85714 20.4286 7.85714ZM20.4286 15.7143H1.52723C0.703705 15.7143 0 16.4165 0 17.2415C0 18.0665 0.703705 18.8571 1.52723 18.8571H20.3844C21.2978 18.8571 22 18.1549 22 17.2857C22 16.4165 21.2978 15.7143 20.4286 15.7143Z"
                      fill="#7C848E"
                    />
                  </svg>
                </div>

                {/* LOGO */}
                <div>
                  <LogoDark />
                </div>

                {/* SEARCH */}
                <div class="w-1/2 flex bg-white gap-4 items-center rounded-[100px] px-[16px] py-[10.5px]">
                  <div>
                    <svg
                      width="29"
                      height="26"
                      viewBox="0 0 29 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_10298_47)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20.5852 15.19L26.7144 21.0188C27.1764 21.4582 27.1764 22.1705 26.7144 22.6098L25.5991 23.6705C25.1371 24.1098 24.3881 24.1098 23.9261 23.6705L17.7969 17.8417C16.1628 18.8884 14.1949 19.5 12.0766 19.5C6.41437 19.5 1.82422 15.1347 1.82422 9.74999C1.82422 4.36523 6.41437 0 12.0766 0C17.7388 0 22.329 4.36523 22.329 9.74999C22.329 11.7645 21.6859 13.636 20.5852 15.19ZM12.0766 3.74999C8.59768 3.74999 5.76744 6.44155 5.76744 9.74999C5.76744 13.0583 8.59768 15.75 12.0766 15.75C15.5555 15.75 18.3857 13.0583 18.3857 9.74999C18.3857 6.44155 15.5555 3.74999 12.0766 3.74999Z"
                          fill="#37424F"
                          fill-opacity="0.1"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_10298_47"
                          x="0.824219"
                          y="0"
                          width="27.2363"
                          height="26"
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
                            result="effect1_dropShadow_10298_47"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_10298_47"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="search"
                    class="bg-white flex-1 w-full outline-none text-gray-700"
                    id=""
                    placeholder="Search by product (e.g. HDMI adapter)"
                  />
                </div>

                {/* CONTACT */}
                <div class="flex gap-3 items-center">
                  <span>
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.8695 16.1685C19.3734 17.2352 18.5203 18.1197 17.4406 18.687C17.1018 18.8224 16.7501 18.9272 16.3903 19C16.2673 18.9654 16.1461 18.934 16.0272 18.9032L16.027 18.9031L16.027 18.9031C15.7508 18.8316 15.4874 18.7635 15.2446 18.6654C12.3495 17.6041 9.6544 16.1111 7.26254 14.2436C6.55205 13.6728 5.88463 13.0561 5.26513 12.3979C3.73532 10.7382 2.45065 8.89136 1.44599 6.90749C1.00228 6.05515 0.621494 5.17613 0.240809 4.29734L0.240805 4.29733L0.124567 4.02918C-0.257347 3.1477 0.307886 2.23024 0.888396 1.57182C1.45662 0.961203 2.15555 0.470745 2.93928 0.132667C3.5083 -0.136743 4.20036 0.0145242 4.58533 0.492456C5.5611 1.52525 6.42115 2.65016 7.15179 3.84929C7.62988 4.57354 7.41972 5.52388 6.6744 6.00802C6.48344 6.13395 6.29248 6.27786 6.12826 6.41818C5.96637 6.53112 5.82676 6.66995 5.71579 6.82834C5.5217 7.12883 5.48779 7.4975 5.62413 7.82495C6.36123 9.73543 7.48024 11.3293 9.15302 12.4482C9.71913 12.8253 10.329 13.1404 10.9709 13.3873C11.3901 13.602 11.8611 13.7111 12.3382 13.7039C12.8767 13.6434 13.182 13.2592 13.4875 12.8747L13.4875 12.8747C13.6543 12.6647 13.8212 12.4547 14.0262 12.2971C14.5734 11.8751 15.3498 11.8414 15.9358 12.2144C16.4628 12.5208 16.9732 12.8613 17.4811 13.2L17.4812 13.2C17.5695 13.259 17.6578 13.3179 17.7461 13.3765C18.3354 13.7554 18.9027 14.1637 19.4456 14.5998C19.9695 14.9583 20.1477 15.6176 19.8695 16.1685ZM9.81445 2.02067H10.0672C10.0379 2.02067 10.0089 2.02024 9.98014 2.01981C9.92356 2.01897 9.86814 2.01814 9.81445 2.02067Z"
                        fill="#969899"
                      />
                    </svg>
                  </span>
                  <div>
                    <span class="text-[#E3E6E8]">Need help?</span>
                    <span class="font-bold text-white">+386 31 566 432</span>
                  </div>
                </div>
              </div>

              <div class="bottom w-full font-bold text-[15px] flex justify-between mt-4 items-center  text-white">
                <div class="nav-item opacity-70 cursor-pointer">
                  TV & Video{" "}
                </div>
                <div class="nav-item opacity-70 hover:opacity-100 cursor-pointer">
                  {" "}
                  Cell Phones{" "}
                </div>
                <div class="nav-item opacity-70 hover:opacity-100 cursor-pointer">
                  {" "}
                  Smart Home{" "}
                </div>
                <div class="nav-item opacity-70 hover:opacity-100 cursor-pointer">
                  {" "}
                  Ipads & Tablects{" "}
                </div>
                <div class="nav-item opacity-70 hover:opacity-100 cursor-pointer">
                  {" "}
                  Wearable Tech{" "}
                </div>
                <div class="nav-item opacity-70 hover:opacity-100 cursor-pointer inline-flex items-center">
                  {" "}
                  Sale
                  <span class="relative">
                    <div class="absolute ml-1 flex items-center inset-0 justify-center text-[#FFF] text-center font-Roboto text-[12px] font-bold leading-[116.667%]">
                      40% OFF
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="63"
                      height="20"
                      viewBox="0 0 63 20"
                      fill="none"
                    >
                      <path
                        d="M6.10427 1.27961C6.66566 0.477635 7.58303 0 8.56197 0H60C61.6569 0 63 1.34315 63 3V17C63 18.6569 61.6569 20 60 20H8.56196C7.58302 20 6.66566 19.5224 6.10427 18.7204L1.20427 11.7204C0.4812 10.6874 0.481199 9.31257 1.20427 8.27961L6.10427 1.27961Z"
                        fill="#CA232C"
                      />
                    </svg>
                  </span>
                </div>
                <div class="nav-item opacity-70 hover:opacity-100 cursor-pointer relative inline-flex">
                  {" "}
                  All products
                  <span class="relative">
                    <div class="absolute ml-1 text-white text-center font-Roboto text-[12px] font-bold leading-4/3 flex items-center justify-center inset-0 ">
                      72
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="20"
                      viewBox="0 0 31 20"
                      fill="none"
                    >
                      <path
                        d="M6.10427 1.27961C6.66566 0.477635 7.58303 0 8.56197 0H28C29.6569 0 31 1.34315 31 3V17C31 18.6569 29.6569 20 28 20H8.56197C7.58302 20 6.66566 19.5224 6.10427 18.7204L1.20427 11.7204C0.4812 10.6874 0.481199 9.31257 1.20427 8.27961L6.10427 1.27961Z"
                        fill="#737B86"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div class=" rounded-md w-[181px] h-[86px] bg-[#37424F] flex justify-center items-center">
              <div class="flex items-center gap-2 ">
                <span class="relative ">
                  <div class="absolute -top-1 -right-1 text-white text-center font-Roboto  h-[20px] w-[20px] flex items-center justify-center text-[11px]  rounded-full border-2 border-solid border-[#37424F] bg-[#28A744] font-bold pt-1">
                    3
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="37"
                    viewBox="0 0 42 37"
                    fill="none"
                  >
                    <path
                      d="M38.5088 21.775L41.9557 6.74376C42.2046 5.65847 41.3723 4.625 40.2493 4.625H11.6089L10.9406 1.38678C10.774 0.579643 10.0574 0 9.22608 0H1.75C0.78349 0 0 0.776494 0 1.73438V2.89062C0 3.84851 0.78349 4.625 1.75 4.625H6.84564L11.9679 29.4435C10.7425 30.142 9.91667 31.4516 9.91667 32.9531C9.91667 35.1882 11.7448 37 14 37C16.2552 37 18.0833 35.1882 18.0833 32.9531C18.0833 31.8204 17.6132 30.7971 16.8566 30.0625H32.1434C31.3868 30.7971 30.9167 31.8204 30.9167 32.9531C30.9167 35.1882 32.7448 37 35 37C37.2552 37 39.0833 35.1882 39.0833 32.9531C39.0833 31.3509 38.1436 29.9662 36.7807 29.3106L37.183 27.5563C37.4319 26.471 36.5995 25.4375 35.4765 25.4375H15.9044L15.4271 23.125H36.8023C37.6194 23.125 38.3277 22.5647 38.5088 21.775Z"
                      fill="white"
                    />
                  </svg>
                </span>

                <div class="flex flex-col gap-0.5">
                  <span class="text-white opacity-50 text-sm text-center">
                    Your cart
                  </span>

                  <span class="text-white text-lg font-bold">$59.90</span>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="14"
                  class="h-5 w-5"
                  viewBox="0 0 8 14"
                  fill="none"
                >
                  <path
                    d="M7.44061 6.13571L2.09344 0.385677C1.62963 -0.113355 0.859658 -0.129949 0.374974 0.346614C-0.109709 0.824146 -0.126815 1.61518 0.336997 2.11418L4.88047 6.99996L0.336997 11.8857C-0.126815 12.3847 -0.109709 13.1758 0.374974 13.6533C0.610434 13.8848 0.912826 14 1.21522 14C1.53517 14 1.85467 13.8711 2.09344 13.6142L7.44061 7.86421C7.89017 7.38081 7.89017 6.61909 7.44061 6.13571Z"
                    fill="#737B86"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <HeaderTopBottom />
    </header>
  );
});
