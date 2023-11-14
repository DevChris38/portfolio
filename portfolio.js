import projects from "./projects.json" assert { type: "json" };

const projectsContainer = document.getElementById("projects");
const htmlBtn = document.getElementById("HTML5/CSS3");
const jsBtn = document.getElementById("JS");
const reactBtn = document.getElementById("react");

const handleClick = (techno) => {
  let supprDiv = document.getElementsByClassName("oneProject");
  let nbDiv = supprDiv.length;
  if (nbDiv != 0) {
    for (let i = 0; i < nbDiv; i++) {
      supprDiv.item(0).remove();
    }
  } else {
  }

  projects.forEach((project) => {
    if (project.technologies.includes(techno)) {
      let div = document.createElement("div");
      div.className = "oneProject";
      project.imgSrc
        ? (div.style.backgroundImage = `url(${project.imgSrc})`)
        : null;
      let title = document.createElement("h2");
      title.textContent = project.name;
      //div.appendChild(title);
      let content = document.createElement("p");
      content.textContent = project.technologies;
      //div.appendChild(content);
      let link = document.createElement("a");
      link.className = "divLink";
      link.href = project.href;
      div.appendChild(link);

      projectsContainer.appendChild(div);
    }
  });
};

htmlBtn.addEventListener("click", () => handleClick("HTML5/CSS3"));
jsBtn.addEventListener("click", () => handleClick("JS"));
reactBtn.addEventListener("click", () => handleClick("react"));
