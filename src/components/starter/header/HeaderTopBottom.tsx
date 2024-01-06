import { component$ } from "@builder.io/qwik";
import Bitmap from "~/media/Bitmap.png?jsx";
import {
  ArrowLeft,
  ArrowRight,
  BuyMoreIcon,
  CarDeliveryIcon,
} from "../icons/qwik";

export default component$(() => {
  return (
    <header class="w-full ">
      <nav class="h-[50px] bg-[#F0F2F5]  py-2 divide-x">
        <div class="container mx-auto">
          <div class="w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center relative px-4 lg:px-0 divide-x ">
            <div class="w-full lg:w-1/3 flex justify-center lg:justify-center items-center gap-1 lg:gap-2">
              <span>
                <CarDeliveryIcon />
              </span>

              <span class="text-[12px] text-sm text-[#232F3E]">
                <b> Free delivery</b>
                <span class="ml-1">on all orders over $69</span>
              </span>
              <div class="bg-[#E1E3E6] hidden  w-[100px] lg:flex rounded-2xl h-[10px]">
                <div class="bg-yellow-500 h-full w-3/4 rounded-2xl"></div>
              </div>
            </div>
            <div class="w-full lg:w-1/3 hidden lg:flex items-center justify-center gap-2 ">
              <span>
                <BuyMoreIcon />
              </span>

              <span class="text-sm text-[#232F3E]">
                Buy 2 or more and
                <b class="ml-1"> get 25% Off</b>
              </span>
            </div>
            <div class="w-full lg:w-1/3 hidden lg:flex items-center justify-center gap-1 ">
              <div class="h-[21px] w-[21px]">
                <Bitmap />
              </div>
              <span class="text-sm text-[#232F3E]">
                <b>14-day money-back guarantee</b> on all products
              </span>
            </div>

            <div class="absolute lg:hidden right-0">
              <ArrowRight />
            </div>
            <div class="absolute lg:hidden -left-2">
              <ArrowLeft />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
});
