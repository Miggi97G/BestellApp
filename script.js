// Warenkorb hinzufügen
// Warenkorb entfernen 
// Warenkorb löschen
// Anzahl hinzugefügt
// Gesammtpreis anzeigen

const basket = [];

function init() {
    renderPizza();
    renderPasta();
}


function renderPizza() {
    const content = document.getElementById("menu");
    content.innerHTML += `<h2>Pizza</h2> <img src="./assets/img/pizza_margheritta.jpeg">`;
    for (let i = 0; i < myPizza.length; i++) {
        content.innerHTML += `<h3>${myPizza[i].name}</h3><p>${myPizza[i].description}</p>
        <p>CHF ${myPizza[i].price.toFixed(2)}</p>
        <button onclick="addBasket()">Hinzufügen</button>`
    }
}

function renderPasta() {
    const content = document.getElementById("menu");
    content.innerHTML += `<h2>Pasta</h2> <img src="./assets/img/pasta_carbonara.png">`;;
    for (let i = 0; i < myPasta.length; i++) {
        content.innerHTML += `<h3>${myPasta[i].name}</h3><p>${myPasta[i].description}</p>
        <p>CHF ${myPasta[i].price.toFixed(2)}</p>
        <button onclick="addBasket()">Hinzufügen</button>`
    }
}


function addBasket(menu, index) {
    if (pizza) {
        basket.push(myPizza[index])
    }
    renderBasket()
}


function renderBasket() {
    let basketList = document.getElementById('basketContent');
    basketList.innerHTML = "";

    for (let i = 0; i < myBasket.length; i++) {
        let pizzaObject = myPizza[i];
        basketList.innerHTML += ` 
        <ul>
            <li><p>${pizzaObject.name}</p>
            ${pizzaObject.description}
            <p>${pizzaObject.price}.Fr</p>
            </li>
        </ul>
        `;
    }
    
}

