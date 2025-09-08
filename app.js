// Data Science Portfolio - 3D Interactive Implementation
document.addEventListener('DOMContentLoaded', initializePortfolio);

const portfolioData = {
    personal: {
        name: "Dr. Sarah Mitchell",
        title: "Senior Data Scientist & AI Research Lead",
        tagline: "Transforming Data into Intelligent Solutions",
        social: {
            linkedin: "https://linkedin.com/in/sarah-mitchell-ds",
            github: "https://github.com/sarahmitchell",
            resume: "assets/resume.pdf"
        }
    },
    about: {
        summary: "As a Senior Data Scientist with a PhD in Machine Learning, I specialize in developing cutting-edge AI solutions that solve complex business problems. My expertise spans across predictive modeling, natural language processing, computer vision, and deep learning architectures. I have successfully led data science teams in delivering solutions that generated over $50M in business value, published 12 research papers in top-tier ML conferences, and mentored numerous professionals in the field.",
    },
    skills: {
  "Programming Languages": [
    { "name": "Python", "icon": "🐍" },
    { "name": "Java", "icon": "☕" }
  ],
  "Machine Learning & AI": [
    { "name": "AI", "icon": "🤖" },
    { "name": "Gen AI", "icon": "🧠" },
    { "name": "TensorFlow", "icon": "🔥" },
    { "name": "Keras", "icon": "⚡" },
    { "name": "PyTorch", "icon": "🔦" },
    { "name": "Scikit-learn", "icon": "📊" }
  ],
  "Data Analysis & Visualization": [
    { "name": "Pandas", "icon": "🐼" },
    { "name": "NumPy", "icon": "🔢" },
    { "name": "Seaborn", "icon": "📈" },
    { "name": "Matplotlib", "icon": "📊" },
    { "name": "PowerBI", "icon": "📊" },
    { "name": "Tableau", "icon": "📈" },
    { "name": "Excel", "icon": "📊" }
  ],
  "Developer Tools": [
    { "name": "GitHub", "icon": "🐙" },
    { "name": "SQL", "icon": "🗄️" }
  ],
  "Computer Science Fundamentals": [
    { "name": "DSA", "icon": "📚" },
    { "name": "OOPs", "icon": "🧩" },
    { "name": "Operating System", "icon": "💻" },
    { "name": "Computer Networks", "icon": "🌐" }
  ],
  "Productivity & Soft Tools": [
    { "name": "Prompt Engineering", "icon": "🎯" },
    { "name": "MS Word", "icon": "📝" },
    { "name": "PowerPoint", "icon": "📽️" }
  ]
},
    projects: [
        { id: 1, title: "Customer Churn Prediction", description: "Developed a pipeline to predict customer churn with 94% accuracy.", technologies: ["Python", "XGBoost", "Flask"], githubUrl: "https://github.com/sarahmitchell/churn-prediction" },
        { id: 2, title: "NLP Sentiment Analysis", description: "Built a real-time sentiment analysis system for social media posts.", technologies: ["Python", "BERT", "Kafka"], githubUrl: "https://github.com/sarahmitchell/sentiment-platform" },
        { id: 3, title: "CV for Quality Control", description: "Automated quality control using deep learning, reducing defect detection time by 85%.", technologies: ["PyTorch", "OpenCV", "FastAPI"], githubUrl: "https://github.com/sarahmitchell/cv-qc" },
        { id: 4, title: "Predictive Maintenance", description: "IoT-based solution using time series forecasting to prevent equipment failures.", technologies: ["Python", "LSTM", "InfluxDB"], githubUrl: "https://github.com/sarahmitchell/predictive-maintenance" },
        { id: 5, title: "Real-Time Fraud Detection", description: "A system using graph neural networks to detect fraudulent transactions in real-time.", technologies: ["Python", "PyTorch Geometric", "Spark"], githubUrl: "https://github.com/sarahmitchell/fraud-detection" },
        { id: 6, title: "AI-Powered Drug Discovery", description: "Leveraged generative models to design novel molecular structures for drug candidates.", technologies: ["TensorFlow", "RDKit", "GCP"], githubUrl: "https://github.com/sarahmitchell/drug-discovery" },
        { id: 7, title: "Financial Market Forecasting", description: "Time-series analysis using Transformer networks to predict stock price movements.", technologies: ["Python", "PyTorch", "TimescaleDB"], githubUrl: "https://github.com/sarahmitchell/market-forecasting" },
        { id: 8, title: "Autonomous Drone Navigation", description: "Computer vision model for drones to navigate complex environments using reinforcement learning.", technologies: ["Python", "OpenCV", "AirSim"], githubUrl: "https://github.com/sarahmitchell/drone-nav" }
    ],
    experience: [
        { id: 1, title: "Senior Data Scientist & AI Research Lead", company: "TechCorp Innovation Labs", period: "2021 - Present", description: "Leading a team of 8 data scientists...", achievements: ["Led development of AI platform generating $25M+ annual revenue.", "Mentored 12 junior data scientists and ML engineers."] },
        { id: 2, title: "Data Science Manager", company: "Analytics Pro Solutions", period: "2019 - 2021", description: "Managed cross-functional data science projects...", achievements: ["Established company's first ML engineering team.", "Delivered 15+ successful ML projects with average ROI of 400%."] },
        { id: 3, title: "Senior Data Scientist", company: "DataDriven Inc.", period: "2017 - 2019", description: "Specialized in deep learning applications...", achievements: ["Developed medical image analysis system with 96% diagnostic accuracy.", "Created recommendation engine increasing e-commerce sales by 35%."] },
        { id: 4, title: "Machine Learning Engineer", company: "QuantumLeap AI", period: "2015 - 2017", description: "Developed and deployed production-level ML models for various clients.", achievements: ["Built a recommendation engine serving over 10 million users.", "Containerized ML services using Docker and Kubernetes, improving deployment efficiency."] },
        { id: 5, title: "Data Scientist", company: "Insightful Data Corp.", period: "2013 - 2015", description: "Performed exploratory data analysis and built predictive models for the retail sector.", achievements: ["Created dynamic dashboards that provided key business insights to stakeholders.", "Won the company-wide hackathon for a novel NLP-based customer feedback model."] },
        { id: 6, title: "Research Assistant", company: "University AI Research Lab", period: "2011 - 2013", description: "Contributed to foundational research in computational neuroscience and neural networks.", achievements: ["Co-authored 2 research papers published in peer-reviewed journals.", "Developed simulation software for testing neural network architectures."] }
    ],
    certifications: [
        { id: 1, title: "Google Cloud Professional ML Engineer", issuer: "Google Cloud", date: "2023" },
        { id: 2, title: "AWS Certified ML - Specialty", issuer: "Amazon Web Services", date: "2022" },
        { id: 3, title: "Deep Learning Specialization", issuer: "Coursera", date: "2021" },
        { id: 4, title: "TensorFlow Developer Certificate", issuer: "Google", date: "2023" },
        { id: 5, title: "Microsoft Certified: Azure AI Engineer Associate", issuer: "Microsoft", date: "2022" },
        { id: 6, title: "Certified Analytics Professional (CAP)", issuer: "INFORMS", date: "2021" },
        { id: 7, title: "NVIDIA DLI Certificate - Fundamentals of Deep Learning", issuer: "NVIDIA", date: "2023" },
        { id: 8, title: "Databricks Certified Associate Developer for Apache Spark", issuer: "Databricks", date: "2022" },
        { id: 9, title: "Natural Language Processing Specialization", issuer: "Coursera", date: "2021" }
    ]
};

function initializePortfolio() {
    renderContent();
    initThreeJSBackground();
    init3DInteractivity();
    initNavigation(); // Assuming this and other helper functions exist
}

function renderContent() {
    document.getElementById('hero-greeting').innerText = `Hello, I'm ${portfolioData.personal.name}`;
    document.getElementById('hero-name').innerText = portfolioData.personal.title;
    document.getElementById('hero-tagline').innerText = portfolioData.personal.tagline;
    document.getElementById('about-summary').innerText = portfolioData.about.summary;
    
    const socialContainer = document.getElementById('hero-social-links');
    socialContainer.innerHTML = `
        <a href="${portfolioData.personal.social.linkedin}" target="_blank" class="social-link">LinkedIn</a>
        <a href="${portfolioData.personal.social.github}" target="_blank" class="social-link">GitHub</a>
        <a href="${portfolioData.personal.social.resume}" download class="social-link">Download Resume</a>
    `;

    renderSkills();
    renderProjects();
    renderExperience();
    renderCertifications();
}

function renderSkills() {
    const container = document.getElementById('skills-grid');
    if (!container) return;
    container.innerHTML = portfolioData.skills.map(skill => `
        <div class="skill-card">
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-name">${skill.name}</div>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;
    container.innerHTML = portfolioData.projects.map(project => `
        <div class="project-card tech-card">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}</div>
                <div class="project-links">
                    <a href="${project.githubUrl}" target="_blank" class="project-link">GitHub</a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderExperience() {
    // Renders experience data into the timeline
}

function renderCertifications() {
    // Renders certifications into the grid
}

function initNavigation() {
    // Existing navigation logic
}

function initThreeJSBackground() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    const points = [];
    for (let i = 0; i < 200; i++) {
        points.push(new THREE.Vector3((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10));
    }

    const particlesGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const particlesMaterial = new THREE.PointsMaterial({ color: 0x00FFFF, size: 0.05, transparent: true, blending: THREE.AdditiveBlending });
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);
    
    camera.position.z = 5;

    const animate = () => {
        requestAnimationFrame(animate);
        particleSystem.rotation.x += 0.0002;
        particleSystem.rotation.y += 0.0003;
        renderer.render(scene, camera);
    };
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    });
}

function init3DInteractivity() {
    const cards = document.querySelectorAll('.skill-card, .project-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateY = -1 * ((x - rect.width / 2) / (rect.width / 2)) * 8;
            const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * 8;
            
            gsap.to(card, {
                rotationY: rotateY,
                rotationX: rotateX,
                transformPerspective: 1000,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotationY: 0,
                rotationX: 0,
                duration: 1,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });
}
