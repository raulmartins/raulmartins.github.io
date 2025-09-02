export const projects = [
  {
    id: 1,
    title: "Customer Experience Platform - CX Studio",
    description:
      "Scalable platform for managing customer experiences and data at Mercado Livre.",
    image: "/images/mercadolivre.png",
    tags: ["CX", "Microservices", "Observability"],
    details: {
      overview:
        "Collaborated in the development of CX Studio, a scalable customer experience platform with enhanced observability and data modeling.",
      challenges:
        "Needed to ensure data consistency and performance while integrating multiple services and improving user experience.",
      solutions:
        "Designed robust data models and implemented observability with Datadog and New Relic for proactive monitoring.",
      results:
        "Improved customer experience through faster response times and increased system reliability, supporting millions of transactions.",
      technologies: ["React", "Next.js", "Node.js", "Datadog", "New Relic"],
    },
  },
  {
    id: 2,
    title: "XP Empresas Client Onboarding System",
    description:
      "Client onboarding solution supporting multiple brands within XP Inc.",
    image: "/images/xpempresas.png",
    tags: ["FinTech", "Client Onboarding", "Enterprise Software"],
    details: {
      overview:
        "Led architectural design and implementation of the client onboarding system, ensuring scalability and compliance across brands.",
      challenges:
        "Needed to integrate with CRM (Salesforce) and existing databases while ensuring data integrity and compliance.",
      solutions:
        "Designed a modular architecture with seamless Salesforce integration and implemented automated data validation.",
      results:
        "Reduced client onboarding time by 40%, increased data accuracy, and improved internal operational efficiency.",
      technologies: ["Node.js", "React", "Next.js", "Azure", "RabbitMQ"],
    },
  },
  {
    id: 3,
    title: "API Management for Telecom Services",
    description:
      "Reusable and scalable REST APIs for major telecom providers at OSF Global and iFactory.",
    image: "/images/claro.png",
    tags: ["Telecom", "API Development", "Microservices"],
    details: {
      overview:
        "Developed RESTful APIs adhering to TMForum standards, ensuring reusability and scalability for telecom services.",
      challenges:
        "Had to design APIs capable of serving multiple applications while maintaining strict performance and monitoring standards.",
      solutions:
        "Implemented APIs with robust monitoring via Dynatrace and automated deployment pipelines for reliable operations.",
      results:
        "Enhanced service reliability, reduced contact rate by improving user experience, and optimized system monitoring.",
      technologies: [
        "Java",
        "Spring Boot",
        "ZUP API Manager",
        "Dynatrace",
        "Microservices",
      ],
    },
  },
];
