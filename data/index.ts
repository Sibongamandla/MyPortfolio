export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full object-cover object-center",
    titleClassName: "justify-end",
    img: "/profile.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Full-Stack Web Dev & Software Engineer",
    description: "",
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
    title: "Tech enthusiast with a passion for development.",
    description: "",
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
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "iSu Technologies Website",
    des: "Built a modern website for iSu Technologies, to improve client acquisition using React.js, Vite, Tailwind, TypeScript, and Vercel.",
    img: "/isutech-home.png",
    secondaryImg: ["/isutech-home.png"],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/fm.svg"],
    link: "https://www.isutech.co.za/",
  },
  {
    id: 2,
    title: "IMPACT - Business Management System",
    des: "Built an automated client acquisition, contract management, project management, and business management system using Angular, Typescript, C#, .NET 8, SQL Server, and Docker.",
    img: "/p2.svg",
    iconLists: ["/ts.svg", "/c.svg", "/next.svg", "/tail.svg", "/re.svg"],
    link: "https://github.com/INF-370-2025/inf-370-team16",
  },
  {
    id: 3,
    title: "Career-Path-Generator",
    des: "A comprehensive platform for students to explore career paths, plan education, and access resources using MongoDB, OpenAI API, React.js, and Python.",
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
    des: "Improved the aifused mvc framework website for the Municipality using PHP, JavaScript, Docker, AWS Cloud, and MYSQL.",
    img: "/umdoni-home.png",
    secondaryImg: ["/umdoni-home.png"],
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/re.svg"],
    link: "https://www.umdoni.gov.za/",
  },
  {
    id: 5,
    title: "Bonsai Engineering Website",
    des: "A modern web application for Bonsai Engineering, featuring a contact form, project portfolio, and more using React, Tailwind, Typescript, and vite.",
    img: "/bonsai-home.png",
    secondaryImg: ["/bonsai-home.png"],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/fm.svg"],
    link: "https://bonsaiengineering.co.za/",
  },
  {
    id: 6,
    title: "Professional Payslip Generator",
    des: "A feature-rich payslip generator allowing businesses to create professional payslips with comprehensive earnings and deductions calculations using Next.js, TypeScript, and TailwindCSS.",
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
      "Working with Sibongamandla was an excellent experience. His expertise in web development and software engineering brought our project to the next level. The website he created for us perfectly represents our brand and has significantly improved our client acquisition.",
    name: "Client A",
    title: "Technology Company",
  },
  {
    quote:
      "Sibongamandla and his team delivered an exceptional solution for our municipal website. His technical knowledge and attention to detail resulted in a user-friendly, responsive site that has greatly improved our online presence and service to our constituents.",
    name: "Client B",
    title: "Government Organization",
  },
  {
    quote:
      "The website created by Sibongamandla exceeded our expectations. His understanding of our requirements and ability to translate them into an engaging, functional website was impressive. We highly recommend his services.",
    name: "Client C",
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
    title: "Junior Software Developer",
    desc: "iSu Technologies (03/2021 - Present) - Developing and maintaining web applications and software solutions for clients.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: ".NET Developer",
    desc: "Creating robust backend systems using C# and .NET 8 while implementing SQL Server databases for data management.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Developer",
    desc: "Building responsive user interfaces with React.js, Angular, and Next.js, focusing on performance and user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Cloud & DevOps",
    desc: "Implementing AWS Cloud solutions, Docker containerization, and continuous integration/deployment workflows.",
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
