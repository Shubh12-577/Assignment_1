import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type LearningElementsType = {
  onlineLearning?: string;
  detailsIcons?: string;
  courses?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
};

const LearningElements: FunctionComponent<LearningElementsType> = ({
  onlineLearning,
  detailsIcons,
  courses,
  propMinWidth,
  propMinWidth1,
  propDisplay,
}) => {
  const detailsIconsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const coursesStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      display: propDisplay,
    };
  }, [propMinWidth1, propDisplay]);

  return (
    <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0 text-left text-21xl text-eminence-700 font-tutedude-typography-body-small">
      <div className="flex flex-row items-start justify-start gap-[12px]">
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <img
            className="w-[62px] h-[62px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={onlineLearning}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[2px]">
          <div
            className="relative leading-[40px] font-medium inline-block min-w-[49px] mq450:text-5xl mq450:leading-[24px] mq750:text-13xl mq750:leading-[32px]"
            style={detailsIconsStyle}
          >
            {detailsIcons}
          </div>
          <div
            className="relative text-5xl leading-[28px] font-dm-sans text-woodsmoke-500 inline-block min-w-[92px] mq450:text-lgi mq450:leading-[22px]"
            style={coursesStyle}
          >
            {courses}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningElements;
