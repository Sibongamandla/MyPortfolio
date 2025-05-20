"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const HireMePage = () => {
  return (
    <main className="relative bg-black-100 min-h-screen flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-purple/20 rounded-full filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse" />

      <div className="max-w-7xl w-full py-20 relative z-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-300 hover:text-purple transition mb-10"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
          className="rounded-3xl border border-white/[0.1] p-8 md:p-12 overflow-hidden relative"
        >
          {/* Profile Image and Header Section */}
          <div className="flex flex-col lg:flex-row items-center gap-10 mb-16 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-56 h-56 rounded-full overflow-hidden border-4 border-purple/30 shadow-xl"
            >
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            <div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Why <span className="text-purple">Hire Me</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-gray-300 text-xl leading-relaxed max-w-2xl"
              >
                Full-stack developer and solutions architect passionate about
                creating robust, scalable applications that solve real business
                problems. With expertise in leadership, problem-solving, and
                technical excellence.
              </motion.p>
            </div>

            {/* Decorative element */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple/5 rounded-full"></div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="bg-[#10132E] p-6 rounded-xl border border-white/5 flex flex-col items-center justify-center">
              <p className="text-4xl font-bold text-purple mb-2">45-75%</p>
              <p className="text-gray-300 text-center">
                Client Acquisition Increase
              </p>
            </div>
            <div className="bg-[#10132E] p-6 rounded-xl border border-white/5 flex flex-col items-center justify-center">
              <p className="text-4xl font-bold text-purple mb-2">30%</p>
              <p className="text-gray-300 text-center">
                Faster Project Delivery
              </p>
            </div>
            <div className="bg-[#10132E] p-6 rounded-xl border border-white/5 flex flex-col items-center justify-center">
              <p className="text-4xl font-bold text-purple mb-2">40-70%</p>
              <p className="text-gray-300 text-center">
                Performance Improvement
              </p>
            </div>
            <div className="bg-[#10132E] p-6 rounded-xl border border-white/5 flex flex-col items-center justify-center">
              <p className="text-4xl font-bold text-purple mb-2">99.9%</p>
              <p className="text-gray-300 text-center">System Uptime</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 relative">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-purple flex items-center">
                <span className="bg-purple/20 text-purple w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  1
                </span>
                Proven Leadership & Results
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-4 leading-relaxed text-lg ml-4">
                <li>
                  Consistently delivered projects that increased client
                  acquisition by 45-75%
                </li>
                <li>
                  Led teams of 5+ developers across multiple successful projects
                </li>
                <li>
                  Reduced project delivery times by 30% through agile
                  implementation
                </li>
                <li>
                  Improved system performance by 40-70% through optimization
                </li>
                <li>Maintained 99.9% uptime across enterprise deployments</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-6 text-purple flex items-center">
                <span className="bg-purple/20 text-purple w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  2
                </span>
                Innovative Problem-Solver
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4 ml-4">
                I approach every challenge with analytical thinking and a
                determination to find elegant solutions. My background in
                full-stack development gives me a holistic perspective that
                allows me to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-4 leading-relaxed text-lg ml-4">
                <li>Identify and resolve complex technical bottlenecks</li>
                <li>
                  Architect systems that scale efficiently with growing user
                  demands
                </li>
                <li>
                  Implement innovative solutions for data security and integrity
                </li>
                <li>
                  Optimize for performance while maintaining clean, maintainable
                  code
                </li>
              </ul>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-purple flex items-center">
                <span className="bg-purple/20 text-purple w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  3
                </span>
                Technical Excellence
              </h2>

              {/* Skill Bars */}
              <div className="space-y-6 mb-8 ml-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Frontend Development</span>
                    <span className="text-purple">95%</span>
                  </div>
                  <div className="w-full bg-[#161A31] rounded-full h-2.5">
                    <div
                      className="bg-purple h-2.5 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Backend Systems</span>
                    <span className="text-purple">90%</span>
                  </div>
                  <div className="w-full bg-[#161A31] rounded-full h-2.5">
                    <div
                      className="bg-purple h-2.5 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Cloud & DevOps</span>
                    <span className="text-purple">85%</span>
                  </div>
                  <div className="w-full bg-[#161A31] rounded-full h-2.5">
                    <div
                      className="bg-purple h-2.5 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Database Design</span>
                    <span className="text-purple">88%</span>
                  </div>
                  <div className="w-full bg-[#161A31] rounded-full h-2.5">
                    <div
                      className="bg-purple h-2.5 rounded-full"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-purple flex items-center">
                <span className="bg-purple/20 text-purple w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  4
                </span>
                Client-Focused Collaboration
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg ml-4">
                I prioritize clear communication and collaboration throughout
                the development process. My approach centers on understanding
                client needs and delivering solutions that exceed expectations.
              </p>
              <div className="mt-6 p-6 bg-[#10132E] rounded-xl border border-white/5 ml-4 relative overflow-hidden">
                <div className="absolute -top-2 -left-2 text-4xl opacity-20">
                  &ldquo;
                </div>
                <p className="text-gray-300 italic relative z-10">
                  &ldquo;Sibongamandla demonstrated exceptional leadership
                  throughout our project. His problem-solving skills and
                  technical expertise led to a 45% increase in client
                  acquisition after launching our new website.&rdquo;
                </p>
                <p className="text-purple mt-3 text-right font-semibold">
                  — iSu Technologies
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="border-t border-white/10 pt-10 mt-10"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-purple">
              Ready to Collaborate?
            </h2>
            <p className="text-gray-300 text-center text-lg mb-8">
              I&apos;m excited to bring my expertise and passion to your next
              project, creating solutions that drive real business results.
            </p>
            <div className="flex justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-purple text-white rounded-md font-semibold hover:bg-opacity-80 transition text-lg relative group overflow-hidden"
              >
                <span className="absolute inset-0 w-0 bg-white group-hover:w-full transition-all duration-500 ease-out opacity-10"></span>
                <span className="relative">Get in Touch</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default HireMePage;
