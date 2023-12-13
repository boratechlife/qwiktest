import { component$ } from "@builder.io/qwik";
import Filters from "~/components/Filters";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="17"
                viewBox="0 0 21 17"
                fill="none"
              >
                <path
                  d="M5.10356 1.26995C5.6657 0.473595 6.5797 0 7.55447 0H18C19.6569 0 21 1.34315 21 3V14C21 15.6569 19.6569 17 18 17H7.55447C6.5797 17 5.6657 16.5264 5.10356 15.7301L1.22121 10.2301C0.489083 9.19287 0.489083 7.80713 1.22121 6.76995L5.10356 1.26995Z"
                  fill="#232F3E"
                />
              </svg>
            </div>
          </div>

          <div
            class="w-[103px] h-[42px] flex items-center justify-center gap-2 flex-shrink-0 rounded-[5px]"
            style="background: linear-gradient(180deg, #37424F 0%, #232F3E 100%)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
            >
              <g opacity="0.5" clip-path="url(#clip0_57_1051)">
                <path
                  d="M12.0714 14.5001C12.0714 15.3282 11.4475 16.0001 10.6786 16.0001H2.32143C1.55246 16.0001 0.928572 15.3282 0.928572 14.5001V4.00012H12.0714V14.5001ZM4.17857 6.50012C4.17857 6.222 3.97254 6.00012 3.71429 6.00012C3.45603 6.00012 3.25 6.22278 3.25 6.50012V13.5001C3.25 13.7775 3.45675 14.0001 3.71429 14.0001C3.97182 14.0001 4.17857 13.7775 4.17857 13.5001V6.50012ZM6.96429 6.50012C6.96429 6.222 6.75826 6.00012 6.5 6.00012C6.24174 6.00012 6.03571 6.22278 6.03571 6.50012V13.5001C6.03571 13.7775 6.24247 14.0001 6.5 14.0001C6.75753 14.0001 6.96429 13.7775 6.96429 13.5001V6.50012ZM9.75 6.50012C9.75 6.222 9.54397 6.00012 9.28571 6.00012C9.02746 6.00012 8.82143 6.22278 8.82143 6.50012V13.5001C8.82143 13.7782 9.02746 14.0001 9.28571 14.0001C9.54397 14.0001 9.75 13.7775 9.75 13.5001V6.50012ZM0.464286 1.00013H3.71429L4.05031 0.276375C4.12892 0.107 4.28971 0 4.46556 0H8.53415C8.71003 0 8.87076 0.107 8.9494 0.276375L9.28571 1.00013H12.5357C12.7921 1.00013 13 1.22394 13 1.50013V2.50012C13 2.77625 12.7921 3.00012 12.5357 3.00012H0.464286C0.207827 3.00012 0 2.77625 0 2.50012V1.50013C0 1.22388 0.208929 1.00013 0.464286 1.00013Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_57_1051">
                  <rect
                    width="13"
                    height="16"
                    fill="white"
                    transform="matrix(-1 0 0 1 13 0)"
                  />
                </clipPath>
              </defs>
            </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-dasharray="12"
              stroke-dashoffset="12"
              stroke-linecap="round"
              stroke-width="2"
              d="M12 12L19 19M12 12L5 5M12 12L5 19M12 12L19 5"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.4s"
                values="12;0"
              />
            </path>
          </svg>
        </div>
      </div>
      <Filters />
    </div>
  );
});
