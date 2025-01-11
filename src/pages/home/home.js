import "./home.css";

const home = () => {
  const content = document.getElementById("content");

  const banner = document.createElement("div");
  banner.className = "banner";
  content.appendChild(banner);

  const heading = document.createElement("h1");
  heading.textContent = "Pizza Tower";
  content.appendChild(heading);

  const text = document.createElement("p");
  text.textContent = "Welcome to Pizza Tower";
  content.appendChild(text);
};

export default home;
