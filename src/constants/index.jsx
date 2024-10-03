export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Rodrigo Torres Terrones',
    position: 'CTO of Cimbo',
    img: 'assets/review4.png',
    review:
      "Gabriel stands out as one of the quickest learners I've encountered throughout my career. His eagerness to acquire essential skills in tackling diverse technological challenges is truly impressive. Having collaborated closely with him at Bitio and on personal projects over the past few months, I can confidently attest to his unwavering commitment to delivering on his promises and being accountable for his responsibilities.",
  },
  {
    id: 2,
    name: 'Francisco Rosales',
    position: 'Data Scientist at Center For Advanced Analytics',
    img: 'assets/review2.png',
    review:
      "Working with Gabriel on AI initiatives has been a game-changer for our team. His expertise in Next.js, Nest.js, and cloud technologies like GCP has greatly accelerated our project timelines. He's proactive, innovative, and a true team player.",
  },
  {
    id: 3,
    name: 'Trinidad Palacios',
    position: 'CEO of Cimbo',
    img: 'assets/review1.png',
    review:
      "Gabriel developed our social media automation app from scratch. His proficiency in React.js, FastAPI, and cloud services like GCP allowed us to launch on time and exceed our performance expectations. His dedication and technical skills are outstanding.",
  },
];

export const myProjects = [
  {
    title: 'Trello Clone React Native App',
    desc: 'This is a Trello clone built using React Native. It allows users to create, edit, and delete boards, and cards. Users can also add comments and attachments to their cards.',
    subdesc:
      'Built as a unique Software-as-a-Service app with React Native, Supabase, and Clerk.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
    url: 'https://github.com/Bellota22/TrelloClone',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/supabase.svg',
      },
    ],
  },
  {
    title: 'Todo technical challenge',
    desc: 'This is a Todo app built using React.js. It allows users to create, edit, and delete boards, and cards.',
    subdesc:
      'The technoloy stack used in this project is React.js, TailwindCSS, TypeScript, and Mantine.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    url: 'https://github.com/Bellota22/RavnChallenge',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      
    ],
  },
  {
    title: 'Travel App Landing',
    desc: ' This is a Travel App landing built using React.js.',
    subdesc:
      'The technoloy stack used in this project is React.js and TailwindCSS',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    url:'https://github.com/Bellota22/Landing',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
     
    ],
  },
  // {
  //   title: 'Horizon - Online Banking Platform',
  //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
  //   subdesc:
  //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
  //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
  //   texture: '/textures/project/project4.mp4',
  //   logo: '/assets/project-logo4.png',
  //   logoStyle: {
  //     backgroundColor: '#0E1F38',
  //     border: '0.2px solid #0E2D58',
  //     boxShadow: '0px 0px 60px 0px #2F67B64D',
  //   },
  //   spotlight: '/assets/spotlight4.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Imaginify - AI Photo Manipulation App',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.07,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Center For Advanced Analytics',
    pos: 'Lead Software Engineer',
    duration: 'Apr 2024 - Present',
    title: "Leading a team to design a scalable platform using Next.js, NestJS, and GCP. Developed scrapers with Puppeteer and integrated PostgreSQL for data storage.",
    icon: 'https://media.licdn.com/dms/image/v2/D4E0BAQGkNG0-9w2Jww/company-logo_200_200/company-logo_200_200/0/1720632775242/center_for_advanced_analytics_logo?e=1735776000&v=beta&t=x5ip3x2EQuS3P-QFW7glcDr19O--5ioc3thN2wX0gqU',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Center For Advanced Analytics',
    pos: 'Full Stack Developer',
    duration: 'Jun 2024 - Sep 2024',
    title: "Built platforms for veterinary clinics and radio broadcasters. Used Next.js, Server Actions, GCP, and Docker to deploy robust solutions.",
    icon: 'https://media.licdn.com/dms/image/v2/D4E0BAQGkNG0-9w2Jww/company-logo_200_200/company-logo_200_200/0/1720632775242/center_for_advanced_analytics_logo?e=1735776000&v=beta&t=x5ip3x2EQuS3P-QFW7glcDr19O--5ioc3thN2wX0gqU',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Center For Advanced Analytics',
    pos: 'AI Engineer',
    duration: 'Apr 2024 - Jun 2024',
    title: "Developed AI-driven audio-to-text scripts using Python and Whisper, deployed on GCP with Docker.",
    icon: 'https://media.licdn.com/dms/image/v2/D4E0BAQGkNG0-9w2Jww/company-logo_200_200/company-logo_200_200/0/1720632775242/center_for_advanced_analytics_logo?e=1735776000&v=beta&t=x5ip3x2EQuS3P-QFW7glcDr19O--5ioc3thN2wX0gqU',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'SkillMapper.AI (Techstars \'23)',
    pos: 'Software Engineer',
    duration: 'Feb 2024 - Apr 2024',
    title: "Refactored components and built UI using Next.js, improving platform efficiency and user experience.",
    icon: 'https://media.licdn.com/dms/image/v2/C560BAQGxmBy9kUjiHA/company-logo_100_100/company-logo_100_100/0/1648656433335/skillmapper_logo?e=1735776000&v=beta&t=ACKRHuSLCDAoxtGyGw8J5plcL_INwUfh8lzk_DwKZI0',
    animation: 'victory',
  },
  {
    id: 5,
    name: 'Cimbo',
    pos: 'Software Engineering Consultant',
    duration: 'Nov 2023 - Mar 2024',
    title: "Developed a social media content management app from scratch using React.js, FastAPI, and GCP.",
    icon: 'https://media.licdn.com/dms/image/v2/D4E0BAQEVJW1IMomQWQ/company-logo_100_100/company-logo_100_100/0/1699373438329/cimbo_ai_logo?e=1735776000&v=beta&t=t5iEmbMnM5syBGriJ3494dc2lpeI1xQot8P0DOK0VG0',
    animation: 'clapping',
  },
  {
    id: 6,
    name: 'TANTEA FOOD',
    pos: 'Fullstack Engineer',
    duration: 'Oct 2023 - Feb 2024',
    title: "Built a delivery platform for restaurants, focusing on backend infrastructure with FastAPI and frontend using React.js.",
    icon: 'https://media.licdn.com/dms/image/v2/D4E0BAQG8Ncn1C4ZhTw/company-logo_100_100/company-logo_100_100/0/1682646715703?e=1735776000&v=beta&t=G0SjE30ijH8AHuIXKTYLSrLOcE6nVPjOrA20pSwA-8o',
    animation: 'salute',
  },
  {
    id: 7,
    name: 'IAnCarlo',
    pos: 'Fullstack Developer',
    duration: 'Jul 2023 - Nov 2023',
    title: "Extracted and analyzed data from various legal entities using Python, Pinecone, and Langchain.",
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQafnXofWMNCJxkOxAqLbzhmbx09Go-smT_IQ&s',
    animation: 'victory',
  },
  {
    id: 8,
    name: 'Bitio',
    pos: 'Data Engineer',
    duration: 'May 2023 - Jul 2023',
    title: "Automated web scraping from Amazon Marketplaces, creating an interface for data display to the team.",
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQafnXofWMNCJxkOxAqLbzhmbx09Go-smT_IQ&s',
    animation: 'clapping',
  },
  {
    id: 9,
    name: 'Stealth',
    pos: 'Data Collector',
    duration: 'Feb 2023 - Apr 2023',
    title: "Documented and extracted data from secure websites using Python and web scraping techniques.",
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQafnXofWMNCJxkOxAqLbzhmbx09Go-smT_IQ&s',
    animation: 'salute',
  },
];
