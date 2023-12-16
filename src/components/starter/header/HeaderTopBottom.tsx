import { component$ } from "@builder.io/qwik";
import Bitmap from "~/media/Bitmap.png?jsx";

export default component$(() => {
  return (
    <header class="w-full ">
      <nav class="h-[50px] bg-[#F0F2F5]  py-2 divide-x">
        <div class="container mx-auto">
          <div class="w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center relative px-4 lg:px-0 divide-x ">
            <div class="w-full lg:w-1/3 flex justify-center lg:justify-center items-center gap-1 lg:gap-2">
              <span>
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.7 1.35C11.7 0.604406 11.0953 0 10.35 0H1.35C0.604406 0 0 0.604406 0 1.35V10.35C0 11.0953 0.604406 11.7 1.35 11.7H1.8C1.8 13.1906 2.98406 14.4 4.5 14.4C5.99062 14.4 7.2 13.1906 7.2 11.7H10.8C10.8 13.1906 11.9841 14.4 13.5 14.4C14.9906 14.4 16.2 13.1906 16.2 11.7H17.1C17.5978 11.7 18 11.2978 18 10.8C18 10.3022 17.5978 9.9 17.1 9.9V6.67406C17.1 6.19594 16.9116 5.7375 16.5741 5.4L14.4 3.22594C14.0372 2.88844 13.6041 2.7 13.1259 2.7H11.7V1.35ZM11.6992 7.2V4.5H13.1252L15.2992 6.67406V7.2H11.6992ZM4.50039 10.3501C3.75508 10.3501 3.15039 10.9548 3.15039 11.7001C3.15039 12.4454 3.75508 13.0501 4.50039 13.0501C5.2457 13.0501 5.85039 12.4454 5.85039 11.7001C5.85039 10.9548 5.2457 10.3501 4.50039 10.3501ZM14.8504 11.7001C14.8504 12.4454 14.2457 13.0501 13.5004 13.0501C12.7551 13.0501 12.1504 12.4454 12.1504 11.7001C12.1504 10.9548 12.7551 10.3501 13.5004 10.3501C14.2457 10.3501 14.8504 10.9548 14.8504 11.7001Z"
                    fill="#99A0A7"
                  />
                </svg>
              </span>

              <span class="text-[12px] text-sm text-[#232F3E]">
                <b> Free delivery</b>
                <span class="ml-1">on all orders over $69</span>
              </span>
              <div class="bg-[#E1E3E6] hidden  w-[100px] lg:flex rounded-2xl h-[10px]">
                <div class="bg-yellow-500 h-full w-3/4 rounded-2xl"></div>
              </div>
            </div>
            <div class="w-full lg:w-1/3 hidden lg:flex items-center justify-center gap-2 ">
              <span>
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9987 8C17.9987 6.85938 17.4094 5.86312 16.5344 5.28906C16.7492 4.26156 16.4557 3.14438 15.655 2.34375C14.8544 1.53906 13.7297 1.24594 12.7063 1.46094C12.1019 0.585938 11.1331 0 9.99875 0C8.86437 0 7.86438 0.585938 7.25813 1.46094C6.25813 1.24625 5.14563 1.54312 4.3425 2.34375C3.53906 3.14375 3.24281 4.26562 3.4575 5.29063C2.57875 5.86875 2 6.86875 2 8C2 9.13125 2.5825 10.1328 3.4575 10.7109C3.24281 11.7375 3.54281 12.8562 4.3425 13.6562C5.14313 14.4609 6.25313 14.7541 7.28438 14.5391C7.86438 15.4187 8.8675 16 9.99875 16C11.1356 16 12.1281 15.4141 12.7063 14.5391C13.7375 14.7539 14.8541 14.457 15.655 13.6562C16.4597 12.8556 16.7494 11.7344 16.5344 10.7109C17.4144 10.1344 17.9987 9.13437 17.9987 8ZM7.99875 5C8.54938 5 8.97062 5.44938 8.97062 6C8.97062 6.55062 8.54875 7 7.99875 7C7.44875 7 6.99875 6.55062 6.99875 6C6.99875 5.44938 7.44875 5 7.99875 5ZM8.50813 10.5031C8.38938 10.6781 8.19875 10.75 8.005 10.75C7.81125 10.75 7.62125 10.6768 7.47469 10.5303C7.18172 10.2373 7.18172 9.76278 7.47469 9.46966L11.4747 5.46966C11.7677 5.17669 12.2422 5.17669 12.5353 5.46966C12.8284 5.76263 12.8283 6.23716 12.5353 6.53028L8.50813 10.5031ZM11.9987 11C11.4481 11 10.9987 10.5506 10.9987 10C10.9987 9.44938 11.4481 9 11.9987 9C12.5494 9 12.9987 9.44938 12.9987 10C12.9987 10.5506 12.5487 11 11.9987 11Z"
                    fill="#99A0A7"
                  />
                </svg>
              </span>

              <span class="text-sm text-[#232F3E]">
                Buy 2 or more and
                <b class="ml-1"> get 25% Off</b>
              </span>
            </div>
            <div class="w-full lg:w-1/3 hidden lg:flex items-center justify-center gap-1 ">
              <div class="h-[21px] w-[21px]">
                <Bitmap />
              </div>
              <span class="text-sm text-[#232F3E]">
                <b>14-day money-back guarantee</b> on all products
              </span>
            </div>

            <div class="absolute lg:hidden right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                class="transform rotate-180"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M-2.62268e-07 6L7 12L7 3.0598e-07L-2.62268e-07 6Z"
                  fill="#99A0A7"
                />
              </svg>
            </div>
            <div class="absolute lg:hidden -left-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M-2.62268e-07 6L7 12L7 3.0598e-07L-2.62268e-07 6Z"
                  fill="#99A0A7"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
});
