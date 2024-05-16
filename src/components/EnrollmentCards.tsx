import { FunctionComponent } from "react";

const EnrollmentCards: FunctionComponent = () => {
  return (
    <div className="self-stretch h-[420px] shadow-[0px_20px_250px_-20px_rgba(151,_71,_255,_0.15)] rounded-29xl [background:linear-gradient(180deg,_#b73bbe,_#992e9d)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[373px] px-12 pb-[46px] box-border gap-[12px] max-w-full text-left text-29xl text-eminence-50 font-tutedude-typography-body-small mq750:pt-[157px] mq750:pb-5 mq750:box-border mq1050:pt-[242px] mq1050:pb-[30px] mq1050:box-border mq1225:h-auto mq1225:pl-6 mq1225:pr-6 mq1225:box-border">
      <div className="mt-[-477px] w-[1264px] flex flex-row flex-wrap items-end justify-start gap-[10px] shrink-0 [debug_commit:1de1738] max-w-[117%]">
        <div className="w-[539px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch h-[285px] relative">
              <div className="absolute top-[0px] left-[181px] [filter:blur(250px)] rounded-[50%] bg-gray-200 w-[150px] h-[150px]" />
              <div className="absolute top-[141px] left-[0px] tracking-[-0.02em] capitalize flex items-center w-[539px] mq450:text-lgi mq750:text-7xl">
                <span className="w-full">
                  <b>{`Enroll for DataScience Bundle @₹1,499 `}</b>
                  <span className="text-13xl [text-decoration:line-through] font-medium text-plum">
                    ₹2,600
                  </span>
                </span>
              </div>
            </div>
            <div className="self-stretch relative text-xl tracking-[-0.03em] text-eminence-200 mq450:text-base">
              Become an Expert in the data science field by enrolling into 6
              Extensive courses!
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-6 px-12 bg-woodsmoke-950 w-[254px] rounded-xl overflow-hidden flex flex-row items-start justify-start box-border gap-[10px] z-[1]">
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/icoutlinelocaloffer.svg"
              />
            </div>
            <div className="w-[116px] relative text-5xl tracking-[-0.05em] font-semibold font-tutedude-typography-body-small text-white text-center inline-block min-w-[116px] mq450:text-lgi">
              Enroll Now
            </div>
          </button>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[23px] pl-0 box-border min-w-[365px] max-w-full text-xl mq750:min-w-full">
          <div className="self-stretch flex flex-col items-end justify-between py-9 px-0 box-border relative min-h-[324px]">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[32px] mq450:gap-[16px]">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[-0.03em] mq450:text-base">
                  Total number of Courses
                </div>
                <div className="relative text-3xl tracking-[-0.03em] font-semibold inline-block min-w-[15px] mq450:text-lg">
                  6
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[-0.03em] mq450:text-base">
                  Total number of Certificates
                </div>
                <div className="relative text-3xl tracking-[-0.03em] font-semibold inline-block min-w-[15px] mq450:text-lg">
                  6
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[-0.03em] mq450:text-base">
                  Access to Courses
                </div>
                <div className="relative text-3xl font-semibold inline-block min-w-[89px] mq450:text-lg">
                  Lifetime
                </div>
              </div>
            </div>
            <img
              className="w-[220.2px] h-[215.9px] absolute !m-[0] top-[-63px] left-[50px] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/scribble-final-version24-1@2x.png"
            />
          </div>
        </div>
        <div className="h-[230px] w-[150px] flex flex-col items-start justify-start">
          <div className="self-stretch h-[150px] relative [filter:blur(250px)] rounded-[50%] bg-gray-200" />
        </div>
      </div>
      <div className="self-stretch h-[150px] flex flex-row items-start justify-center py-0 pr-0 pl-[146px] box-border relative shrink-0 mq450:pl-5 mq450:box-border">
        <div className="self-stretch w-[150px] relative [filter:blur(250px)] rounded-[50%] bg-gray-200 shrink-0 [debug_commit:1de1738]" />
        <div className="h-[150px] w-[150px] absolute !m-[0] top-[-54px] left-[-120px] [filter:blur(250px)] rounded-[50%] bg-gray-200" />
      </div>
    </div>
  );
};

export default EnrollmentCards;
