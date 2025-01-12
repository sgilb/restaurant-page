import "./menu.css";

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const itemName = document.createElement("h2");
  itemName.textContent = name;
  menuItem.appendChild(itemName);

  const itemDescription = document.createElement("p");
  itemDescription.textContent = description;
  menuItem.appendChild(itemDescription);

  return menuItem;
}

const menu = () => {
  const content = document.getElementById("content");

  content.appendChild(
    createMenuItem("Margherita", "Tomato Sauce, Mozzarella, Basil")
  );
  content.appendChild(
    createMenuItem(
      "TSB",
      "Tomato Sauce, Mozzarella, Tender stem broccoli, Parmesan, Pine nuts, Garlic"
    )
  );
  content.appendChild(
    createMenuItem(
      "Pepperoni",
      "Tomato Sauce, Mozzarella, Pepperoni, Nduja sausage"
    )
  );
  content.appendChild(
    createMenuItem(
      "Funghi",
      "Tomato Sauce, Mozzarella, Mushrooms, Thyme"
    )
  );
};

export default menu;
