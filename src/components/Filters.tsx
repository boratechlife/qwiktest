import { component$, useSignal } from "@builder.io/qwik";

import SliderImage from "~/media/price.svg?jsx";

export default component$(() => {
  const count = useSignal<number[]>([100, 1000]);

  const subcategories = useSignal([
    {
      name: "Subcategory",
      total: 11,
    },
    {
      name: "Subcategory2",
      total: 3,
    },
    {
      name: "Subcategory3",
      total: 12,
    },
    {
      name: "Subcategory4",
      total: 45,
    },
    {
      name: "Subcategory5",
      total: 12,
    },
    {
      name: "Subcategory6",
      total: 4,
    },
  ]);

  const selectedSubCat = useSignal("");
  const selectedColor = useSignal("");

  const colors = useSignal([
    {
      name: "Black",
      code: "#000000",
    },
    {
      name: "Blue",
      code: "#004EE5",
    },
    {
      name: "Brown",
      code: "#815500",
    },
    {
      name: "Green",
      code: "#3DBD00",
    },
    {
      name: "Grey",
      code: "#999999",
    },
    {
      name: "Red",
      code: "#CA232C",
    },
  ]);
  return (
    <div class="w-full lg:w-[270px] bg-[#F0F2F5]  h-auto rounded-[10px] divide-y py-[23px]">
      <div class="w-full px-[35px]">
        <h4 class="flex gap-2 items-center font-bold">
          <span class="text-lg font-bold leading-[40px] text-[#232F3E]">
            Subcategories
          </span>

          <div class="relative  bg-black-500 items-center justify-center ">
            <div class="absolute  w-full left-0 mt-[1px] inset-0  flex items-center justify-center ml-[1px]  tranform h-full text-white text-[10px]">
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
        <ul class="flex flex-col gap-2 pb-[19px]">
          {subcategories.value.map((item, index) => {
            return (
              <li class="flex items-center gap-2" key={index + "subcategory"}>
                <div class="relative mt-2">
                  {selectedSubCat.value == item.name && (
                    <div
                      class="absolute inset-0  h-[24px] w-[24px] rounded-[4px] bg-[#3B8FFF] flex items-center justify-center z-20"
                      onClick$={() => {
                        if (selectedSubCat.value == item.name) {
                          selectedSubCat.value = "";
                        } else {
                          selectedSubCat.value = item.name;
                        }
                      }}
                    >
                      <svg
                        width="13"
                        height="10"
                        viewBox="0 0 13 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.41538 9.8036L0.190373 5.44535C-0.0634576 5.18351 -0.0634576 4.75898 0.190373 4.49711L1.10959 3.54888C1.36342 3.28702 1.775 3.28702 2.02883 3.54888L4.875 6.48478L10.9712 0.196377C11.225 -0.0654589 11.6366 -0.0654589 11.8904 0.196377L12.8096 1.14461C13.0635 1.40645 13.0635 1.83098 12.8096 2.09285L5.33462 9.80363C5.08076 10.0655 4.66921 10.0655 4.41538 9.8036Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  )}

                  <input
                    type="checkbox"
                    name="subcategory"
                    class="h-6 w-6 bg-white border border-[#ccc] rounded-[4px]"
                    style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
                    id=""
                    checked={selectedSubCat.value == item.name}
                    onChange$={() => {
                      if (selectedSubCat.value == item.name) {
                        selectedSubCat.value = "";
                      } else {
                        selectedSubCat.value = item.name;
                      }
                    }}
                  />
                </div>

                <div
                  class={`"text-base ${
                    selectedSubCat.value == item.name
                      ? " font-bold text-[#232F3E] "
                      : "text-[#5F6061] font-normal"
                  }"`}
                >
                  {item.name}
                </div>

                <div class=" w-[24px] h-[17px] rounded-[3px]  flex items-center justify-center  bg-[#E2E6EC] text-[10px]">
                  {item.total}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div class="w-full px-[35px]">
        <h4 class="flex gap-2 items-center font-bold">
          <span class="text-lg font-bold leading-[40px] text-[#232F3E]">
            Color
          </span>
          <div class="relative  bg-black-500 items-center justify-center ">
            <div class="absolute  w-full left-0 mt-[1px] inset-0  flex items-center justify-center ml-[1px]  tranform h-full text-white text-[10px]">
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
        <ul class="grid grid-cols-2 gap-3 pb-[19px]">
          {colors.value.map((item) => {
            return (
              <li class="flex items-center gap-2" key={item.name + "colors"}>
                <div
                  class={`h-6 w-6 rounded-md flex items-center justify-center`}
                  style={{ backgroundColor: item.code }}
                  onClick$={() => {
                    if (selectedColor.value == item.name) {
                      selectedColor.value = "";
                    } else {
                      selectedColor.value = item.name;
                    }
                  }}
                >
                  {selectedColor.value == item.name && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="10"
                      viewBox="0 0 13 10"
                      fill="none"
                    >
                      <path
                        d="M4.41538 9.8036L0.190373 5.44535C-0.0634576 5.18351 -0.0634576 4.75898 0.190373 4.49711L1.10959 3.54888C1.36342 3.28702 1.775 3.28702 2.02883 3.54888L4.875 6.48478L10.9712 0.196377C11.225 -0.0654589 11.6366 -0.0654589 11.8904 0.196377L12.8096 1.14461C13.0635 1.40645 13.0635 1.83098 12.8096 2.09285L5.33462 9.80363C5.08076 10.0655 4.66921 10.0655 4.41538 9.8036Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </div>

                <div
                  class={`"text-base ${
                    selectedColor.value == item.name
                      ? " font-bold text-[#232F3E] "
                      : "text-[#5F6061] font-normal"
                  }"`}
                >
                  {item.name}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div class="w-full p-4">
        <h4 class="flex gap-2 items-center font-bold mb-2 text-lg  leading-[40px] text-[#232F3E]">
          <span>Price</span>
        </h4>
        <div class="w-full">
          <SliderImage />
        </div>

        <div class="flex justify-between items-center w-10/12 mt-4">
          <div
            class="w-[70px] h-[42px] rounded-[4px] border border-[#CCC] bg-[#FFF] flex items-center justify-center"
            style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
          >
            ${count.value[0]}
          </div>
          <div
            class="w-[70px] h-[42px] rounded-[4px] border border-[#CCC] bg-[#FFF] flex items-center justify-center"
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
