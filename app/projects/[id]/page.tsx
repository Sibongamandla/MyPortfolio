"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data";
import { ArrowLeft } from "lucide-react";

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const projectId = parseInt(params.id);
    const foundProject = projects.find((p) => p.id === projectId);

    if (foundProject) {
      setProject(foundProject);
    } else {
      // Redirect to homepage if project not found
      router.push("/");
    }

    setLoading(false);
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple"></div>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <main className="relative bg-black-100 min-h-screen flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full py-20">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-300 hover:text-purple transition mb-10"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        <div
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
          className="rounded-3xl border border-white/[0.1] p-8 md:p-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.iconLists.map((icon: string, index: number) => (
              <div key={index} className="bg-[#10132E] p-2 rounded-md">
                <img src={icon} alt="Tech" className="w-10 h-10" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple">
                Project Overview
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.des}
              </p>

              <h2 className="text-2xl font-bold mb-4 text-purple">My Role</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
                <li>Led development team and set project architecture</li>
                <li>Implemented core functionalities and integrated APIs</li>
                <li>Conducted code reviews and maintained quality standards</li>
                <li>Managed deployment pipeline and server configurations</li>
                <li>Collaborated with stakeholders to refine requirements</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-purple">
                Technical Challenges
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The project presented several unique challenges, including
                complex data relationships, performance optimization for large
                datasets, and ensuring responsive design across all device
                types. I implemented innovative solutions including custom
                caching algorithms, code splitting for better load times, and a
                comprehensive testing strategy.
              </p>

              <div className="mt-10">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple text-white rounded-md font-semibold hover:bg-opacity-80 transition"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {project.secondaryImg && project.secondaryImg.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {project.secondaryImg
                    .slice(1, 5)
                    .map((img: string, index: number) => (
                      <div key={index} className="overflow-hidden rounded-xl">
                        <img
                          src={img}
                          alt={`${project.title} ${index + 1}`}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
