import { component$, useSignal } from "@builder.io/qwik";
import LogoDark from "~/media/Logo - dark.svg?jsx";
import MobileMenu from "./MobileMenu";
import { CartIcon, LongSearchIcon, MenuIcon, MessagesIcon } from "../icons/qwik";

export default component$(() => {
  const openSearch = useSignal(false);
  const openMobileMenu = useSignal(false);

  return (
    <header class="w-full ">
      {openMobileMenu.value && (
        <div class="lg:hidden">
          <MobileMenu
            openMobileMenu={openMobileMenu.value}
            onClick$={() => {
              openMobileMenu.value = false;
            }}
          />
        </div>
      )}
      <nav class="w-full bg-black  py-4">
        <div class="container mx-auto">
          <div class="w-full flex justify-between items-center">
            <div class="flex gap-2 items-center">
              {/* MENU ICON */}
              <div class="" onClick$={() => (openMobileMenu.value = true)}>
<MenuIcon />
              </div>

              {/* LOGO */}
              <div>
                <LogoDark />
              </div>
            </div>

            <div class="flex gap-2 items-center">
<MessagesIcon />

              <span onClick$={() => (openSearch.value = !openSearch.value)}>
                {/* SEARCH ICON */}
<LongSearchIcon />
              </span>

              <div class="flex items-center">
                <div class="relative">
                  {/* CART ICON */}
                  <CartIcon                     width={29}
                    height={24}/>
                  <div class="absolute top-0 right-0 w-[16px] h-[16px] rounded-full border-2 border-solid border-[#232F3E] bg-[#28A744] text-white text-center font-Roboto text-[11px] font-bold leading-normal flex items-center justify-center ">
                    3
                  </div>
                </div>
                <span class="text-white text-center font-Roboto text-[14px] font-bold leading-normal">
                  $59,99
                </span>
              </div>
            </div>
          </div>

          {openSearch.value && (
            <div class=" w-full relative">
              <div class="h-3.5 w-3.5 bg-white absolute right-20 -top-1.5 transform rotate-45"></div>
              {/* SEARCH */}

              <div class="w-full mt-2 flex bg-white gap-4 items-center rounded-[4px] px-[16px] py-[10.5px]">
                <input
                  type="text"
                  name="search"
                  class="bg-white flex-1 w-full outline-none text-gray-700"
                  id=""
                  placeholder="Search by product (e.g. HDMI adapter)"
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
});
