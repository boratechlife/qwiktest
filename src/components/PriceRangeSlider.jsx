// PriceRangeSlider.tsx
import { $, component$, useStore } from "@builder.io/qwik";

export const PriceRangeSlider = component$(() => {
  const state = useStore({
    minPrice: 2500,
    maxPrice: 7500,
    priceGap: 1000,
    maxRange: 10000,
    left:0,
    right:0
  });

  const updateRange = $((e, type) => {
    const input = e.target ;
    const value = parseInt(input.value);

    if (type === 'min' && value < state.maxPrice - state.priceGap) {
      state.minPrice = value;
      state.left =`${(value / state.maxPrice  * 100)}%`
    } else if (type === 'max' && value > state.minPrice + state.priceGap && value <= state.maxRange) {
      state.maxPrice = value;
      state.right =`${((value-state.minPrice) / state.maxPrice  * 100)}%`
    }
   

    // Adjust the other input's value if needed
    if (state.maxPrice < state.minPrice + state.priceGap) {
      state.maxPrice = state.minPrice + state.priceGap;
    }
    if (state.minPrice > state.maxPrice - state.priceGap) {
      state.minPrice = state.maxPrice - state.priceGap;
    }
  });

  const calculateLeft = $(() => `${(state.minPrice / state.maxRange) * 100}%`);
  const calculateRight = $(() => `${100 - (state.maxPrice / state.maxRange) * 100}%`);

  return (
    <div class="wrapper">

      <div class="price-input flex justify-between items-center">
        <div class="field">
          <input
            type="number"
            class="input-min"
            value={state.minPrice}
            onInput$={(e) => updateRange(e, 'min')}
          />
        </div>
   
        <div class="field">
          <input
            type="number"
            class="input-max"
            value={state.maxPrice}
            onInput$={(e) => updateRange(e, 'max')}
          />
        </div>
      </div>
      <div class="slider">
        <div class="progress" style={{ left: state.left, right: state.right }}></div>
      </div>
      <div class="range-input">
        <input
          type="range"
          class="range-min"
          min="0"
          max={state.maxRange}
          value={state.minPrice}
          step="1"
          onInput$={(e) => updateRange(e, 'min')}
        />
        <input
          type="range"
          class="range-max"
          min="0"
          max={state.maxRange}
          value={state.maxPrice}
          step="1"
          onInput$={(e) => updateRange(e, 'max')}
        />
      </div>
    </div>
  );
});

export default PriceRangeSlider;
