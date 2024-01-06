import { component$ } from "@builder.io/qwik";
import Filters from "~/components/Filters";
import { CloseIcon, DeleteIcon, MobileFilterIcon } from "./starter/icons/qwik";


export default component$(({ onClick$ }) => {
  return (
    <div
      class="fixed inset-0 p-4 overflow-y-auto
     bg-[#F0F2F5]  h-screen  w-full pb-20 z-50"
    >
      <div
        class="fixed left-0 bottom-0 bg-white w-full h-[98px] flex items-center "
        style="box-shadow: 0px -11px 20px 0px rgba(0, 0, 0, 0.30);"
      >
        <button
          class="text-white text-center text-lg w-10/12 mx-auto h-[56px] font-bold items-center leading-[30px] gap-1"
          style="border-radius: 5px;
background: linear-gradient(180deg, #1D6EC1 0%, #265B9D 100%);"
        >
          <span>Show filtered products</span>
          <span class="p-1.5 flex-shrink-0 rounded-md bg-black text-white text-center font-Roboto text-[10px] font-bold leading-[33px] ml-1">
            32
          </span>
        </button>
      </div>
      <div class="flex justify-between">
        <div class="flex gap-4">
          <div class="flex items-center">
            <p class="text-[#232F3E]  text-[24px] font-bold leading-[42px]">
              Filters
            </p>

            <div class="relative">
              <div class="absolute left-1/2 -top-1.5  text-white text-[10px]">
                1
              </div>
<MobileFilterIcon />
            </div>
          </div>

          <div
            class="w-[103px] h-[42px] flex items-center justify-center gap-2 flex-shrink-0 rounded-[5px]"
            style="background: linear-gradient(180deg, #37424F 0%, #232F3E 100%)"
          >
<DeleteIcon />
            <span class="text-white text-center font-Roboto text-[14px] font-bold leading-[30px]">
              Clear all{" "}
            </span>
          </div>
        </div>

        <div
          class="close "
          onClick$={() => {
            onClick$();
          }}
        >
<CloseIcon />
        </div>
      </div>
      <Filters />
    </div>
  );
});
