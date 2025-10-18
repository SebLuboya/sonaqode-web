import { IService } from "@/types";
import * as ServiceIcon from "@/assets/icons/services";
import * as ServiceImage from "@/assets/images/services";

export const softwareData: IService[] = [
  {
    title: "Mobile App Developer",
    icon: ServiceIcon.AngleBrackets,
    image: ServiceImage.MobileAppDeveloper,
    price: 3180,
    partTime: 2080,
    paymentLink: {
      fullTime: "https://pay.gocardless.com/BRT0003C4E09X9K",
      partTime: "https://pay.gocardless.com/BRT0003C75125QD",
    },
    description:
      "Engage our skilled developers to build robust, custom applications engineered for your most complex requirements. Our experienced team, proficient in the latest technologies, specialises in creating top quality mobile apps that captivate users and generate valuable insights. We ensure a powerful mobile presence that drives sustained growth and long term success for your business.",
    roles: [
      "Sonaqode's Mobile App Engineers transform your vision into sophisticated, high-performance applications using cutting edge technologies. They specialise in both native and cross platform development, crafting intuitive user experiences that bring innovative ideas to life. By prioritising user feedback and refining designs with meticulous attention to detail, they create outstanding apps that precisely meet your audience's needs and exceed their expectations.",
      "Our dedicated developers are highly experienced across Android, iOS, React Native, and Xamarin, and integrate emerging technologies like AI, IoT, and VR to ensure top-tier performance and innovation. With a proven track record of creating secure, scalable apps for both niche markets and global clients, they deliver value-driven mobile solutions that elevate your brand and sharpen your competitive edge.",
    ],
    skillSet: [
      {
        title: "Technical Skills",
        values: [
          "Programming languages: Proficient in Node.js, Python with frameworks such as Django, Flask, Ruby on Rails, Java.",
          "Platform-specific knowledge: Deep understanding of iOS and Android ecosystems, including design guidelines, APIs, and development tools.",
          "UI/UX design: Ability to create visually appealing and user friendly interfaces. Knowledge of design principles and tools is beneficial.",
          "Mobile development frameworks: Proficient in using native development kits Xcode for iOS, Android Studio for Android and cross-platform frameworks.",
          "API integration: Skilled in integrating with backend services and third-party APIs.",
          "Database management: Good understanding of mobile friendly databases like SQLite and cloud based solutions.",
          "Version control: Proficient in Git and GitHub, managing code changes and collaboration.",
          "Testing and debugging: Ability to write comprehensive test cases and effectively troubleshoot issues.",
          "Performance optimisation: Knowledge of techniques to improve app speed, responsiveness, and battery life.",
        ],
      },
      // {
      //   title: "Soft Skills",
      //   values: [
      //     "problem solving: Ability to break down complex problems into smaller, manageable steps.",
      //     "Communication: Effective collaboration with designers, backend developers, and other team members.",
      //     "Time management: Ability to meet deadlines and prioritise tasks efficiently.",
      //     "Adaptability: Staying updated with the latest mobile development trends and technologies.",
      //   ],
      // },
      {
        title: "Experience",
        values: [
          "Agile Development: Experience with agile methodologies for project management.",
          "Cloud Platforms: Familiar with AWS, Azure, and  Firebase for backend integration and deployment.",
          "Analytics: Understanding of user behavior and app performance metrics.",
        ],
      },
    ],
    keyDeliverables: [
      {
        title: "Core Functionalities",
        values: [
          "App Architecture: Designing the overall structure and framework of the app, including the user interface and user experience.",
          "Core Features Development: Building the primary functions and features as outlined in the app's requirements.",
        ],
      },
      {
        title: "Design and User Experience",
        values: [
          "User Interface Design: Creating the visual elements and layout of the app's interface.",
          "User Experience Design: Ensuring the app is user friendly and intuitive.",
        ],
      },
      {
        title: "Technical Implementation",
        values: [
          "Code Development: Writing clean, efficient, and maintainable code for the app's functionality.",
          "API Integration: Integrating with external APIs or services as required by the app's functionality.",
          "Performance Optimisation: Ensuring the app runs smoothly and efficiently on various devices.",
        ],
      },
      {
        title: "Testing and Quality Assurance",
        values: [
          "Unit Testing: Creating and executing tests for individual code components.",
          "App Testing: Conducting thorough testing to identify and fix bugs and errors.",
        ],
      },
      {
        title: "Deployment and Maintenance",
        values: [
          "App Submission: Preparing and submitting the app to app stores Apple App Store, Google Play Store.",
        ],
      },
    ],
  },
  {
    title: "Full Stack Developer",
    description:
      "Access skilled web developers who build high performance, modern web applications from the ground up. Our full-stack experts master both front-end and back-end technologies to deliver fully customised solutions that meet your precise requirements. Ensuring exceptional performance and provide reliable, scalable, end to end solutions for your business.",
    price: 3180,
    partTime: 2145,
    paymentLink: {
      fullTime: "https://pay.gocardless.com/BRT0003C75BNAKA",
      partTime: "https://pay.gocardless.com/BRT0003C75GRFMA",
    },
    icon: ServiceIcon.Vscode,
    image: ServiceImage.FullStackDeveloper,
    roles: [
      "Our full-stack developers integrate seamlessly with your team to build robust, end to end software solutions. They ensure the delivery of high quality, functional products by embedding user-centric design and technical excellence throughout the entire development lifecycle. This holistic approach accelerates development, enhances product performance, and elevates user satisfaction all while reducing costs and minimising time to market to deliver a decisive competitive advantage.",
      "Our developers possess comprehensive expertise in front-end and back-end technologies, database architecture, and cloud integration. They are proficient in modern frameworks including React, Angular, Node.js, and Python, with advanced capabilities in emerging fields like AI, VR, and blockchain.",
    ],
    skillSet: [
      {
        title: "Technical Skills",
        values: [
          {
            title: "Front-End Development",
            values: [
              "HTML, CSS, JavaScript",
              "JavaScript frameworks: React, Angular, Vue",
              "Preprocessors: Sass or Less for CSS organisation and efficiency",
            ],
          },
          {
            title: "Back-End Development",
            values: [
              "Programming languages: Proficient in Node.js, Python with frameworks like Django, Flask, Ruby on Rails, Java.",
              "Databases: SQL MySQL, PostgreSQL, SQLite and NoSQL MongoDB, Cassandra.",
              "Server-side frameworks: Express.js Node.js, Django/Flask Python, Ruby on Rails Ruby, Spring Java.",
            ],
          },
          {
            title: "Other Essential Skills",
            values: [
              "Version control: Git and GitHub.",
              "API development: RESTful and GraphQL.",
              "Cloud platforms: AWS, Azure, or GCP",
              "DevOps: Understanding of deployment, monitoring, and infrastructure management.",
            ],
          },
        ],
      },
      // {
      //   title: "Soft Skills",
      //   values: [
      //     "problem solving: Ability to break down complex issues and find effective solutions.",
      //     "Design thinking: Understanding user needs and creating intuitive user experiences.",
      //     "Communication: Effectively collaborating with different teams and stakeholders.",
      //     "Time management: Ability to prioritise tasks and meet deadlines.",
      //     "Adaptability: Staying updated with the latest technologies and trends.",
      //   ],
      // },
      {
        title: "Experience",
        values: [
          "Agile development methodologies: Strong understanding of Agile frameworks.",
          "Cloud platforms: Familiar with cloud services AWS, Azure, GCP for deployment and scaling.",
          "DevOps practices: Knowledge of infrastructure as code, continuous integration/continuous delivery.",
          "UI/UX design: Understanding of user experience principles to create intuitive interfaces.",
        ],
      },
    ],
    keyDeliverables: [
      {
        title: "Front-end Development",
        values: [
          "User Interface Design: Creating the visual elements and layout of the application.",
          "User Experience Design: Ensuring the application is user friendly and intuitive.",
          "Front-end Development: Building the client-side of the application using technologies like HTML, CSS, and JavaScript.",
        ],
      },
      {
        title: "Back-end Development",
        values: [
          "Server-side Logic: Developing the core functionality and business logic of the application.",
          "API Development: Creating and maintaining APIs for communication between the front-end and back-end.",
          "Database Management: Designing and managing the database for storing and retrieving data.",
        ],
      },
      {
        title: "Full-Stack Integration",
        values: [
          "Integration: Integrating the front-end and back-end components to create a cohesive application.",
          "Deployment: Deploying the application to production environments.",
        ],
      },
      {
        title: "Quality Assurance and Maintenance",
        values: [
          "Testing: Writing and executing unit, integration, and end-to-end tests.",
          "Maintenance: Providing ongoing maintenance and support for the application.",
        ],
      },
    ],
  },
  {
    title: "Frontend Developer",
    description:
      "Our Front-End developers craft intuitive and engaging web and mobile applications using a powerful suite of technologies, including JavaScript, Vue.js, CSS, and HTML. They exquisitely blend design, technology, and usability to build customised solutions that captivate user engagement, ensure accessibility, and perfectly align with your unique brand identity.",
    price: 2780,
    partTime: 1780,
    paymentLink: {
      fullTime: "https://pay.gocardless.com/BRT0003C75R6A51",
      partTime: "https://pay.gocardless.com/BRT0003C75Y1DFX",
    },
    icon: ServiceIcon.Js,
    image: ServiceImage.FrontendDeveloper,
    roles: [
      "Sonaqode's Frontend Developers build intuitive web and mobile applications that deliver pixel-perfect, engaging user experiences. They transform design concepts into sophisticated interfaces through a seamless blend of design sensibility and technical expertise, creating digital products that captivate users and drive meaningful interaction. Our focus on user centered design ensures every interface optimises user journeys and influences behavior to achieve your business objectives.",
      "We recognise that a superior user interface provides a powerful competitive advantage. Our dedicated developers bring deep expertise in React, Angular, and Vue, along with specialised knowledge in emerging technologies like AI, VR, and AR. This enables them to create exceptional, future ready experiences that set your brand apart.",
    ],
    skillSet: [
      {
        title: "Technical Skills",
        values: [
          "HTML, CSS, JavaScript: A solid foundation in these core languages is indispensable.",
          "JavaScript Frameworks: Proficient in React, Angular, and Vue.",
          "CSS Preprocessors: Experience with Sass or Less for efficient styling.",
          "Responsive Design: Ability to create websites that adapt to different screen sizes.",
          "Cross browser Compatibility: Ensuring websites function correctly across various browsers.",
          "Accessibility: Understanding and implementing accessibility standards WCAG.",
          "Version Control: Proficient in Git and GitHub.",
          "Testing and Debugging: Ability to write tests and effectively troubleshoot issues to ensure code quality.",
          "Performance Optimisation: Knowledge of techniques to improve website speed and responsiveness.",
        ],
      },
      // {
      //   title: "Soft Skills",
      //   values: [
      //     "problem solving: Ability to find creative solutions to technical challenges.",
      //     "Attention to detail: Ensuring pixel-perfect designs and accurate code.",
      //     "Communication: Effectively collaborating with designers, back-end developers, and stakeholders.",
      //     "User centricity: Understanding user needs and designing accordingly.",
      //     "Experience with different frameworks and libraries: Adaptability to different technologies.",
      //     "Collaboration with design teams: Understanding design principles and working closely with other designers.",
      //   ],
      // },
      {
        title: "Experience",
        values: [
          "Collaboration: Understanding design principles and working closely with other designers.",
          "Performance optimisation: Ability to improve application speed and scalability to ensure optimal performance.",
          "Accessibility testing: Ensuring websites are user friendly and accessible to all users.",
        ],
      },
    ],
    keyDeliverables: [
      {
        title: "Core Deliverables",
        values: [
          "HTML Structure: Building the skeletal framework of the website using HTML.",
          "CSS Styling: Designing the visual appearance and layout of the website using CSS.",
          "JavaScript Functionality: Developing interactive elements and dynamic behavior using JavaScript.",
        ],
      },
      {
        title: "User Experience Focused",
        values: [
          "User Interface Design: Creating the visual elements and layout of the website or application.",
          "User Experience Design: Ensuring the website or application is user friendly and intuitive.",
          "Responsive Design: Developing websites that adapt to different screen sizes and devices.",
        ],
      },
      {
        title: "Technical Implementation",
        values: [
          "Front-end Framework Implementation: Using frameworks like React, Angular, or Vue.js to build efficient and maintainable code.",
          "API Integration: Integrating the front-end with backend services to fetch and display data.",
        ],
      },
      {
        title: "Quality Assurance and Optimisation",
        values: [
          "Cross Browser Compatibility: Ensuring the website or application works consistently across different browsers.",
          "Performance Optimisation: Improving website or application speed and responsiveness.",
        ],
      },
    ],
  },
  {
    title: "Backend Developer",
    description:
      "Elevate your project with Back-End developers who deliver robust architecture and peak performance. They specialise in building secure, scalable systems using modern tools like Java, Python, and Ruby. As experts in both SQL and NoSQL databases, they ensure consistent data flow and deliver impeccable back-end systems tailored to your exact business needs.",
    price: 2780,
    partTime: 1780,
    paymentLink: {
      fullTime: "https://pay.gocardless.com/BRT0003C765F9TB",
      partTime: "https://pay.gocardless.com/BRT0003C769Q25W",
    },
    icon: ServiceIcon.CodeFolder,
    image: ServiceImage.BackendDeveloper,
    roles: [
      "Our backend developers build the robust, scalable foundation that powers your digital products. They engineer high performance systems that ensure reliability and drive user engagement by translating complex requirements into efficient, maintainable code. This backend-focused approach accelerates your time to market and enhances overall software productivity.",
      "They specialise in reducing technical debt, strengthening application reliability, and minimizing downtime to deliver a distinct competitive advantage. Our dedicated developers are highly skilled in Node.js, Python, Ruby on Rails, and Java, with proven expertise in implementing modern architectures like microservices, serverless computing, and cloud-native solutions. Partnering with us means achieving faster deployment cycles, superior application performance, and enhanced user satisfaction through engineering excellence.",
    ],
    skillSet: [
      {
        title: "Technical Skills",
        values: [
          "Programming languages: Proficient in Python, Java, Ruby, Node.js, and PHP.",
          "Databases: Strong understanding of both SQL MySQL, PostgreSQL and NoSQL MongoDB, Cassandra databases.",
          "Server-side frameworks: Experienced with Django, Flask, Ruby on Rails, Express.js.",
          "API development: Ability to build RESTful or GraphQL APIs for data exchange.",
          "Data structures and algorithms: A good understanding of core data structures and algorithms for efficient problem solving.",
          "Version control: Proficient in Git and GitHub.",
          "Testing: Ability to write tests and effectively troubleshoot issues to ensure code quality.",
          "Cloud platforms: Familiar with AWS, Azure, and GCP for deployment and scaling.",
        ],
      },
      // {
      //   title: "Soft Skills",
      //   values: [
      //     "problem solving: Ability to analyse complex issues and find effective solutions.",
      //     "System design: Proficient in designing scalable and efficient backend systems.",
      //     "Data analysis: Strong understanding of data and the ability to derive insights from it.",
      //     "Communication: Effectively collaborating with front-end developers and other team members.",
      //     "Security: Strong knowledge of security best practices to protect data.",
      //   ],
      // },
      {
        title: "Experience",
        values: [
          "Database design and optimisation: Create efficient database schemas.",
          "Performance optimisation: Ability to improve application speed and scalability to ensure optimal performance.",
          "Security best practices: Protecting application and user data.",
          "DevOps practices: Understanding deployment, monitoring, and infrastructure management.",
        ],
      },
    ],
    keyDeliverables: [
      {
        title: "Core Functionalities",
        values: [
          "Server-side Logic: Developing the core business logic and functionalities of the application.",
          "API Development: Creating robust and efficient Application Programming Interfaces APIs for communication between the front-end and back-end.",
          "Database Design and Management: Designing and implementing the database schema to store and retrieve application data effectively.",
        ],
      },
      {
        title: "System Architecture and Performance",
        values: [
          "System Architecture: Designing the overall structure and components of the back-end system.",
          "Performance Optimization: Identifying and resolving performance bottlenecks to ensure optimal application speed and responsiveness.",
          "Scalability: Designing the backend infrastructure to handle increasing user loads and data volumes.",
        ],
      },
      {
        title: "Security and Reliability",
        values: [
          "Security Implementation: Developing security measures to protect user data and application integrity.",
          "Error Handling and Logging: Implementing robust error handling and logging mechanisms for troubleshooting and monitoring.",
        ],
      },
      {
        title: "Deployment and Maintenance",
        values: [
          "Deployment Scripts: Creating scripts for deploying the application to different environments development, testing, production.",
          "Code Documentation: Writing clear and concise documentation to explain the codebase for maintainability and collaboration.",
        ],
      },
    ],
  },
  {
    title: "UI/UX Designer",
    description:
      "Our innovative designers craft visually appealing and highly user friendly experiences for applications, software, and websites. They translate your vision into compelling designs with meticulous attention to detail, enhancing audience engagement. Delivering outstanding products that resonate with your target audience and strengthen brand loyalty, providing a distinct competitive advantage.",
    price: 2180,
    partTime: 1390,
    paymentLink: {
      fullTime: "https://pay.gocardless.com/BRT0003C76P7FXQ",
      partTime: "https://pay.gocardless.com/BRT0003C76TFSX5",
    },
    icon: ServiceIcon.Figma,
    image: ServiceImage.UiUxDesigner,
    roles: [
      "Our experienced and reliable UI/UX designers enhance development teams by crafting intuitive user experiences. Committed to delivering high value outcomes, they bring design concepts to life with the perfect blend of creative and technical skills, building sophisticated user interfaces with unmatched appeal. They go beyond treating visual aesthetics as a discrete function at the end of the design lifecycle, embedding user centered design at every development phase. Our designers create quality user flows and interactions for web and mobile applications, guiding decisions and optimising user journeys.",
      "By prioritising user satisfaction and optimising usability, they enhance user engagement with a keen eye for detail and a commitment to producing outstanding designs that meet the needs of your target audience. Engage dedicated UI/UX Designers who are highly experienced in tools like Figma, Sketch, Adobe XD, and more, with acclaimed expertise in integrating emerging tech trends such as augmented reality, virtual reality, and voice interfaces to achieve exceptional design quality.",
    ],
    skillSet: [
      {
        title: "Technical Skills",
        values: [
          "User Research: Ability to demonstrate good techniques in conducting interviews, surveys, testing, and understanding user needs.",
          "Information Architecture: Organising information in a clear and intuitive way.",
          "Wireframing and Prototyping: Creating visual representations of the user interface.",
          "Visual Design: Creating high level, aesthetically pleasing, and user friendly designs.",
          "Design Tools: Proficient in Figma, Sketch, Adobe XD, and InVision.",
          "Usability Testing: Evaluating designs through user testing to identify areas for improvement to ensure optimal user experience.",
        ],
      },
      {
        title: "Experience",
        values: [
          "User research experience: Ability to conduct and analyse user research to inform design decisions.",
          "Prototyping and testing: Creating interactive prototypes and gathering useful user feedback.",
          "Collaboration with development teams: Understanding technical constraints and working closely with developers.",
          "Design trends: Staying up to date with design trends and industry standards.",
        ],
      },
    ],
    keyDeliverables: [
      {
        title: "User Research and Understanding",
        values: [
          "User Personas: Creating detailed profiles of target users to inform design decisions.",
          "User Journey Maps: Visualising the steps a user takes to achieve a goal.",
          "Competitive Analysis: Identifying strengths and weaknesses of competitors' designs.",
        ],
      },
      {
        title: "Information Architecture and Interaction Design",
        values: [
          "Information Architecture: Structuring content and features for easy navigation.",
          "Wireframes: Creating low fidelity blueprints of the user interface.",
          "User Flows: Mapping out the user's path through the product or service.",
        ],
      },
      {
        title: "Visual Design and Prototyping",
        values: [
          "Visual Design: Creating the aesthetic look and feel of the product.",
          "Mockups: High fidelity visual representations of the user interface.",
          "Interactive Prototypes: Creating clickable prototypes to simulate the user experience.",
        ],
      },
      {
        title: "Design System and Documentation",
        values: [
          "Design System: Developing a comprehensive style guide for consistent design elements.",
        ],
      },
    ],
  },
  {
    title: "Video Content Editor",
    description:
      "Drive your brand forward with video content that captivates. Our editors become skilled partners, developing captivating animations, motion graphics, and multimedia content that align perfectly with your brand and strategic goals. They bring versatile expertise across commercial, corporate, and documentary formats to every project, ensuring the final edits are both contemporary and compelling.",
    price: 1799,
    partTime: 1189,
    paymentLink: {
      fullTime: "https://pay.gocardless.com/BRT0003C77A53V0",
      partTime: "https://pay.gocardless.com/BRT0003C77B5QMF",
    },
    icon: ServiceIcon.VideoEditor,
    image: ServiceImage.VideoContentEditor,
    roles: [
      "Sonaqode's Video Content Editors transform concepts into compelling visual narratives using industry leading tools. Committed to maximising engagements, they blend artistic vision with technical expertise to produce sophisticated videos that capture attention and drive results. They prioritise dynamic storytelling and seamless execution, applying a meticulous eye for detail to create outstanding content that resonates deeply with your target audience. Elevate your brand awareness, accelerate speed to market, and strengthen audience retention through our strategically focused visual approach.",
      "Our editors deliver a distinct competitive advantage by moving beyond generic content to enhance brand perception, clarify your message, and optimise production efficiency. Skilled in Adobe Premiere Pro, Final Cut Pro, and After Effects, they offer comprehensive expertise from concept development and scriptwriting to precision editing and motion graphics ensuring your brand stands out. Whether rapidly launching a new product or refining existing campaigns, they employ cutting edge methodologies to deliver efficient, high impact video solutions.",
    ],
    skillSet: [
      {
        title: "Technical Skills",
        values: [
          "Video Editing Software: Proficient in Adobe Premiere Pro, Final Cut Pro, and Avid Media Composer.",
          "Audio Editing: Skilled in Adobe Audition for sound design, mixing, and synchronising audio with visuals.",
          "Colour Correction and Grading: Ability to enhance visual quality and creating desired moods.",
          "Motion Graphics and Visual Effects: Adept at creating engaging visual elements to complement videos and animations, enhancing storytelling.",
          "File Formats and Codecs: Understanding different video formats and their characteristics.",
        ],
      },
      // {
      //   title: "Soft Skills",
      //   values: [
      //     "Storytelling: Ability to craft a compelling narrative through visual and audio elements.",
      //     "Creativity: Bringing fresh ideas and innovative approaches to video editing.",
      //     "Attention to Detail: Ensuring accuracy and consistency throughout the editing process.",
      //     "Time Management: Ability to meet deadlines while maintaining high-quality output.",
      //     "Collaboration: Working effectively with directors, producers, and other team members.",
      //   ],
      // },
      {
        title: "Experience",
        values: [
          "Video editing: Versatile in a range of editing styles and skills, with the ability to edit raw footage to meet high-quality standards.",
          "Collaboration with creative teams: Understanding the creative process and working effectively with directors, producers, and marketing teams to achieve the required objectives.",
          "Staying updated with industry trends: Keeping up with new technologies and editing techniques.",
        ],
      },
    ],
    keyDeliverables: [
      {
        title: "Video Editing and Post-Production",
        values: [
          "Video Editing: Assembling raw footage into a cohesive narrative.",
          "Color Correction and Grading: Enhancing the visual quality of the video.",
          "Audio Editing and Mixing: Adjusting sound levels, adding music, and sound effects.",
          "Special Effects and Visual Effects: Incorporating visual enhancements to enhance storytelling.",
        ],
      },
      {
        title: "Content Creation and Adaptation",
        values: [
          "Video Formatting: Adjusting video for different platforms e.g., social media, websites.",
          "Subtitles and Captions: Adding subtitles or captions for accessibility and language adaptation.",
          "Video Optimization: Compressing video files for efficient delivery without compromising quality.",
        ],
      },
      {
        title: "Project Management and Collaboration",
        values: [
          "Asset Management: Organising and managing video files and assets.",
          "Collaboration: Working effectively with other team members e.g., producers, directors.",
          "Deliverables: Providing final video files in required formats and specifications.",
        ],
      },
    ],
  },
  {
    title: "QA Tester",
    description:
      "Our QA team comprises seasoned experts who develop streamlined testing and quality management procedures for your project. They leverage cutting edge technologies and adhere to industry leading standards. We emphasise that quality assurance extends far beyond delivering bug free software it's about ensuring excellence, reliability, and a superior user experience.",
    price: 2690,
    partTime: 1690,
    paymentLink: {
      fullTime: "https://pay.gocardless.com/BRT0003C77FZP76",
      partTime: "https://pay.gocardless.com/BRT0003C77K829P",
    },
    icon: ServiceIcon.QaTesting,
    image: ServiceImage.QaTester,
    roles: [
      "Our experienced QA engineers strengthen development teams by conducting comprehensive testing across diverse environments. Through rigorous quality assurance, they ensure your software and websites perform flawlessly. They integrate testing throughout the entire development lifecycle, embedding quality at every phase rather than treating it as a final step. This insight driven approach boosts development productivity, accelerates release speed, and elevates product quality.",
      "By reducing development costs, enhancing software reliability, and minimising management overhead, we deliver a superior user experience that stands out in the marketplace. Our experts excel in automation, continuous testing, and DevOps, using cutting edge tools to deliver efficient, comprehensive testing. Whether you're launching a new application or modernising business processes, the result is a superior, market ready product that drives user satisfaction and fosters sustainable business growth.",
    ],
    skillSet: [
      {
        title: "Technical Skills",
        values: [
          "Testing methodologies: Good understanding of various testing types functional, non functional, integration and ability to appropriately apply them.",
          "Test case creation: Skilled in developing comprehensive test cases to cover all possible scenarios.",
          "Defect tracking: Using bug tracking tools to report and manage defects.",
          "Automation testing: Proficient in Selenium, Appium for efficient testing.",
          "Database knowledge: Strong understanding of SQL for testing data driven applications.",
          "Programming languages: Good knowledge of Python, Java programming languages.",
        ],
      },
      // {
      //   title: "Soft Skills",
      //   values: [
      //     "Analytical Thinking: Identifying potential issues and root causes.",
      //     "Attention to Detail: Thoroughness in testing to uncover defects.",
      //     "Communication: Effectively conveying test results and issues.",
      //     "problem solving: Finding solutions to complex testing challenges.",
      //     "Teamwork: Collaborating with developers, project managers, and other stakeholders.",
      //   ],
      // },
      {
        title: "Experience",
        values: [
          "Software development lifecycle: Understanding the entire development process.",
          "Agile methodologies: Experience working in agile environments.",
          "Test automation frameworks: Proficient in using automation tools.",
          "Performance testing: Ability to evaluate software performance under different conditions.",
          "Security testing: Identifying vulnerabilities in software applications.",
        ],
      },
    ],
    keyDeliverables: [
      {
        title: "Test Planning and Execution",
        values: [
          "Test Plan: A comprehensive document outlining the testing scope, objectives, and strategies.",
          "Test Cases: Detailed test cases covering various functionalities and scenarios.",
          "Test Execution: Executing test cases to identify defects and issues.",
          "Test Reports: Documenting test results, defects, and their status.",
        ],
      },
      {
        title: "Defect Management",
        values: [
          "Defect Reporting: Logging and tracking defects found during testing.",
          "Defect Retesting: Verifying defect fixes and ensuring they don't introduce new issues.",
        ],
      },
      {
        title: "Test Automation",
        values: [
          "Test Automation Scripts: Developing and maintaining automated test scripts.",
          "Test Automation Framework: Implementing a test automation framework for efficient testing.",
        ],
      },
      {
        title: "Quality Assurance",
        values: [
          "Quality Assurance Reports: Providing regular reports on product quality and testing progress.",
          "Risk Assessment: Identifying potential risks and recommending mitigation strategies.",
        ],
      },
    ],
  },
  {
    title: "IT Support Engineer",
    description:
      "We ensure your IT infrastructure is a strategic asset. Our IT Engineers deliver comprehensive technical support by collaborating with cross-functional teams to deploy, configure, and maintain business aligned IT infrastructure. They utilise advanced tools and techniques to optimise performance, strengthen security, and drive continuous performance improvements through proactive problem solving.",
    price: 899,
    partTime: 549,
    paymentLink: {
      fullTime: "https://pay.gocardless.com/BRT0003C77ZB17H",
      partTime: "https://pay.gocardless.com/BRT0003C7866MYB",
    },
    icon: ServiceIcon.ItSupport,
    image: ServiceImage.ItSupportEngineer,
    roles: [
      "Sonaqode's IT Support Engineers leverage advanced tools to deliver rapid and effective problem resolution. Through systematic troubleshooting, these experts ensure seamless daily operations across your organisation. They go beyond reactive incident management by embedding proactive support and user satisfaction into every IT interaction. Our engineers develop robust incident management processes and comprehensive knowledge bases to streamline decisions and enhance system performance. This user centric methodology directly boosts productivity, accelerates service delivery, and strengthens operational efficiency.",
      "By minimising downtime, improving the digital employee experience, and reducing IT related risks, they deliver a strategic advantage instead of merely addressing tickets. Our dedicated engineers are highly skilled in troubleshooting, software deployment, hardware maintenance, and network support, with proven expertise in emerging technologies like cloud computing, remote support solutions, and IT automation.",
    ],
    skillSet: [
      {
        title: "Essential Technical Skills",
        values: [
          "Software Troubleshooting: Proficient in resolving software issues and conflicts.",
          "Network Troubleshooting: Understanding of network fundamentals and ability to diagnose network problems.",
          "Operating Systems: Proficient in Windows, macOS, and Linux environments.",
          "Application Support: Knowledge of common software applications Office suite, email.",
          "Remote Support Tools: Proficient in TeamViewer or Remote Desktop, capable of troubleshooting issues remotely and efficiently guiding users through technical problems.",
          "Ticketing Systems: Experience with help desk software for issue tracking.",
          "Network management: Familiar with network management tools and concepts, such as DNS, DHCP, TCP/IP, and VPN.",
        ],
      },
      // {
      //   title: "Soft Skills",
      //   values: [
      //     "problem solving: Ability to diagnose and resolve technical issues efficiently.",
      //     "Customer Service: Excellent communication and interpersonal skills, providing clear and helpful explanations to users.",
      //     "Time Management: Prioritising tasks and managing multiple requests.",
      //     "Attention to Detail: Accurate documentation of issues and solutions.",
      //   ],
      // },
      {
        title: "Experience",
        values: [
          "Help desk or technical support role: Practical experience in handling user issues.",
          "Customer service industry: Experience in dealing with customers and resolving complaints.",
          "Technical documentation: Creating clear and concise knowledge base articles using Microsoft Office Word, Excel or Google Workspace Docs, Sheets.",
        ],
      },
    ],
    keyDeliverables: [
      {
        title: "Technical Support and Problem Resolution",
        values: [
          "Incident Management: Responding to and resolving IT-related issues and inquiries.",
          "Problem Solving: Diagnosing and resolving complex technical problems.",
          "Technical Support: Providing assistance and guidance to users on hardware and software issues.",
        ],
      },
      {
        title: "System Maintenance and Administration",
        values: [
          "Hardware and Software Maintenance: Ensuring systems and equipment are functioning optimally.",
          "System Updates and Patches: Applying necessary updates and patches to maintain system security and performance.",
          "User Account Management: Creating, modifying, and deleting user accounts and permissions.",
        ],
      },
      {
        title: "Service Delivery and Improvement",
        values: [
          "IT Service Delivery: Providing efficient and effective IT services to end-users.",
          "Knowledge Base Management: Creating and updating knowledge base articles for self-service support.",
          "User Training: Conducting training sessions on IT systems and software.",
        ],
      },
      {
        title: "Process Improvement",
        values: [
          "Process Improvement: Identifying opportunities to improve IT support processes and efficiency.",
        ],
      },
    ],
  },
];

export function getServiceData(id: string) {
  return softwareData.find(
    (service) =>
      service.title.replaceAll(" ", "-").replaceAll("/", "-").toLowerCase() ===
      id,
  );
}
