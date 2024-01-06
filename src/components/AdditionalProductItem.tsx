// ProductItem.tsx
import { component$, $, useSignal } from "@builder.io/qwik";
import { QuantitySelector } from "./QuantitySelector ";
import {
  CheckGray,
  CheckIconWhite,
  FilledArrowDown,
  LongPromoLabel,
} from "./starter/icons/qwik";

interface ItemProps {
  name: string;
  // onClick$: () => void;
}

export const ProductItem = component$<ItemProps>(({ name }) => {
  const options = ["1x", "2x", "3x"]; // Quantity options
  const showDropdown = useSignal(false);
  const selectedAddProduct = useSignal("");
  const onSelect = $((value: string) => {
    console.log("Selected Quantity:", value);
    showDropdown.value = false;
    // Handle the selection logic here
  });

  return (
    <div
      class={`flex w-full h-[65px]  ${
        selectedAddProduct.value == name ? "bg-[#F09831]" : "bg-white"
      } rounded-[2px] bg-opacity-[.2] justify-between px-4 -y-2 items-center`}
    >
      <div class="flex items-center gap-4">
        <div class="relative ">
          {selectedAddProduct.value == name && (
            <div
              class=" custom-input flex items-center justify-center rounded-[4px] bg-[#F09831] h-[32px] w-[32px] z-20"
              onClick$={() => {
                if (selectedAddProduct.value == name) {
                  selectedAddProduct.value = "";
                } else {
                  selectedAddProduct.value = name;
                }
              }}
            >
              <CheckIconWhite />
            </div>
          )}

          {selectedAddProduct.value != name && (
            <label
              class="custom-input border border-[#CCC] flex items-center justify-center rounded-[4px] bg-white h-[32px] w-[32px]"
              for="additional"
              style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
              tabIndex={1}
              onClick$={() => {
                if (selectedAddProduct.value == name) {
                  selectedAddProduct.value = "";
                } else {
                  selectedAddProduct.value = name;
                }
              }}
            >
              <CheckGray />
            </label>
          )}
        </div>

        <div class="inline-flex gap-5 items-center">
          <span class="text-base font-semibold text-[#232F3E]">{name}</span>
          <span class=" p-1 text-xs bg-transparent text-white relative">
            <div class="h-[25px] w-[66px]"></div>
            <span class="z-50 absolute top-1/4 w-full "> 40% OFF</span>

            <LongPromoLabel />
          </span>
        </div>
      </div>
      <div>
        <div
          class="w-[66px] relative h-[42px] bg-white shadow border border-[#DDD] rounded-[5px] flex items-center gap-4 px-2.5 py-2"
          style="background: linear-gradient(180deg, #FFF 0%, #FAFAFA 100%);
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.10);"
        >
          <span
            onClick$={() => (showDropdown.value = !showDropdown.value)}
            class="absolute w-full flex-1"
          >
            1x
          </span>
          <span
            onClick$={() => (showDropdown.value = !showDropdown.value)}
            class="flex-1 flex justify-end"
          >
            <FilledArrowDown />
          </span>
          {showDropdown.value && (
            <QuantitySelector options={options} onSelect={onSelect} />
          )}
        </div>
      </div>
    </div>
  );
});
