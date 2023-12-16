// ShopTrustInfo.tsx
import { component$ } from "@builder.io/qwik";
import TrustPilot from "~/media/trust-pilot.png?jsx";
import Image from "~/media/stars.png?jsx";

export const ShopTrustInfo = component$(() => {
  return (
    <div class="flex mx-2 justify-between lg:mx-auto gap-2 items-center py-[10px] mb-[46px]">
      <div class="w-[82px] lg:w-[92px] align-baseline mb-1 ">
        <TrustPilot class="object-fit align-top" />
      </div>

      <div class="text-[#181818] text-[14px] lg:text-sm font-bold">
        Your Shop
      </div>
      <div class=" w-[80px] lg:w-[100px]  ">
        <Image class="object-fit align-baseline" />
      </div>

      <p class="text-[#181818] text-[14px] lg:text-sm font-bold">
        4.9 out of 5
      </p>
    </div>
  );
});
