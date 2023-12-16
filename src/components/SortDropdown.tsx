import { component$, useSignal } from "@builder.io/qwik";

export const SortDropDown = component$(() => {
  const isOpen = useSignal(false);
  const selectedOption = useSignal("Newest First");
  const options = ["Newest First", "Oldest First", "Most Popular"];

  return (
    <div class="select-container relative cursor-pointer">
      <div
        class="select flex px-[12px] justify-between w-[134px] h-[42px] items-center rounded-[5px] relative border border-[#ddd]"
        style="background: linear-gradient(180deg, #FFF 0%, #FAFAFA 100%);
box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.10);"
        onClick$={() => (isOpen.value = !isOpen.value)}
      >
        <span class="text-[#232F3E] font-bold text-base">
          {selectedOption.value}
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 6L10 0H0L5 6Z"
              fill="black"
            />
          </svg>
        </span>
      </div>
      {isOpen.value && (
        <ul class="options-list absolute left-0 w-full cursor-pointer  z-50 top-full bg-white">
          {options.map((option) => (
            <li
              key={option}
              class="px-3 py-2 text-sm hover:font-bold"
              onClick$={() => {
                selectedOption.value = option;
                isOpen.value = false;
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

// Additional CSS here for `.select-container` and `.options-list` for styling the dropdown and options
