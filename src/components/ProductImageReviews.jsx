import { component$ } from "@builder.io/qwik";
import ReviewCard from "./ReviewCard";
import Bitmap from "~/media/sample_image.png?jsx";

export default component$(() => {
  return (
    <div class="w-full px-4 lg:hidden">
      <div class="w-full bg-gray-500 h-[249.273px] flex-shrink-0 flex">
        <Bitmap class="w-full" />
      </div>
      <div class="w-full -mt-10 relative space-y-[10px] mb-4">
        <div class="absolute h-4 -mt-2 left-1/4 w-4 bg-[#FCF8E6] transform rotate-45"></div>

        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
});
