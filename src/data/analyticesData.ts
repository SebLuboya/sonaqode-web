import { IService } from "@/types";
import * as ServiceIcon from "@/assets/icons/services";
import * as ServiceImage from "@/assets/images/services";

export const analyticesData: IService[] = [
  {
    title: "Data Engineer",
    description:
      "Our data engineers design, build, and maintain the robust data infrastructure that collects, stores, processes, and analyses your most critical asset information. They enable real time processing, power personalised customer experiences, and provide the foundation for data driven decision making. Their expertise in diverse frameworks and tools is vital for enhancing the efficiency of your entire data ecosystem.",
    price: 2650,
    partTime: 1750,
    paymentLink: {
      fullTime: "https://pay.gocardless.com/BRT0003C78FB60J",
      partTime: "https://pay.gocardless.com/BRT00044SMVY890",
    },
    icon: ServiceIcon.DataEngineer,
    image: ServiceImage.DataEngineer,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 4 years in respective role/Industry.",
      "Tech tools: AWS, GCP, Azure, Python, Java, Scala, SQL, Hadoop, Spark, ETL, Prometheus, NoSQL, Apache Hadoop, Apache Kafka",
      "Skills: Database Design & Architecture, Data Modeling, Data Warehousing, Programming & Scripting, Governance and Security",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
    roles: [
      "Sonaqode's Data Engineers build the robust data infrastructure that fuels business growth, transforming raw data into strategic assets, unlocking new opportunities, and driving measurable revenue. Our experts design and implement sophisticated data pipelines and models that turn complex information into actionable insights for smarter decision-making and optimised operations.",
      "They prioritise data integrity and system performance to ensure reliable accessibility, applying meticulous attention to detail and a commitment to delivering data solutions that directly support your business objectives. Our dedicated engineers bring deep expertise in SQL, Python, Spark, and Hadoop, with proven experience integrating cloud platforms, machine learning, and big data technologies to achieve exceptional data quality and reliability.",
    ],
    skillSet: [
      {
        title: "Technical Skills",
        values: [
          "Programming: Proficient in Python, Java, and Scala for data processing and manipulation.",
          "SQL: Strong SQL skills for querying and managing relational databases.",
          "Big Data Technologies: Experience with Hadoop, Spark, and other big data frameworks.",
          "Data Pipelines: Ability to build and maintain ETL/ELT pipelines using tools such as Airflow, Luigi, and Kafka.",
          "Cloud Platforms: Good knowledge of cloud based data services on AWS, Azure, and GCP.",
          "Data Warehousing and Modeling: Good understanding of data warehousing concepts and building dimensional models.",
          "Data Quality: Ability to ensure data accuracy, completeness, and consistency.",
        ],
      },
      // {
      //   title: "Soft Skills",
      //   values: [
      //     "problem solving: Identifying and resolving data-related challenges.",
      //     "Analytical Thinking: Breaking down complex problems into smaller, manageable components.",
      //     "Communication: Effectively conveying technical information to both technical and non-technical audiences.",
      //     "Collaboration: Collaboratively working with data scientists, analysts, and business stakeholders.",
      //     "Attention to Detail: Ensuring data accuracy and consistency.",
      //   ],
      // },
      {
        title: "Experience",
        values: [
          "Data engineering projects: Hands-on experience in building and maintaining data pipelines.",
          "Big data processing: Working with large datasets and distributed systems.",
          "Data warehousing: Designing and implementing data warehouses.",
          "Cloud technologies: Skilled at utilising cloud based data services for efficient data management and migrating data to cloud platforms.",
          "Data governance: Implementing data security measures and compliance standards.",
        ],
      },
    ],
    keyDeliverables: [
      {
        title: "Data Infrastructure and Pipelines",
        values: [
          "Data Ingestion: Developing pipelines to extract data from various sources databases, APIs, files.",
          "Data Transformation: Cleaning, transforming, and standardising data for analysis.",
          "Data Storage: Designing and implementing data storage solutions data warehouses, data lakes.",
          "Data Pipelines: Building automated data pipelines for efficient data movement and processing.",
        ],
      },
      {
        title: "Data Modeling and Warehousing",
        values: [
          "Data Modeling: Creating data models and schemas for effective data organisation.",
          "Data Warehousing: Designing and implementing data warehouses or data marts.",
        ],
      },
      {
        title: "Data Quality and Governance",
        values: [
          "Data Quality Assurance: Implementing data quality checks and validation processes.",
          "Data Governance: Establishing data governance policies and standards.",
        ],
      },
      {
        title: "Cloud Integration and Optimisation",
        values: [
          "Cloud Integration: Integrating data solutions with cloud platforms AWS, GCP, Azure.",
          "Cost Optimization (Optimisation): Optimising data storage and processing costs.",
        ],
      },
    ],
  },
  {
    title: "Data Analyst",
    description:
      "Unlock the potential of your data into valuable insights to drive smarter decisions, greater efficiency, and accelerated growth. Our analysts specialise in interpreting complex data, generating reports, and building visualisations that provide a deeper understanding of your customers and markets. We help you optimise operations and adapt strategies to secure long term profitability.",
    price: 2550,
    partTime: 1550,
    paymentLink: {
      fullTime: "https://pay.gocardless.com/BRT0003C78P621E",
      partTime: "https://pay.gocardless.com/BRT00044SMWBHZR",
    },
    icon: ServiceIcon.BarChart,
    image: ServiceImage.DataAnalyst,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 4 years in respective role/Industry.",
      "Tech tools: Tableau, Power BI, QlikView/Qlik Sense, Google Data Studio, Python, JavaScript, SAS, SPSS, SQL, Oracle Database, Hive",
      "Skills: Proficiency in Excel, Data Cleaning & Preparation, Statistical Analysis, Data Visualisation Principles, Programming & Scripting, Database Management.",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
    roles: [
      "Our experienced data analysts partner with your business teams to transform complex datasets into actionable strategic insights. Through rigorous analytical techniques, they empower your organisation with the clarity needed for confident, data driven decision making. We integrate analysis throughout your entire business lifecycle, embedding insights into every strategic phase rather than treating data as an afterthought. This data centric approach directly enhances productivity, accelerates processes, and optimises operational efficiency.",
      "By reducing operational costs, enhancing performance, and minimising strategic risk, we deliver a decisive competitive advantage, moving beyond standard reporting to proactive intelligence. Our analysts specialise in data mining, statistical analysis, data visualisation, and predictive modelling to create truly data driven organisations. Whether launching new products or optimising existing operations, our professionals leverage cutting edge tools and methodologies to deliver efficient, cost-effective solutions. With deep cross domain expertise, we ensure accurate, relevant analysis that drives informed decisions and sustains business growth.",
    ],
    skillSet: [
      {
        title: "Technical Skills",
        values: [
          "Data Manipulation: Proficient in SQL, Python with libraries such as Pandas, NumPy.",
          "Data Visualisation: Ability to create compelling visualisations using tools like Tableau, Power BI, and Python libraries Matplotlib, Seaborn.",
          "Statistical Analysis: Strong analytical skills using statistical methods and Python with libraries such as NumPy, Pandas, R, and Excel to draw meaningful insights.",
          "Data Modeling: Ability to structure data for analysis e.g. data warehousing, data marts.",
          "Data Mining: Adept at extracting valuable information from large datasets.",
        ],
      },
      // {
      //   title: "Soft Skills",
      //   values: [
      //     "problem solving: Ability to identify data driven solutions to business challenges.",
      //     "Critical thinking: Ability to analyse data to uncover trends and patterns.",
      //     "Business acumen: Understanding the business context and how data can impact decisions.",
      //     "Communication: Clearly present findings to both technical and non-technical audiences through visualizations and narratives.",
      //     "Attention to detail: Ensuring data accuracy and consistency.",
      //   ],
      // },
      {
        title: "Experience",
        values: [
          "Data analysis projects: Demonstrating practical experience in data driven problem solving.",
          "Industry knowledge: Understanding data from various domains e.g. Finance, marketing, healthcare.",
          "Data visualisation and storytelling: Creating impactful visualisations and narratives.",
          "Data cleaning and preparation: Experience handling messy and incomplete data.",
          "Business intelligence tools: Proficient in using BI tools for data exploration and reporting.",
        ],
      },
    ],
    keyDeliverables: [
      {
        title: "Data Collection and Preparation",
        values: [
          "Data Gathering: Collecting data from various sources databases, spreadsheets, APIs.",
          "Data Cleaning: Ensuring data accuracy, consistency, and completeness.",
        ],
      },
      {
        title: "Data Exploration and Analysis",
        values: [
          "Exploratory Data Analysis: Discovering patterns, trends, and anomalies within data.",
          "Statistical Analysis: Applying statistical methods to extract meaningful insights.",
        ],
      },
      {
        title: "Data Visualisation",
        values: [
          "Data Visualisation: Creating visual representations of data charts, graphs, dashboards.",
          "Storytelling: Communicating data insights effectively through visualisations.",
        ],
      },
      {
        title: "Reporting and Insights",
        values: [
          "Data Reports: Generating regular and ad hoc reports.",
          "Key Performance Indicators: Developing and tracking KPIs.",
          "Data driven Recommendations: Providing actionable insights based on data analysis.",
        ],
      },
      {
        title: "Data Governance and Collaboration",
        values: [
          "Data Documentation: Documenting data sources, definitions, and processes.",
        ],
      },
    ],
  },
  {
    title: "Data Scientist",
    description:
      "Our data scientists uncover critical patterns, trends, and correlations that provide deep insights into customer behavior, market dynamics, and operational performance. By mastering data analysis and predictive modeling, they deliver the strategic insights you need to optimise operations, drive innovation, enhance customer experiences, and mitigate risk securing a lasting competitive advantage.",
    price: 2900,
    partTime: 2100,
    paymentLink: {
      fullTime: "https://pay.gocardless.com/BRT0003C78ZS7TT",
      partTime: "https://pay.gocardless.com/BRT00044SMXPW9F",
    },
    icon: ServiceIcon.DataScience,
    image: ServiceImage.DataScientist,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 4 years in respective role/Industry.",
      "Tech tools: Python, R, SQL, Tableau, Power BI, Matplotlib & Seaborn, Apache Hadoop, Hive, PyTorch, Scikit-learn, Keras, Pandas, NumPy, AWS, GCP, SQL/NoSQLDatabases",
      "Skills: Probability & Statistics, Mathematics, Machine Learning & AI, Data Cleaning & Preprocessing, Data Visualisation",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
    roles: [
      "Sonaqode's Data Scientists transform complex data into a decisive competitive advantage. They build sophisticated predictive models using cutting-edge machine learning and statistical techniques to deliver high value business insights with exceptional accuracy. Our approach is rooted in meticulous data quality and continuous algorithm optimisation, ensuring every model delivers reliable, actionable intelligence tailored to your strategic objectives.",
      "Our dedicated team brings deep expertise in machine learning, deep learning, and statistical modeling, enhanced by specialised knowledge in AI, NLP, and large scale data ecosystems. They provide more than just analysis; they deliver data driven strategies that help you navigate market complexity and seize new opportunities. With a proven track record of building scalable, robust analytical solutions for both niche markets and global enterprises, we equip your business with the intelligence to lead. Partner with us to make data your most powerful asset.",
    ],
    skillSet: [
      {
        title: "Technical Skills",
        values: [
          "Programming: Proficient in Python and R, with knowledge of libraries such as Pandas, NumPy, Scikit-learn, TensorFlow, and PyTorch.",
          "Statistics and Probability: Strong foundation in statistical methods, hypothesis testing, and probability theory.",
          "Machine Learning: Expertise in various algorithms, including supervised, unsupervised, and reinforcement learning.",
          "Data Munging and Cleaning: Proficient in handling messy data, including data cleaning, transformation, and exploration.\n",
          "Data Visualisation: Ability to create compelling visualisations using tools like Python libraries Matplotlib, Seaborn or specialised software Tableau, Power BI.",
          "Big Data Technologies: Knowledge of tools like Hadoop, Spark, and cloud based data platforms.",
          "Database Management: Proficient in SQL.",
          "Cloud Computing: Familiar with cloud platforms AWS, Azure, GCP for data storage and processing.",
        ],
      },
      // {
      //   title: "Soft Skills",
      //   values: [
      //     "problem solving: Ability to break down complex problems into solvable components.",
      //     "Critical Thinking: Ability to analyse data to uncover insights and trends.",
      //     "Communication: Effectively conveying complex findings to both technical and non-technical audiences.",
      //     "Business Acumen: Understanding business goals and translating them into data driven solutions.",
      //   ],
      // },
      {
        title: "Experience",
        values: [
          "Data modeling and analysis projects: Experience in building predictive models and deriving actionable insights.",
          "Machine learning: Ability to build and deploy predictive models.",
          "Industry knowledge: Good understanding of data within various domains e.g. Finance, healthcare, marketing.",
          "Data engineering experience: Experience with working with large datasets and building data pipelines.",
          "Cloud platform usage: Leveraging cloud based data services for efficient data processing.",
          "Data visualisation: Creating effective visualisations to communicate findings efficiently.",
        ],
      },
    ],
    keyDeliverables: [
      {
        title: "Data Exploration and Preparation",
        values: [
          "Data Cleaning and Preprocessing: Handling missing values, outliers, and inconsistencies in data.",
          "Data Exploration: Discovering patterns, trends, and relationships within data.",
        ],
      },
      {
        title: "Model Building and Evaluation",
        values: [
          "Model Selection: Choosing appropriate algorithms and techniques for the problem.",
          "Model Training: Developing and training machine learning models.",
          "Model Evaluation: Assessing model performance using relevant metrics.",
        ],
      },
      {
        title: "Data Product Development",
        values: [
          "Data Pipelines: Building automated data pipelines for model deployment and retraining.",
          "Data Products: Creating data driven applications or tools.",
        ],
      },
      {
        title: "Insights and Communication",
        values: [
          "Data Storytelling: Effectively communicating insights to stakeholders through visualisations and reports.",
          "Predictive Modeling: Developing models to forecast future trends or outcomes.",
          "Business Impact Analysis: Quantifying the impact of data driven insights on business outcomes.",
        ],
      },
    ],
  },
  {
    title: "Business Intelligence Analyst",
    description:
      "Harness the power of your data to drive informed decision making and enhance business performance. Our talented analysts employ advanced tools to uncover critical trends, patterns, and correlations. This deep analysis provides a clearer understanding of your operations and market landscape, enabling you to identify opportunities, develop data-backed strategies, and secure a competitive advantage.",
    price: 2550,
    partTime: 1550,
    paymentLink: {
      fullTime: "https://pay.gocardless.com/BRT0003C792ZHPZ",
      partTime: "https://pay.gocardless.com/BRT00044SMZFJPY",
    },
    icon: ServiceIcon.BusinessIntelligence,
    image: ServiceImage.BusinessIntelligenceAnalyst,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 4 years in respective role/Industry.",
      "Tech tools: Tableau, Python, R, Power BI, Looker, QlikView/Qlik Sense, SSIS, Informatica, Alteryx, SQL, PostgreSQL, Microsoft SQL Server, Apache Spark",
      "Skills: Data Analysis, Data Visualisation, SQL, Database Management/Warehousing, Statistical Analysis, Critical Thinking, Report Writing",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
    roles: [
      "Sonaqode's Business Intelligence Analysts transform complex data into actionable strategies that drive high value business outcomes. They develop sophisticated data models and visualisations using advanced analytical techniques, ensuring accuracy and clarity for informed decision making. Their meticulous approach to data quality and dashboard design delivers outstanding insights that directly support your strategic objectives.",
      "Our dedicated analysts bring deep expertise in SQL, Python, Tableau, and Power BI, enhanced by specialised knowledge in data mining, machine learning, and big data technologies. We understand that compelling data presentation is crucial for stakeholder engagement and strategic alignment. That's why we create exceptional dashboards and reports that not only showcase performance but also tell a compelling story of opportunities and outcomes. Partnering with us means faster, more effective decision making, powerful data storytelling, and measurable business impact.",
    ],
    skillSet: [
      {
        title: "Technical Skills",
        values: [
          "Data Analysis: Proficient in SQL for data querying and manipulation with knowledge of Python or R for advanced data analysis.",
          "Data Visualisation: Ability to create compelling and informative visualisations using Tableau, Power BI, or Python libraries Matplotlib, Seaborn.\n",
          "Data Modeling: Ability to comprehend data structures and relationships, enabling effective analysis.",
          "BI Tools: Expertise in using BI tools Tableau, Power BI, Qlik for data exploration, reporting, and dashboard creation.",
          "Database Management: Knowledge of database systems SQL, NoSQL for data extraction and management.",
        ],
      },
      // {
      //   title: "Soft Skills",
      //   values: [
      //     "Business Acumen: Understanding business operations, KPIs, and how data can impact them.",
      //     "problem solving: Ability to identify data driven solutions to business challenges.",
      //     "Communication: Effectively conveying insights to both technical and non-technical audiences.",
      //     "Storytelling: Ability to present data in a clear and compelling narrative.",
      //     "Attention to Detail: Ensuring data accuracy and consistency.",
      //   ],
      // },
      {
        title: "Experience",
        values: [
          "Data Analysis Projects: Demonstrating practical experience in data analysis and reporting.",
          "Industry Knowledge: Understanding the business domain and its data requirements.",
          "Data Visualisation: Creating impactful dashboards and reports.",
          "Data Modeling: Designing data structures for efficient analysis.",
          "Business Intelligence Tools: Proficient in using BI tools for data exploration and reporting.",
        ],
      },
    ],
    keyDeliverables: [
      {
        title: "Data Analysis and Reporting",
        values: [
          "Data Exploration: Discovering patterns, trends, and anomalies within data sets.",
          "Data Visualisation: Creating clear and informative data visualisations charts, graphs.",
          "Dashboards: Developing interactive dashboards for real-time data monitoring.",
          "Ad hoc Reports: Generating custom reports based on specific business needs.",
        ],
      },
      {
        title: "Data Modeling and Infrastructure",
        values: [
          "Data Modeling: Designing data structures and relationships for efficient analysis.",
          "Data Quality Assessment: Ensuring data accuracy and consistency.",
        ],
      },
      {
        title: "Business Insights and Recommendations",
        values: [
          "Data driven Insights: Providing actionable recommendations based on data analysis.",
          "KPIs and Metrics: Defining and tracking key performance indicators KPIs to measure business success.",
        ],
      },
      {
        title: "Process Improvement and Collaboration",
        values: [
          "Process Optimisation: Identifying opportunities to improve data driven processes.",
          "Stakeholder Communication: Effectively communicating insights and recommendations to stakeholders.",
        ],
      },
    ],
  },
  {
    title: "Automation Engineer",
    description:
      "Streamline your processes with our dedicated automation engineers. They design and implement sophisticated automated systems to optimise workflows, drive efficiency, and enhance quality, ensuring your competitiveness in a rapidly evolving market. Utilising cutting edge technologies and a commitment to innovation, our specialists are ready to revolutionise your operations.",
    price: 2900,
    partTime: 2100,
    paymentLink: {
      fullTime: "https://pay.gocardless.com/BRT0003C798P3TK",
      partTime: "https://pay.gocardless.com/BRT00044SN0JDKH",
    },
    icon: ServiceIcon.Automation,
    image: ServiceImage.AutomationEngineer,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 4 years in respective role/Industry.",
      "Tech tools: JavaScript/Node.js, Python, PowerShell, Selenium, TestComplete, Appium, Azure DevOps, GitLab CI/CD, Jenkins, SaltStack, Ansible, Terraform, ARM, AWS CloudFormation",
      "Skills: Automation Framework Development, Infrastructure Automation, DevOps Practices, Cloud Computing, Problem Solving & Troubleshooting",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
    roles: [
      "Sonaqode's automation engineers transform complex operational challenges into streamlined, efficient workflows. They specialise in replacing manual tasks with sophisticated automation solutions that enhance collaboration between development and operations teams, delivering measurable gains in productivity and reliability. They combine meticulous process analysis with robust technical execution, ensuring every automated workflow is optimised for maximum efficiency and aligned with your strategic business objectives.",
      "Our dedicated engineers bring deep expertise in Selenium, Python, and RPA, enhanced by advanced capabilities in AI, machine learning, and cloud native automation. They move beyond basic scripting to create intelligent, scalable systems that drive continuous improvement. Partnering with us accelerates your time to market, significantly reduces operational costs, and creates a foundation for sustained growth through enterprise grade automation.",
    ],
    skillSet: [
      {
        title: "Technical Skills",
        values: [
          "Programming: Proficient in Python, Java, C#, or JavaScript for scripting and developing automation frameworks.",
          "Automation Tools: Competent in using automation tools like Selenium, Appium, UiPath, or Robotic Process Automation RPA platforms.",
          "Testing Frameworks: Good knowledge of testing frameworks JUnit, TestNG, pytest for creating and executing test cases.",
          "Scripting Languages: Proficient in scripting languages such as PowerShell, Bash for system automation.",
          "Continuous Integration/Continuous Delivery: Good understanding of CI/CD pipelines and tools Jenkins, GitLab, Azure DevOps.",
          "Cloud Platforms: Familiar with cloud platforms AWS, Azure, GCP for cloud based automation.",
        ],
      },
      // {
      //   title: "Skills",
      //   values: [
      //     "problem solving: Ability to identify automation opportunities and develop solutions.",
      //     "Analytical Thinking: Breaking down complex processes into automatable steps.",
      //     "Attention to Detail: Ensuring automation scripts are accurate and reliable.",
      //     "Communication: Effectively conveying technical information to both technical and non-technical stakeholders.",
      //     "Teamwork: Effectively collaborate with development, QA, and operations teams.",
      //   ],
      // },
      {
        title: "Experience",
        values: [
          "Automation Framework Development: Creating reusable automation frameworks.",
          "Test Automation: Designing and implementing test automation suites.",
          "Process Automation: Automating repetitive tasks and workflows.",
          "Cloud Platforms: Experience with cloud based automation tools and services AWS, Azure, GCP.",
          "DevOps Practices: Understanding DevOps principles and implementing automation solutions within a DevOps culture.",
        ],
      },
    ],
    keyDeliverables: [
      {
        title: "Automation Development and Implementation",
        values: [
          "Process Analysis: Identifying manual processes suitable for automation.",
          "Automation Scripting: Developing scripts or programs to automate tasks.",
          "Automation Framework Development: Creating a reusable framework for automation projects.",
          "Integration with Systems: Integrating automation solutions with existing systems and applications.",
        ],
      },
      {
        title: "Testing and Optimisation",
        values: [
          "Test Automation: Developing and executing automated test cases.",
          "Performance Optimisation: Identifying and resolving performance bottlenecks in automated processes.",
        ],
      },
      {
        title: "Deployment and Maintenance",
        values: [
          "Deployment: Deploying automation solutions into production environments.",
          "Maintenance: Monitoring and maintaining automation scripts and processes.",
        ],
      },
      {
        title: "Evaluation and Reporting",
        values: [
          "ROI Analysis: Measuring the impact of automation on efficiency and cost savings.",
          "Automation Roadmap: Developing a long term plan for automation initiatives.",
        ],
      },
    ],
  },
];

export function getServiceData(id: string) {
  return analyticesData.find(
    (service) =>
      service.title.replaceAll(" ", "-").replaceAll("/", "-").toLowerCase() ===
      id,
  );
}
