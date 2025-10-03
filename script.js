const foods = [
    "Pasta",
    "Steak",
    "Chicken",
    "Chips",
    "Pizza",
    "Lobster",
    "Beef",
    "Tacos",
    "Sushi",
    "Wings"
];

const output = document.getElementById("output");


const ol = document.createElement("ol");
output.replaceWith(ol);

foods.sort();


foods.forEach(food => {
    const li = document.createElement("li");
    li.textContent = food;
    ol.appendChild(li);
});
