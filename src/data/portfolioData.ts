export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  date: string;
  tools: string[];
  description: string[];
  githubUrl?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ExtraCurricular {
  title: string;
  organization: string;
  duration: string;
  description: string;
}

export interface Award {
  title: string;
  description: string;
  year: string;
}

export const personalInfo = {
  name: "ALOK MAURYA",
  title: "GenAI & ML Engineer",
  contact: {
    phone: "+91 8303499901",
    email: "alok_m@mt.iitr.ac.in",
    location: "Roorkee, Uttrakhand-247667, India"
  },
  social: {
    linkedin: "Alok Maurya",
    github: "alok-8303", 
    twitter: "@Alok225411"
  },
  education: {
    institution: "Indian Institute of Technology Roorkee",
    degree: "B.Tech Third year",
    gpa: "7.93/10.00",
    year: "2025",
    location: "Roorkee, Uttrakhand"
  }
};

export const experiences: Experience[] = [
  {
    company: "Stealth AI Startup",
    role: "Agentic AI Intern", 
    duration: "May 2025 - Present",
    location: "Hybrid",
    description: [
      "Developed User Flow Intelligence Agent for rummy gaming platform using LangChain and LangGraph",
      "Implemented advanced RAG pipelines with async processing for user behavioral analysis",
      "Achieved 3× performance improvement in analyzing gameplay, deposits, withdrawals, and offers",
      "Built production-ready FastAPI backend with AWS deployment and real-time analytics",
      "Engineered end-to-end data pipelines for user streak analysis and behavioral insights"
    ]
  },
  {
    company: "REVn Plus",
    role: "GenAI Intern",
    duration: "Feb 2025 - May 2025", 
    location: "Remote",
    description: [
      "Designed image analysis workflows using Vision-Language Models (VLMs)",
      "Extracted structured and contextual insights from images using advanced AI models",
      "Integrated and automated APIs for ML model deployment with custom endpoints",
      "Ensured scalable, real-time inference through reliable data pipelines",
      "Built lightweight Web UI for seamless interaction with deployed models"
    ]
  }
];

export const projects: Project[] = [
  {
    title: "GPT-2 Model from Scratch",
    date: "March 2025",
    tools: ["Python", "PyTorch", "Pandas"],
    description: [
      "Implemented GPT-2 transformer from first principles in PyTorch",
      "Built core components: multihead self-attention, positional embeddings, layer normalization", 
      "Developed custom tokenizer and training pipeline with gradient accumulation",
      "Fine-tuned pre-trained GPT-2 weights to build classifier model",
      "Demonstrated text generation capabilities with custom training pipeline"
    ]
  },
  {
    title: "LinkedIn Profile Search Plus Matching",
    date: "April 2025",
    tools: ["Python", "Selenium", "BeautifulSoup", "OpenAI GPT-4", "BrightData", "FaceNet"],
    description: [
      "Built multi-stage pipeline with FaceCheck API, web scraping, and GPT-4 integration",
      "Enriched persona data using image and semantic intelligence",
      "Implemented Google-based LinkedIn search with BrightData API scraping",
      "Performed persona-to-profile validation using Google Gemini and FaceNet",
      "Developed weighted scoring logic for facial matching with InceptionResNet-V1"
    ]
  },
  {
    title: "Solving Nonlinear Schrödinger Equation Using PINNs",
    date: "December 2024",
    tools: ["Python", "PyTorch", "NumPy", "Matplotlib", "Pandas"],
    description: [
      "Developed Physics Informed Neural Network (PINN) for nonlinear Schrödinger equation",
      "Modeled wave dynamics including solitons using advanced mathematical frameworks",
      "Designed 10-layer neural network with Gaussian activation functions",
      "Embedded physical constraints directly in loss function for accurate modeling",
      "Achieved accurate predictions validated against analytical solutions"
    ]
  },
  {
    title: "Fine Tuning on Astrophysical Dataset", 
    date: "December 2024",
    tools: ["Python", "PyTorch", "Matplotlib", "NumPy", "Pandas"],
    description: [
      "Classified galaxy images from Galaxy Zoo 1 dataset using transfer learning",
      "Applied ResNet-50 pre-trained CNN with custom fine-tuning approach",
      "Implemented data preparation with resizing, normalization, and augmentation",
      "Optimized model using Adam optimizer with learning rate scheduler",
      "Enhanced dataset diversity through advanced augmentation techniques"
    ]
  }
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["C++", "Python"]
  },
  {
    category: "AI & Machine Learning", 
    items: ["AWS", "LangChain", "LangGraph", "Scikit-Learn", "TensorFlow", "PyTorch", "Hugging Face"]
  },
  {
    category: "Development Tools",
    items: ["Gradio", "Git", "GitHub", "Kaggle", "Google Colab", "Jupyter"]
  },
  {
    category: "Additional Courses",
    items: ["Machine Learning Specialization - Coursera", "Analytics For Managerial Decision Making (IBM-322) - IIT Roorkee"]
  }
];

export const awards: Award[] = [
  {
    title: "Winner, GC Tech 2025",
    description: "Won 14-day high-prep problem statement challenge during GC Tech Championship at IIT Roorkee",
    year: "2025"
  },
  {
    title: "JEE-MAINS 2022", 
    description: "Secured 99 percentile (CRL - 7789)",
    year: "2022"
  },
  {
    title: "MetES Cricket League",
    description: "Two-time winner of MetES Cricket League, IIT Roorkee",
    year: "2024 & 2025"
  }
];

export const extraCurriculars: ExtraCurricular[] = [
  {
    title: "Executive Member",
    organization: "Wellness Centre - IIT ROORKEE", 
    duration: "June 2023 - June 2024",
    description: "Member of Events vertical, helped organize multiple wellness center events"
  },
  {
    title: "Volunteer",
    organization: "COGNIZANCE Technical Fest - IIT ROORKEE",
    duration: "2023",
    description: "Volunteered at technical fest and participated in various events"
  }
];

export const getIntroContent = () => [
  "> SYSTEM INITIALIZED...",
  "> ACCESSING NEURAL NETWORK...", 
  "> CONNECTION ESTABLISHED",
  "",
  "╔══════════════════════════════════════════╗",
  "║          STRANGER BYTES PORTFOLIO         ║",
  "║                                          ║", 
  "║    SUBJECT: ALOK MAURYA                  ║",
  "║    STATUS:  ACTIVE                       ║",
  "║    LEVEL:   AI/ML ENGINEER               ║",
  "╚══════════════════════════════════════════╝",
  "",
  "Welcome to the digital realm...",
  "",
  "I am Alok Maurya, a GenAI and Machine Learning Engineer",
  "currently in my third year at IIT Roorkee.",
  "", 
  "My expertise spans across:",
  "• Advanced AI/ML model development",
  "• LangChain & LangGraph implementations", 
  "• Computer Vision & NLP",
  "• Production-ready backend systems",
  "",
  "Select a section to explore my digital footprint:",
];