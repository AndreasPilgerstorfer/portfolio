import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { educationStages } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { download } from "../assets";

const EducationCard = ({ education }) => {
  return (
      <VerticalTimelineElement
          contentStyle={{
              background: "#1d1836",
              color: "#fff",
          }}
          contentArrowStyle={{borderRight: "7px solid  #232631"}}
          date={education.date}
          iconStyle={{background: education.iconBg}}
          icon={
              <a href={education.url} target="_blank" rel="noopener">
                  <div className='flex justify-center items-center w-full h-full'>
                      <img
                          loading="lazy"
                          src={education.icon}
                          alt={education.company_name}
                          className='w-[60%] h-[60%] object-contain'
                      />
                  </div>
              </a>
          }
      >
          <div>
              <h3 className='text-white text-[24px] font-bold'>{education.title}</h3>
              <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>
                  {education.company_name}
              </p>
              <a href={education.factSheet} target="_blank" rel="noopener"
                 className="flex justify-start items-end">
                  <div>
                      <img
                          className='w-[28px] h-[28px] object-contain'
                          src={download}
                          alt="download"
                      />
                  </div>
                  <span className="text-[16px] hover:underline ml-2">
                    Fact Sheet about the programme
                </span>
              </a>
          </div>

          <ul className='mt-5 list-disc ml-5 space-y-2'>
              {education.points.map((point, index) => (
                  <li
                      key={`experience-point-${index}`}
                      className='text-white-100 text-[14px] pl-1 tracking-wider'
                  >
                      {point}
                  </li>
              ))}
          </ul>

          {education.thesisTitleEn && (
              <div className="mt-5">
                  <div className='mt-5 text-[16px] pl-1'>
                      <span className="font-bold">Thesis:&nbsp;</span>
                      <span>{education.thesisTitleEn}</span>
                  </div>
                  <a href={education.thesisPDF} target="_blank" rel="noopener"
                     className="flex justify-start items-end">
                      <div>
                          <img
                              className='w-[28px] h-[28px] object-contain'
                              src={download}
                              alt="download"
                          />
                      </div>
                      <span className="text-[16px] hover:underline ml-2">
                        Download Thesis (German)
                    </span>
                  </a>
              </div>
          )}
      </VerticalTimelineElement>
  );
};

const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    What I have studied so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Education.
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {educationStages.map((education, index) => (
                        <EducationCard
                            key={`experience-${index}`}
                            education={education}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Education, "education");
