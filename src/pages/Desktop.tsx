import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import MacBookAir from "../components/MacBookAir";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import EnrollmentCards1 from "../components/EnrollmentCards1";
import EnrollmentCards from "../components/EnrollmentCards";

const Desktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[2130px] box-border gap-[101px] leading-[normal] tracking-[normal] mq450:gap-[25px] mq750:gap-[50px]">
      <section className="self-stretch flex flex-col items-start justify-start gap-[62px] max-w-full text-left text-xl text-woodsmoke-800 font-tutedude-typography-body-small mq450:gap-[15px] mq750:gap-[31px]">
        <Navigation1 />
        <div className="w-[1022px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[766px] flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
              <div className="rounded-2xl bg-white box-border flex flex-row items-center justify-center py-4 px-[23px] gap-[8px] whitespace-nowrap max-w-full border-[1px] border-solid border-web-orange-500">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/graduation-hat.svg"
                />
                <div className="h-[30px] relative inline-block">
                  <span>An</span>
                  <span className="text-base font-medium">{` `}</span>
                  <span className="font-semibold">IIT Delhi</span>
                  <span className="text-base font-medium">{` `}</span>
                  <span>Alumni Initiative</span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-[64px] text-dimgray-100">
                <b className="self-stretch relative tracking-[-0.03em] leading-[134.35%] mq450:text-19xl mq450:leading-[52px] mq750:text-[51px] mq750:leading-[69px]">
                  <span>Become an Expert in the field of</span>
                  <span className="text-black">{` `}</span>
                  <span className="text-eminence-700">
                    Data Science with 6 courses
                  </span>
                </b>
                <div className="self-stretch relative text-xl text-woodsmoke-800 mq450:text-base">
                  <span>{`A specially crafted Tech Kickstarter, with `}</span>
                  <span className="font-medium">
                    5+ extensive online courses.
                  </span>
                </div>
              </div>
              <div className="flex flex-row flex-wrap items-start justify-start py-0 pr-[47px] pl-0 gap-[14px] text-base text-web-orange-700 mq750:pr-[23px] mq750:box-border">
                <div className="rounded-81xl bg-web-orange-50 overflow-hidden flex flex-row items-center justify-center py-2.5 pr-[15px] pl-[11px] gap-[6px] whitespace-nowrap border-[1px] border-solid border-web-orange-100">
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/award-star.svg"
                  />
                  <div className="relative tracking-[-0.03em] font-medium">
                    Personal Mentorship
                  </div>
                </div>
                <button className="cursor-pointer py-2.5 pr-[15px] pl-[11px] bg-web-orange-50 rounded-81xl overflow-hidden flex flex-row items-center justify-center gap-[6px] whitespace-nowrap border-[1px] border-solid border-web-orange-100 hover:bg-antiquewhite hover:box-border hover:border-[1px] hover:border-solid hover:border-wheat">
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/award-star.svg"
                  />
                  <div className="relative text-base tracking-[-0.03em] font-medium font-tutedude-typography-body-small text-web-orange-700 text-left">
                    Internship Assistance
                  </div>
                </button>
                <button className="cursor-pointer py-2.5 pr-[15px] pl-[11px] bg-web-orange-50 rounded-81xl overflow-hidden flex flex-row items-center justify-center gap-[6px] whitespace-nowrap border-[1px] border-solid border-web-orange-100 hover:bg-antiquewhite hover:box-border hover:border-[1px] hover:border-solid hover:border-wheat">
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/award-star.svg"
                  />
                  <div className="relative text-base tracking-[-0.03em] font-medium font-tutedude-typography-body-small text-web-orange-700 text-left">
                    Industry Certified Courses
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[12px] max-w-full text-lg text-eminence-700 mq450:flex-wrap">
              <button className="cursor-pointer [border:none] py-6 px-12 bg-[transparent] shadow-[0px_8px_48px_-10px_rgba(153,_46,_157,_0.5)] rounded-xl [background:linear-gradient(180deg,_#b73bbe,_#992e9d)] overflow-hidden flex flex-row items-center justify-center gap-[6px] whitespace-nowrap">
                <div className="relative text-lg font-semibold font-tutedude-typography-body-small text-eminence-50 text-left inline-block min-w-[95px]">
                  Enroll Now
                </div>
                <img
                  className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/fibrpaperplane.svg"
                />
              </button>
              <div className="rounded-2xl overflow-hidden flex flex-row items-center justify-center p-6 gap-[6px]">
                <div className="relative font-semibold inline-block min-w-[101px]">
                  Know More
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/fibrinterrogation.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <MacBookAir />
      </section>
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1184px] flex flex-col items-start justify-start gap-[96px] max-w-full mq750:gap-[24px] mq1225:gap-[48px]">
          <EnrollmentCards1 />
          <EnrollmentCards />
        </div>
      </section>
    </div>
  );
};

export default Desktop;
