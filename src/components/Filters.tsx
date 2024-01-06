import { component$, useSignal } from "@builder.io/qwik";
import PriceRangeSlider from "./PriceRangeSlider";
import { ColorCheck, StarIcon, SubCatLabelIcon } from "./starter/icons/qwik";
export default component$(() => {
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
          <div class="relative w-10 h-10 flex bg-black-500 items-center justify-center ">
            <div class="absolute w-full left-0  top-1/4 transform -translate-y-1/4 pt-[2px] flex items-center justify-center  tranform  h-full text-white text-[10px] ">
              <span> 10</span>
            </div>
            <SubCatLabelIcon />
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
                      <ColorCheck />
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
          <div class="relative w-10 h-10 flex bg-black-500 items-center justify-center ">
            <div class="absolute w-full left-0  top-1/4 transform -translate-y-1/4 pt-[2px] flex items-center justify-center  tranform  h-full text-white text-[10px]">
              10
            </div>
            <SubCatLabelIcon />
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
                  {selectedColor.value == item.name && <ColorCheck />}
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
        <PriceRangeSlider />
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
            <SubCatLabelIcon />
          </div>
        </h4>

        <ul class="flex flex-col gap-2 mb-4 w-full">
          <li class="flex gap-2.5 items-center ">
            <div class="flex items-center ">
              <span class="text-yellow-500">
                <StarIcon />
              </span>

              <span class="text-yellow-500">
                <StarIcon />
              </span>
              <span class="text-yellow-500">
                <StarIcon />
              </span>
              <span class="text-yellow-500">
                <StarIcon />
              </span>
              <span class="text-yellow-500">
                <StarIcon />
              </span>
            </div>
            <span class="text-[#5F6061] text-sm">& Up</span>
          </li>
        </ul>

        <ul class="flex flex-col gap-2 mb-4 w-full">
          <li class="flex gap-2.5 items-center ">
            <div class="flex items-center ">
              <span class="text-yellow-500">
                <StarIcon />
              </span>

              <span class="text-yellow-500">
                <StarIcon />
              </span>
              <span class="text-yellow-500">
                <StarIcon />
              </span>
              <span class="text-yellow-500">
                <StarIcon />
              </span>
              <span class="text-white">
                <StarIcon />
              </span>
            </div>
            <span class="text-[#5F6061] text-sm">& Up</span>
          </li>
        </ul>

        <ul class="flex flex-col gap-2 mb-4 w-full">
          <li class="flex gap-2.5 items-center ">
            <div class="flex items-center ">
              <span class="text-yellow-500">
                <StarIcon />
              </span>

              <span class="text-yellow-500">
                <StarIcon />
              </span>
              <span class="text-yellow-500">
                <StarIcon />
              </span>
              <span class="text-white">
                <StarIcon />
              </span>
              <span class="text-white">
                <StarIcon />
              </span>
            </div>
            <span class="text-[#5F6061] text-sm">& Up</span>
          </li>
        </ul>
        <ul class="flex flex-col gap-2 mb-4 w-full">
          <li class="flex gap-2.5 items-center ">
            <div class="flex items-center ">
              <span class="text-yellow-500">
                <StarIcon />
              </span>

              <span class="text-yellow-500">
                <StarIcon />
              </span>
              <span class="text-white">
                <StarIcon />
              </span>
              <span class="text-white">
                <StarIcon />
              </span>
              <span class="text-white">
                <StarIcon />
              </span>
            </div>
            <span class="text-[#5F6061] text-sm">& Up</span>
          </li>
        </ul>

        <ul class="flex flex-col gap-2 mb-4 w-full">
          <li class="flex gap-2.5 items-center ">
            <div class="flex items-center ">
              <span class="text-yellow-500">
                <StarIcon />
              </span>

              <span class="text-white">
                <StarIcon />
              </span>
              <span class="text-white">
                <StarIcon />
              </span>
              <span class="text-white">
                <StarIcon />
              </span>
              <span class="text-white">
                <StarIcon />
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
