import { component$ } from "@builder.io/qwik";
import HeaderTopBottom from "../header/HeaderTopBottom";

import Norton from "~/media/norton.png?jsx";
import { AmexIcon, BacktoTopIcon, CashIcon, EmailIcon, FacebookIcon, LinkedInIcon, LockIcon, LogoDark, MasterCard, MasterCard2Icon, PayPalIcon, PhoneCallIcon, TwitterIcon, VisaIcon } from "../icons/qwik";

export default component$(() => {
  // const serverTime = useServerTimeLoader();

  return (
    <footer>
      <HeaderTopBottom />

      <div class="bg-[#232F3E] lg:h-[422px] py-10 lg:py-[60px]">
        <div class="w-full container flex items-center justify-center flex-col mx-auto lg:grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-[65px]">
          <div class="hidden lg:block">
            <h4 class="text-white font-sans text-[18px] opacity-70 font-bold leading-[30px]">
              Categories
            </h4>
            <ul>
              <li class="text-white text-base font-bold leading-[32px]">
                <a href="">Cell Phones</a>
              </li>
              <li class="text-white text-base font-bold leading-[32px]">
                <a href="">Smart Home</a>
              </li>
              <li class="text-white text-base font-bold leading-[32px]">
                <a href="">Ipads & Tablects</a>
              </li>

              <li class="text-white text-base font-bold leading-[32px]">
                <a href="">Wearable Tech</a>
              </li>

              <li class="text-white text-base font-bold leading-[32px]">
                <a href="">Sale</a>
              </li>

              <li class="text-white text-base font-bold leading-[32px]">
                <a href="">All products</a>
              </li>
            </ul>
          </div>

          <div class="lg:hidden">
<LogoDark />
          </div>
          <div class="col-span-2">
            <h4 class="text-white hidden lg:block text-[18px] mb-[12px] font-bold leading-[30px] opacity-70">
              Need help buying?
            </h4>
            <p class="text-white hidden lg:block text-[14px] mb-[19px] font-normal">
              We can be reached every day between 7:00 and 15:00
            </p>
            <div
              class="flex rounded-[5px] bg-[#37424F] text-[#E3E6E8] font-Roboto text-base  w-full lg:w-[338px] mb-[12px] h-[56px] flex-shrink-0 items-center px-[20px] gap-[10px]"
              style="box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.07);"
            >
<PhoneCallIcon />

              <span>
                Call us on
                <b class="ml-1"> +386 31 566 432</b>
              </span>
            </div>

            <div
              class="hidden lg:flex rounded-[5px] bg-[#37424F] text-[#E3E6E8] font-Roboto text-base  w-full lg:w-[338px] h-[56px] flex-shrink-0 items-center px-[20px] gap-[10px]"
              style="box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.07);"
            >
<EmailIcon />

              <span>
                E-mail us:
                <b> info@yourcompany.com</b>
              </span>
            </div>
          </div>

          <div class="lg:hidden flex items-center">
<BacktoTopIcon />
            <span class="text-[#E3E6E8] font-Roboto text-[16px] font-normal leading-normal">
              Back to top
            </span>
          </div>

          <div class="hidden lg:block">
            <h4 class="text-white font-Roboto text-[18px] font-bold leading-[30px] opacity-70">
              Terms and conditions
            </h4>
            <ul>
              <li class="text-white font-Roboto text-[14px] font-normal leading-[30px]">
                <a href="">General Terms and Conditions</a>
              </li>
              <li class="text-white font-Roboto text-[14px] font-normal leading-[30px]">
                <a href="">Security Policy</a>
              </li>

              <li class="text-white font-Roboto text-[14px] font-normal leading-[30px]">
                <a href="">Cookie Policy e</a>
              </li>

              <li class="text-white font-Roboto text-[14px] font-normal leading-[30px]">
                <a href="">Refund Policy</a>
              </li>

              <li class="text-white font-Roboto text-[14px] font-normal leading-[30px]">
                <a href="">Advertisements and complaints</a>
              </li>
              <li class="text-white font-Roboto text-[14px] font-normal leading-[30px]">
                <a href=""> Product Exchange</a>
              </li>

              <li class="text-white font-Roboto text-[14px] font-normal leading-[30px]">
                <a href="">Instructions for us</a>
              </li>
            </ul>
          </div>

          <div class="hidden lg:block">
<LogoDark />
            <p class="text-white font-Roboto my-[16px] text-[14px] font-normal leading-[21px]">
              Stephen Pl <br />
              Rockaway, <br />
              New Jersey(NJ), 07866 <br />
            </p>

            <div class="flex gap-4">
<FacebookIcon />

<TwitterIcon />

<LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#161E28] lg:h-[126px] pt-[24px] ">
        <div class="container mx-auto flex flex-wrap lg:flex-nowrap justify-between items-center">
          <div class="flex items-center gap-[10px]">
            <div class="w-[115px] h-[40px] lg:w-[152px] lg:h-[53px">
              <Norton />
            </div>
            <div class="flex flex-col">
              <div class="inline-flex items-center gap-1">
<LockIcon />
                <span class="text-[#E3E6E8]  text-[14px] font-bold opacity-70">
                  Shop with Confidence
                </span>
              </div>
              <p class="text-white font-Roboto text-[12px] font-normal opacity-50  hidden lg:block">
                100% Secured Shopping by Norton
              </p>
            </div>
          </div>

          <p class="opacity-40 mb-2 flex lg:hidden mx-auto w-full items-center justify-center text-white text-center font-Roboto text-[14px] font-normal leading-[25px">
            © Copyright 2023 - Terms and conditions
          </p>
          <div class="hidden lg:flex items-center gap-1">
<BacktoTopIcon />
            <span class="text-[#E3E6E8] font-Roboto text-base font-bold">
              Back to top
            </span>
          </div>
          <div class="hidden lg:flex flex-wrap lg:flex-nowrap gap-2 items-center">
            <div class="flex items-center gap-2 px-4 py-2 bg-white rounded h-[30px]">
<CashIcon />

              <span class="text-xs">Cash on delivery</span>
            </div>

            <div class="flex items-center gap-2 px-4 py-2 bg-white rounded h-[30px]">
    <PayPalIcon />
            </div>

            <div class="flex items-center gap-2 px-4 py-2 bg-white rounded h-[30px]">
<MasterCard />
            </div>

            <div class="flex items-center gap-2 px-4 py-2 bg-white rounded h-[30px]">
<MasterCard2Icon />
            </div>

            <div class="flex items-center gap-2 px-4 py-2 bg-white rounded h-[30px]">
<VisaIcon />
            </div>

            <div class="flex items-center gap-2 px-4 py-2 bg-[#26A6D1] rounded h-[30px]">
<AmexIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
