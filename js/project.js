const projectDetails = [
    {
        name: "Wumpus World",
        img: "assets/wumpusworld.png",
        link: "https://ganimtron10.itch.io/wumpusworld",
        description: `<b>Wumpus World</b> is an engaging 2D puzzle action adventure game that lets you step into the shoes of an AI agent. With easy controls, it's suitable for players of all skill levels. You'll explore an underground labyrinth, gradually building your knowledge of the environment—a great learning experience for understanding AI concepts. Currently available on PC and desktop, mobile controls are in the works. Dive into this educational adventure, solve puzzles, and enhance your problem-solving skills today!`
    },
    {
        name: "AdvTower",
        img: "assets/advtower.png",
        link: "https://devfolio.co/projects/advtower-fe79",
        description: `<b>AdvTower</b> is a Web3 game project that ingeniously fuses two distinct gaming genres: adventure and tower defence. Operated via a primary smart contract deployed on the Polygon & Mantle testnet, this project orchestrates the seamless transfer of NFTs between these game types. Milestone achievements unlock transferable NFTs, serving as potent power-ups in the alternate game mode. These NFT attributes significantly enhance gameplay in both directions, making strategic decisions on which power-ups to deploy pivotal. With no installation required, this game only mandates the presence of MetaMask, simplifying access to this engaging Web3 experience.`
    },
    {
        name: "Emergency Traffic Light System (ETLS)",
        img: "assets/etls.png",
        link: "https://youtu.be/tDdXH2KMlo4",
        description: `The <b>Emergency Traffic Light System (ETLS)</b> is an IoT-based solution that prioritizes the passage of emergency vehicles like ambulances, police cars, and fire trucks at junctions. This project boasts several key features, including user-friendly control via an Android app and Bluetooth module, secure restricted access through RFID entry systems, automated toll gates with servo motors, real-time status updates on an integrated LCD display, and energy-efficient lighting regulated by Light Detecting Resistor (LDR) sensors. ETLS efficiently manages traffic flow during emergencies, improving response times for emergency services while promoting sustainability through reduced energy consumption.`
    },
    {
        name: "SurviveThis",
        img: "assets/survivethis.png",
        link: "https://ganimtron10.itch.io/survivethis",
        description: `<b>SurviveThis</b> is an exhilarating survival game that pits you against waves of diverse enemies. As the protagonist, your aim is to survive for as long as possible. To keep you in the fight, the game randomly awards health points when needed. What's more, it's accessible on various devices, including desktops, mobile phones, and tablets, without any installation required. Dive into the action-packed world of <b>SurviveThis</b> and test your survival skills today!`
    },
    {
        name: "BlackJack Sim",
        img: "assets/blackjack.png",
        link: "https://github.com/ganimtron-10/BlackJack",
        description: `<b>BlackJack Sim</b> is a command-line program designed to replicate the excitement of the classic card game, Blackjack. This project offers two primary modes of play: manual and automatic. In the manual mode, users can interact with the game and make strategic decisions, just like in a real casino. On the other hand, the automatic mode employs a basic strategy to simulate games, making it ideal for analyzing different gameplay scenarios. The simulation provides valuable insights into winning trends, probabilities, and strategies, and it includes a visualizer to present data in graphical formats. Whether you're a novice player or a seasoned Blackjack enthusiast, this project serves as an excellent tool for both entertainment and strategic analysis.`
    },
    {
        name: "Panchatatva",
        img: "assets/panchtatva.png",
        link: "https://ganimtron10.itch.io/panchatatva",
        description: `<b>Panchatatva</b> offers an immersive RPG adventure with multiple levels and thrilling boss fights. In this captivating game, you'll face off against two formidable foes, a powerful wizard and a colossal Golem, in epic battles. Along the way, engage in intense combat with skeleton guards. What's more, <b>Panchatatva</b> is designed for maximum accessibility, supporting all platforms without any need for prior installation. Embark on an epic journey and test your mettle in <b>Panchatatva</b> today!`
    }
]


const projectCard = document.getElementById("project-card");

for (let i = 0; i < projectDetails.length; i++) {
    projectCard.innerHTML += `
    
        <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
            <div class="card-body p-0 text-black">
                <div class="d-flex flex-column flex-md-row align-items-center">
                    <img class="img-fluid mb-3 mb-md-0 w-100"
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


