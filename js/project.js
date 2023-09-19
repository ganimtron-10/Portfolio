projectDetails = {
    0: {
        name: "Project Name 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!",
        img: "https://dummyimage.com/300x400/343a40/6c757d"
    },
    1: {
        name: "Project Name 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!",
        img: "https://dummyimage.com/300x400/343a40/6c757d"
    }
}


let projectCard = document.getElementById("project-card");

for (let i = 0; i < Object.keys(projectDetails).length; i++) {
    projectCard.innerHTML += `
    <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
        <div class="card-body p-0">
            <div class="d-flex flex-column flex-md-row align-items-center">
                <img class="img-fluid mb-3 mb-md-0 w-100"
                    src="${projectDetails[i].img}" alt="..." />
                <div class="p-5">
                    <h2 class="fw-bolder">${projectDetails[i].name}</h2>
                    <p>${projectDetails[i].description}</p>
                </div>
            </div>
        </div>
    </div>`;
}


