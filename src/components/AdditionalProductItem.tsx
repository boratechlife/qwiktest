// ProductItem.tsx
import { component$, $, useSignal } from "@builder.io/qwik";
import { QuantitySelector } from "./QuantitySelector ";

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
          )}
        </div>

        <div class="inline-flex gap-5 items-center">
          <span class="text-base font-semibold text-[#232F3E]">{name}</span>
          <span class=" p-1 text-xs bg-transparent text-white relative">
            <div class="h-[25px] w-[66px]"></div>
            <span class="z-50 absolute top-1/4 w-full "> 40% OFF</span>

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
          {showDropdown.value && (
            <QuantitySelector options={options} onSelect={onSelect} />
          )}
        </div>
      </div>
    </div>
  );
});
