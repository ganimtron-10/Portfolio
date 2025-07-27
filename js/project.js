const projectDetails = [
    {
        name: "TriFS: Distributed File System for Tiny Files",
        img: "assets/trifs.png",
        code: "https://github.com/ganimtron-10/TriFS",
        description: "<b>TriFS</b> is a distributed file system (DFS) engineered in <b>Go</b> specifically for managing massive volumes of <b>tiny files (< ~1MB)</b>. It addresses conventional DFS inefficiencies (metadata bottlenecks, storage fragmentation, high I/O overhead) by implementing a <b>Distributed Metadata Service</b>, <b>Data Packing</b> into fixed-size chunks (~50MB), <b>Copy-on-Write</b> mutations, and <b>Erasure Coding</b> for fault tolerance. Key features include background garbage collection, a <b>Thick Client</b> for aggressive caching, and a <b>Virtual Hierarchy</b>. It's ideal for IoT sensor data, log files, and small web assets, and is currently under active development."
    },
    {
        name: "Pravas: Mobile-First Bus Booking & Management",
        img: "assets/pravas.png",
        link: "https://pravas.krivishkar.in/",
        description: "<b>Pravas</b> is a comprehensive, <b>mobile-first application</b> designed to streamline bus booking and management. It provides a familiar user experience, extending bus booking, bus management, scheduling and bus notification functionalities directly to mobile devices. This app empowers users and bus operators in remote areas to digitize their operations without needing laptops or computers, offering complete control over bus reservations, payment processing, and efficient management of schedules and routes from their smartphones."
    },
    {
        name: "Akfak: Kafka-Inspired Messaging System",
        img: "assets/akfak.png",
        code: "https://github.com/ganimtron-10/akfak",
        description: "<b>Akfak</b> is a simple messaging system built <b>from scratch</b> in Go, inspired by Kafka. Developed to gain a deep understanding of distributed systems and low-level network protocols, it features <b>implemented core Kafka protocol APIs</b> (including API Versions, Fetch, and Describe), handles <b>concurrent client connections</b>, and engineers the intricate <b>low-level TCP request/response pipeline</b> for binary data. The implementation was <b>rigorously validated</b> using an external testing framework to ensure protocol accuracy and robustness."
    },
    {
        name: "TDLE: Text-based Daily Learning Exercise",
        img: "assets/tdle.png",
        link: "https://tvia.vercel.app/",
        code: "https://github.com/ganimtron-10/tvia",
        description: "<b>TDLE</b> (Text-based Daily Learning Exercise) is an app that makes learning both engaging and enjoyable, inspired by the popular word-guessing game Wordle. Designed as the first in a series to boost vocabulary, it features core <b>Word Guessing</b> gameplay with feedback and includes planned features like <b>On-Chain Rewards</b>, <b>Customizable Learning</b>, and <b>Multiplayer Mode</b>. It serves as a demonstration of building interactive web applications with <b>Next.js</b>, <b>TypeScript</b>, <b>Tailwind CSS</b>, and <b>Wagmi</b>."
    },
    {
        name: "Wumpus World",
        img: "assets/wumpusworld.png",
        link: "https://ganimtron10.itch.io/wumpusworld",
        code: "https://github.com/ganimtron-10/WumpusWorld",
        description: "<b>Wumpus World</b> is an engaging 2D puzzle action adventure game that lets you step into the shoes of an AI agent. With easy controls, it's suitable for players of all skill levels. You'll explore an underground labyrinth, gradually building your knowledge of the environment—a great learning experience for understanding AI concepts. Currently available on PC and desktop, mobile controls are in the works. Dive into this educational adventure, solve puzzles, and enhance your problem-solving skills today!"
    },
    {
        name: "Goell (GO shELL)",
        img: "assets/goell.png",
        code: "https://github.com/ganimtron-10/goell",
        description: "<b>Goell</b> (GO shELL) is a minimal shell written in <b>Go</b>, created <b>from scratch</b> to understand fundamental shell features. This project focused on implementing core functionalities like <b>command execution</b>, <b>navigation</b>, <b>quoting</b>, and <b>redirection</b> to explore how shells process and interpret user input."
    },
    {
        name: "EquityFusion",
        img: "assets/equityfusion.png",
        code: "https://github.com/ganimtron-10/EquityFusion",
        description: "<b>EquityFusion</b> is a Go-based RESTful API cum CLI application simulating a stock market with order matching and portfolio management. It allows users to register and trade stocks using tokens, featuring order management (buy/sell), a simulated stock exchange with order matching (price & FIFO), and portfolio tracking. Built with <b>Go</b>, <b>Gin</b>, and <b>CobraCli</b>."
    },
    {
        name: "BhaiCLI",
        img: "assets/bhaicli.png",
        code: "https://github.com/ganimtron-10/bhai-cli",
        description: "<b>BhaiCLI</b> (CLI's ka Bhai aur Bhaiyo ka CLI!) is a simple, conversational Command Line Interface designed to make interacting with your system's basic file and directory operations more friendly. Built using <b>GoLang</b> and the <b>CobraCli</b> library, it provides intuitive Hindi/Hinglish commands like `bhai ye bana` (create file), `bhai ye dikha` (list files/dirs), `bhai ye copy` (copy file), `bhai ye nikal` (delete file/dir), and others for common file and directory management tasks."
    },
    {
        name: "KafSync",
        img: "assets/kafsync.png",
        code: "https://github.com/ganimtron-10/KafSync",
        description: "<b>KafSync</b> is a robust two-way syncing system utilizing Kafka to efficiently flow events between endpoints, ensuring seamless data transmission and synchronization. Currently supports <b>bidirectional synchronization with Stripe</b>, and serves as a boilerplate codebase for integrating syncing functionality into various systems, enhancing interoperability and efficiency."
    },
    {
        name: "Just Another Blockchain Explorer (JABE)",
        img: "assets/jabe.png",
        code: "https://github.com/ganimtron-10/JustAnotherBlockchainExplorer",
        description: "<b>JABE</b>, short for Just Another Blockchain Explorer, is a user-friendly web application designed for hassle-free exploration of the Ethereum Blockchain. It boasts a minimalist and efficient design, prioritizing essential data retrieval to ensure a lightweight and responsive user experience. With <b>JABE</b>, you can effortlessly navigate recent blocks and transactions, gaining real-time insights into the Ethereum Blockchain's activities. Powered by React and the Alchemy SDK, <b>JABE</b> makes it the perfect choice for both newcomers to explore the haunting world of Web3."
    },
    {
        name: "AdvTower",
        img: "assets/advtower.png",
        link: "https://devfolio.co/projects/advtower-fe79",
        code: "https://github.com/ganimtron-10/AdvTower",
        description: "<b>AdvTower</b> is a Web3 game project that ingeniously fuses two distinct gaming genres: adventure and tower defence. Operated via a primary smart contract deployed on the Polygon & Mantle testnet, this project orchestrates the seamless transfer of NFTs between these game types. <b>Milestone achievements unlock transferable NFTs</b>, serving as potent power-ups in the alternate game mode. These NFT attributes significantly enhance gameplay in both directions, making strategic decisions on which power-ups to deploy pivotal. With no installation required, this game only mandates the presence of MetaMask, simplifying access to this engaging Web3 experience."
    },
    {
        name: "Emergency Traffic Light System (ETLS)",
        img: "assets/etls.png",
        link: "https://youtu.be/tDdXH2KMlo4",
        description: "The <b>Emergency Traffic Light System (ETLS)</b> is an IoT-based solution that prioritizes the passage of emergency vehicles like ambulances, police cars, and fire trucks at junctions. This project boasts several key features, including user-friendly control via an Android app and Bluetooth module, secure restricted access through RFID entry systems, automated toll gates with servo motors, real-time status updates on an integrated LCD display, and energy-efficient lighting regulated by Light Detecting Resistor (LDR) sensors. ETLS efficiently manages traffic flow during emergencies, improving response times for emergency services while promoting sustainability through reduced energy consumption."
    },
    {
        name: "SurviveThis",
        img: "assets/survivethis.png",
        link: "https://ganimtron10.itch.io/survivethis",
        description: "<b>SurviveThis</b> is an exhilarating survival game that pits you against waves of diverse enemies. As the protagonist, your aim is to survive for as long as possible. To keep you in the fight, the game randomly awards health points when needed. What's more, it's accessible on various devices, including desktops, mobile phones, and tablets, without any installation required. Dive into the action-packed world of <b>SurviveThis</b> and test your survival skills today!"
    },
    {
        name: "BlackJack Sim",
        img: "assets/blackjack.png",
        code: "https://github.com/ganimtron-10/BlackJack",
        description: "<b>BlackJack Sim</b> is a command-line program designed to replicate the excitement of the classic card game, Blackjack. This project offers two primary modes of play: manual and automatic. In the manual mode, users can interact with the game and make strategic decisions, just like in a real casino. On the other hand, the automatic mode employs a basic strategy to simulate games, making it ideal for analyzing different gameplay scenarios. The simulation provides valuable insights into winning trends, probabilities, and strategies, and it includes a visualizer to present data in graphical formats. Whether you're a novice player or a seasoned Blackjack enthusiast, this project serves as an excellent tool for both entertainment and strategic analysis."
    },
    {
        name: "Panchatatva",
        img: "assets/panchtatva.png",
        link: "https://ganimtron10.itch.io/panchatatva",
        code: "https://github.com/ganimtron-10/panchatatva",
        description: "<b>Panchatatva</b> offers an immersive RPG adventure with multiple levels and thrilling boss fights. In this captivating game, you'll face off against two formidable foes, a powerful wizard and a colossal Golem, in epic battles. Along the way, engage in intense combat with skeleton guards. What's more, <b>Panchatatva</b> is designed for maximum accessibility, supporting all platforms without any need for prior installation. Embark on an epic journey and test your mettle in <b>Panchatatva</b> today!"
    },
    {
        name: "Virtual Hologram Controller",
        img: "assets/vhc.png",
        code: "https://github.com/ganimtron-10/Virtual_Hologram_Controller",
        link: "https://www.youtube.com/watch?v=2XUCguV-N2k",
        description: "<b>Virtual Hologram Controller</b> is a Python application leveraging OpenCV and MediaPipe for hand tracking-based gesture control. It enables intuitive interaction by allowing users to change colors through hand rotation, scale objects using pinch gestures, and reposition shapes with two-finger gestures. This innovative application provides an engaging and dynamic user experience, showcasing the fusion of technology and user-friendly interface design."
    },
    {
        name: "LandsDAO",
        img: "assets/landsdao.png",
        code: "https://github.com/ganimtron-10/landsdao",
        description: "<b>LandsDAO</b> is a web3 project that redefines property ownership and access. Born out of the creative spirit of EthIndia 2022, this initiative seeks to tokenize land, dividing it into multiple tokens, each representing a unique stake in the property. These tokens can be owned by different individuals, facilitating co-ownership and shared access to real estate. As part of the team, I led the development of the project's frontend, designing a user-friendly interface that dynamically fetched data from the blockchain. Although our journey during the hackathon was cut short, <b>LandsDAO</b> remains a testament to the innovation and potential of decentralized technologies in reshaping traditional industries."
    }
]


const projectCard = document.getElementById("project-card");

for (let i = 0; i < projectDetails.length; i++) {
    let codeBtn = "", linkBtn = "";
    if (projectDetails[i].code) {
        codeBtn = `<a href="${projectDetails[i].code}" target="_blank" class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder">Code</a>`;
    }

    if (projectDetails[i].link) {
        linkBtn = `<a href="${projectDetails[i].link}" target="_blank" class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder">Live Link</a>`;
    }



    projectCard.innerHTML += `
    
        <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
            <div class="card-body p-0 text-black">
                <div class="d-flex flex-column flex-md-row align-items-center">
                    <img class="img-fluid mb-3 p-5 mb-md-0"
                        src="${projectDetails[i].img}" alt="..." style="width: 350px; object-fit: cover;"/>
                    <div class="m-5">
                        <h2 class="text-secondary fw-bolder">${projectDetails[i].name}</h2>
                        <p class="text-muted text-justify">${projectDetails[i].description}</p>
                        ${codeBtn}
                        ${linkBtn}
                    </div>
                </div>
            </div>
        </div>
    `;
}


