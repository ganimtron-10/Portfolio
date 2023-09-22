const educationDetails = [
    {
        time: "2020 - 2024",
        institutionName: "Savitribai Phule Pune University",
        institutionLocation: "Pune, MH",
        course: "B.E. Computer Engineering",
        grade: "8.8*/10.0"
    },
    {
        time: "2018 - 2020",
        institutionName: "Pratibha Junior College",
        institutionLocation: "Pune, MH",
        course: "HSC",
        grade: "85.54%"
    },
    {
        time: "2017 - 2018",
        institutionName: "P. Jog High School",
        institutionLocation: "Pune, MH",
        course: "SSC",
        grade: "88.80%"
    }
]


const educationCard = document.getElementById("education-card");

for (let i = 0; i < educationDetails.length; i++) {
    educationCard.innerHTML += `
    <div class="row align-items-center p-3">
        <div class="col text-center text-lg-start mb-4 mb-lg-0">
            <div class="row bg-light p-4 rounded-4">
                <div class="col-12 col-lg-3 small fw-bolder">${educationDetails[i].course}</div>
                <div class="col-12 col-lg-3 mb-2">
                    <div class="small text-muted">${educationDetails[i].institutionName}</div>
                    <div class="small text-muted">${educationDetails[i].institutionLocation}</div>
                </div>
                <div class="col-12 col-lg-3 text-secondary fw-bolder mb-2">${educationDetails[i].time}</div>
                <div class="col-12 col-lg-3 text-secondary mb-2">${educationDetails[i].grade}</div>
            </div>
        </div>
    </div>
`;
}