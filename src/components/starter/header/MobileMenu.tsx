import { component$ } from "@builder.io/qwik";
import Norton from "~/media/norton.png?jsx";
import { CloseIcon, LockIcon, LogoDark, PhoneCallIcon } from "../icons/qwik";

interface ItemProps {
  openMobileMenu?: boolean;
  onClick$: () => void;
}

export default component$<ItemProps>(({ openMobileMenu, onClick$ }) => {
  return (
    <div class="fixed z-40 inset-0 flex flex-col justify-between h-screen-w-full bg-[#232F3E]">
      <div class="w-full">
        {openMobileMenu}
        <div class="flex justify-between  items-center px-4  py-[19px]">
<LogoDark             width={96}
            height={25}/>

          {/* CLOSE ICON */}
          <span class="text-white" onClick$={() => onClick$()}>
<CloseIcon />
          </span>
        </div>

        <hr class="border-none h-[1px] w-full bg-white/10" />

        <div class="bottom px-4 w-full font-bold mb-[16px] text-[18px] flex  flex-col gap-4 justify-between mt-4  text-white">
          <div class="nav-item opacity-70 cursor-pointer">TV & Video </div>
          <div class="nav-item opacity-70 hover:opacity-100 cursor-pointer">
            {" "}
            Cell Phones{" "}
          </div>
          <div class="nav-item opacity-70 hover:opacity-100 cursor-pointer">
            {" "}
            Smart Home{" "}
          </div>
          <div class="nav-item opacity-70 hover:opacity-100 cursor-pointer">
            {" "}
            Ipads & Tablects{" "}
          </div>
          <div class="nav-item opacity-70 hover:opacity-100 cursor-pointer">
            {" "}
            Wearable Tech{" "}
          </div>
          <div class="nav-item opacity-70 hover:opacity-100 cursor-pointer">
            {" "}
            Sale
          </div>
          <div class="nav-item opacity-70 hover:opacity-100 cursor-pointer">
            {" "}
            All products
          </div>
        </div>

        <hr class="border-none h-[1px] w-full bg-white/10" />

        <div class="flex gap-3 items-center px-4 py-[16px]">
          <span>
<PhoneCallIcon />
          </span>
          <div>
            <span class="text-[#E3E6E8]">Need help?</span>
            <span class="font-bold text-white">+386 31 566 432</span>
          </div>
        </div>

        <hr class="border-none h-[1px] w-full bg-white/10" />
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex items-center gap-[10px] px-4">
          <div class="w-[98px] h-[34px]">
            <Norton />
          </div>
          <div class="flex flex-col">
            <div class="inline-flex w-full items-center gap-1">
<LockIcon />
              <span class="text-[#E3E6E8]  text-[14px] font-bold opacity-70">
                Shop with Confidence
              </span>
            </div>
          </div>
        </div>

        <p class="text-[#FFF] text-center mb-2 w-full text-[14px] font-normal leading-[25px] opacity-40">
          © Copyright 2023 - Your company name
        </p>
      </div>
    </div>
  );
});
