import React from "react";
import readingpdf from "../Doc/HSCP2/HSCP2-Reading-Students-Syllabus.pdf";
import writingpdf from "../Doc/HSCP2/HSCP2-Writing-Students-Syllabus.pdf";
import conversationpdf from "../Doc/HSCP2/HSCP2-Conversation-Students-Syllabus.pdf";
import readLogo from "../Images/hscp2_reading.png";
import converseLogo from "../Images/hscp2_conversation.png";

const Hscp2 = () => {
  return (
    <div className=" p-4 m-4">
      <div className="  p-4 m-4"> 
      <a
        href={readingpdf}
        target="_blank"
        rel="noreferrer"
        className=" rounded-full font-semibold bg-orange-800 text-white p-2 m-1"
      >
        READING PDF
      </a>
      <a
        href={writingpdf}
        target="_blank"
        rel="noreferrer"
        className=" rounded-full font-semibold bg-orange-800 text-white p-2 m-1"
      >
        WRITING PDF
      </a>
      <a
        href={conversationpdf}
        target="_blank"
        rel="noreferrer"
        className=" rounded-full font-semibold bg-orange-800 text-white p-2 m-1"
      >
        CONVERSATION PDF
      </a>
      </div>

<div className=" flex p-4 m-4 rounded-full"> 
{/* READING ZOOM MEETING*/}
      <div
      className="flex   p-2 m-1 rounded-full bg-slate-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
      <img
        className="h-full w-full rounded-full object-cover md:h-auto md:w-48  md:rounded-full"
        src={readLogo}
        alt="" />
      <div className="flex flex-col justify-start p-6">
      
        
        <h5
          className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          READING
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
       
       <a
               href="https://meet.google.com/oxx-rrff-zio"
               target="_blank"
               rel="noreferrer"
               className=" rounded-full font-semibold bg-orange-800 text-white p-2 m-1"
             >
               ZOOM LINK
             </a></p>
        
        <p className="text-sm font-bold text-neutral-500 dark:text-neutral-300">
          Friday at 4:30 pm
        </p>
      </div>
    </div>

    {/* CONVERSATION ZOOM MEETING*/}
    <div
      className="flex   p-2 m-1 rounded-full  bg-slate-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">

      <img
        className=" h-full w-full rounded-full object-cover md:h-auto md:w-48  md:rounded-full"
        src={converseLogo}
        alt="" />
      <div className="flex flex-col justify-start p-6">
        <h5
          className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          CONVERSATION
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
       
<a
        href="https://meet.google.com/oxx-rrff-zio"
        target="_blank"
        rel="noreferrer"
        className=" rounded-full font-semibold bg-orange-800 text-white p-2 m-1"
      >
        ZOOM LINK
      </a></p>
        <p className="text-xs text-neutral-500 dark:text-neutral-300">Or dial: ‪(US) +1 361-360-8523‬ PIN: ‪440 781 571‬#</p>
        
        <p className="text-sm font-bold text-neutral-500 dark:text-neutral-300">
          Thursday at 6:30 pm
        </p>
      </div>
    </div>
    </div>

    </div>
  );
};

export default Hscp2;
