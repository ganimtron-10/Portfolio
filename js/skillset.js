skillsetDetails = {
  "Languages": {
    skills: ["Python", "JavaScript", "C/C++", "Solidity"],
    icon: "bi bi-code-slash"
  },
  "Libraries & Frameworks": {
    skills: ["NumPy", "Pandas", "OpenCV", "Mediapipe", "PyAutoGUI", "Tkinter", "React", "React Native", "Express", "Mongoose", "Web3.js", "p5.js"],
    icon: "bi bi-collection-fill"
  },
  "Databases": {
    skills: ["MongoDB", "SQL"],
    icon: "bi bi-pie-chart-fill"
  },
  "Game Development Tools": {
    skills: ["Godot", "Unity", "Phaser", "PyGame"],
    icon: "bi bi-joystick"
  },
  "Development Tools": {
    skills: ["Git", "GitHub", "NodeJS", "Linux", "Docker", "Salesforce"],
    icon: "bi bi-tools"
  },
}

const skillsetSection = document.getElementById("skillset");

Object.keys(skillsetDetails).forEach((category) => {
  const { skills, icon } = skillsetDetails[category];
  const skillColumns = [];

  for (let i = 0; i < skills.length; i++) {
    const skillColumn = `
      <div class="col mb-4 mb-md-0">
        <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">${skills[i]}</div>
      </div>
    `;
    skillColumns.push(skillColumn);
  }

  const skillRows = [];
  for (let i = 0; i < skillColumns.length; i += 3) {
    const row = `
      <div class="row row-cols-1 row-cols-md-3 mb-4">
        ${skillColumns.slice(i, i + 3).join("")}
      </div>
    `;
    skillRows.push(row);
  }

  const skillsetHTML = `
    <div class="mb-5">
      <div class="d-flex align-items-center mb-4">
        <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
          <i class="${icon}"></i>
        </div>
        <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">${category}</span></h3>
      </div>
      ${skillRows.join("")}
    </div>
  `;

  skillsetSection.innerHTML += skillsetHTML;
});
