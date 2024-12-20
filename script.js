// Warenkorb hinzufügen
// Warenkorb entfernen 
// Warenkorb löschen
// Anzahl hinzugefügt
// Gesammtpreis anzeigen

let basket = []; 

function init(){
renderPizza();
renderPasta();
}


function renderPizza(){
    let content = document.getElementById("menu");
    content.innerHTML += `<h2>Pizza</h2><img src="./assets/img/Gemini_Generated_Image_orbrkrorbrkrorbr.jpeg" alt="">`;
    for (let i = 0; i < myPizza.length; i++) {
        content.innerHTML += `<h3>${myPizza[i].name}</h3><p>${myPizza[i].description}</p>
        <p>CHF ${myPizza[i].price.toFixed(2)}</p>
        <button onclick="addBasket()">Hinzufügen</button>`
    }
}

function renderPasta(){
    let content = document.getElementById("menu");
    content.innerHTML += `<h2>Pasta</h2><img src="./assets/img/pasta carbonara.png" alt="">`;
    for (let i = 0; i < myPasta.length; i++) {
        
        content.innerHTML += `<h3>${myPasta[i].name}</h3><p>${myPasta[i].description}</p>
        <p>CHF ${myPasta[i].price.toFixed(2)}</p>
        <button onclick="addBasket()">Hinzufügen</button>`
    }
}

function addBasket(){
    console.log("Hallo");
    
    let basketList = document.getElementById('basketContent');

    
    for (let i = 0; i < myPizza.length; i++) {
        basketList.push(myPizza[i]);
    }
   }