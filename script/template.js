let myPizza = [
    {
    "name": "Pizza Margherita",
    "price": 14.00,
    "description": "Tomaten Mozzarella"
},
{
    "name": "Pizza Diavola",
    "price": 15.00,
    "description": "Tomaten Mozzarella, scharfe Salami"
},
{
    "name": "Pizza Tirolese",
    "price": 16.00,
    "description": "Tomaten Mozzarella"
}
]

let myPasta = [
    {
    "name": "Pasta Carbonara",
    "price": 14.00,
    "description": "Tomaten Mozzarella"
},
{
    "name": "Pasta",
    "price": 15.00,
    "description": "Tomaten Mozzarella"
},
{
    "name": "Pasta",
    "price": 16.00,
    "description": "Tomaten Mozzarella"
}
]

const pizza = document.getElementById("pizzaMenu");
const pasta = document.getElementById("pastaMenu");

//myPizza.forEach(dish => {
//  const li = document.createElement("li");
//  li.innerHTML = `<h3>${dish.name}</h3><p>${dish.description}</p><p>CHF ${dish.price.toFixed(2)}</p><button onclick="(addBasket)">Hinzufügen</button>`; 
//  pizza.appendChild(li);
//});

//myPasta.forEach(dish => {
//    const li = document.createElement("li");
//    li.innerHTML = `<h3>${dish.name}</h3><p>${dish.description}</p><p>CHF ${dish.price.toFixed(2)}</p><button onclick="(addBasket)">Hinzufügen</button>`; 
//    pasta.appendChild(li);
//  });