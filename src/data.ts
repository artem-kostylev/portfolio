export const companies = [
  {
    name: "Biblio Globus",
    period: "May 2022 - Present",
    image: "/images/companies/bg.jpeg",
    position: "Frontend Developer",
    about:
      "A well-known Russian tour operator specializing in providing comprehensive travel services, similar in functionality to Booking.com",
    responsibilities: [
      "Utilized Next.js and React to build dynamic, high-performance web applications.",
      "Developed custom map layers and markers to enhance user interaction and data visualization on maps.",
      "Managed application state with Zustand, ensuring efficient and predictable state updates.",
      "Optimized application performance, including code splitting, lazy loading, and server-side rendering with Next.js.",
    ],
    achievements: [
      "Introduced server-side rendering (SSR) with Next.js, improving SEO and initial page load times, leading to a 15% increase in organic traffic.",
      "Implemented advanced form validation and error handling with React-hook-form",
    ],
  },
  {
    name: "Verny",
    period: "Nov 2021 - Apr 2022",
    image: "/images/companies/verny.jpeg",
    position: "Frontend Developer",
    about: "An online store specializing in grocery sales, similar to Walmart.",
    responsibilities: [
      "Designed, developed, and maintained web applications using Nuxt.js, Vue, Pinia.",
      "Transitioned from a legacy CMS-based architecture to a modern, component-based architecture using Nuxt.js and Vue.",
      "Implemented efficient state management solutions using Pinia to ensure optimal performance and scalability.",
      "Developed complex forms with vee-validate and zod, ensuring validation, error handling, and user experience.",
      "Collaborated with the design team to create user-friendly and responsive interfaces.",
    ],
    achievements: [
      "Led the successful migration of the company's web applications from a legacy CMS to a modern stack, improving maintainability and scalability.",
      "Improved the overall code quality and maintainability by implementing best practices and conducting thorough code reviews.",
      "Introduced innovative solutions for state management with Pinia, simplifying complex state logic and improving application performance.",
    ],
  },
  {
    name: "Agro24",
    period: "Jul 2020 - Oct 2021",
    image: "/images/companies/agro24.jpeg",
    position: "Frontend Developer",
    about:
      "This company connects suppliers and buyers for wholesale food trading. It facilitates seamless transactions and provides a reliable network for trading grains, fruits, vegetables, and other food products in bulk.",
    responsibilities: [
      "Led the complete overhaul of an existing project from a legacy framework to a modern stack using Nuxt.js, Vue.js, and TypeScript.",
      "Designed and implemented scalable, maintainable, and high-performance front-end architecture.",
      "Developed reusable components and optimized application performance for better user experience.",
      "Ensured the application met industry standards and best practices for security and performance.",
      "Integrated with backend APIs to fetch and display data efficiently.",
    ],
    achievements: [
      "Successfully migrated the project to Nuxt.js, Vue.js, and TypeScript, resulting in a 40% improvement in application performance.",
      "Reduced the codebase size by 30% through refactoring and optimization, making the project easier to maintain and extend.",
      "Improved the application's loading time by 50% by implementing lazy loading and code-splitting techniques.",
      "Increased development speed by 25% through the creation of reusable components and a well-structured component library.",
    ],
  },
  {
    name: "Wildberries",
    period: "Mar 2018 - Jul 2020",
    image: "/images/companies/wb.jpeg",
    position: "Frontend Developer",
    about:
      "One of the largest e-commerce platforms in Russia, similar in functionality to Amazon.",
    responsibilities: [
      "Developed dynamic user interfaces with React, focusing on creating intuitive and responsive web experiences.",
      "Worked closely with designers to translate wireframes and mockups into high-quality code.",
      "Integrated RESTful APIs, ensuring seamless data flow between frontend and backend systems.",
      "Maintained codebase using Git, following best practices for version control and collaboration.",
    ],
    achievements: [
      "Developed a reusable component library that was adopted across multiple projects, enhancing code consistency and efficiency.",
      "Implemented an advanced state management solution using Redux, significantly reducing application bugs and improving user experience.",
    ],
  },
];

export type Company = (typeof companies)[number];
