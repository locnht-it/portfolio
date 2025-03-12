import portfolioImg from "assets/project/portfolio.png";
import reactUltimateImg from "assets/project/react-ultimate.png";

export const SOCIAL_MEDIA_DATA = {
  GITHUB_URL: "https://github.com/locnht-it",
  EMAIL_ADDRESS: "locngohuynhtan@gmail.com",
  LINKEDIN_URL: "https://www.linkedin.com/in/loc-ngo-huynh-tan/",
  FACEBOOK_URL: "https://www.facebook.com/locnht.vn",
};

export const EXPERIENCES = [
  {
    id: 1,
    title: {
      vi: "Sinh viên chuyên ngành Kỹ thuật phần mềm",
      en: "Software Engineering Student",
    },
    company: {
      vi: "Trường đại học FPT",
      en: "FPT University",
    },
    duration: {
      vi: "Tháng 8/2021 - Tháng 7/2025",
      en: "Aug 2021 - Jul 2025",
    },
  },
  {
    id: 2,
    title: {
      vi: "Lập trình viên Java",
      en: "Java Developer",
    },
    company: {
      vi: "Công ty TNHH Phần mềm FPT Hồ Chí Minh",
      en: "FPT Software Ho Chi Minh Company Limited",
    },
    duration: {
      vi: "Tháng 1/2024 - Tháng 5/2024",
      en: "Jan 2021 - May 2025",
    },
  },
  {
    id: 3,
    title: {
      vi: "Tự học tự làm",
      en: "Self Employed",
    },
    company: {
      vi: "Học tập và bổ sung kiến thức",
      en: "Study, code, and practice",
    },
    duration: {
      vi: "Tháng 8/2021 - Hiện tại",
      en: "Aug 2021 - Present",
    },
  },
];

export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Next JS",
  "Tailwind",
  "Bootstrap",
  "MaterialUI",
  "Ant Design",
  "Java",
  "C",
  "C#",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "MSSQL Server",
  "Git",
  "Docker",
  "Figma",
  "Canva",
  "Firebase",
];

export const PROJECTS = [
  {
    id: 1,
    imgPath: reactUltimateImg,
    title: {
      vi: "Ứng dụng web Quản lý sách với ReactJS và Vite",
      en: "Book Management with ReactJS and Vite",
    },
    description: {
      vi: "Đây là một dự án xây dựng một ứng dụng web Quản lý sách dựa trên công nghệ React và Vite, viết bằng Javascript. Dự án sử dụng Ant Design (antd) để làm giao diện chuyên nghiệp (UI - UX) và tối ưu hóa re-render với Uncontrolled Component.",
      en: "This is a project to build a Book Management web application based on React and Vite technology, written in Javascript. The project uses Ant Design (antd) to make a professional interface (UI - UX) and optimizes re-render with Uncontrolled Component.",
    },
    githubLink:
      "https://github.com/locnht-it/book-management-with-reactjs-and-vite",
    demoLink: "https://book-management-with-reactjs-and-vite.vercel.app/",
  },
  {
    id: 2,
    imgPath: portfolioImg,
    title: {
      vi: "Portfolio",
      en: "Portfolio",
    },
    description: {
      vi: "Đây là một dự án xây dựng Portfolio dựa trên công nghệ React và Vite, viết bằng Typescript. Dự án sử dụng nhiều thư viện nổi bật để làm giao diện chuyên nghiệp như Bootstrap, i18next, Lottie, React Fast Marquee, React Parallax Tilt, Typewriter Effect for React.",
      en: "This is a Portfolio building project based on React and Vite technology, written in Typescript. The project uses many prominent libraries to create professional interfaces such as Bootstrap, i18next, Lottie, React Fast Marquee, React Parallax Tilt, Typewriter Effect for React.",
    },
    githubLink: "https://github.com/locnht-it/portfolio",
    demoLink: "https://portfolio-loc-ngo-huynh-tan.vercel.app/",
  },
];
