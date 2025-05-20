export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Why Hire Me", link: "/hire-me" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description:
      "Leading projects with a problem-solving mindset and strong communication skills",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full object-cover object-center",
    titleClassName: "justify-end",
    img: "/profile.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Full-Stack Web Dev & Software Engineer",
    description: "Delivering end-to-end solutions with technical excellence",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Innovative problem-solver with a passion for elegant solutions",
    description: "Approaching challenges with analytical thinking",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Producer/DJ, Singer/Songwriter in my free time",
    description: "Personal Interests",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Why Hire Me?",
    description: "Discover what makes me an excellent candidate",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
    link: "/hire-me",
  },
];

export const projects = [
  {
    id: 1,
    title: "iSu Technologies Website",
    des: "Led the development of a modern website for iSu Technologies, resulting in a 45% increase in client acquisition. Overcame complex UI challenges through innovative React solutions and strategic architecture planning.",
    img: "/isutech-home.png",
    secondaryImg: ["/isutech-home.png"],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/fm.svg"],
    link: "https://www.isutech.co.za/",
  },
  {
    id: 2,
    title: "IMPACT - Business Management System",
    des: "Architected and led development of an integrated business management system that automated 80% of client acquisition and project management processes. Solved complex data relationship challenges through innovative SQL Server implementation.",
    img: "/p2.svg",
    iconLists: ["/ts.svg", "/c.svg", "/next.svg", "/tail.svg", "/re.svg"],
    link: "https://github.com/INF-370-2025/inf-370-team16",
  },
  {
    id: 3,
    title: "Career-Path-Generator",
    des: "Directed a team of 5 developers to create an AI-powered career guidance platform, implementing advanced algorithms that increased user engagement by 60%. Innovatively integrated OpenAI API to solve personalized recommendation challenges.",
    img: "/careerpath-home.png",
    secondaryImg: [
      "/careerpath-home.png",
      "/careerpath-dashboard.png",
      "/careerpath-learning.png",
      "/careerpath-assessment.png",
      "/careerpath-planner.png",
    ],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/c.svg"],
    link: "https://github.com/Sibongamandla/Career-Path-Generator/tree/master",
  },
  {
    id: 4,
    title: "Umdoni Municipal Website",
    des: "Led the modernization of the municipal website, improving citizen engagement by 75%. Resolved complex performance bottlenecks through innovative caching solutions and infrastructure optimization on AWS.",
    img: "/umdoni-home.png",
    secondaryImg: ["/umdoni-home.png"],
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/re.svg"],
    link: "https://www.umdoni.gov.za/",
  },
  {
    id: 5,
    title: "Bonsai Engineering Website",
    des: "Spearheaded the development of a modern web application that increased client inquiries by 50%. Implemented innovative responsive design solutions to address complex visual requirements across multiple device types.",
    img: "/bonsai-home.png",
    secondaryImg: ["/bonsai-home.png"],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/fm.svg"],
    link: "https://bonsaiengineering.co.za/",
  },
  {
    id: 6,
    title: "Professional Payslip Generator",
    des: "Designed and built a comprehensive payslip solution that reduced processing time by 70% for small businesses. Solved complex tax calculation and data security challenges through innovative architecture and encryption implementation.",
    img: "/payslip-home.png",
    secondaryImg: [
      "/payslip-home.png",
      "/payslip-dashboard.png",
      "/payslip-generator.png",
    ],
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/c.svg"],
    link: "https://github.com/Sibongamandla/Pay-Slip-",
  },
];

export const testimonials = [
  {
    quote:
      "Sibongamandla demonstrated exceptional leadership throughout our project. His problem-solving skills and technical expertise led to a 45% increase in client acquisition after launching our new website. His ability to navigate complex challenges while keeping the team focused was impressive.",
    name: "iSu Technologies",
    title: "Technology Company",
  },
  {
    quote:
      "Sibongamandla's leadership transformed our municipal website project. He identified critical performance bottlenecks and implemented innovative solutions that reduced page load times by 70%. His strategic approach to problem-solving and clear communication made him an invaluable partner.",
    name: "Umdoni Municipality",
    title: "Government Organization",
  },
  {
    quote:
      "Working with Sibongamandla was transformative for our business. His leadership skills shone through as he guided our project from concept to completion, solving complex technical challenges along the way. The resulting website increased our client inquiries by 50% and significantly improved our brand perception.",
    name: "Bonsai Engineering",
    title: "Engineering Firm",
  },
];

export const companies = [
  {
    id: 1,
    name: "iSu Technologies",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
    link: "https://www.isutech.co.za/",
  },
  {
    id: 2,
    name: "Umdoni Municipality",
    img: "/app.svg",
    nameImg: "/appName.svg",
    link: "https://www.umdoni.gov.za/",
  },
  {
    id: 3,
    name: "Bonsai Engineering",
    img: "/host.svg",
    nameImg: "/hostName.svg",
    link: "https://bonsaiengineering.co.za/",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Senior Software Developer",
    desc: "iSu Technologies (03/2021 - Present) - Leading development teams and architecting scalable solutions for enterprise clients. Improved project delivery time by 30% through implementing agile methodologies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: ".NET Solutions Architect",
    desc: "Creating robust backend systems using C# and .NET 8. Successfully led migration of legacy systems, reducing maintenance costs by 25% and improving performance by 40%.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Development Lead",
    desc: "Building responsive user interfaces with React.js, Angular, and Next.js. Mentored junior developers and implemented component libraries that reduced development time by 35%.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Cloud & DevOps Engineer",
    desc: "Implementing AWS Cloud solutions, Docker containerization, and CI/CD workflows. Reduced deployment errors by 60% and improved system reliability with 99.9% uptime.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Sibongamandla",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sibongamandla-mnyandu-4a8494319/",
  },
];

export const skills = [
  ".NET 8",
  "C#",
  "Java",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Angular",
  "IONIC",
  "Node.js",
  "PHP",
  "Python",
  "SQL Server",
  "MySQL",
  "MongoDB",
  "NoSQL",
  "AWS Cloud",
  "Docker",
  "Vercel",
  "Git",
  "HTML5",
  "Tailwind CSS",
  "Framer Motion",
  "Power BI",
  "Canva",
];
