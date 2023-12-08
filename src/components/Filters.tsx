import { component$, useSignal } from "@builder.io/qwik";
import { MUISlider } from "~/integrations/react/mui";
export default component$(() => {
  const count = useSignal([100, 1000]);
  return (
    <div class="w-full lg:w-[270px] bg-[#F0F2F5]  h-auto rounded-[10px] divide-y py-[23px]">
      <div class="w-full px-[35px]">
        <h4 class="flex gap-2 items-center font-bold">
          <span class="text-lg font-bold leading-[40px] text-[#232F3E]">
            Subcategories
          </span>
          <div class="relative w-10 h-10 flex bg-black-500 items-center justify-center ">
            <div class="absolute w-full left-0  top-2.5 flex items-center justify-center  tranform -translate-y-1/4 h-full text-white text-[10px]">
              10
            </div>
            <svg
              width="22"
              height="17"
              class="h-[17px] w-[22px]"
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.09998 1.09288C6.66986 0.400887 7.51933 0 8.41577 0H19C20.6569 0 22 1.34315 22 3V14C22 15.6569 20.6569 17 19 17H8.41577C7.51933 17 6.66986 16.5991 6.09998 15.9071L1.57057 10.4071C0.658292 9.29935 0.658292 7.70065 1.57057 6.59288L6.09998 1.09288Z"
                fill="#232F3E"
              />
            </svg>
          </div>
        </h4>
        <ul class="flex flex-col gap-3 pb-[19px]">
          <li class="flex items-center gap-2">
            <input
              type="checkbox"
              name="subcategory"
              class="h-6 w-6 bg-white border border-[#ccc] rounded-md"
              style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
              id=""
            />

            <div class="text-base text-[#5F6061]">Subcategory</div>

            <div class=" w-[24px] h-[17px] rounded-[3px]  flex items-center justify-center  bg-[#E2E6EC] text-[10px]">
              11
            </div>
          </li>

          <li class="flex items-center gap-2">
            <input
              type="checkbox"
              name="subcategory"
              class="h-6 w-6 bg-white border border-[#ccc] rounded-md"
              style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
              id=""
            />

            <div class="text-base text-[#5F6061]">Subcategory</div>

            <div class=" w-[24px] h-[17px] rounded-[3px]  flex items-center justify-center  bg-[#E2E6EC] text-[10px]">
              11
            </div>
          </li>
          <li class="flex items-center gap-2">
            <input
              type="checkbox"
              name="subcategory"
              class="h-6 w-6 bg-white border border-[#ccc] rounded-md"
              style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
              id=""
            />

            <div class="text-base text-[#5F6061]">Subcategory</div>

            <div class=" w-[24px] h-[17px] rounded-[3px]  flex items-center justify-center  bg-[#E2E6EC] text-[10px]">
              11
            </div>
          </li>
          <li class="flex items-center gap-2">
            <input
              type="checkbox"
              name="subcategory"
              class="h-6 w-6 bg-white border border-[#ccc] rounded-md"
              style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
              id=""
            />

            <div class="text-base text-[#5F6061]">Subcategory</div>

            <div class=" w-[24px] h-[17px] rounded-[3px]  flex items-center justify-center  bg-[#E2E6EC] text-[10px]">
              11
            </div>
          </li>
          <li class="flex items-center gap-2">
            <input
              type="checkbox"
              name="subcategory"
              class="h-6 w-6 bg-white border border-[#ccc] rounded-md"
              style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
              id=""
            />

            <div class="text-base text-[#5F6061]">Subcategory</div>

            <div class=" w-[24px] h-[17px] rounded-[3px]  flex items-center justify-center  bg-[#E2E6EC] text-[10px]">
              11
            </div>
          </li>
          <li class="flex items-center gap-2">
            <input
              type="checkbox"
              name="subcategory"
              class="h-6 w-6 bg-white border border-[#ccc] rounded-md"
              style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
              id=""
            />

            <div class="text-base text-[#5F6061]">Subcategory</div>

            <div class=" w-[24px] h-[17px] rounded-[3px]  flex items-center justify-center  bg-[#E2E6EC] text-[10px]">
              11
            </div>
          </li>
        </ul>
      </div>

      <div class="w-full px-[35px]">
        <h4 class="flex gap-2 items-center font-bold">
          <span class="text-lg font-bold leading-[40px] text-[#232F3E]">
            Color
          </span>
          <div class="relative w-10 h-10 flex bg-black-500 items-center justify-center ">
            <div class="absolute w-full left-0  top-2.5 flex items-center justify-center  tranform -translate-y-1/4 h-full text-white text-[10px]">
              10
            </div>
            <svg
              width="22"
              height="17"
              class="h-[17px] w-[22px]"
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.09998 1.09288C6.66986 0.400887 7.51933 0 8.41577 0H19C20.6569 0 22 1.34315 22 3V14C22 15.6569 20.6569 17 19 17H8.41577C7.51933 17 6.66986 16.5991 6.09998 15.9071L1.57057 10.4071C0.658292 9.29935 0.658292 7.70065 1.57057 6.59288L6.09998 1.09288Z"
                fill="#232F3E"
              />
            </svg>
          </div>
        </h4>
        <ul class="grid grid-cols-2 gap-3 pb-[19px]">
          <li class="flex items-center gap-2">
            <input
              type="checkbox"
              name="subcategory"
              class="h-6 w-6 bg-white border border-[#ccc] rounded-md"
              style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
              id=""
            />

            <div class="text-base text-[#5F6061]">Black</div>
          </li>
          <li class="flex items-center gap-2">
            <input
              type="checkbox"
              name="subcategory"
              class="h-6 w-6 bg-white border border-[#ccc] rounded-md"
              style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
              id=""
            />

            <div class="text-base text-[#5F6061]">Blue</div>
          </li>

          <li class="flex items-center gap-2">
            <input
              type="checkbox"
              name="subcategory"
              class="h-6 w-6 bg-white border border-[#ccc] rounded-md"
              style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
              id=""
            />

            <div class="text-base text-[#5F6061]">Brown</div>
          </li>
          <li class="flex items-center gap-2">
            <input
              type="checkbox"
              name="subcategory"
              class="h-6 w-6 bg-white border border-[#ccc] rounded-md"
              style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
              id=""
            />

            <div class="text-base text-[#5F6061]">Green</div>
          </li>
          <li class="flex items-center gap-2">
            <input
              type="checkbox"
              name="subcategory"
              class="h-6 w-6 bg-white border border-[#ccc] rounded-md"
              style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
              id=""
            />

            <div class="text-base text-[#5F6061]">Grey</div>
          </li>
          <li class="flex items-center gap-2">
            <input
              type="checkbox"
              name="subcategory"
              class="h-6 w-6 bg-white border border-[#ccc] rounded-md"
              style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
              id=""
            />

            <div class="text-base text-[#5F6061]">Red</div>
          </li>
        </ul>
      </div>

      <div class="w-full p-4">
        <h4 class="flex gap-2 items-center font-bold mb-2 text-lg  leading-[40px] text-[#232F3E]">
          <span>Price</span>
        </h4>
        <MUISlider
          value={count.value}
          min={100}
          max={1000}
          valueLabelDisplay="auto"
          onChange$={(_, value) => {
            count.value = value as number;
          }}
        />

        <div class="flex justify-between items-center w-10/12 mt-4">
          <div
            class="w-[70px] h-[42px] rounded-[4px] border border-[#ccc] flex items-center justify-center "
            style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
          >
            ${count.value[0]}
          </div>
          <div
            class="w-[70px] h-[42px] rounded-[4px] border border-[#ccc] flex items-center justify-center "
            style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
          >
            ${count.value[1]}
          </div>
        </div>
      </div>

      <div class="w-full p-4">
        <h4 class="flex gap-2 items-center font-bold">
          <span class="text-lg font-bold leading-[40px] text-[#232F3E]">
            Customer Review
          </span>
          <div class="relative w-10 h-10 flex bg-black-500 items-center justify-center ">
            <div class="absolute w-full left-0  top-2.5 flex items-center justify-center  tranform -translate-y-1/4 h-full text-white text-[10px]">
              1
            </div>
            <svg
              width="22"
              height="17"
              class="h-[17px] w-[22px]"
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.09998 1.09288C6.66986 0.400887 7.51933 0 8.41577 0H19C20.6569 0 22 1.34315 22 3V14C22 15.6569 20.6569 17 19 17H8.41577C7.51933 17 6.66986 16.5991 6.09998 15.9071L1.57057 10.4071C0.658292 9.29935 0.658292 7.70065 1.57057 6.59288L6.09998 1.09288Z"
                fill="#232F3E"
              />
            </svg>
          </div>
        </h4>

        {/* <h4 class="flex gap-2 items-center font-bold">
    <span>Customer Review</span>
    <span class="bg-black text-sm p-2 text-white">1</span>
  </h4> */}

        <ul class="flex flex-col gap-2 mb-4 w-full">
          <li class="flex gap-2.5 items-center ">
            <div class="flex items-center ">
              <span class="text-yellow-500">
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
              </span>

              <span class="text-yellow-500">
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
              </span>
              <span class="text-yellow-500">
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
              </span>
              <span class="text-yellow-500">
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
              </span>
              <span class="text-yellow-500">
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
              </span>
            </div>
            <span class="text-[#5F6061] text-sm">& Up</span>
          </li>
        </ul>

        <ul class="flex flex-col gap-2 mb-4 w-full">
          <li class="flex gap-2.5 items-center ">
            <div class="flex items-center ">
              <span class="text-yellow-500">
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
              </span>

              <span class="text-yellow-500">
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
              </span>
              <span class="text-yellow-500">
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
              </span>
              <span class="text-yellow-500">
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
              </span>
              <span class="text-white">
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
              </span>
            </div>
            <span class="text-[#5F6061] text-sm">& Up</span>
          </li>
        </ul>

        <ul class="flex flex-col gap-2 mb-4 w-full">
          <li class="flex gap-2.5 items-center ">
            <div class="flex items-center ">
              <span class="text-yellow-500">
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
              </span>

              <span class="text-yellow-500">
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
              </span>
              <span class="text-yellow-500">
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
              </span>
              <span class="text-white">
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
              </span>
              <span class="text-white">
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
              </span>
            </div>
            <span class="text-[#5F6061] text-sm">& Up</span>
          </li>
        </ul>
        <ul class="flex flex-col gap-2 mb-4 w-full">
          <li class="flex gap-2.5 items-center ">
            <div class="flex items-center ">
              <span class="text-yellow-500">
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
              </span>

              <span class="text-yellow-500">
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
              </span>
              <span class="text-white">
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
              </span>
              <span class="text-white">
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
              </span>
              <span class="text-white">
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
              </span>
            </div>
            <span class="text-[#5F6061] text-sm">& Up</span>
          </li>
        </ul>

        <ul class="flex flex-col gap-2 mb-4 w-full">
          <li class="flex gap-2.5 items-center ">
            <div class="flex items-center ">
              <span class="text-yellow-500">
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
              </span>

              <span class="text-white">
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
              </span>
              <span class="text-white">
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
              </span>
              <span class="text-white">
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
              </span>
              <span class="text-white">
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
              </span>
            </div>
            <span class="text-[#5F6061] text-sm">& Up</span>
          </li>
        </ul>
      </div>

      <div class="w-full p-4">
        <h4 class="flex gap-2 items-center font-bold mb-2">
          <span>Brand</span>
        </h4>

        <div class="flex justify-between items-center mt-4">
          <input
            type="search"
            class=" px-3 py-2 border  rounded-[4px] border-[#ccc] h-[42px] flex items-center w-[201px]"
            style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
          />
        </div>
      </div>
    </div>
  );
});
