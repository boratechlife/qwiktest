import { component$ } from "@builder.io/qwik";
import ReviewCard from "./ReviewCard";
import Bitmap from "~/media/sample_image.png?jsx";

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
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.5725 3.40179L8.14482 13.5874C7.5815 14.1375 6.66839 14.1375 6.1056 13.5874L0.422493 8.03956C-0.140831 7.48994 -0.140831 6.59748 0.422493 6.04707L1.44121 5.05126C2.00471 4.50094 2.91854 4.50094 3.48132 5.05126L7.12254 8.60835L15.5145 0.412609C16.078 -0.137536 16.9909 -0.137536 17.5537 0.412609L18.5733 1.40842C19.1424 1.95795 19.1424 2.8505 18.5725 3.40179Z"
                  fill="#3DBD00"
                />
              </svg>
            </span>

            <span class="text-base text-[#5F6061]">
              {" "}
              Other Product Benefits
            </span>
          </li>
          <li class="flex  items-center gap-[7px]">
            <span>
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.5725 3.40179L8.14482 13.5874C7.5815 14.1375 6.66839 14.1375 6.1056 13.5874L0.422493 8.03956C-0.140831 7.48994 -0.140831 6.59748 0.422493 6.04707L1.44121 5.05126C2.00471 4.50094 2.91854 4.50094 3.48132 5.05126L7.12254 8.60835L15.5145 0.412609C16.078 -0.137536 16.9909 -0.137536 17.5537 0.412609L18.5733 1.40842C19.1424 1.95795 19.1424 2.8505 18.5725 3.40179Z"
                  fill="#3DBD00"
                />
              </svg>
            </span>

            <span class="text-base text-[#5F6061]">
              {" "}
              Other Product Benefits
            </span>
          </li>
          <li class="flex  items-center gap-[7px]">
            <span>
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.5725 3.40179L8.14482 13.5874C7.5815 14.1375 6.66839 14.1375 6.1056 13.5874L0.422493 8.03956C-0.140831 7.48994 -0.140831 6.59748 0.422493 6.04707L1.44121 5.05126C2.00471 4.50094 2.91854 4.50094 3.48132 5.05126L7.12254 8.60835L15.5145 0.412609C16.078 -0.137536 16.9909 -0.137536 17.5537 0.412609L18.5733 1.40842C19.1424 1.95795 19.1424 2.8505 18.5725 3.40179Z"
                  fill="#3DBD00"
                />
              </svg>
            </span>

            <span class="text-base text-[#5F6061]">
              {" "}
              Other Product Benefits
            </span>
          </li>
          <li class="flex  items-center gap-[7px]">
            <span>
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.5725 3.40179L8.14482 13.5874C7.5815 14.1375 6.66839 14.1375 6.1056 13.5874L0.422493 8.03956C-0.140831 7.48994 -0.140831 6.59748 0.422493 6.04707L1.44121 5.05126C2.00471 4.50094 2.91854 4.50094 3.48132 5.05126L7.12254 8.60835L15.5145 0.412609C16.078 -0.137536 16.9909 -0.137536 17.5537 0.412609L18.5733 1.40842C19.1424 1.95795 19.1424 2.8505 18.5725 3.40179Z"
                  fill="#3DBD00"
                />
              </svg>
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
