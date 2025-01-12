import "./contact.css";

const contact = () => {
  const content = document.getElementById("content");

  const phoneNumber = document.createElement("p");
  phoneNumber.className = "phone-number";
  phoneNumber.textContent = "📞 07987654321";
  content.appendChild(phoneNumber);

  const email = document.createElement("p");
  email.className = "email";
  email.textContent = "📧 hello@pizzatower.com"
  content.appendChild(email);

  const address = document.createElement("p");
  address.className = "address";
  address.textContent = "🏠 123 Pizza Street, London, SW1A 1AA";
  content.appendChild(address);
};

export default contact;
