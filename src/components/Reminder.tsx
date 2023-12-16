// ReminderCard.tsx
import { component$ } from "@builder.io/qwik";

import { ProductItem } from "./AdditionalProductItem";

export const ReminderCard = component$(() => {
  return (
    <div class="w-full hidden lg:block rounded-[7px] mt-5  border-2 border-[#F09831] pb-1.5 bg-white divide-y relative">
      <div class="absolute -top-3.5 left-16 rounded-[3px] bg-[#F09831]  h-[25px] flex-shrink-0 uppercase inline-flex px-2.5 text-white font-bold items-center justify-center">
        DON’T FORGET
      </div>
      <ProductItem name="Additional Product 1" />
      <ProductItem name="Additional Product 2" />
      <ProductItem name="Additional Product 3" />
    </div>
  );
});
