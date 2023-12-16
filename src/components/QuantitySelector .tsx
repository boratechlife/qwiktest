// QuantitySelector.tsx
import { component$, $ } from "@builder.io/qwik";

export interface QuantitySelectorProps {
  options: string[];
  onSelect: (value: string) => void;
}

export const QuantitySelector = component$<QuantitySelectorProps>(
  ({ onSelect, options }) => {
    const handleSelect = $((value: string) => {
      onSelect(value);
    });

    return (
      <div class="absolute w-full top-full bg-white z-50 shadow-xl left-0 inset-0">
        <ul class="flex flex-col bg-white border-2">
          {options.map((option) => (
            <li
              key={option}
              class="w-full flex px-2 py-1 hover:bg-gray-100 cursor-pointer"
              onClick$={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
