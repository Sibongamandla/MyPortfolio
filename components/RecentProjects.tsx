"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  // Helper function to determine if a link is a GitHub repository
  const isGitHubRepo = (link: string): boolean => {
    return Boolean(link && link.includes("github.com"));
  };

  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});

  const handlePrevImage = (projectId: number) => {
    setCurrentImageIndex((prev) => {
      const currentIndex = prev[projectId] || 0;
      const project = projects.find((p) => p.id === projectId);
      const imageCount = project?.secondaryImg?.length || 0;
      return {
        ...prev,
        [projectId]: currentIndex === 0 ? imageCount - 1 : currentIndex - 1,
      };
    });
  };

  const handleNextImage = (projectId: number) => {
    setCurrentImageIndex((prev) => {
      const currentIndex = prev[projectId] || 0;
      const project = projects.find((p) => p.id === projectId);
      const imageCount = project?.secondaryImg?.length || 0;
      return {
        ...prev,
        [projectId]: (currentIndex + 1) % imageCount,
      };
    });
  };

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => {
          const hasMultipleImages =
            item.secondaryImg && item.secondaryImg.length > 0;
          const currentIndex = currentImageIndex[item.id] || 0;
          const currentImage = hasMultipleImages
            ? item.secondaryImg[currentIndex]
            : item.img;

          return (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <PinContainer title={item.title} href={item.link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <div className="z-10 absolute bottom-0 w-full h-full flex items-center justify-center">
                    <img
                      src={currentImage}
                      alt={item.title}
                      className="object-contain max-h-full max-w-full"
                    />

                    {hasMultipleImages && (
                      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handlePrevImage(item.id);
                          }}
                          className="bg-black/60 text-white p-2 rounded-full"
                          aria-label="Previous image"
                        >
                          <FaArrowLeft size={12} />
                        </button>
                        <div className="flex items-center gap-1">
                          {item.secondaryImg.map((_, idx) => (
                            <div
                              key={idx}
                              className={`w-2 h-2 rounded-full ${
                                currentIndex === idx
                                  ? "bg-white"
                                  : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleNextImage(item.id);
                          }}
                          className="bg-black/60 text-white p-2 rounded-full"
                          aria-label="Next image"
                        >
                          <FaArrowRight size={12} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center"
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      {isGitHubRepo(item.link)
                        ? "Check GitHub Repo"
                        : "Check Live Site"}
                    </p>
                    {isGitHubRepo(item.link) ? (
                      <FaGithub className="ms-3" color="#CBACF9" />
                    ) : (
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    )}
                  </a>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;
