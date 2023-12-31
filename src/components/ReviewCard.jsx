import { component$ } from "@builder.io/qwik";
import { SmallStarIcon, VerifiedIcon } from "./starter/icons/qwik";

export default component$(() => {
  return (
    <div class="w-full   py-[27px] px-[24px] bg-[#FCF8E6] rounded-[10px]">
      <div class="flex w-full items-center gap-4">
        <div class="flex items-center w-[42px] h-[42px] flex-shrink-0 rounded-full bg-gray-100"></div>

        <div class="flex flex-col ">
          <div class="flex items-center text-[#232F3E] font-Roboto text-[16px] font-bold ">
            <span class="text-[#232F3E] font-Roboto text-[16px] font-bold ">
              {" "}
              Sanela E.
            </span>

            <div class="flex items-center">
              <span class="text-[#F9BF3B]">
<SmallStarIcon />
              </span>
              <span class="text-[#F9BF3B]">
<SmallStarIcon />
              </span>
              <span class="text-[#F9BF3B]">
<SmallStarIcon />
              </span>
              <span class="text-[#F9BF3B]">
<SmallStarIcon />
              </span>
              <span class="text-[#F9BF3B]">
<SmallStarIcon />
              </span>
            </div>
          </div>

          <div class="flex items-center">
            <span>
<VerifiedIcon />
            </span>

            <span class="text-[#3DBD00] font-Roboto text-[12px] font-medium leading-[18px]">
              Verified buyer
            </span>
          </div>
        </div>
      </div>

      <p class="text-[#5F6061] mt-[10px] font-Roboto text-[15px] font-normal leading-[22px]">
        Showcase a powerful testimonial from a satisfied customer that
        highlights the product's key benefit and encourages others to make a
        purchase.
      </p>
    </div>
  );
});
