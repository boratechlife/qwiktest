import { component$, useSignal } from "@builder.io/qwik";
import LogoDark from "~/media/Logo - dark.svg?jsx";
import MobileMenu from "./MobileMenu";

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
                <svg
                  width="22"
                  height="19"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.52723 0H20.4286C21.2978 0 22 0.702232 22 1.57143C22 2.44062 21.2978 3.14286 20.3844 3.14286H1.52723C0.703705 3.14286 0 2.35076 0 1.52723C0 0.703705 0.703705 0 1.52723 0ZM20.4286 7.85714H1.52723C0.703705 7.85714 0 8.55937 0 9.42857C0 10.2978 0.703705 11 1.52723 11H20.3844C21.2978 11 22 10.2978 22 9.42857C22 8.55937 21.2978 7.85714 20.4286 7.85714ZM20.4286 15.7143H1.52723C0.703705 15.7143 0 16.4165 0 17.2415C0 18.0665 0.703705 18.8571 1.52723 18.8571H20.3844C21.2978 18.8571 22 18.1549 22 17.2857C22 16.4165 21.2978 15.7143 20.4286 15.7143Z"
                    fill="#7C848E"
                  />
                </svg>
              </div>

              {/* LOGO */}
              <div>
                <LogoDark />
              </div>
            </div>

            <div class="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.16406 0C14.2172 0 18.3281 4.1109 18.3281 9.16406C18.3281 14.2172 14.2172 18.3281 9.16406 18.3281C7.51721 18.3281 5.91376 17.8898 4.50604 17.0574L0.0336914 18.2943L1.27075 13.8221C0.438354 12.4144 0 10.8109 0 9.16406C0 4.1109 4.1109 0 9.16406 0ZM6.35156 7.03125H7.75781C7.75781 6.2558 8.38861 5.625 9.16406 5.625C9.93951 5.625 10.5703 6.2558 10.5703 7.03125C10.5703 7.4306 10.4077 7.79919 10.1125 8.06927L8.46094 9.58099V11.2969H9.86719V10.2003L11.062 9.10675C11.6433 8.57501 11.9766 7.81842 11.9766 7.03125C11.9766 5.48035 10.715 4.21875 9.16406 4.21875C7.61316 4.21875 6.35156 5.48035 6.35156 7.03125ZM9.86719 12.7031V14.1094H8.46094V12.7031H9.86719ZM19.7319 9.31299C22.2908 10.6059 23.9994 13.2639 23.9994 16.2421C23.9994 17.6384 23.6275 18.9963 22.9209 20.1895L23.9655 23.966L20.189 22.9214C18.9958 23.628 17.6379 23.9999 16.2416 23.9999C13.2634 23.9999 10.6054 22.2913 9.3125 19.7324C15.0228 19.653 19.6525 15.0233 19.7319 9.31299Z"
                  fill="#737B86"
                />
              </svg>

              <span onClick$={() => (openSearch.value = !openSearch.value)}>
                {/* SEARCH ICON */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.8417 15.19L23.6705 21.0188C24.1098 21.4582 24.1098 22.1705 23.6705 22.6098L22.6098 23.6705C22.1705 24.1098 21.4582 24.1098 21.0188 23.6705L15.19 17.8417C13.636 18.8884 11.7645 19.5 9.74999 19.5C4.36523 19.5 0 15.1347 0 9.74999C0 4.36523 4.36523 0 9.74999 0C15.1347 0 19.5 4.36523 19.5 9.74999C19.5 11.7645 18.8884 13.636 17.8417 15.19ZM9.74999 3.74999C6.44155 3.74999 3.74999 6.44155 3.74999 9.74999C3.74999 13.0583 6.44155 15.75 9.74999 15.75C13.0584 15.75 15.75 13.0583 15.75 9.74999C15.75 6.44155 13.0584 3.74999 9.74999 3.74999Z"
                    fill="#737B86"
                  />
                </svg>
              </span>

              <div class="flex items-center">
                <div class="relative">
                  {/* CART ICON */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="24"
                    viewBox="0 0 29 24"
                    fill="none"
                  >
                    <path
                      d="M25.869 14.1243L28.1073 4.37433C28.2689 3.67036 27.7284 3 26.9992 3H8.40154L7.96754 0.899531C7.8594 0.375984 7.39406 0 6.85424 0H1.99965C1.37204 0 0.863281 0.503672 0.863281 1.125V1.875C0.863281 2.49633 1.37204 3 1.99965 3H5.3085L8.63464 19.0985C7.8389 19.5516 7.30268 20.401 7.30268 21.375C7.30268 22.8247 8.4898 24 9.95419 24C11.4186 24 12.6057 22.8247 12.6057 21.375C12.6057 20.6403 12.3005 19.9765 11.8091 19.5H21.7356C21.2443 19.9765 20.939 20.6403 20.939 21.375C20.939 22.8247 22.1262 24 23.5906 24C25.055 24 26.2421 22.8247 26.2421 21.375C26.2421 20.3357 25.6318 19.4376 24.7469 19.0123L25.0081 17.8743C25.1697 17.1704 24.6292 16.5 23.9 16.5H11.1908L10.8809 15H24.7609C25.2915 15 25.7514 14.6365 25.869 14.1243Z"
                      fill="white"
                    />
                  </svg>

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
