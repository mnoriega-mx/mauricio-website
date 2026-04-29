export const projects = [
  {
    title: "SentryWu",
    badge: "Hackathon Project",
    images: [
      "/images/projects/sentrywu-1.jpg",
      "/images/projects/sentrywu-2.jpeg",
    ],
    description:
      "SentryWu is a real-time surveillance system that watches a live camera feed and autonomously detects signals of a crime in progress. The moment something is flagged, it triggers a 911 call without any human interaction. The key insight is that raising your hands is exactly what a robber forces you to do anyway. Workers are briefed in advance: hold your arms above your head for three seconds, and SentryWu silently contacts emergency services. No button to press, no suspicious movement, nothing the robber can intercept. The gesture that signals surrender becomes the call for help. Under the hood, three detection pipelines run in parallel on every frame: a custom-trained YOLOv3 model (2,000 training iterations) scans for weapons with Non-Maximum Suppression to filter overlapping detections. MediaPipe's pose estimation tracks 33 body landmarks in real time, comparing shoulder, elbow, and wrist positions to determine whether a person's arms are raised and held there. A separate LSTM neural network, trained on sequences of 20 consecutive body-position frames, classifies movement patterns as violent or neutral over time, catching physical altercations that static pose detection alone would miss. That third component was the hardest to build. To generate training data, we became the dataset, recording ourselves performing \"violent\" and \"neutral\" body movements frame by frame until we had over 8,000 labeled records. Those fed into a four-layer LSTM trained with TensorFlow over 100 epochs. All events streamed into MongoDB and surfaced on a Flask-powered monitoring dashboard, giving a security operator a single screen: live feed, detected anomalies, and a timestamped activity log. For the prototype, we used Twilio to simulate the emergency call, standing in for a direct line to 911. By the time the 24 hours ended, we had a working system. The judges visited our booth in person. We didn't win, but we built something real, and I walked away understanding, at a very concrete level, what it takes to take a machine learning idea from concept to deployed product under pressure.",
    tech: [
      "Python",
      "Flask",
      "MongoDB",
      "Twilio",
      "MediaPipe",
      "OpenCV",
      "YOLOv3",
      "TensorFlow",
      "LSTM",
    ],
    demo: "https://www.youtube.com/watch?v=PAbW2O2NOXw",
    github: "https://github.com/mnoriega-mx/HackaWu",
  },
  {
    title: "WuSolutions",
    badge: "University SAP Challenge",
    image: "/images/projects/wusolutions.jpg",
    description:
      "SAP came to us with a real problem: small and medium-sized businesses needed a better way to manage their supply chains, and they wanted us to build it. Our team took on the challenge and delivered WuSolutions, a supply chain ERP platform built on SAP's enterprise ecosystem. We presented the proposal directly to SAP and won first place. The system connects every link in the chain: store managers place requests, warehouse teams fulfill them, suppliers receive real-time visibility, and administrators get a live pulse on inventory health, sales trends, and order lifecycles across every branch. No more guesswork, no more reactive firefighting. Under the hood, WuSolutions runs on SAP HANA Cloud for enterprise-grade data management, with a Node.js/Express backend serving a React frontend built with SAP UI5 Web Components. The most interesting layer is the ML pipeline, a Python-powered sales forecasting model that predicts demand before it becomes a stockout, giving operations teams the foresight to act instead of react. From role-based access control that isolates data per location, to a Swagger-documented API, to a connection pool handling up to 50 concurrent database sessions, the architecture was designed with the operational realities of real businesses in mind.",
    tech: [
      "React",
      "Node.js",
      "SAP HANA",
      "Cloud Foundry",
      "Python",
      "scikit-learn",
      "Material UI",
      "JWT Auth",
      "SAP BTP",
    ],
    demo: null,
    github: "https://github.com/gmonmarr/WuSAP",
  },
  {
    title: "Mr. Investor",
    badge: "Banorte Hackathon Challenge",
    image: "/images/projects/mr-investor.jpg",
    description:
      "Built during a hackathon tackling Banorte's challenge of leveraging AI to help bank clients navigate their investment fund options. Mr. Investor is a conversational AI assistant built with Next.js and the OpenAI API that acts as a personal financial coach, guiding users through investment concepts, fund types, and savings strategies in plain language. The app features a polished chat interface with quick-start suggestions to lower the barrier for users unfamiliar with investing, making financial education more accessible and approachable for everyday Banorte clients.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API"],
    demo: null,
    github: "https://github.com/mnoriega-mx/MrInvestorFinanceAssistant",
  },
  {
    title: "Energy Efficiency Trends Analysis",
    badge: null,
    image: "/images/projects/energy-efficiency.jpg",
    description:
      "Examined how renewable energy adoption and economic growth interact with energy efficiency across countries from 2000 to 2020. Completed as part of a Programming for Data Analytics course at Rennes School of Business, this work uses a global sustainable energy dataset from Kaggle to explore what drives changes in energy intensity and how income inequality shapes that relationship. The analysis combines exploratory data analysis, descriptive analytics, and predictive modeling to surface patterns across nations and build forecasts of future energy intensity. Tools include Python (Pandas, NumPy, Matplotlib, Seaborn, XGBoost, scikit-learn) and Jupyter Notebook. Findings are aimed at informing policymakers on how countries can reduce energy intensity without sacrificing economic performance.",
    tech: [
      "Python",
      "Jupyter Notebook",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "XGBoost",
      "Matplotlib",
      "Seaborn",
    ],
    demo: null,
    github: "https://github.com/mnoriega-mx/energy-efficiency-trends",
  },
  {
    title: "Multi Signature Wallet",
    badge: null,
    image: "/images/projects/multisig-wallet.jpg",
    description:
      "Developed a multi-signature smart contract that enables a wallet holder to assign multiple owner addresses. Owners can request transactions, which remain pending until consensus is reached among the other owners. Transactions are executed once a predefined approval threshold is met, ensuring secure and decentralized authorization. The contract was fully implemented in Solidity and deployed on the Ethereum blockchain.",
    tech: ["Solidity", "Ethereum Virtual Machine (EVM)"],
    demo: null,
    github: "https://github.com/mnoriega-mx/MultiSignatureWallet",
  },
  {
    title: "Farm Simulator",
    badge: "John Deere Prototype",
    image: "/images/projects/farm-simulator.jpg",
    description:
      "A fully autonomous farming simulation built in Unity as a prototype for John Deere, who was exploring ways to simulate tractor behavior and track performance in a controlled virtual environment. Tractors wake up at the start of each cycle, navigate to a garage to load their planters, find their way across rolling terrain to the fields, and methodically seed each row in a snaking pattern before returning home. Once the crops are ready, the process reverses: a harvester loads up, traces a path back to the field, and clears everything row by row. No player input. Just a farm doing what farms do. The hard part was getting each machine to stay in sync. Every tractor needs to finish one step before the next begins, waiting patiently without stalling the others. Corn, tomatoes, and turnips each run their own independent cycle, managed through a state machine written in C#. Navigation was built from scratch using A* pathfinding. Each tractor builds a grid over the terrain at runtime, checks for obstacles, and finds the best route to its target. They rotate smoothly toward each waypoint and stay grounded as they move across the landscape. Beyond the code, the entire 3D world was crafted by hand, from the terrain and fields to the environment that brings the simulation to life.",
    tech: [
      "Unity",
      "C#",
      "A* Pathfinding",
      "Blender",
      "Game Design",
      "3D Modeling",
    ],
    demo: "https://www.youtube.com/watch?v=zJjIOJdSCwI&t=245s",
  },
  {
    title: "Leapy Lands",
    badge: null,
    image: "/images/projects/leapy-lands.jpg",
    description:
      "LeapyLands is a 2D platformer I built in Unity using C#. I scripted the core mechanics from scratch, including player controls, enemy patrol behavior, and interactive elements like vines and collectibles across multiple levels. I used Unity's physics engine to handle collision detection, making sure interactions with the ground, enemies, spikes, and other objects behaved consistently. I also created custom character animations and worked on the transitions between states like running, jumping, and idle. The game was optimized for WebGL and published on itch.io, making it playable directly in the browser and accessible to a wider audience.",
    tech: ["Unity", "C#", "2D Animation", "Game Design", "WebGL"],
    demo: "https://lordvader305.itch.io/leapy-lands",
  },
  {
    title: "Astro Blast",
    badge: null,
    image: "/images/projects/astro-blast.jpg",
    description:
      "AstroBlast is a 2D space shooter I built in Unity using C#. The game puts you in the cockpit of a lone spaceship fighting through an asteroid field and three increasingly difficult enemy waves. I built the player controls, the shooting mechanics, and a lives system that tracks damage and triggers a game over when you run out. Enemies shoot back on their own, so the player always has to keep moving. I designed the game around a wave progression system where the action escalates as you rack up kills, starting with a chaotic asteroid field and building up to a final push against the last enemy squad. I also created the animations for the player ship, including banking turns, taking hits, and blowing up, plus the enemy reactions when they go down. The game was published on itch.io as a WebGL build, so anyone can play it directly in the browser without downloading anything.",
    tech: ["Unity", "C#", "2D Animation", "Game Design", "WebGL"],
    demo: "https://lordvader305.itch.io/astro-blast",
  },
  {
    title: "Math Jump",
    badge: null,
    image: "/images/projects/math-jump.jpg",
    description:
      "MathJump is a 2D platformer game built with Python and Pygame where players answer math questions by jumping onto the correct platform. A question appears at the top of the screen and two platforms float side by side, each labeled with a possible answer. Press A to jump left or D to jump right, land on the wrong platform and it drops, ending the game. Land on the right one and you advance to the next question. The goal behind MathJump was to make math fun and engaging for kids by wrapping practice problems inside an interactive game. It features 30 questions spanning algebra, trigonometry, exponent rules, calculus derivatives and integrals, imaginary numbers, and number theory. Reaching a score of 30 completes the game. Built as one of my first Python projects and my first attempt at making a video game, MathJump was an exercise in learning Pygame's event system, collision detection, and game loop design from scratch.",
    tech: ["Python", "Pygame"],
    demo: null,
    github: "https://github.com/mnoriega-mx/MathJump",
  },
  {
    title: "Tic Tac Toe",
    badge: null,
    image: "/images/projects/tic-tac-toe.jpg",
    description:
      "A browser-based two-player Tic Tac Toe game and my first web development project. Built from scratch using vanilla HTML, CSS, and JavaScript, it features a fully interactive 3x3 grid, turn-based play, win detection across all rows, columns, and diagonals, tie detection when the board fills up, and a reset button to start a new game. This project was where I first got hands-on with DOM manipulation and event-driven programming in JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://mnoriega-mx.github.io/AmazingTicTacToe.com/",
    github: "https://github.com/mnoriega-mx/AmazingTicTacToe.com",
  },
];
