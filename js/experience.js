experienceDetails = {
    0: {
        term: "2019 - Present",
        positon: "Web Developer",
        companyName: "Stark Industries",
        companyLocation: "Los Angeles, CA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga."
    },
    1: {
        term: "2019 - Present",
        positon: "Web Developer",
        companyName: "Stark Industries",
        companyLocation: "Los Angeles, CA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga."
    },
    2: {
        term: "2019 - Present",
        positon: "Web Developer",
        companyName: "Stark Industries",
        companyLocation: "Los Angeles, CA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga."
    }
}


let experienceCard = document.getElementById("experience-card");

for (let i = 0; i < Object.keys(experienceDetails).length; i++) {
    experienceCard.innerHTML += `
    <div class="card shadow border-0 rounded-4 mb-5">
        <div class="card-body p-5">
            <div class="row align-items-center gx-5">
                <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                        <div class="text-primary fw-bolder mb-2">${experienceDetails[i].term}</div>
                        <div class="small fw-bolder">${experienceDetails[i].positon}</div>
                        <div class="small text-muted">${experienceDetails[i].companyName}</div>
                        <div class="small text-muted">${experienceDetails[i].companyLocation}</div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div>${experienceDetails[i].description}</div>
                </div>
            </div>
        </div>
    </div>`;
}