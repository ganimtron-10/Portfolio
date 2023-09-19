skillsetDetails = {
    "Languages": {
        skills: ["Python", "JavaScript", "C/C++", "Solidity"],
        icon: "bi bi-code-slash"
    },
    "Libraries & Frameworks": {
        skills: ["NumPy", "Pandas", "OpenCV", "Mediapipe", "PyAutoGUI", "Tkinter", 'React', 'React Native', 'Express', "Mongoose", "Web3.js", "p5.js"],
        icon: "bi bi-collection-fill"
    },
    "Databases": {
        skills: ["MongoDB", "SQL"],
        icon: "bi bi-pie-chart-fill"
    },
    "Game Development Tools": {
        skills: ["Godot", "Unity", 'Phaser', "PyGame"],
        icon: "bi bi-joystick"
    },
    "Development Tools": {
        skills: ["Git", 'GitHub', 'NodeJS', 'Linux', 'Docker', "Salesforce"],
        icon: "bi bi-tools"
    },
}


let skillsetSection = document.getElementById("skillset");

const skillsets = Object.keys(skillsetDetails);
for (let i = 0; i < skillsets.length; i++) {

    currentSkillSectionDetails = skillsetDetails[skillsets[i]];

    skillRow = "";

    for (let j = 0; j < Math.ceil(currentSkillSectionDetails.skills.length / 3); j++) {
        skillColumn = "";
        for (let k = 3 * j; k < Math.min(3 * (j + 1), currentSkillSectionDetails.skills.length); k++) {
            skillColumn += `
            <div class="col mb-4 mb-md-0">
                <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">${currentSkillSectionDetails.skills[k]}</div>
            </div>
            `;
        }
        skillRow += `<div class="row row-cols-1 row-cols-md-3 mb-4">` + skillColumn + `</div>`;
    }

    currentSkillDiv = `
    <div class="mb-5">
    <div class="d-flex align-items-center mb-4">
        <div
            class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
            <i class="${currentSkillSectionDetails.icon}"></i>
        </div>
        <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">${skillsets[i]}</span></h3>
    </div>` + skillRow + `</div>`;


    skillsetSection.innerHTML += currentSkillDiv;

    console.log(currentSkillDiv);

    // <div class="row row-cols-1 row-cols-md-3 mb-4">
    //     <div class="col mb-4 mb-md-0">
    //         <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">SEO/SEM
    //             Marketing</div>
    //     </div>
    //     <div class="col mb-4 mb-md-0">
    //         <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
    //             Statistical Analysis</div>
    //     </div>
    //     <div class="col">
    //         <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Web
    //             Development</div>
    //     </div>
    // </div>
    // <div class="row row-cols-1 row-cols-md-3">
    //     <div class="col mb-4 mb-md-0">
    //         <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Network
    //             Security</div>
    //     </div>
    //     <div class="col mb-4 mb-md-0">
    //         <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Adobe
    //             Software Suite</div>
    //     </div>
    //     <div class="col">
    //         <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">User
    //             Interface Design</div>
    //     </div>
    // </div>

}