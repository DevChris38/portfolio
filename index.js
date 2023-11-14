let boxLinkedIn = document.querySelector("#linkedIn");
let boxLinkedInLogo = document.querySelector("#linkedInLogo");
let boxGitHub = document.querySelector("#gitHub");
let boxGitHubLogo = document.querySelector("#gitHubLogo");
let boxX = document.querySelector("#X");
let boxXLogo = document.querySelector("#XLogo");
let boxMail = document.querySelector("#mail");
let boxMailLogo = document.querySelector("#mailLogo");

function handleMouseOver(box, logo, x, y) {
  box.animate(
    [
      { transform: "scale(1) translate(0)" },
      { transform: `scale(2) translate(${x}vw, ${y}vw)` },
    ],
    {
      duration: 200,
      fill: "forwards",
      easing: "ease-in-out",
    }
  );
  logo.animate(
    [{ transform: "translate(0)" }, { transform: `translate(${x}vw, ${y}vw)` }],
    {
      duration: 200,
      fill: "forwards",
      easing: "ease-in-out",
    }
  );
}

function handleMouseOut(box, logo, x, y) {
  box.animate(
    [
      { transform: `scale(2) translate(${x}vw, ${y}vw)` },
      { transform: "scale(1) translate(0)" },
    ],
    {
      duration: 200,
      fill: "forwards",
      easing: "ease-in-out",
    }
  );
  logo.animate(
    [{ transform: `translate(${x}vw, ${y}vw)` }, { transform: "translate(0)" }],
    {
      duration: 200,
      fill: "forwards",
      easing: "ease-in-out",
    }
  );
}

boxLinkedInLogo.addEventListener("mouseenter", () =>
  handleMouseOver(boxLinkedIn, boxLinkedInLogo, 2, 2)
);
boxLinkedIn.addEventListener("mouseleave", () =>
  handleMouseOut(boxLinkedIn, boxLinkedInLogo, 2, 2)
);

boxGitHubLogo.addEventListener("mouseenter", () =>
  handleMouseOver(boxGitHub, boxGitHubLogo, -2, 2)
);
boxGitHub.addEventListener("mouseleave", () =>
  handleMouseOut(boxGitHub, boxGitHubLogo, -2, 2)
);

boxMailLogo.addEventListener("mouseenter", () =>
  handleMouseOver(boxMail, boxMailLogo, 2, -2)
);
boxMail.addEventListener("mouseleave", () =>
  handleMouseOut(boxMail, boxMailLogo, 2, -2)
);
