// console.log(products,'my products')


var cards = document.getElementById("cards")

products.forEach(function (el) {

    cards.innerHTML += `
 <div class="card">
 <h3>${el.emoji}</h3>
            <h3>${el.name}</h3>
            <h3>${el.description}</h3>
            <h3>$${el.price}</h3>
            <button onclick="seeDetailsHandler(${el.id})">See Details</button>
        </div>

`
});

function seeDetailsHandler(id){
    window.location.href=`./product.html?id=${id}`
}