const experienceDetails = [
    {
        term: "Aug 2021 - Present",
        position: "Builder",
        companyName: "IODump",
        companyLocation: "Remote",
        description: ["Led a team of 20 individuals in various domains including development, event organization, workshops, and technical education, fostering collaboration and achieving successful outcomes.",
            "Created Personalized Event Websites, resulting in the onboarding of nearly 500 participants and providing them with an engaging experience.",
            "Developed a CTF cum Quiz platform, hosting a contest for 280+ participants simultaneously, showcasing the ability to handle large-scale events and deliver exceptional user experiences.",
            "Impacted over 1k+ students by offering valuable resources and support, and also taught programming languages, Data Structures & Algorithms, and technologies like React, Solidity, Git/GitHub to 350+ students, equipping them with essential skills for success in the tech industry."
        ]
    },
    {
        term: "June 2023 - Sep 2023",
        position: "GSoC Contributor",
        companyName: "FURY, Python Software Foundation",
        companyLocation: "Remote",
        description: ["Contributed to the FURY library, a scientific visualizer cum game engine used by over 500 users.",
            "Enhanced the library's user interface (UI) by adding new components that seamlessly integrate with existing elements.",
            "Developed 4 new components: SpinBoxUI, CardUI, FileDialogUI, and TreeUI, completely with unit tests, ensuring compatibility with existing components.",
            "Refactored the core TextBlock2D component, resolving alignment and justification issues while introducing automatic font and background scaling.",
            "Successfully addressed various issues, including ComboBox functionality, Website redirection, and the decision-making process regarding Scrollbar UI.",
        ]
    },
    {
        term: "May 2023 - Present",
        position: "5ireHub Tech Lead",
        companyName: "5ire Chain",
        companyLocation: "Pune, MH",
        description: ["5ire Chain is creating a sustainable Blockchain aligned with the United Nation's 17 sustainability goals.",
            "In my role as Tech Lead, We organized events, conducted workshops, managed 5ireHub's social presence along with my Non Tech teammate to ensure the success of these initiatives.",
            "I served as the primary technical resource, offering guidance and support for building, deploying, and working with contracts, dapps, tokens, and other blockchain-related components.",
            "We hosted 5 events, engaging over 280 participants and providing comprehensive explanations of blockchain technology and its related ecosystem."]
    },
    {
        term: "June 2023 - July 2023",
        position: "Lead Trainer",
        companyName: "Infeanet Solutions",
        companyLocation: "Pune, MH",
        description: ["I led comprehensive Python Course for a group of 50 students, emphasizing a profound grasp of Python concepts and their practical application.",
            "I conceptualized and executed a series of 4 Python projects, spanning from fundamental to advanced levels.These projects included interactive games like 'Guess Game and Hangman,' a utility for 'PDF Read Alouder,' a 'Steve - Virtual Voice Assistant', and a sophisticated 'ChatGPT Clone with Voice Controls.'",
            "A significant 87% of students found my teaching explanations clear and easy to follow.",
            "Not only did this course enhance students career prospects, but it also notably improved their academic performance."]
    },
    {
        term: "May 2022 - Oct 2022",
        position: "GSoC Contributor",
        companyName: "FURY, Python Software Foundation",
        companyLocation: "Remote",
        description: ["Contributed to the Python Software Foundation as a GSoC contributor, working on the open-source project called FURY which is used by 500+ peoples.",
            "Developed a highly useful component called DrawPanel, enabling researchers and students to visualize complex geometrical objects and chemistry molecules.",
            "Implemented 8 different modes for creating primitive objects, allowing users to easily manipulate and group/un-group them along with a freehand mode, providing the flexibility to draw custom shapes and designs.",
            "Significantly improved test coverage by 10% through the creation and updating of unit tests, ensuring the stability and reliability of the software."]
    },
    {
        term: "Jan 2022 - Mar 2023",
        position: "IT Trainer",
        companyName: "LevelApp",
        companyLocation: "Remote",
        description: [
            "Developed and analyzed a comprehensive Blackjack Game, studying trends in betting, player profits, and winning distribution using Basic Stratergy to simulate turns.",
            "Completed an Image Processing assignment using Data Visualization and Machine Learning, including various topics like Markov Chain for generating artistic images.",
            "Worked as DSA Instructor in C/C++, covering key topics like Arrays, Linked Lists, Stack, Queues and Graphs."
        ]
    }
]


const experienceCard = document.getElementById("experience-card");

for (let i = 0; i < experienceDetails.length; i++) {

    let experienceDescription = "";
    experienceDetails[i].description.forEach(line => {
        experienceDescription += `<p>${line}</p>`;
    });

    experienceCard.innerHTML += `
    <div class="card shadow border-0 rounded-4 mb-5">
        <div class="card-body p-5">
            <div class="align-items-center gx-5">
                <div class="text-lg-start mb-4">
                    <div class="row text-center bg-light p-4 rounded-4">
                        <div class="col-12 col-lg-4 small fw-bolder mb-2">${experienceDetails[i].position}</div>
                        <div class="col-12 col-lg-4 mb-2">
                        <div class="small text-muted">${experienceDetails[i].companyName}</div>
                        <div class="small text-muted">${experienceDetails[i].companyLocation}</div>
                        </div>
                        <div class="col-12 col-lg-4 text-primary fw-bolder mb-2">${experienceDetails[i].term}</div>
                    </div>
                </div>
                <div class="text-justify">${experienceDescription}</div>
            </div>
        </div>
    </div>`;
}