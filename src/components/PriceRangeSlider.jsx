// PriceRangeSlider.tsx
import { $, component$, useStore } from "@builder.io/qwik";

export const PriceRangeSlider = component$(() => {
  const state = useStore({
    minPrice: 0,
    maxPrice: 7500,
    currenMaxPrice: 7500,
    left: 0,
    right: 0,
  });

  const updateRange = $((e, type) => {
    const clientW = document.querySelector(".range-input");

    console.log("W", clientW.clientWidth);
    const input = e.target;
    const value = parseInt(input.value);

    if (type === "min" && value <= state.maxPrice) {
      state.minPrice = value;
      state.left = `${parseInt((value / state.maxPrice) * 100)}%`;
    } else if (type === "max" && value <= state.maxPrice) {
      state.currenMaxPrice = value;
      state.right = `${100 - parseInt((value / state.maxPrice) * 100)}%`;
      console.log(value, state.right);
    }

    // Adjust the other input's value if needed
    if (state.maxPrice < state.minPrice) {
      state.maxPrice = state.minPrice;
    }
    if (state.minPrice > state.maxPrice) {
      state.minPrice = state.maxPrice;
    }
  });

  return (
    <div class="wrapper bg-transparent">
      <div class="slider">
        <div
          class="progress"
          style={{ left: state.left, right: state.right }}
        ></div>
      </div>
      <div class="range-input">
        <input
          type="range"
          class="range-min"
          min="0"
          max={state.maxPrice}
          value={state.minPrice}
          step="1"
          onInput$={(e) => updateRange(e, "min")}
        />
        <input
          type="range"
          class="range-max"
          min="0"
          max={state.maxPrice}
          value={state.maxPrice}
          step="1"
          onInput$={(e) => updateRange(e, "max")}
        />
      </div>

      <div class="flex justify-between items-center w-10/12 mx-auto mt-4">
        <div
          class="w-[70px] h-[42px] rounded-[4px] border border-[#ccc] flex items-center justify-center "
          style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
        >
          ${state.minPrice}
        </div>
        <div
          class="w-[70px] h-[42px] rounded-[4px] border border-[#ccc] flex items-center justify-center "
          style="box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;"
        >
          ${state.currenMaxPrice}
        </div>
      </div>
    </div>
  );
});

export default PriceRangeSlider;
