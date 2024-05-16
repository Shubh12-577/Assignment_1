import { FunctionComponent } from "react";
import AmetMinimMollitNonDeserunt from "./AmetMinimMollitNonDeserunt";

const FrameComponent3: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[59px] box-border max-w-full text-center text-29xl text-woodsmoke-700 font-tutedude-typography-body-small mq750:pb-[25px] mq750:box-border mq1050:pb-[38px] mq1050:box-border">
      <div className="flex-1 bg-eminence-50 overflow-hidden flex flex-col items-center justify-start py-[113px] px-5 box-border gap-[56px] max-w-full mq750:gap-[28px] mq750:pt-[47px] mq750:pb-[47px] mq750:box-border mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border">
        <div className="w-[1184px] flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full">
          <div className="w-[761px] flex flex-col items-start justify-start gap-[21px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <button className="cursor-pointer py-3.5 px-[27px] bg-eminence-100 rounded-981xl box-border overflow-hidden flex flex-row items-start justify-start whitespace-nowrap max-w-full border-[1px] border-solid border-eminence-200 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                <div className="w-[360px] relative text-xl tracking-[-0.02em] font-tutedude-typography-body-small text-eminence-700 text-center inline-block">
                  DATASCIENCE COURSE LEARNING PATH
                </div>
              </button>
            </div>
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.03em] font-bold font-inherit mq450:text-10xl mq750:text-19xl">
              <span className="text-transparent !bg-clip-text [background:linear-gradient(91.98deg,_#b73bbe,_#ebcb2e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Data Science
              </span>
              <span> Course Curriculum</span>
            </h1>
          </div>
        </div>
        <div className="w-[1184px] rounded-9xl box-border overflow-hidden flex flex-col items-start justify-start max-w-full text-left text-9xl border-[1px] border-solid border-woodsmoke-100">
          <AmetMinimMollitNonDeserunt
            c="C++"
            learnCForStrongProgrammin="Learn C++ for strong programming fundamentals."
          />
          <AmetMinimMollitNonDeserunt
            c="MERN Stack"
            learnCForStrongProgrammin="Master the MERN stack for high-demand projects."
            propPadding="26px 28px 28px"
            propBorderTop="1px solid #e5e5e8"
          />
          <AmetMinimMollitNonDeserunt
            c={`Data Structure & Algorithm`}
            learnCForStrongProgrammin="Excel in Data Structures and Algorithms for interview success."
            propPadding="26px 28px 28px"
            propBorderTop="1px solid #e5e5e8"
          />
          <AmetMinimMollitNonDeserunt
            c="Competitve Programming"
            learnCForStrongProgrammin="Excel in Data Structures and Algorithms for interview success."
            propPadding="26px 28px 28px"
            propBorderTop="1px solid #e5e5e8"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
