import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import dynamic from "next/dynamic";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { socialMedia } from "@/data";

// Dynamically import components that use browser APIs
const TextGenerateEffect = dynamic(
  () => import("./ui/TextGenerateEffect").then((mod) => mod.TextGenerateEffect),
  {
    ssr: false,
  }
);

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Full-Stack Web Dev & Software Engineer
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Sibongamandla Mnyandu, a Full-Stack Developer based in
            South Africa.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 mt-5">
            <p className="text-sm text-gray-400">Find me on:</p>
            {socialMedia.map((info) => (
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                key={info.id}
                className="transition-transform hover:scale-110"
              >
                <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple/50 transition-colors">
                  {info.id === 1 ? (
                    <FaGithub className="text-white" size={20} />
                  ) : (
                    <FaLinkedin className="text-white" size={20} />
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
