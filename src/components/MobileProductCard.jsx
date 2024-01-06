import { component$ } from "@builder.io/qwik";
import ReviewCard from "./ReviewCard";
import Bitmap from "~/media/sample_image.png?jsx";
import { CheckIcon } from "./starter/icons/qwik";

export default component$(({ hasDescription, hasReview, hasBenefits }) => {
  return (
    <div class="w-full px-4 lg:hidden">
      <h4 class="font-bold lg:mx-auto lg:leading-[42px] text-[20px] lg:text-[36px] mb-2 text-[#232F3E]">
        Create a clear and concise headline that summarizes one of the product's
        benefit
      </h4>

      {hasDescription && (
        <p class="text-[#5F6061] font-Roboto text-[18px] font-normal leading-[27px]">
          Follow it with a compelling subtext that provides additional details
          and highlights the product's unique features."
        </p>
      )}

      <div class="w-full bg-gray-500 h-[249.273px] flex-shrink-0 flex">
        <Bitmap class="w-full" />
      </div>

      {hasBenefits && (
        <ul class="space-y-2 mb-[11px]">
          <li class="flex  items-center gap-[7px]">
            <span>
<CheckIcon />
            </span>

            <span class="text-base text-[#5F6061]">
              {" "}
              Other Product Benefits
            </span>
          </li>
          <li class="flex  items-center gap-[7px]">
            <span>
<CheckIcon />
            </span>

            <span class="text-base text-[#5F6061]">
              {" "}
              Other Product Benefits
            </span>
          </li>
          <li class="flex  items-center gap-[7px]">
            <span>
<CheckIcon />
            </span>

            <span class="text-base text-[#5F6061]">
              {" "}
              Other Product Benefits
            </span>
          </li>
          <li class="flex  items-center gap-[7px]">
            <span>
<CheckIcon />
            </span>

            <span class="text-base text-[#5F6061]">
              {" "}
              Other Product Benefits
            </span>
          </li>
        </ul>
      )}

      {hasReview && (
        <div class="mt-[22px]">
          <ReviewCard />
        </div>
      )}
    </div>
  );
});
