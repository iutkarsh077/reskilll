"use client";
import { HiCheck } from "react-icons/hi";
import { ThreeDCardDemo } from "./CourseImage";
import { FcReading } from "react-icons/fc";
import { TfiWrite } from "react-icons/tfi";
import { FaBoxTissue } from "react-icons/fa";
import Card from "./Card";
import FounderAndMentorInfo from "./FounderAndMentorInfo";
import Doubts from "./Doubts";
import Footer from "./Footer";

const CourseDetails = () => {
  const courseFeatures = [
    "Complete Java Language",
    "Complete Data Structures & Algorithms",
    "Live Resume & Interview Preparation",
    "Top Industry Instructors",
    "300+ Coding Questions on All Important Topics (asked by Top Companies)",
    "Doubt Assistance",
    "Library Feature for Level Up",
    "New (Live + VOD) Batch",
  ];

  const aboutTheCourse = [
    {
      logo: <FcReading />,
      title: "lectures",
      description:
        "Lectures that cover all important DSA for internships/placements",
      features: "Batch start date 24th May 2024, Alternate Day Schedule",
    },
    {
      logo: <FaBoxTissue />,
      title: "QUESTIONS PRACTICE",
      description: "300+ Carefully Curated & Solved Questions Practice",
      features: "Course Duration - 4 months, Course access is for one year.",
    },
    {
      logo: <TfiWrite />,
      title: "DOUBT ASSISTANCE",
      description:
        "When you are stuck, use multi-step Doubt Assistance. Get Access to :",
      features:
        "Plus community with TAs, Instructor Live Sessions, Weekly Doubt Sessions",
    },
  ];
  return (
    <div className="w-screen h-[650px] sm:pt-10 pt-6 overflow-x-hidden bg-purple-50 dark:bg-black">
      <p className="uppercase pl-7 text-xl font-bold">Batch Overview</p>
      <div className="w-full flex">
        <div className="left w-1/2 pt-10 flex flex-col  pl-10 gap-y-5 overflow-x-hidden">
          {courseFeatures.map((feat, index) => (
            <div
              key={index}
              className="text-lg font-medium flex items-center gap-x-3"
            >
              <HiCheck className="text-3xl text-green-700 font-bold" />
              {feat}
            </div>
          ))}
        </div>
        <div className="right w-1/2">
          <ThreeDCardDemo />
        </div>
      </div>
      <div className="w-screen flex gap-x-6 justify-around p-7 overflow-x-hidden">
        {aboutTheCourse.map((feat, index) => (
          <div className="w-1/3" key={index}>
            <p className="text-purple-600 pb-4 text-4xl">{feat.logo as any}</p>
            <p className="pb-4 text-2xl font-semibold">
              {feat.title.toUpperCase()}
            </p>
            <p className="pb-4 text-lg">{feat.description}</p>
            <div>
              {feat.features.split(",").map((feature, index) => (
                <p key={index} className="text-lg">
                  - {feature.trim()}{" "}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="flex justify-center pt-4 pb-4 text-2xl font-semibold bg-purple-50 dark:bg-black">
        Become the <span className="text-purple-700 pl-2 pr-2"> Top 1% </span>{" "}
        in your Placement
      </p>
      <div className="w-full flex mt-5 flex-wrap justify-center gap-x-5 bg-purple-50 dark:bg-black">
        <Card
          images="/images/code.jpeg"
          title="Top Instructors"
          description="Learn Live from instructors working in companies like Microsoft, Amazon, Google, Atlassian etc."
          color="orange-400"
        />
        <Card
          images="/images/cod32.jpg"
          title="Live Mentorship"
          description="How to build your resume, apply for off-campus, get a referral, prepare for interviews - all these will be covered in Mentorship Sessions."
          color="orange-400"
        />
        <Card
          images="/images/react.png"
          title="Doubt Assistance"
          description="Get access to Teaching assistants & Weekly Doubt assistance sessions when you are stuck."
          color="orange-400"
        />
        <Card
          images="/images/idea.png"
          title="Library Feature"
          description="Get a library of questions with solutions asked by top companies like Amazon, Google, Atlassian & more."
          color="orange-400"
        />
        <Card
          images="/images/bug.jpeg"
          title="Community"
          description="Having a vibrant & helping community will help you in your journey. Interact with your batchmates."
          color="orange-400"
        />
      </div>
      <div className="w-full bg-white">
        <FounderAndMentorInfo/>
      </div>
      <div className="w-full bg-white p-16 dark:bg-black">
        <Doubts/>
      </div>
      <Footer/>
    </div>
  );
};

export default CourseDetails;
