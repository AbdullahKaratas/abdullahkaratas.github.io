export interface CVData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    github: string;
  };
  profile: string[];
  experience: {
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
    description?: string;
  }[];
  achievements: string[];
  skills: {
    category: string;
    items: string[];
  }[];
  engagement: string[];
  publications: string[];
  hobbies: string[];
}

export const cvDataDE: CVData = {
  personalInfo: {
    name: "Dr. Abdullah Karatas",
    title: "Enterprise Architect & Cloud Solutions Experte",
    email: "abdullah.karatas@icloud.com",
    phone: "+4917670605419",
    github: "https://github.com/AbdullahKaratas"
  },
  profile: [
    "Erfahrener Enterprise Architect und IT-Führungskraft mit umfassender Erfahrung in cloud-nativen Architekturen, IT-Projektmanagement und Digitalisierung.",
    "Spezialisiert auf Enterprise-Architektur und Cloud-Technologien sowie Optimierung von IT-Systemen und Geschäftsprozessen.",
    "Umfassende Erfahrung in technischer Architektur und strategischer Projektführung, mit besonderem Fokus auf Zielarchitekturentwicklung.",
    "Bewährte Führungskompetenz in der Leitung von Teams und Koordination von Stakeholdern zur Schaffung effektiver digitaler Lösungen."
  ],
  experience: [
    {
      title: "Enterprise Architect & Tech Lead",
      company: "SAP SE",
      location: "Walldorf/St. Leon-Rot, Deutschland",
      period: "Juli 2019 - Heute",
      responsibilities: [
        "Enterprise Architect bei SAP Converge Cloud: Entwicklung und Etablierung einer unternehmensweiten Cloud-Referenzarchitektur mit Kubernetes, CI/CD, Automatisierung und IT-Governance.",
        "Implementierung und Optimierung von Cloud-Architekturen sowie Entwicklung skalierbarer IT-Infrastrukturen.",
        "Verantwortung für Stakeholder-Management und technische Koordination von Projekten.",
        "Unterstützung bei der strategischen Weiterentwicklung der Cloud-Plattform im Unternehmen.",
        "Technische Führung in cross-funktionalen Teams und Durchführung von Domain-Driven Design und Event Storming Workshops für Microservice-Architekturen.",
        "Implementierung von cloud-nativen Lösungen mit Java/CAP/Fiori Elements/SAPUI5 und Go/Angular/Luigi.",
        "Anwendung von Machine Learning zur Geschäftsprozessoptimierung, insbesondere in der SAP Cash App, einschließlich prädiktiver Analysen und automatisierter Entscheidungssysteme."
      ]
    },
    {
      title: "Wissenschaftlicher Mitarbeiter",
      company: "Technische Universität Kaiserslautern",
      location: "Kaiserslautern, Deutschland",
      period: "Juli 2015 - Juni 2019",
      responsibilities: [
        "Forschung im Bereich Messtechnik und Sensortechnik.",
        "Entwicklung von Deep Learning und Machine Learning-basierten Lösungen für Defektrekonstruktion, Klassifikation und Regression."
      ]
    }
  ],
  education: [
    {
      degree: "Dr. rer. nat., AI/Machine Learning in Messtechnik (1,0 - Magna Cum Laude)",
      institution: "TU Kaiserslautern",
      location: "Deutschland",
      period: "Juli 2015 - Juni 2019",
      description: "Deep Learning und Neural Networks (Autoencoders) für Industrie 4.0. Vergleich von ML-Methoden mit modellbasierten Ansätzen für Defektrekonstruktion und Klassifikation."
    },
    {
      degree: "B.Sc., Maschinenbau",
      institution: "TU Kaiserslautern",
      location: "Deutschland",
      period: "April 2011 - Februar 2015"
    },
    {
      degree: "Erstes Staatsexamen, Mathematik und Physik",
      institution: "TU Kaiserslautern",
      location: "Deutschland",
      period: "April 2007 - Februar 2012"
    }
  ],
  achievements: [
    "Erfolgreiche Teilnahme am SAP Development Architect & Expert Curriculum (2023) mit Zertifizierung als Development Architect",
    "Nominierung für das SAP Catalyst Program 2023/2024 (Dev Leadership Pool – Emerging)",
    "Cloud-native Developer Stipendium für das Hyperspace Portal",
    "Nominierung als Agile Software Engineer (2021)",
    "Präsentation eines Integrationsszenarios mit einem Start-up bei der SAP d-kom (2019)"
  ],
  skills: [
    {
      category: "Enterprise Architecture",
      items: ["SAP Enterprise Architecture Frameworks", "Zielarchitekturentwicklung", "Architecture Governance"]
    },
    {
      category: "Cloud Architecture",
      items: ["Cloud Native", "Multi-Cloud", "Multi-Tenant", "Golden Path mit SAP Cloud ALM"]
    },
    {
      category: "Methoden",
      items: ["Domain-Driven Design", "Event Storming", "Architecture Reviews", "Scrum", "SAFe"]
    },
    {
      category: "JavaScript Frameworks",
      items: ["React", "UI5", "Fiori Elements"]
    },
    {
      category: "Python Libraries",
      items: ["NumPy", "Pandas", "Tensorflow", "Scikit", "Flask", "FastAPI", "Django"]
    },
    {
      category: "DevOps Tools",
      items: ["Hyperspace", "Docker", "Kubernetes", "Git"]
    },
    {
      category: "Sprachen",
      items: ["Deutsch (Muttersprache)", "Englisch (Fließend)", "Türkisch (Fortgeschritten)"]
    }
  ],
  engagement: [
    "Kinderpatenschaft über Plan International und World Vision",
    "Unterstützung von Amnesty International für Menschenrechte",
    "Teilnahme am UN-Flüchtlingshilfswerk"
  ],
  publications: [
    "Entwicklung eines Convolutional Autoencoders mit Deep Neural Networks zur Defekterkennung und Generierung idealer Referenzen für Schneidkanten",
    "Automatisierte Szenariogenerierung für Regressionstests autonomer Fahrzeuge",
    "Bestimmung von Texturrichtungen für Bodenoberflächen mit Sub-Bogenminuten-Auflösung mittels Convolutional Neural Networks (CNNs)"
  ],
  hobbies: [
    "Zeit mit Familie und Freunden verbringen",
    "Neue Städte erkunden",
    "Lesen",
    "Kochen"
  ]
};

export const cvDataEN: CVData = {
  personalInfo: {
    name: "Dr. Abdullah Karatas",
    title: "Enterprise Architect & Cloud Solutions Expert",
    email: "abdullah.karatas@icloud.com",
    phone: "+4917670605419",
    github: "https://github.com/AbdullahKaratas"
  },
  profile: [
    "Experienced Enterprise Architect and IT Leadership with extensive experience in cloud-native architectures, IT project management, and digitalization.",
    "Specialized in enterprise architecture and cloud technologies, as well as optimization of IT systems and business processes.",
    "Comprehensive experience in technical architecture and strategic project leadership, with particular focus on target architecture development.",
    "Proven leadership competence in leading teams and coordinating stakeholders to create effective digital solutions."
  ],
  experience: [
    {
      title: "Enterprise Architect & Tech Lead",
      company: "SAP SE",
      location: "Walldorf/St. Leon-Rot, Germany",
      period: "July 2019 - Present",
      responsibilities: [
        "Enterprise Architect at SAP Converge Cloud: Development and establishment of enterprise-wide cloud reference architecture with Kubernetes, CI/CD, automation, and IT governance.",
        "Implementation and optimization of cloud architectures, as well as development of scalable IT infrastructures.",
        "Responsibility for stakeholder management and technical coordination of projects.",
        "Support in strategic advancement of the cloud platform within the company.",
        "Technical leadership in cross-functional teams and facilitation of Domain-Driven Design and Event Storming workshops for microservice architectures.",
        "Implementation of cloud-native solutions with Java/CAP/Fiori Elements/SAPUI5 and Go/Angular/Luigi.",
        "Application of Machine Learning for business process optimization, particularly in SAP Cash App, including predictive analytics and automated decision-making systems."
      ]
    },
    {
      title: "Research Associate",
      company: "Technical University of Kaiserslautern",
      location: "Kaiserslautern, Germany",
      period: "July 2015 - June 2019",
      responsibilities: [
        "Research in the field of measurement technology and sensor technology.",
        "Development of Deep Learning and Machine Learning-based solutions for defect reconstruction, classification and regression."
      ]
    }
  ],
  education: [
    {
      degree: "Ph.D., AI/Machine Learning in Metrology (1.0 - Magna Cum Laude)",
      institution: "TU Kaiserslautern",
      location: "Germany",
      period: "July 2015 - June 2019",
      description: "Deep Learning and Neural Networks (Autoencoders) for Industry 4.0. Comparison of ML methods with model-based approaches for defect reconstruction and classification."
    },
    {
      degree: "B.Sc., Mechanical Engineering",
      institution: "TU Kaiserslautern",
      location: "Germany",
      period: "April 2011 - February 2015"
    },
    {
      degree: "First State Examination, Mathematics and Physics",
      institution: "TU Kaiserslautern",
      location: "Germany",
      period: "April 2007 - February 2012"
    }
  ],
  achievements: [
    "Successful participation in the SAP Development Architect & Expert Curriculum (2023) with certification as Development Architect",
    "Nomination for the SAP Catalyst Program 2023/2024 (Dev Leadership Pool – Emerging)",
    "Cloud-native developer scholarship for the Hyperspace Portal",
    "Nomination as Agile Software Engineer (2021)",
    "Presentation of an integration scenario with a start-up at SAP d-kom (2019)"
  ],
  skills: [
    {
      category: "Enterprise Architecture",
      items: ["SAP Enterprise Architecture Frameworks", "target architecture development", "architecture governance"]
    },
    {
      category: "Cloud Architecture",
      items: ["Cloud Native", "Multi-Cloud", "Multi-Tenant", "Golden Path with SAP Cloud ALM"]
    },
    {
      category: "Methods",
      items: ["Domain-Driven Design", "Event Storming", "architecture reviews", "Scrum", "SAFe"]
    },
    {
      category: "JavaScript Frameworks",
      items: ["React", "UI5", "Fiori Elements"]
    },
    {
      category: "Python Libraries",
      items: ["NumPy", "Pandas", "Tensorflow", "Scikit", "Flask", "FastAPI", "Django"]
    },
    {
      category: "DevOps Tools",
      items: ["Hyperspace", "Docker", "Kubernetes", "Git"]
    },
    {
      category: "Languages",
      items: ["German (Native)", "English (Fluent)", "Turkish (Advanced)"]
    }
  ],
  engagement: [
    "Child sponsorship through Plan International and World Vision",
    "Support of Amnesty International for human rights",
    "Participation in UN Refugee Agency"
  ],
  publications: [
    "Development of a Convolutional Autoencoder with Deep Neural Networks for defect detection and generation of ideal references for cutting edges",
    "Automated scenario generation for regression tests of autonomous vehicles",
    "Determination of texture directions for ground surfaces with sub-arcminute resolution using Convolutional Neural Networks (CNNs)"
  ],
  hobbies: [
    "Spending time with my family and friends",
    "Exploring new cities",
    "Reading",
    "Cooking"
  ]
};