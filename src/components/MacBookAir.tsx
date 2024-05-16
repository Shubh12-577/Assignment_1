import { FunctionComponent } from "react";
import LearningElements from "./LearningElements";

const MacBookAir: FunctionComponent = () => {
  return (
    <div className="self-stretch [background:linear-gradient(180deg,_rgba(183,_59,_190,_0.05),_rgba(153,_46,_157,_0.05))] overflow-hidden flex flex-row items-start justify-between py-[34px] pr-[129px] pl-[127px] gap-[20px] text-left text-21xl text-eminence-700 font-tutedude-typography-body-small border-[1px] border-solid border-eminence-100 mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[63px] mq750:pr-16 mq750:box-border mq1225:flex-wrap mq1225:justify-center">
      <LearningElements
        onlineLearning="/online-learning.svg"
        detailsIcons="24"
        courses="Courses"
      />
      <div className="h-[100px] w-px relative bg-eminence-200 mq1225:w-full mq1225:h-px" />
      <LearningElements
        onlineLearning="/graduated.svg"
        detailsIcons="30k+"
        courses="Learners"
        propMinWidth="101px"
        propMinWidth1="97px"
        propDisplay="inline-block"
      />
      <div className="h-[100px] w-px relative bg-eminence-200 mq1225:w-full mq1225:h-px" />
      <LearningElements
        onlineLearning="/question-mark.svg"
        detailsIcons="100k+"
        courses="Doubts Solved"
        propMinWidth="116px"
        propMinWidth1="unset"
        propDisplay="unset"
      />
      <div className="h-[100px] w-px relative bg-eminence-200 mq1225:w-full mq1225:h-px" />
      <LearningElements
        onlineLearning="/complete.svg"
        detailsIcons="10k+"
        courses="Student Projects"
        propMinWidth="91px"
        propMinWidth1="unset"
        propDisplay="unset"
      />
    </div>
  );
};

export default MacBookAir;
