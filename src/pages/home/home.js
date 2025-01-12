import "./home.css";

const home = () => {
  const content = document.getElementById("content");

  const banner = document.createElement("div");
  banner.className = "banner";
  content.appendChild(banner);

  const introText = document.createElement("div");
  introText.className = "intro-text";

  const heading = document.createElement("h1");
  heading.textContent = "Pizza Tower";
  introText.appendChild(heading);

  const text = document.createElement("p");
  text.textContent = "Fresh pies from the one and only Peppino Spaghetti";
  introText.appendChild(text);

  content.appendChild(introText);
};

export default home;
