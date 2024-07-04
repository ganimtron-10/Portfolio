const projectDetails = [
    {
        name: "Wumpus World",
        img: "assets/wumpusworld.png",
        link: "https://ganimtron10.itch.io/wumpusworld",
        description: "<b>Wumpus World</b> is an engaging 2D puzzle action adventure game that lets you step into the shoes of an AI agent. With easy controls, it's suitable for players of all skill levels. You'll explore an underground labyrinth, gradually building your knowledge of the environment—a great learning experience for understanding AI concepts. Currently available on PC and desktop, mobile controls are in the works. Dive into this educational adventure, solve puzzles, and enhance your problem-solving skills today!"
    },
    {
        name: "KafSync",
        img: "assets/kafsync.png",
        link: "https://github.com/ganimtron-10/KafSync",
        description: "<b>KafSync</b> is a robust two-way syncing system utilizing Kafka to efficiently flow events between endpoints, ensuring seamless data transmission and synchronization. Currently supports <b>bidirectional synchronization with Stripe</b>, and serves as a boilerplate codebase for integrating syncing functionality into various systems, enhancing interoperability and efficiency."
    },
    {
        name: "SampSoil",
        img: "assets/sampsoil.png",
        link: "https://soil-sampler.quantafile.com",
        description: "<b>SampSoil</b> is an innovative inventory management system tailored for soil samples in laboratory environments. It tracks the movement of soil samples within the laboratory, offering <b>real-time location updates</b> and comprehensive details on each sample's journey. With features like <b>test tracking</b>, <b>report generation</b>, and <b>result analysis</b>, <b>SampSoil</b> enhances laboratory efficiency and sample management processes."
    },
    {
        name: "Just Another Blockchain Explorer (JABE)",
        img: "assets/jabe.png",
        link: "https://github.com/ganimtron-10/JustAnotherBlockchainExplorer",
        description: "<b>JABE</b>, short for Just Another Blockchain Explorer, is a user-friendly web application designed for hassle-free exploration of the Ethereum Blockchain. It boasts a minimalist and efficient design, prioritizing essential data retrieval to ensure a lightweight and responsive user experience. With <b>JABE</b>, you can effortlessly navigate recent blocks and transactions, gaining real-time insights into the Ethereum Blockchain's activities. Powered by React and the Alchemy SDK, <b>JABE</b> makes it the perfect choice for both newcomers to explore the haunting world of Web3."
    },
    {
        name: "AdvTower",
        img: "assets/advtower.png",
        link: "https://devfolio.co/projects/advtower-fe79",
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
        link: "https://github.com/ganimtron-10/BlackJack",
        description: "<b>BlackJack Sim</b> is a command-line program designed to replicate the excitement of the classic card game, Blackjack. This project offers two primary modes of play: manual and automatic. In the manual mode, users can interact with the game and make strategic decisions, just like in a real casino. On the other hand, the automatic mode employs a basic strategy to simulate games, making it ideal for analyzing different gameplay scenarios. The simulation provides valuable insights into winning trends, probabilities, and strategies, and it includes a visualizer to present data in graphical formats. Whether you're a novice player or a seasoned Blackjack enthusiast, this project serves as an excellent tool for both entertainment and strategic analysis."
    },
    {
        name: "Panchatatva",
        img: "assets/panchtatva.png",
        link: "https://ganimtron10.itch.io/panchatatva",
        description: "<b>Panchatatva</b> offers an immersive RPG adventure with multiple levels and thrilling boss fights. In this captivating game, you'll face off against two formidable foes, a powerful wizard and a colossal Golem, in epic battles. Along the way, engage in intense combat with skeleton guards. What's more, <b>Panchatatva</b> is designed for maximum accessibility, supporting all platforms without any need for prior installation. Embark on an epic journey and test your mettle in <b>Panchatatva</b> today!"
    },
    {
        name: "Virtual Hologram Controller",
        img: "assets/vhc.png",
        link: "https://github.com/ganimtron-10/Virtual_Hologram_Controller",
        description: "<b>Virtual Hologram Controller</b> is a Python application leveraging OpenCV and MediaPipe for hand tracking-based gesture control. It enables intuitive interaction by allowing users to change colors through hand rotation, scale objects using pinch gestures, and reposition shapes with two-finger gestures. This innovative application provides an engaging and dynamic user experience, showcasing the fusion of technology and user-friendly interface design."
    },
    {
        name: "LandsDAO",
        img: "assets/landsdao.png",
        link: "https://github.com/ganimtron-10/landsdao",
        description: "<b>LandsDAO</b> is a web3 project that redefines property ownership and access. Born out of the creative spirit of EthIndia 2022, this initiative seeks to tokenize land, dividing it into multiple tokens, each representing a unique stake in the property. These tokens can be owned by different individuals, facilitating co-ownership and shared access to real estate. As part of the team, I led the development of the project's frontend, designing a user-friendly interface that dynamically fetched data from the blockchain. Although our journey during the hackathon was cut short, <b>LandsDAO</b> remains a testament to the innovation and potential of decentralized technologies in reshaping traditional industries."
    }
]


const projectCard = document.getElementById("project-card");

for (let i = 0; i < projectDetails.length; i++) {
    projectCard.innerHTML += `
    
        <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
            <div class="card-body p-0 text-black">
                <div class="d-flex flex-column flex-md-row align-items-center">
                    <img class="img-fluid mb-3 p-5 mb-md-0 w-100"
                        src="${projectDetails[i].img}" alt="..." />
                    <div class="m-5">
                        <h2 class="text-secondary fw-bolder">${projectDetails[i].name}</h2>
                        <p class="text-muted text-justify">${projectDetails[i].description}</p>
                        <a href="${projectDetails[i].link}" class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder">Demo</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}


