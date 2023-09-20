experienceDetails = [
    {
        term: "July 2023 - Sep 2023",
        position: "GSoC Contributor",
        companyName: "FURY, Python Software Foundation",
        companyLocation: "Remote",
        description: ["Contributed to the Python Software Foundation as a GSoC contributor, working on the open-source project called FURY which is used by 500+ peoples.",
            "Developed a highly useful component called DrawPanel, enabling researchers and students to visualize complex geometrical objects and chemistry molecules.",
            "Implemented 8 different modes for creating primitive objects, allowing users to easily manipulate and group/un-group them along with a freehand mode, providing the flexibility to draw custom shapes and designs.",
            "Significantly improved test coverage by 10% through the creation and updating of unit tests, ensuring the stability and reliability of the software.",
            "Helped to add 4 new UI components and refactored a core element, which served as the foundation for all other UI components. Additionally, I implemented new features to meet the evolving project requirements.",]
    },
    {
        term: "August 2021 - Present",
        position: "Builder",
        companyName: "IODump",
        companyLocation: "Remote",
        description: ["Led a team of 20 individuals in various domains including development, event organization, workshops, and technical education, fostering collaboration and achieving successful outcomes.",
            "Created Personalized Event Websites, resulting in the onboarding of nearly 500 participants and providing them with an engaging experience.",
            "Developed a CTF cum Quiz platform, hosting a contest for 280+ participants simultaneously, showcasing the ability to handle large-scale events and deliver exceptional user experiences.",
            "Impacted over 1k+ students by offering valuable resources and support, and also taught programming languages, Data Structures & Algorithms, and technologies like React, Solidity, Git/GitHub to 350+ students, equipping them with    essential skills for success in the tech industry."
        ]
    }
]


let experienceCard = document.getElementById("experience-card");

for (let i = 0; i < experienceDetails.length; i++) {

    experienceDescription = "";
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