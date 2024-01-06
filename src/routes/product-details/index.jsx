import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Carousel } from "~/integrations/react/Slider";
import { BestSellerCarousel } from "~/integrations/react/SliderBestSellers.jsx";
import Image from "~/media/stars.png?jsx";
import Bitmap from "~/media/Bitmap.png?jsx";
import TrustPilot from "~/media/trust-pilot.png?jsx";
import ReviewCard from "~/components/ReviewCard";
import MobileProductCard from "~/components/MobileProductCard";
import ProductImageReviews from "~/components/ProductImageReviews";
import { MobileCarouselSlide } from "~/integrations/react/MobileCarousel";
import CustomProductCarousel from "~/components/CustomProductCarousel";
import CustomProductSlider from "~/components/CustomProductSlider";
import MobileSwiperCarousel from "~/components/MobileSwiperCarousel";
import {
  AdditionalProductIcon,
  AmexIcon,
  BasketIcon,
  CashIcon,
  CheckIcon,
  CheckIconWhite,
  DeliveryLorry,
  FilledArrowDown,
  FlameIcon,
  LightningIcon,
  LoadIcon,
  LongArrowIcon,
  LongPromoLabel,
  MasterCard,
  MasterCard2Icon,
  MoneyGuaranteeIcon,
  OrangeIcon,
  PayPalIcon,
  PromoLabelIcon,
  RateIcon,
  StarIcon,
  TorquiseIcon,
  VisaIcon,
} from "~/components/starter/icons/qwik";
import { ReminderCard } from "~/components/Reminder";
import { ShopTrustInfo } from "~/components/ShopTrustInfo";

export const useProducts = routeLoader$(async () => {
  const response = await fetch(
    "https://api.fysia.se/procarenordicapi/slugData?canonicalRoot=fysia.se&slug=45m",
    {
      headers: { Accept: "application/json" },
    }
  );
  return await response.json();
});

export const useProductDetails = routeLoader$(async () => {
  const response = await fetch(
    "https://api.fysia.se/procarenordicapi/slugData?canonicalRoot=fysia.se&slug=theraband-traningsband-45m-rod",
    {
      headers: { Accept: "application/json" },
    }
  );
  return await response.json();
});

export default component$(() => {
  const productDetails = useProductDetails();

  const { title, longDescription, images } = productDetails.value;

  const bestSellerProducts = useProducts();

  return (
    <main class="  w-full mt-[35px] lg:mt-[55px]">
      <section class=" w-full">
        <div class="container mx-auto w-full max-sm:p-0">
          <div class="w-full flex flex-wrap lg:flex-nowrap  gap-[36px]">
            <div class="w-full lg:w-1/2 mx-4 lg:mx-auto">
              <div class=" bg-gray-100 ">
                <CustomProductCarousel images={images} />
              </div>
              <div class="w-full hidden mt-[14px] lg:block">
                <ReviewCard />
              </div>

              <div>
                <h4 class="text-[36px] hidden lg:block mb-[20px] mt-[25px] font-bold text-[#232F3E]">
                  {title}
                </h4>

                <div
                  dangerouslySetInnerHTML={longDescription}
                  class="text-[#5F6061] hidden lg:block text-[18px] space-y-2 pb-10"
                ></div>
              </div>
            </div>

            <div class="w-full lg:w-1/2 ">
              <p class="text-red-500 mx-1 lg:mx-auto flex items-center gap-1 lg:gap-[9px]">
                <span>
                  <FlameIcon />
                </span>

                <span class="text-sm font-weight text-[#CA232C] leading-[30px]">
                  16 people are currently looking at this product!
                </span>
              </p>

              <h4 class="font-bold mx-4 lg:mx-auto lg:leading-[42px] text-[20px] lg:text-[36px] mb-2 text-[#232F3E]">
                Headline with a product name and product’s key benefit
              </h4>

              <div class="max-sm:shadow-large max-sm:rounded-2xl">
                <div class="flex mx-4 lg:mx-auto gap-2 items-center mb-[14px]">
                  <div class="flex items-center text-yellow-500">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>

                  <div class="text-[13px] text-sm font-medium text-[#1D6EC1] ">
                    4.8 based on 25 reviews
                  </div>
                </div>

                {/* BENEFITS */}
                <div class="w-full mx-4 lg:mx-auto">
                  <h4 class="text-[#232F3E] text-[18px] font-bold leading-[25px] mb-[8px]">
                    Craft a compelling sub-headline that clearly conveys the
                    product's key benefit or unique selling proposition.
                  </h4>
                  <ul class="space-y-2 mb-[11px]">
                    <li class="flex  items-center gap-[7px]">
                      <span>
                        <StarIcon />
                      </span>

                      <span class="text-base text-[#5F6061]">
                        {" "}
                        Other Product Benefits
                      </span>
                    </li>
                    <li class="flex  items-center gap-[7px]">
                      <span>
                        <StarIcon />
                      </span>

                      <span class="text-base text-[#5F6061]">
                        {" "}
                        Other Product Benefits
                      </span>
                    </li>
                    <li class="flex  items-center gap-[7px]">
                      <span>
                        <StarIcon />
                      </span>

                      <span class="text-base text-[#5F6061]">
                        {" "}
                        Other Product Benefits
                      </span>
                    </li>
                    <li class="flex  items-center gap-[7px]">
                      <span>
                        <StarIcon />
                      </span>

                      <span class="text-base text-[#5F6061]">
                        {" "}
                        Other Product Benefits
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="w-full lg:hidden relative h-[208px] flex-shrink-0 bg-gradient-to-b from-[#324358] to-[#232F3E] flex  flex-col items-center justify-center ">
                <div class="absolute w-[22px] h-[22px] transform rotate-45 bg-[#fff] -top-2.5"></div>
                <h4 class="text-[#FFF] text-center font-Roboto text-lg font-bold ">
                  Take advantage of the discounted offer and order your product
                  today!
                </h4>

                {/* ORDER BUTTON */}
                <div class="flex w-full  items-center my-[14px] justify-center">
                  <button
                    class="lg:hidden inline-flex w-[90%] justify-center  mx-auto  rounded-[5px] bg-[#090] h-[62px] items-center gap-2"
                    style="background: linear-gradient(0deg, #00AC00 0%, #3EC000 100%);box-shadow: 0px 3px 13px 0px rgba(0, 153, 0, 0.36), 0px 2px 0px 0px #090;"
                  >
                    <BasketIcon />

                    <span class="text-white text-center text-shadow font-Roboto text-[20px] font-bold leading-[30px]">
                      Order now
                    </span>

                    <span>
                      <LongArrowIcon />
                    </span>
                  </button>
                </div>

                <div class="inline-flex justify-between items-center">
                  <LightningIcon />

                  <span class=" text-[#FFF]  text-center font-Roboto text-[14px] font-bold leading-6">
                    <b class="text-[#F9BF3B]">79 units</b> sold in the last 24
                    hours
                  </span>
                </div>
              </div>

              <section class="bg-[#F0F2F5]  w-full rounded-[10px] lg:p-[22px]">
                <div class="mb-[17px] mx-4 lg:mx-auto">
                  <h5 class="text-base font-bold text-[#5F6061] mb-[10px]">
                    By More, Save More
                  </h5>
                  <ul class="inline-flex border divide-x">
                    <li class="w-[104px]  h-[56px] lg:w-[151px] lg:h-[56px] rounded-tl-[5px] rounded-bl-[5px] cursor-pointer border-[2px] bg-[#FFF5E3] border-[#F09831] flex items-center flex-col justify-center relative text-sm font-bold text-center text-[#232F3E]">
                      <div>1x</div>
                      <div>$79,99/piece</div>
                    </li>

                    <li class="w-[104px] h-[56px] lg:w-[151px] lg:h-[56px]  bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center text-[12px] lg:test-sm ">
                      <div class="absolute -top-3 rounded-[3px] bg-[#CA232C] text-white text-center font-Roboto text-[12px] font-bold leading-[14px] w-[97px] h-[20px] flex items-center justify-center">
                        Recommended
                      </div>
                      <div>1x</div>
                      <div>$79,99/piece</div>
                    </li>
                    <li class="w-[104px] h-[56px] lg:w-[151px] lg:h-[56px]  bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center text-[12px] lg:test-sm  ">
                      <div class="absolute -top-3 rounded-[3px] bg-[#1D6EC1] text-white text-center font-Roboto text-[12px] font-bold leading-[14px] w-[68px] h-[20px] flex items-center justify-center ">
                        Best Value
                      </div>
                      <div>1x</div>
                      <div>$79,99/piece</div>
                    </li>
                  </ul>
                </div>

                {/* SIZE */}
                <div class="mb-[15px] mx-4 lg:mx-auto ">
                  <h5 class="w-3/4 inline-flex justify-between  lg:w-2/3">
                    <span class="text-base font-bold text-[#5F6061] mb-[10px]">
                      Choose Size
                    </span>
                    <a href="#" class="underline text-[#99A0A7] text-sm">
                      Size Chart
                    </a>
                  </h5>
                  <ul class="inline-flex border divide-x max-sm:w-3/4">
                    <li class="w-[76px] lg:w-[96px] h-[56px]  rounded-tl-[5px] rounded-bl-[5px] cursor-pointer border-[2px] bg-[#FFF5E3] border-[#F09831] flex items-center flex-col justify-center relative text-sm font-bold text-center text-[#232F3E]">
                      <div>S</div>
                    </li>

                    <li class="w-[76px] lg:w-[96px] h-[56px]  bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center test-sm">
                      <div>M</div>
                    </li>
                    <li class="w-[76px] lg:w-[96px] h-[56px]  bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center test-sm">
                      <div>L</div>
                    </li>

                    <li class="w-[76px] lg:w-[96px] h-[56px] rounded-tr-[5px] rounded-br-[5px] bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center test-sm">
                      <div>XL</div>
                    </li>
                  </ul>
                </div>

                {/* Color */}
                <div class="mb-[15px] lg:hidden mx-4 lg:mx-auto">
                  <h5 class="w-full flex justify-between">
                    <span class="text-base font-bold text-[#5F6061] mb-[10px]">
                      Choose a Color:
                    </span>
                  </h5>
                  <div class="flex gap-0 items-center ">
                    <div class="w-[85px] h-[85px] flex-shrink-0 rounded-t-[5px] rounded-b-[5px] flex flex-col justify-center items-center border-2 border-[#F09831] bg-[#FFF5E3]">
                      <div class="">
                        <TorquiseIcon />
                      </div>

                      <h4 class="text-[#232F3E] text-center font-Roboto text-[14px] font-bold leading-normal">
                        Turquoise
                      </h4>
                    </div>

                    <div class="w-[85px] h-[85px] flex-shrink-0  flex flex-col justify-center items-center  rounded-l-[0] rounded-r-[5px] border border-solid border-[#DDD] bg-white shadow-md">
                      <div class="">
                        <OrangeIcon />
                      </div>

                      <h4 class="text-[#232F3E] text-center font-Roboto text-[14px] font-normal leading-normal">
                        Orange
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Price */}
                <div class="flex flex-col mx-4 lg:mx-auto">
                  <p class="text-[#99A0A7] text-base leading-[30px]">
                    Regular price:
                    <span class="line-through"> $99.90</span>
                  </p>
                  <h4 class="relative flex items-center gap-5">
                    <span class="text-[#CA232C] text-[30px] font-bold tracking-[-0.5px]">
                      {" "}
                      $59.90
                    </span>
                    <span class=" p-1 text-xs bg-transparent text-white relative">
                      <div class="h-[22px] w-[63px]"></div>
                      <span class="z-50 absolute top-1/4 w-full ">
                        {" "}
                        40% OFF
                      </span>
                      <PromoLabelIcon />
                    </span>
                  </h4>
                </div>

                {/* IN STOCK */}
                <div class="flex items-center gap-2 mb-[15px] mx-4 lg:mx-auto">
                  <span>
                    <CheckIcon />
                  </span>

                  <p class="text-[#5F6061] text-[12px] lg:text-sm">
                    <span class="text-[#3DBD00] text-[12px] lg:text-sm font-bold">
                      In stock.
                    </span>
                    Order in the next{" "}
                    <span class="text-black text-[12px] lg:text-sm font-bold ">
                      5h 43m 33s
                    </span>{" "}
                    and the product will be with you on
                    <span class="text-black text-[12px] lg:text-sm font-bold ">
                      Monday 25 September
                    </span>{" "}
                  </p>
                </div>

                {/* ORDER BUTTON */}
                <div class="flex items-center justify-center">
                  <button
                    class="lg:hidden inline-flex w-[90%] justify-center  mx-auto  rounded-[5px] bg-[#090] h-[62px] items-center gap-2"
                    style="background: linear-gradient(0deg, #00AC00 0%, #3EC000 100%);box-shadow: 0px 3px 13px 0px rgba(0, 153, 0, 0.36), 0px 2px 0px 0px #090;"
                  >
                    <BasketIcon />

                    <span class="text-white text-center text-shadow font-Roboto text-[20px] font-bold leading-[30px]">
                      Order now
                    </span>

                    <span>
                      <LongArrowIcon />
                    </span>
                  </button>
                </div>

                {/* MESSAGE SUCCESS */}
                <div
                  class="bg-[#090] hidden mx-4 lg:mx-auto  w-full py-2 h-[62px] px-4 lg:flex rounded-[5px] justify-center items-center lg:gap-4 text-white"
                  style="box-shadow: 0px 2px 0px 0px #090;"
                >
                  <CheckIconWhite />

                  <span
                    class="text-white text-[20px] font-bold"
                    style="text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);"
                  >
                    Product added to your cart
                  </span>
                </div>

                {/* DONT FORGET */}
                <ReminderCard />

                {/* LIST */}
                <div class="flex mx-4 lg:mx-auto flex-col gap-2 mt-3">
                  <div class="flex items-center gap-4">
                    <span>
                      <DeliveryLorry />
                    </span>

                    <span class=" text-[#5F6061] text-sm font-bold">
                      <b class="text-[#3DBD00] text-[14px] font-bold mr-1">
                        Free delivery
                      </b>
                      on all orders over $69
                    </span>
                  </div>
                  <div class="flex items-center gap-4">
                    <span>
                      <CashIcon />
                    </span>
                    <span class="text-[#5F6061] text-sm font-bold">
                      Cash on delivery
                    </span>
                  </div>

                  <div class="flex items-center gap-4">
                    <span>
                      <MoneyGuaranteeIcon />
                    </span>
                    <span class="text-[#5F6061] text-sm font-bold">
                      14-day money-back guarantee
                    </span>
                  </div>

                  <div class="flex items-center gap-4">
                    <span>
                      <RateIcon />
                    </span>
                    <span class="text-[#5F6061] text-sm font-bold">
                      97% rate Your Shop as EXCELLENT
                    </span>
                  </div>
                </div>

                {/* PAYMENT MODES */}

                <div class="flex mx-4 lg:mx-auto gap-1 lg:gap-2 items-center mt-4">
                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <CashIcon />

                    <span class="text-xs">Cash on delivery</span>
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <PayPalIcon />
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <MasterCard />
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <MasterCard2Icon />
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <VisaIcon />
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-[#26A6D1] rounded h-[30px]">
                    <AmexIcon />
                  </div>
                </div>

                {/* MONEY GUARANTEE */}

                <div class="bg-[#E8D7AF] px-4 py-2 lg:h-[100px] border border-[#E8D7AF] flex w-full  mt-4 lg:px-16 justify-center items-center gap-[10px] ">
                  <div class="w-[49px] h-[49px] lg:h-[63px] lg:w-[63px]">
                    <Bitmap />
                  </div>

                  <div>
                    <h4 class="text-[#232F3E] text-sm lg:text-base font-bold">
                      14-day money-back guarantee
                    </h4>

                    <p class="text-[#5B6064] text-[12px] lg:text-[13px]">
                      If you are not satisfied with the product, simply return
                      it and we will refund your money.
                    </p>
                  </div>
                </div>

                {/* TRUST */}
                <ShopTrustInfo />
              </section>

              <MobileProductCard
                hasDescription={true}
                hasReview={true}
                hasBenefits={true}
              />

              <div class="mt-4">
                <MobileProductCard
                  hasDescription={false}
                  hasReview={false}
                  hasBenefits={true}
                />
              </div>

              <div class="mt-4">
                <MobileProductCard
                  hasDescription={true}
                  hasReview={false}
                  hasBenefits={false}
                />
              </div>
              <div class="mt-4">
                <MobileProductCard
                  hasDescription={true}
                  hasReview={false}
                  hasBenefits={true}
                />
              </div>

              <section class="lg:hidden">
                <div class="flex my-3 items-center flex-col justify-center">
                  <p class="text-[#232F3E] text-center font-Roboto text-2xl font-bold leading-[29px]">
                    Why customers simply love Your Product name?
                  </p>
                </div>

                <div class="flex mb-3 justify-center">
                  <div class="flex">
                    <span class="w-[23px] rounded-full h-[23px] bg-[#D9D9D9] border-[3px] border-white"></span>
                    <span class="w-[23px] -ml-2 rounded-full h-[23px] bg-[#D9D9D9] border-[3px] border-white"></span>
                    <span class="w-[23px] -ml-2 rounded-full h-[23px] bg-[#D9D9D9] border-[3px] border-white"></span>
                    <span class="w-[23px] -ml-2 rounded-full h-[23px] bg-[#D9D9D9] border-[3px] border-white"></span>
                  </div>

                  <div class="inline-flex ">
                    <span class="text-[#F9BF3B]">
                      <StarIcon />
                    </span>

                    <span class="text-[#F9BF3B]">
                      <StarIcon />
                    </span>
                    <span class="text-[#F9BF3B]">
                      <StarIcon />
                    </span>
                    <span class="text-[#F9BF3B]">
                      <StarIcon />
                    </span>
                    <span class="text-[#F9BF3B]">
                      <StarIcon />
                    </span>
                  </div>

                  <div class="text-[#5F6061] text-center font-Roboto text-[14px] font-bold leading-6">
                    4.8 - based on 24 opinions
                  </div>
                </div>
              </section>

              <section class="">
                <ProductImageReviews />
              </section>

              <section class="px-4 py-10 relative lg:hidden">
                <div class="absolute h-[30px] w-[30px] bg-white transform rotate-45 -bottom-1 left-1/2 -translate-1/2"></div>
                <div
                  class="w-full h-[56px] flex items-center gap-3 justify-center text-[#232F3E] text-center font-Roboto text-base font-bold leading-[30px]"
                  style="background: linear-gradient(180deg, #F0F2F5 0%, #E3E6E8 100%);"
                >
                  <span>
                    <LoadIcon fill="#99A0A7" />
                  </span>
                  <span>Show next 5 reviews</span>
                </div>
              </section>

              <section class="flex flex-col bg-[#F0F2F5] justify-center items-center text-[#232F3E] text-center py-6 font-Roboto text-[20px] font-bold leading-[25px] gap-2 lg:hidden">
                <h4>Hurry up! If you order in the next </h4>
                <h4 class="text-[#CA232C]">6 hours : 7 min : 29 sec</h4>
                <h4>we will ship your product today</h4>

                <MobileSwiperCarousel />

                <div class="flex flex-col w-full px-2">
                  <div class="flex items-center mb-1  gap-2 justify-start">
                    <FlameIcon />

                    <span class="text-[#CA232C] font-Roboto text-base font-bold leading-[30px]">
                      Stock is running low due to high demand
                    </span>
                  </div>

                  <div class="w-full  rounded-[4px] flex h-[4px] bg-[#DCDEE0]">
                    <div class="h-full  rounded-l-[4px]  w-1/4 bg-[#CA232C]"></div>
                  </div>
                </div>
              </section>

              <section class="bg-[#F0F2F5]  lg:hidden w-full rounded-[10px] lg:p-[22px]">
                <div class="mb-[17px] mx-4 lg:mx-auto">
                  <h5 class="text-base font-bold text-[#5F6061] mb-[10px]">
                    By More, Save More
                  </h5>
                  <ul class="inline-flex border divide-x">
                    <li class="w-[104px]  h-[56px] lg:w-[151px] lg:h-[56px] rounded-tl-[5px] rounded-bl-[5px] cursor-pointer border-[2px] bg-[#FFF5E3] border-[#F09831] flex items-center flex-col justify-center relative text-sm font-bold text-center text-[#232F3E]">
                      <div>1x</div>
                      <div>$79,99/piece</div>
                    </li>

                    <li class="w-[104px] h-[56px] lg:w-[151px] lg:h-[56px]  bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center text-[12px] lg:test-sm ">
                      <div class="absolute -top-3 rounded-[3px] bg-[#CA232C] text-white text-center font-Roboto text-[12px] font-bold leading-[14px] w-[97px] h-[20px] flex items-center justify-center">
                        Recommended
                      </div>
                      <div>1x</div>
                      <div>$79,99/piece</div>
                    </li>
                    <li class="w-[104px] h-[56px] lg:w-[151px] lg:h-[56px]  bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center text-[12px] lg:test-sm  ">
                      <div class="absolute -top-3 rounded-[3px] bg-[#1D6EC1] text-white text-center font-Roboto text-[12px] font-bold leading-[14px] w-[68px] h-[20px] flex items-center justify-center ">
                        Best Value
                      </div>
                      <div>1x</div>
                      <div>$79,99/piece</div>
                    </li>
                  </ul>
                </div>

                {/* SIZE */}
                <div class="mb-[15px] mx-4 lg:mx-auto ">
                  <h5 class="w-3/4 inline-flex justify-between  lg:w-2/3">
                    <span class="text-base font-bold text-[#5F6061] mb-[10px]">
                      Choose Size
                    </span>
                    <a href="#" class="underline text-[#99A0A7] text-sm">
                      Size Chart
                    </a>
                  </h5>
                  <ul class="inline-flex border divide-x max-sm:w-3/4">
                    <li class="w-[76px] lg:w-[96px] h-[56px]  rounded-tl-[5px] rounded-bl-[5px] cursor-pointer border-[2px] bg-[#FFF5E3] border-[#F09831] flex items-center flex-col justify-center relative text-sm font-bold text-center text-[#232F3E]">
                      <div>S</div>
                    </li>

                    <li class="w-[76px] lg:w-[96px] h-[56px]  bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center test-sm">
                      <div>M</div>
                    </li>
                    <li class="w-[76px] lg:w-[96px] h-[56px]  bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center test-sm">
                      <div>L</div>
                    </li>

                    <li class="w-[76px] lg:w-[96px] h-[56px] rounded-tr-[5px] rounded-br-[5px] bg-white shadow-sm border border-[#DDD] cursor-pointer  flex items-center flex-col justify-center relative text-[#5F6061] text-center test-sm">
                      <div>XL</div>
                    </li>
                  </ul>
                </div>

                {/* Color */}
                <div class="mb-[15px] lg:hidden mx-4 lg:mx-auto">
                  <h5 class="w-full flex justify-between">
                    <span class="text-base font-bold text-[#5F6061] mb-[10px]">
                      Choose a Color:
                    </span>
                  </h5>
                  <div class="flex gap-0 items-center ">
                    <div class="w-[85px] h-[85px] flex-shrink-0 rounded-t-[5px] rounded-b-[5px] flex flex-col justify-center items-center border-2 border-[#F09831] bg-[#FFF5E3]">
                      <div class="">
                        <TorquiseIcon />
                      </div>

                      <h4 class="text-[#232F3E] text-center font-Roboto text-[14px] font-bold leading-normal">
                        Turquoise
                      </h4>
                    </div>

                    <div class="w-[85px] h-[85px] flex-shrink-0  flex flex-col justify-center items-center  rounded-l-[0] rounded-r-[5px] border border-solid border-[#DDD] bg-white shadow-md">
                      <div class="">
                        <OrangeIcon />
                      </div>

                      <h4 class="text-[#232F3E] text-center font-Roboto text-[14px] font-normal leading-normal">
                        Orange
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Price */}
                <div class="flex flex-col mx-4 lg:mx-auto">
                  <p class="text-[#99A0A7] text-base leading-[30px]">
                    Regular price:
                    <span class="line-through"> $99.90</span>
                  </p>
                  <h4 class="relative flex items-center gap-5">
                    <span class="text-[#CA232C] text-[30px] font-bold tracking-[-0.5px]">
                      {" "}
                      $59.90
                    </span>
                    <span class=" p-1 text-xs bg-transparent text-white relative">
                      <div class="h-[22px] w-[63px]"></div>
                      <span class="z-50 absolute top-1/4 w-full ">
                        {" "}
                        40% OFF
                      </span>
                      <PromoLabelIcon />
                    </span>
                  </h4>
                </div>

                {/* IN STOCK */}
                <div class="flex items-center gap-2 mb-[15px] mx-4 lg:mx-auto">
                  <span>
                    <CheckIcon />
                  </span>

                  <p class="text-[#5F6061] text-[12px] lg:text-sm">
                    <span class="text-[#3DBD00] text-[12px] lg:text-sm font-bold">
                      In stock.
                    </span>
                    Order in the next{" "}
                    <span class="text-black text-[12px] lg:text-sm font-bold ">
                      5h 43m 33s
                    </span>{" "}
                    and the product will be with you on
                    <span class="text-black text-[12px] lg:text-sm font-bold ">
                      Monday 25 September
                    </span>{" "}
                  </p>
                </div>

                {/* ORDER BUTTON */}
                <div class="flex items-center justify-center">
                  <button
                    class="lg:hidden inline-flex w-[90%] justify-center  mx-auto  rounded-[5px] bg-[#090] h-[62px] items-center gap-2"
                    style="background: linear-gradient(0deg, #00AC00 0%, #3EC000 100%);box-shadow: 0px 3px 13px 0px rgba(0, 153, 0, 0.36), 0px 2px 0px 0px #090;"
                  >
                    <BasketIcon />

                    <span class="text-white text-center text-shadow font-Roboto text-[20px] font-bold leading-[30px]">
                      Order now
                    </span>

                    <span>
                      <LongArrowIcon />
                    </span>
                  </button>
                </div>

                {/* MESSAGE SUCCESS */}
                <div
                  class="bg-[#090] hidden mx-4 lg:mx-auto  w-full py-2 h-[62px] px-4 lg:flex rounded-[5px] justify-center items-center lg:gap-4 text-white"
                  style="box-shadow: 0px 2px 0px 0px #090;"
                >
                  <CheckIconWhite />

                  <span
                    class="text-white text-[20px] font-bold"
                    style="text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);"
                  >
                    Product added to your cart
                  </span>
                </div>

                {/* DONT FORGET */}
                <ReminderCard />

                {/* LIST */}
                <div class="flex mx-4 lg:mx-auto flex-col gap-2 mt-3">
                  <div class="flex items-center gap-4">
                    <span>
                      <DeliveryLorry />
                    </span>

                    <span class=" text-[#5F6061] text-sm font-bold">
                      <b class="text-[#3DBD00] text-[14px] font-bold mr-1">
                        Free delivery
                      </b>
                      on all orders over $69
                    </span>
                  </div>
                  <div class="flex items-center gap-4">
                    <span>
                      <CashIcon />
                    </span>
                    <span class="text-[#5F6061] text-sm font-bold">
                      Cash on delivery
                    </span>
                  </div>

                  <div class="flex items-center gap-4">
                    <span>
                      <MoneyGuaranteeIcon />
                    </span>
                    <span class="text-[#5F6061] text-sm font-bold">
                      14-day money-back guarantee
                    </span>
                  </div>

                  <div class="flex items-center gap-4">
                    <span>
                      <RateIcon />
                    </span>
                    <span class="text-[#5F6061] text-sm font-bold">
                      97% rate Your Shop as EXCELLENT
                    </span>
                  </div>
                </div>

                {/* PAYMENT MODES */}

                <div class="flex mx-4 lg:mx-auto gap-1 lg:gap-2 items-center mt-4">
                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <CashIcon />

                    <span class="text-xs">Cash on delivery</span>
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <PayPalIcon />
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <MasterCard />
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <MasterCard2Icon />
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-white rounded h-[30px]">
                    <VisaIcon />
                  </div>

                  <div class="flex items-center gap-2 px-1.5 lg:px-4 py-2 bg-[#26A6D1] rounded h-[30px]">
                    <AmexIcon />
                  </div>
                </div>

                {/* MONEY GUARANTEE */}

                <div class="bg-[#E8D7AF] px-4 py-2 lg:h-[100px] border border-[#E8D7AF] flex w-full  mt-4 lg:px-16 justify-center items-center gap-[10px] ">
                  <div class="w-[49px] h-[49px] lg:h-[63px] lg:w-[63px]">
                    <Bitmap />
                  </div>

                  <div>
                    <h4 class="text-[#232F3E] text-sm lg:text-base font-bold">
                      14-day money-back guarantee
                    </h4>

                    <p class="text-[#5B6064] text-[12px] lg:text-[13px]">
                      If you are not satisfied with the product, simply return
                      it and we will refund your money.
                    </p>
                  </div>
                </div>

                {/* TRUST */}

                <ShopTrustInfo />
              </section>
            </div>
          </div>
        </div>
      </section>

      <section class=" bg-[#F0F2F5] mb-10 hidden lg:block">
        <div class="container mx-auto py-20">
          <div class="w-full">
            {bestSellerProducts.value.products && (
              <CustomProductSlider
                bestSellerProducts={bestSellerProducts.value.products}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
});

export const head = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
