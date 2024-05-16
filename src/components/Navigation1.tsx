import { FunctionComponent } from "react";

const Navigation1: FunctionComponent = () => {
  return (
    <header className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] text-left text-base text-black font-tutedude-typography-body-small">
      <div className="self-stretch bg-white flex flex-row items-start justify-center pt-6 px-5 pb-[22px] gap-[428.5px] border-b-[1px] border-solid border-woodsmoke-50 mq450:gap-[54px] mq750:gap-[107px] mq1225:gap-[214px]">
        <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
          <div className="relative font-medium inline-block min-w-[45px]">
            LOGO
          </div>
        </div>
        <div className="w-[122px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border">
          <div className="self-stretch h-[37px] relative" />
        </div>
        <div className="flex flex-row items-start justify-start gap-[12px] text-right text-eminence-700">
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <div className="relative font-medium inline-block min-w-[43px]">
              Login
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3 px-6 bg-[transparent] shadow-[0px_8px_24px_-10px_rgba(153,_46,_157,_0.5)] rounded-sm [background:linear-gradient(180deg,_#b73bbe,_#992e9d)] overflow-hidden flex flex-row items-start justify-start">
            <div className="relative text-base font-medium font-tutedude-typography-body-small text-eminence-50 text-left inline-block min-w-[57px]">
              Signup
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch bg-woodsmoke-900 overflow-hidden flex flex-row items-start justify-center pt-3 px-5 pb-0 gap-[19.8px] z-[1] mt-[-1px] text-woodsmoke-200">
        <div className="w-[75.5px] flex flex-col items-start justify-start gap-[8px] text-white">
          <div className="relative font-medium inline-block min-w-[75px]">
            Overview
          </div>
          <div className="self-stretch h-1 relative rounded-t-3xs rounded-b-none bg-web-orange-500" />
        </div>
        <div className="relative inline-block min-w-[90px]">Curriculum</div>
        <div className="relative inline-block min-w-[57px]">Refund</div>
        <div className="relative inline-block min-w-[101px]">Testimonials</div>
      </div>
    </header>
  );
};

export default Navigation1;
