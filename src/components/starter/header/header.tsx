import { component$ } from "@builder.io/qwik";
import LogoDark from "~/media/Logo - dark.svg?jsx";
import HeaderTopBottom from "./HeaderTopBottom";
import {
  AllProductsLabelIcon,
  CartAngleRight,
  CartIcon,
  MenuIcon,
  PhoneIcon,
  SaleIcon,
  SearchIcon,
} from "../icons/qwik";

export default component$(() => {
  return (
    <header class="w-full ">
      <nav class="w-full bg-black  py-4">
        <div class="container mx-auto">
          <div class="flex gap-4">
            <div class="flex-1">
              <div class="w-full flex text-white items-center gap-[20px]">
                {/* MENU ICON */}
                <div class="">
                  <MenuIcon />
                </div>

                {/* LOGO */}
                <div>
                  <LogoDark />
                </div>

                {/* SEARCH */}
                <div class="w-1/2 flex bg-white gap-4 items-center rounded-[100px] px-[16px] py-[10.5px]">
                  <div>
                    <SearchIcon />
                  </div>
                  <input
                    type="text"
                    name="search"
                    class="bg-white flex-1 w-full outline-none text-gray-700"
                    id=""
                    placeholder="Search by product (e.g. HDMI adapter)"
                  />
                </div>

                {/* CONTACT */}
                <div class="flex gap-3 items-center">
                  <span>
                    <PhoneIcon />
                  </span>
                  <div>
                    <span class="text-[#E3E6E8]">Need help?</span>
                    <span class="font-bold text-white">+386 31 566 432</span>
                  </div>
                </div>
              </div>

              <div class="bottom w-full font-bold text-[15px] flex justify-between mt-4 items-center  text-white">
                <div class="nav-item opacity-70 cursor-pointer">
                  TV & Video{" "}
                </div>
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
                <div class="nav-item opacity-70 hover:opacity-100 cursor-pointer inline-flex items-center">
                  {" "}
                  Sale
                  <span class="relative ml-1">
                    <div class="absolute ml-1 flex items-center inset-0 justify-center text-[#FFF] text-center font-Roboto text-[12px] font-bold leading-[116.667%]">
                      40% OFF
                    </div>
                    <SaleIcon />
                  </span>
                </div>
                <div class="nav-item opacity-70 hover:opacity-100 cursor-pointer relative inline-flex">
                  {" "}
                  All products
                  <span class="relative ml-1">
                    <div class="absolute ml-1 text-white text-center font-Roboto text-[12px] font-bold leading-4/3 flex items-center justify-center inset-0 ">
                      72
                    </div>

                    <AllProductsLabelIcon />
                  </span>
                </div>
              </div>
            </div>

            <div class=" rounded-md w-[181px] h-[86px] bg-[#37424F] flex justify-center ">
              <div class="flex items-center gap-2 ">
                <div class="flex-none relative ">
                  <div class="absolute -top-1 -right-1 text-white text-center font-Roboto  h-[20px] w-[20px] flex justify-center text-[11px]  rounded-full border-2 border-solid border-[#37424F] bg-[#28A744] font-bold p-[3%]">
                    3
                  </div>
                  <CartIcon />
                </div>
                <div class="flex flex-col gap-0.5">
                  <span class="text-white opacity-50 text-sm text-center">
                    Your cart
                  </span>

                  <span class="text-white text-lg font-bold">$59.90</span>
                </div>

                <CartAngleRight />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <HeaderTopBottom />
    </header>
  );
});
