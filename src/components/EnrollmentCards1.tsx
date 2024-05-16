import { FunctionComponent } from "react";

const EnrollmentCards1: FunctionComponent = () => {
  return (
    <div className="self-stretch shadow-[0px_20px_250px_-20px_rgba(151,_71,_255,_0.15)] rounded-29xl bg-blueviolet overflow-hidden flex flex-row flex-wrap items-center justify-start relative gap-[10px] min-h-[420px] max-w-full text-left text-29xl text-woodsmoke-950 font-tutedude-typography-body-small">
      <div className="h-[1290px] w-[1637px] absolute !m-[0] top-[-284px] left-[-227px] flex items-center justify-center z-[0]">
        <img
          className="h-full w-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.62)]"
          alt=""
          src="/group-1000015032.svg"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[24px] min-w-[350px] max-w-full z-[1] mq450:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch relative tracking-[-0.03em] capitalize mq450:text-lgi mq750:text-7xl">
            <b>{`Enroll for DataScience Bundle @₹1,499 `}</b>
            <span className="text-13xl [text-decoration:line-through] font-medium text-woodsmoke-500">
              ₹2,600
            </span>
          </div>
          <div className="self-stretch relative text-xl tracking-[-0.03em] mq450:text-base">
            Become an Expert in the data science field by enrolling into 6
            Extensive courses!
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-6 pr-12 pl-10 bg-woodsmoke-950 w-[238px] rounded-xl overflow-hidden flex flex-row items-center justify-center box-border gap-[10px] whitespace-nowrap hover:bg-dimgray-200">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/icoutlinelocaloffer.svg"
          />
          <div className="flex-1 relative text-5xl tracking-[-0.05em] font-semibold font-tutedude-typography-body-small text-white text-center inline-block min-w-[116px]">
            Enroll Now
          </div>
        </button>
      </div>
      <div className="flex-1 flex flex-col items-end justify-between py-9 px-0 box-border min-w-[350px] min-h-[324px] max-w-full z-[1] text-xl mq450:min-w-full">
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
      </div>
    </div>
  );
};

export default EnrollmentCards1;
