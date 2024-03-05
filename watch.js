// let openShopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.list');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', ()=>{
//     body.classList.add('active');
// })
// closeShopping.addEventListener('click', ()=>{
//     body.classList.remove('active');
// })

// let products = [
//     {
//         id: 1,
//         name: 'PRODUCT NAME 1',
//         image: '1.PNG',
//         price: 120000
//     },
//     {
//         id: 2,
//         name: 'PRODUCT NAME 2',
//         image: '2.PNG',
//         price: 120000
//     },
//     {
//         id: 3,
//         name: 'PRODUCT NAME 3',
//         image: '3.PNG',
//         price: 220000
//     },
//     {
//         id: 4,
//         name: 'PRODUCT NAME 4',
//         image: '4.PNG',
//         price: 123000
//     },
//     {
//         id: 5,
//         name: 'PRODUCT NAME 5',
//         image: '5.PNG',
//         price: 320000
//     },
//     {
//         id: 6,
//         name: 'PRODUCT NAME 6',
//         image: '6.PNG',
//         price: 120000
//     }
// ];
// let listCards  = [];
// function initApp(){
//     products.forEach((value, key) =>{
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//             <img src="image/${value.image}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addToCard(${key})">Add To Card</button>`;
//         list.appendChild(newDiv);
//     })
// }
// initApp();
// function addToCard(key){
//     if(listCards[key] == null){
//         // copy product form list to list card
//         listCards[key] = JSON.parse(JSON.stringify(products[key]));
//         listCards[key].quantity = 1;
//     }
//     reloadCard();
// }
// function reloadCard(){
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;
//     listCards.forEach((value, key)=>{
//         totalPrice = totalPrice + value.price;
//         count = count + value.quantity;
//         if(value != null){
//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="image/${value.image}"/></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//                 </div>`;
//                 listCard.appendChild(newDiv);
//         }
//     })
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }
// function changeQuantity(key, quantity){
//     if(quantity == 0){
//         delete listCards[key];
//     }else{
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * products[key].price;
//     }
//     reloadCard();
// }


const openShopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.closeShopping');
const list = document.querySelector('.list');
const listCard = document.querySelector('.listCard');
const body = document.querySelector('body');
const total = document.querySelector('.total');
const quantity = document.querySelector('.quantity');
const products = [
    { id: 1, name: 'PRODUCT NAME 1', image: '1.PNG', price: 120000 },
    { id: 2, name: 'PRODUCT NAME 2', image: '2.PNG', price: 120000 },
    { id: 3, name: 'PRODUCT NAME 3', image: '3.PNG', price: 220000 },
    { id: 4, name: 'PRODUCT NAME 4', image: '4.PNG', price: 123000 },
    { id: 5, name: 'PRODUCT NAME 5', image: '5.PNG', price: 320000 },
    { id: 6, name: 'PRODUCT NAME 6', image: '6.PNG', price: 120000 }
];
const listCards = [];

openShopping.addEventListener('click', () => body.classList.add('active'));
closeShopping.addEventListener('click', () => body.classList.remove('active'));

function renderProduct(product, index) {
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
        <img src="image/${product.image}">
        <div class="title">${product.name}</div>
        <div class="price">${product.price.toLocaleString()}</div>
        <button onclick="addToCard(${index})">Add To Card</button>`;
    list.appendChild(newItem);
}

function addToCard(index) {
    const product = products[index];
    if (!listCards.includes(product)) {
        listCards.push({ ...product, quantity: 1 });
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let totalPrice = 0;
    let totalCount = 0;

    listCards.forEach((product, index) => {
        totalPrice += product.price;
        totalCount += product.quantity;

        const newItem = document.createElement('li');
        newItem.innerHTML = `
            <div><img src="image/${product.image}"/></div>
            <div>${product.name}</div>
            <div>${product.price.toLocaleString()}</div>
            <div>
                <button onclick="changeQuantity(${index}, ${product.quantity - 1})">-</button>
                <div class="count">${product.quantity}</div>
                <button onclick="changeQuantity(${index}, ${product.quantity + 1})">+</button>
            </div>`;
        listCard.appendChild(newItem);
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = totalCount;
}

function changeQuantity(index, newQuantity) {
    if (newQuantity <= 0) {
        listCards.splice(index, 1);
    } else {
        listCards[index].quantity = newQuantity;
        listCards[index].price = newQuantity * products[index].price;
    }
    reloadCard();
}

function initApp() {
    products.forEach(renderProduct);
}
initApp();
