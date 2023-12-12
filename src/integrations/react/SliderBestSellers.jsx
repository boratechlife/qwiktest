/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";

// Create React component standard way
function SliderBestSeller({ bestSellerProducts }) {
  function formatImageUrl(item) {
    if (item.image.formats[0] === undefined) {
      return null;
    }
    return `https://s.fysia.se/${item.image.imageName}-${item.image.number}-${item.image.sizes[2]}.${item.image.formats[0]}`;
  }
  return (
    <p className="w-full h-full flex bg-[#F0F2F5] ">
      <div className="w-full flex items-center justify-center">
        <h4 className="text-[#232F3E] text-center font-Roboto text-[32px] mb-10 font-bold leading-[118.75%]">
          Shop by best-sellers
        </h4>
      </div>
      <section
        id="best-seller-carousel"
        className="splide"
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
      >
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev  transform -translate-x-[6.5rem] w-[60.968px] h-[90px] rounded  bg-[#1D6EC1] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              />
            </svg>
          </button>
          <button className="splide__arrow splide__arrow--next transform translate-x-10 w-[60.968px] h-[90px] rounded  bg-[#1D6EC1] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              className="transform rotate-180"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
              />
            </svg>
          </button>
        </div>

        <div className="splide__track">
          <ul className="splide__list">
            {bestSellerProducts &&
              bestSellerProducts.map((item, index) => {
                return (
                  <li className="splide__slide" key={"best-seller-" + index}>
                    <div
                      className="w-full lg:w-[250px] group"
                      key={item.identifier}
                    >
                      <div className="w-full h-[163px] flex-shrink-0 group-hover:lg:h-[243px] lg:h-[300px] lg:w-full   relative flex">
                        {formatImageUrl(item) && (
                          <img
                            src={formatImageUrl(item)}
                            alt={item.title}
                            className="h-full lg:hidden rounded-[10px] w-full object-cover"
                            width={163}
                            height={163}
                          />
                        )}

                        {formatImageUrl(item) && (
                          <img
                            src={formatImageUrl(item)}
                            alt={item.title}
                            className="h-full hidden lg:block rounded-[10px] w-full object-cover"
                            width={250}
                            height={300}
                          />
                        )}

                        <div className="absolute group-hover:lg:hidden bottom-1 flex left-1 items-center gap-0.5">
                          <div className="bg-[#1D6EC1] w-[37px] rounded h-[22px] text-white flex items-center justify-center text-[12px]">
                            -40%
                          </div>

                          <div className="flex gap-1 items-center">
                            <div className="w-[12px] h-[12px] flex-shrink-0 bg-black rounded-full"></div>
                            <div className="w-[12px] h-[12px] flex-shrink-0 bg-[#004EE5] rounded-full"></div>
                            <div className="w-[12px] h-[12px] flex-shrink-0 bg-[#3DBD00] rounded-full"></div>

                            <span className="text-[#5F6061] font-Roboto text-[12px] leading-[253.846%]">
                              +3 more
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="group-hover:lg:hidden">
                        <div className="flex gap-[5px] items-center">
                          <span className=" font-Roboto text-[18px] font-bold  text-[#CA232C] lg:text-[20px]  leading-[30px]">
                            ${item.salesPrice}
                          </span>

                          <span className="text-[#999] text-[12px] lg:text-sm line-through">
                            ${item.discountPrice}
                          </span>
                        </div>
                        <div className="text-base lg:text-lg text-[#232F3E] font-bold ">
                          {item.title}
                        </div>
                        <div className="flex gap-1 lg:gap-2 items-center">
                          <div className="flex items-center text-yellow-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              className="h-3 w-3 lg:h-[17px] lg:w-[17px]"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              className="h-3 w-3 lg:h-[17px] lg:w-[17px]"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              className="h-3 w-3 lg:h-[17px] lg:w-[17px]"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              className="h-3 w-3 lg:h-[17px] lg:w-[17px]"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              className="h-3 w-3 lg:h-[17px] lg:w-[17px]"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
                              />
                            </svg>
                          </div>
                          <div className="text-[13px] text-[#5F6061]">
                            3 reviews
                          </div>
                        </div>
                      </div>
                      <div className="hidden group-hover:lg:block">
                        <h4 className="text-[#3E4956] text-[20px] font-bold leading-[30px]">
                          $18.90
                        </h4>

                        <h5 className="text-[18px] font-bold leading-[40px] text-[#232F3E]">
                          Name of your product
                        </h5>
                        <div className="w-full flex">
                          <button
                            className="flex w-full h-[56px] rounded-[8px] justify-center items-center"
                            style={{
                              background:
                                "linear-gradient(0deg, #00AC00 0%, #3EC000 100%)",
                              boxShadow:
                                "0px 3px 13px 0px rgba(0, 153, 0, 0.36), 0px 2px 0px 0px #090",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="21"
                              viewBox="0 0 22 21"
                              fill="none"
                            >
                              <g opacity="0.5" filter="url(#filter0_d_49_5905)">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.696 15.4375C15.7421 15.4375 14.9688 16.235 14.9688 17.2188C14.9688 18.2025 15.7421 19 16.696 19C17.65 19 18.4233 18.2025 18.4233 17.2188C18.4233 16.235 17.65 15.4375 16.696 15.4375ZM6.33274 15.4375C5.37878 15.4375 4.60547 16.235 4.60547 17.2188C4.60547 18.2025 5.37878 19 6.33274 19C7.28671 19 8.06002 18.2025 8.06002 17.2188C8.06002 16.235 7.28671 15.4375 6.33274 15.4375ZM20.4945 1.66005C20.2746 1.35972 19.9395 1.1875 19.5746 1.1875H4.38861L4.303 0.724004C4.22542 0.303926 3.86928 0 3.45462 0H0.863638C0.386658 0 0 0.39874 0 0.890625C0 1.38251 0.386658 1.78125 0.863638 1.78125H2.73993L4.90921 13.526C4.98679 13.9461 5.34293 14.25 5.75759 14.25H17.5606C18.0376 14.25 18.4243 13.8513 18.4243 13.3594C18.4243 12.8675 18.0376 12.4688 17.5606 12.4688H6.47221L6.14324 10.6875H17.6004C18.1148 10.6875 18.5668 10.3359 18.7082 9.82586L20.6823 2.70145C20.7823 2.33963 20.7137 1.96041 20.4945 1.66005Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <filter
                                  id="filter0_d_49_5905"
                                  x="-1"
                                  y="0"
                                  width="22.7266"
                                  height="21"
                                  filterUnits="userSpaceOnUse"
                                  colorInterpolationFilters="sRGB"
                                >
                                  <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                  />
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                  />
                                  <feOffset dy="1" />
                                  <feGaussianBlur stdDeviation="0.5" />
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                                  />
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_49_5905"
                                  />
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_49_5905"
                                    result="shape"
                                  />
                                </filter>
                              </defs>
                            </svg>

                            <span
                              className="text-[18px] font-bold text-white"
                              style={{
                                textShadow: "0px 1px 1px rgba(0, 0, 0, 0.15)",
                              }}
                            >
                              Add to cart
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    </p>
  );
}

// Convert React component to Qwik component
export const BestSellerCarousel = qwikify$(SliderBestSeller);
