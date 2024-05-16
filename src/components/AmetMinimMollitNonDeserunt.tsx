import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type AmetMinimMollitNonDeseruntType = {
  c?: string;
  learnCForStrongProgrammin?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propBorderTop?: CSSProperties["borderTop"];
};

const AmetMinimMollitNonDeserunt: FunctionComponent<
  AmetMinimMollitNonDeseruntType
> = ({ c, learnCForStrongProgrammin, propPadding, propBorderTop }) => {
  const ametMinimMollitNonDeseruntStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      borderTop: propBorderTop,
    };
  }, [propPadding, propBorderTop]);

  return (
    <div
      className="self-stretch bg-white flex flex-row flex-wrap items-center justify-center p-7 box-border gap-[12px] max-w-full text-left text-9xl text-woodsmoke-700 font-tutedude-typography-body-small"
      style={ametMinimMollitNonDeseruntStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[564px] max-w-full mq750:min-w-full">
        <h3 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-3xl">
          {c}
        </h3>
        <div className="self-stretch relative text-xl text-woodsmoke-400 mq450:text-base">
          {learnCForStrongProgrammin}
        </div>
      </div>
      <button className="cursor-pointer py-[18px] px-[23px] bg-eminence-50 rounded-981xl overflow-hidden flex flex-row items-center justify-center gap-[10px] whitespace-nowrap border-[1px] border-solid border-eminence-100 hover:bg-lavender hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-100">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/fibreye.svg"
        />
        <div className="relative text-xl font-medium font-tutedude-typography-body-small text-eminence-600 text-center">
          View Curriculum
        </div>
      </button>
    </div>
  );
};

export default AmetMinimMollitNonDeserunt;
