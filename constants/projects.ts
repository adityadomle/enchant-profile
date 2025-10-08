export const projects = [
  {
    title: "Nike Reimagined | Modern Redesign Concept",
    slug: "nike-reimagined",
    tagline:
      "A sleek and modern redesign of Nike’s official web experience built with React and Tailwind CSS.",
    overview:
      "Nike Reimagined is a creative redesign project focused on delivering a refined, high-performance web experience inspired by Nike’s global brand identity. It highlights a clean, minimal UI with smooth transitions, responsive layouts, and optimized performance across devices. The project demonstrates a balance of aesthetics and functionality for a real-world eCommerce feel.",
    features: [
      "Minimalist and modern user interface design",
      "Fully responsive layouts optimized for all devices",
      "Smooth page transitions and animations with Framer Motion",
      "Optimized build process with Vite for fast loading",
      "Deployed on Vercel for production-grade performance",
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "Vercel",
    ],
    challenges: [
      "Maintaining brand consistency while reimagining Nike’s design language.",
      "Achieving smooth animations without affecting performance.",
      "Ensuring pixel-perfect responsiveness across devices.",
      "Optimizing load times for a better user experience.",
    ],
    learnings: [
      "Mastered efficient UI composition with React and Tailwind CSS.",
      "Improved understanding of animation principles using Framer Motion.",
      "Enhanced deployment workflow using Vercel and Vite integration.",
      "Developed better practices for responsive and scalable frontend design.",
    ],
    feedback: false,
    links: {
      live: "https://nike-reimagined-mu.vercel.app/",
      github: "https://github.com/adityadomle/nike-reimagined",
    },
  },

  {
    title: "Portfolio | Aditya Domle",
    slug: "portfolio",
    tagline:
      "A dynamic portfolio showcasing my projects, skills, and contributions using the latest web technologies.",
    overview:
      "My personal portfolio is built to highlight my journey as a developer. It integrates advanced features like profile views tracking, a love count mechanism, and server-side actions for seamless interactivity and performance.",
    features: [
      "API to track and display profile views in real-time.",
      "Love count feature to allow visitors to express appreciation for the work.",
      "Implemented server actions using the latest Next.js features.",
      "Dynamic project listing with slug-based routing for detailed pages.",
      "Mobile-responsive and optimized for all devices.",
      "Integration with MongoDB using Mongoose for efficient data management.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Mongoose",
      "MongoDB",
      "Tailwind CSS",
      "Radix UI",
      "TypeScript",
    ],
    challenges: [
      "Implementing real-time tracking for profile views efficiently.",
      "Designing and integrating a scalable database schema with Mongoose.",
      "Utilizing server actions for seamless and performant interactions.",
      "Ensuring cross-browser and device compatibility for UI components.",
    ],
    learnings: [
      "Deepened knowledge of Next.js server actions and their use cases.",
      "Gained experience in designing interactive UI components.",
      "Enhanced understanding of MongoDB operations and ORM with Mongoose.",
      "Improved ability to optimize performance for web applications.",
    ],
    feedback: true,
    links: {
      live: "https://adi-ten.vercel.app",
      github: "https://github.com/adityadomle",
    },
  },
  {
    title: "News Hub | Real-Time News Platform",
    slug: "news-hub",
    tagline:
      "A real-time news platform delivering the latest headlines across various categories using the News API.",
    overview:
      "News Hub is a responsive and dynamic web application designed to provide users with up-to-date news from India and around the world. Built with React and TypeScript, the platform integrates the News API to fetch real-time stories, organized into categories like technology, business, sports, and entertainment. The clean UI ensures a smooth reading experience, while the optimized frontend guarantees fast performance.",
    features: [
      "Real-time news updates fetched from the News API.",
      "Categorized news sections for better content navigation.",
      "Responsive design for an optimal viewing experience on all devices.",
      "Built with Vite for fast development and performance optimization.",
      "Clean and accessible UI components powered by shadcn/ui and Tailwind CSS.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "shadcn-ui",
    ],
    challenges: [
      "Integrating and managing dynamic data from the News API.",
      "Designing a clean UI to handle real-time content updates efficiently.",
      "Optimizing performance and build times using Vite.",
      "Ensuring responsiveness and accessibility across devices.",
    ],
    learnings: [
      "Improved understanding of working with external APIs in React applications.",
      "Enhanced experience in using TypeScript for type-safe development.",
      "Learned to optimize frontend builds using Vite and modular UI design.",
      "Developed better state management practices for dynamic data handling.",
    ],
    feedback: true,
    links: {
      live: "https://news-hub-seven-chi.vercel.app/",
      github: "https://github.com/adityadomle/news-hub",
    },
  },
  {
    title: "Freshmart Store | Modern Grocery Web App",
    slug: "freshmart-store",
    tagline:
      "A clean, modern, and responsive grocery store web app built with React, Vite, Redux, and Tailwind CSS.",
    overview:
      "Freshmart Store is a modern grocery shopping platform designed to offer users a seamless and visually appealing experience. Built using React and Vite, it focuses on performance and smooth navigation. Redux ensures efficient state management for cart operations and product handling, while Tailwind CSS provides a clean and responsive interface optimized for all devices.",
    features: [
      "Modern and responsive UI optimized for all screen sizes.",
      "Smooth routing and navigation for an app-like experience.",
      "State management using Redux for efficient cart and product updates.",
      "Fast development and performance optimization powered by Vite.",
      "Clean design and user-friendly layout for better usability.",
    ],
    techStack: [
      "React",
      "Vite",
      "Redux",
      "Tailwind CSS",
    ],
    challenges: [
      "Implementing scalable state management with Redux.",
      "Ensuring responsive and consistent UI across devices.",
      "Optimizing performance and build speed using Vite.",
      "Designing a smooth and intuitive navigation flow.",
    ],
    learnings: [
      "Enhanced understanding of Redux for managing global state efficiently.",
      "Improved skills in responsive UI design using Tailwind CSS.",
      "Learned performance tuning techniques with Vite.",
      "Gained experience in creating scalable and maintainable frontend structures.",
    ],
    feedback: true,
    links: {
      live: "https://freshmart-store.vercel.app",
      github: "https://github.com/adityadomle/freshmart-store",
    },
  },
  {
    title: "GitHub Profile Viewer | Instant GitHub Insights",
    slug: "github-profile-viewer",
    tagline:
      "An interactive web app to instantly view GitHub profiles with clean UI built using HTML, CSS, and JavaScript.",
    overview:
      "GitHub Profile Viewer allows users to instantly fetch and view detailed GitHub profiles using the GitHub REST API. The app displays essential user information including profile picture, name, bio, followers, repositories, and more. With a responsive and minimalist interface, it offers a smooth experience for exploring any GitHub account directly from the browser.",
    features: [
      "Instantly search and view any GitHub user's profile.",
      "Displays profile picture, username, bio, followers, and repositories.",
      "Responsive and clean user interface for better readability.",
      "Utilizes GitHub REST API for fetching real-time profile data.",
      "Lightweight structure ensuring fast performance and accessibility.",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub API",
    ],
    challenges: [
      "Fetching and managing API data efficiently with JavaScript.",
      "Designing a clean, minimal, and responsive interface.",
      "Handling errors for invalid or non-existent GitHub users.",
      "Ensuring smooth and fast data rendering without frameworks.",
    ],
    learnings: [
      "Strengthened understanding of API integration using JavaScript.",
      "Improved skills in building responsive layouts with pure CSS.",
      "Learned effective DOM manipulation and async handling.",
      "Enhanced ability to design lightweight, framework-free web apps.",
    ],
    feedback: true,
    links: {
      live: "https://adityadomle.github.io/GitHub-Profile-Viewer/",
      github: "https://github.com/adityadomle/GitHub-Profile-Viewer",
    },
  },
];
