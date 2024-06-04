import * as React from "react";

export default function MyComponent() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex overflow-hidden relative flex-col pb-11 w-full min-h-[114px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/af0e214bcb16aec8f7c806d1e0ee5b3cf3bd91ca73f53838586dbf7ca4352663?apiKey=b9c95149685c491482c58f090fd0861c&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 justify-between pt-3.5 pr-20 w-full bg-neutral-900 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="text-4xl tracking-wide leading-[50px] text-zinc-900">
            Apple (Philippines)
          </div>
          <div className="flex gap-3.5 items-center self-start max-md:flex-wrap max-md:max-w-full">
            <div className="justify-center items-start self-stretch px-12 py-4 text-lg leading-9 rounded-xl border-solid bg-neutral-900 border-[3px] border-white border-opacity-10 text-white text-opacity-90 max-md:px-5">
              United States
            </div>
            <div className="justify-center items-start self-stretch py-3.5 my-auto text-sm tracking-wide leading-4 text-center text-black whitespace-nowrap rounded-lg bg-neutral-100">
              Continue
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aae4de62c6195c46f9f1f9397ac87a71aa0bc6a5cf4a6bc6e0f286f18bf681bc?apiKey=b9c95149685c491482c58f090fd0861c&"
              className="shrink-0 self-stretch my-auto aspect-square w-[18px]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-4 w-full tracking-wide text-center bg-zinc-900 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-w-full w-[580px] max-md:flex-wrap">
          <div className="flex-auto text-sm leading-5 text-neutral-100">
            for fast, free delivery. Call us at 1800-1651-0525 or visit
          </div>
          <div className="flex gap-5 justify-between self-start whitespace-nowrap">
            <div className="text-sm leading-5 text-blue-500">support</div>
            <div className="text-sm leading-5 text-neutral-100">.</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pb-3 w-full bg-white max-md:max-w-full">
        <div className="overflow-hidden px-7 pt-20 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
              <div className="mt-96 text-6xl tracking-wide text-center leading-[60px] text-neutral-100 max-md:mt-10 max-md:text-4xl max-md:leading-10">
                Apple Worldwide Developers Conference 2024
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
              <div className="justify-center items-start py-4 w-full text-base tracking-wide leading-5 text-center text-white bg-sky-600 mt-[513px] rounded-[980px] max-md:mt-10">
                Learn more
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4ffbbe30be65a139d0ea8f7f57dcb2779d8337c1e3ab486d5f09c8802c1c0935?apiKey=b9c95149685c491482c58f090fd0861c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ffbbe30be65a139d0ea8f7f57dcb2779d8337c1e3ab486d5f09c8802c1c0935?apiKey=b9c95149685c491482c58f090fd0861c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ffbbe30be65a139d0ea8f7f57dcb2779d8337c1e3ab486d5f09c8802c1c0935?apiKey=b9c95149685c491482c58f090fd0861c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ffbbe30be65a139d0ea8f7f57dcb2779d8337c1e3ab486d5f09c8802c1c0935?apiKey=b9c95149685c491482c58f090fd0861c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ffbbe30be65a139d0ea8f7f57dcb2779d8337c1e3ab486d5f09c8802c1c0935?apiKey=b9c95149685c491482c58f090fd0861c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ffbbe30be65a139d0ea8f7f57dcb2779d8337c1e3ab486d5f09c8802c1c0935?apiKey=b9c95149685c491482c58f090fd0861c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ffbbe30be65a139d0ea8f7f57dcb2779d8337c1e3ab486d5f09c8802c1c0935?apiKey=b9c95149685c491482c58f090fd0861c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ffbbe30be65a139d0ea8f7f57dcb2779d8337c1e3ab486d5f09c8802c1c0935?apiKey=b9c95149685c491482c58f090fd0861c&"
          className="mt-3 w-full aspect-[1.72] max-md:max-w-full"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e264ad6bc269b3f832d203a1655b619e17876c6ad59a28a9f8373a2081ac1697?apiKey=b9c95149685c491482c58f090fd0861c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e264ad6bc269b3f832d203a1655b619e17876c6ad59a28a9f8373a2081ac1697?apiKey=b9c95149685c491482c58f090fd0861c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e264ad6bc269b3f832d203a1655b619e17876c6ad59a28a9f8373a2081ac1697?apiKey=b9c95149685c491482c58f090fd0861c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e264ad6bc269b3f832d203a1655b619e17876c6ad59a28a9f8373a2081ac1697?apiKey=b9c95149685c491482c58f090fd0861c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e264ad6bc269b3f832d203a1655b619e17876c6ad59a28a9f8373a2081ac1697?apiKey=b9c95149685c491482c58f090fd0861c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e264ad6bc269b3f832d203a1655b619e17876c6ad59a28a9f8373a2081ac1697?apiKey=b9c95149685c491482c58f090fd0861c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e264ad6bc269b3f832d203a1655b619e17876c6ad59a28a9f8373a2081ac1697?apiKey=b9c95149685c491482c58f090fd0861c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e264ad6bc269b3f832d203a1655b619e17876c6ad59a28a9f8373a2081ac1697?apiKey=b9c95149685c491482c58f090fd0861c&"
          className="mt-3 w-full aspect-[1.72] max-md:max-w-full"
        />
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/774f790036342b69f82b461c1da0d99e03afcadf2958daa44c733f1af6c0fff0?apiKey=b9c95149685c491482c58f090fd0861c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/774f790036342b69f82b461c1da0d99e03afcadf2958daa44c733f1af6c0fff0?apiKey=b9c95149685c491482c58f090fd0861c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/774f790036342b69f82b461c1da0d99e03afcadf2958daa44c733f1af6c0fff0?apiKey=b9c95149685c491482c58f090fd0861c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/774f790036342b69f82b461c1da0d99e03afcadf2958daa44c733f1af6c0fff0?apiKey=b9c95149685c491482c58f090fd0861c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/774f790036342b69f82b461c1da0d99e03afcadf2958daa44c733f1af6c0fff0?apiKey=b9c95149685c491482c58f090fd0861c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/774f790036342b69f82b461c1da0d99e03afcadf2958daa44c733f1af6c0fff0?apiKey=b9c95149685c491482c58f090fd0861c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/774f790036342b69f82b461c1da0d99e03afcadf2958daa44c733f1af6c0fff0?apiKey=b9c95149685c491482c58f090fd0861c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/774f790036342b69f82b461c1da0d99e03afcadf2958daa44c733f1af6c0fff0?apiKey=b9c95149685c491482c58f090fd0861c&"
        className="self-center w-full aspect-[0.66] max-w-[1176px] max-md:max-w-full"
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bcaf19218981092da4b520830eb0af9644710d263e25dfb340a3b76b5ad91f33?apiKey=b9c95149685c491482c58f090fd0861c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcaf19218981092da4b520830eb0af9644710d263e25dfb340a3b76b5ad91f33?apiKey=b9c95149685c491482c58f090fd0861c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcaf19218981092da4b520830eb0af9644710d263e25dfb340a3b76b5ad91f33?apiKey=b9c95149685c491482c58f090fd0861c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcaf19218981092da4b520830eb0af9644710d263e25dfb340a3b76b5ad91f33?apiKey=b9c95149685c491482c58f090fd0861c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcaf19218981092da4b520830eb0af9644710d263e25dfb340a3b76b5ad91f33?apiKey=b9c95149685c491482c58f090fd0861c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcaf19218981092da4b520830eb0af9644710d263e25dfb340a3b76b5ad91f33?apiKey=b9c95149685c491482c58f090fd0861c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcaf19218981092da4b520830eb0af9644710d263e25dfb340a3b76b5ad91f33?apiKey=b9c95149685c491482c58f090fd0861c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcaf19218981092da4b520830eb0af9644710d263e25dfb340a3b76b5ad91f33?apiKey=b9c95149685c491482c58f090fd0861c&"
        className="w-full aspect-[2.13] max-md:max-w-full"
      />
      <div className="flex justify-center items-center px-16 py-5 w-full text-xs tracking-normal leading-4 bg-neutral-100 text-black text-opacity-60 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[980px] max-md:max-w-full">
          <div className="max-md:max-w-full">
            A subscription is required for Apple TV+.
          </div>
          <div className="shrink-0 mt-6 h-px bg-black bg-opacity-20 max-md:max-w-full" />
          <div className="flex gap-5 justify-between items-start mt-6 text-black text-opacity-70 max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col self-stretch">
              <div className="text-black text-opacity-90">Shop and Learn</div>
              <div className="mt-4">Store</div>
              <div className="mt-4">Mac</div>
              <div className="mt-4">iPad</div>
              <div className="mt-4">iPhone</div>
              <div className="mt-4">Watch</div>
              <div className="mt-4">AirPods</div>
              <div className="mt-4">TV & Home</div>
              <div className="mt-5 text-xs leading-4">AirTag</div>
              <div className="mt-4">Accessories</div>
              <div className="mt-4">Gift Cards</div>
              <div className="mt-8 text-black text-opacity-90">
                Apple Wallet
              </div>
              <div className="mt-4">Wallet</div>
            </div>
            <div className="flex flex-col">
              <div className="text-black text-opacity-90">Account</div>
              <div className="mt-4">Manage Your Apple ID</div>
              <div className="mt-3.5">Apple Store Account</div>
              <div className="mt-4">iCloud.com</div>
              <div className="mt-8 text-black text-opacity-90">
                Entertainment
              </div>
              <div className="mt-4">Apple One</div>
              <div className="mt-3.5">Apple TV+</div>
              <div className="mt-4 text-xs leading-4">Apple Music</div>
              <div className="mt-3.5">Apple Arcade</div>
              <div className="mt-4 text-xs leading-4">Apple Podcasts</div>
              <div className="mt-4">Apple Books</div>
              <div className="mt-3.5">App Store</div>
            </div>
            <div className="flex flex-col">
              <div className="text-black text-opacity-90">Apple Store</div>
              <div className="mt-4">Apple Store App</div>
              <div className="mt-3.5">Apple Recycling Program</div>
              <div className="mt-3.5">Order Status</div>
              <div className="mt-4">Shopping Help</div>
            </div>
            <div className="flex flex-col">
              <div className="text-black text-opacity-90">For Business</div>
              <div className="mt-5 text-xs leading-4">Apple and Business</div>
              <div className="mt-7 text-black text-opacity-90">
                For Education
              </div>
              <div className="mt-4">Apple and Education</div>
              <div className="mt-4">Shop for University</div>
            </div>
            <div className="flex flex-col">
              <div className="text-black text-opacity-90">Apple Values</div>
              <div className="mt-4">Accessibility</div>
              <div className="mt-3.5">Environment</div>
              <div className="mt-4">Privacy</div>
              <div className="mt-3.5">Supply Chain</div>
              <div className="mt-7 text-black text-opacity-90">About Apple</div>
              <div className="mt-3.5">Investors</div>
              <div className="mt-4">Ethics & Compliance</div>
              <div className="mt-3.5">Events</div>
              <div className="mt-4">Contact Apple</div>
            </div>
          </div>
          <div className="flex gap-3 self-start mt-11 max-md:flex-wrap max-md:mt-10">
            <div className="flex gap-0 self-start">
              <div className="grow">More ways to shop:</div>
              <div className="text-sky-600">Find a retailer</div>
              <div>near you. Or call</div>
            </div>
            <div className="flex gap-0 whitespace-nowrap">
              <div className="grow">1800-1651-0525</div>
              <div>(Smart/PLDT),</div>
            </div>
            <div className="flex gap-3.5 whitespace-nowrap">
              <div className="grow">1800-8474-7382</div>
              <div>(Globe).</div>
            </div>
          </div>
          <div className="shrink-0 mt-5 h-px bg-black bg-opacity-20 max-md:max-w-full" />
          <div className="flex gap-5 justify-between mt-5 w-full text-black text-opacity-70 max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-wrap">
              <div className="grow text-black text-opacity-60">
                Copyright © 2024 Apple Inc. All rights reserved.
              </div>
              <div>Privacy Policy</div>
              <div>Terms of Use</div>
              <div className="flex-auto">Sales and Refunds</div>
              <div>Legal</div>
              <div>Site Map</div>
            </div>
            <div>Philippines</div>
          </div>
        </div>
      </div>
    </div>
  );
}
