import { foodItem } from "./fooditems.js";

// console.log(foodItem);

function displayItems(){
    var biryani = document.getElementById('biryani');
    var chicken = document.getElementById('chicken');
    var starters = document.getElementById('starters');
    var vegetable = document.getElementById('vegetable');
    var chinese = document.getElementById('chinese');
    var southIndian = document.getElementById('south-indiaNn');
    // console.log(southIndian === null);

    const biryaniData = foodItem.filter(item => item.category == 'biryani');
    const chickenData = foodItem.filter(item => item.category == 'chicken');
    const startersData = foodItem.filter(item => item.category == 'starters');
    const vegetableData = foodItem.filter(item => item.category == 'vegetable');
    const chineseData = foodItem.filter(item => item.category == 'chinese');
    const southIndianData = foodItem.filter(item => item.category == 'south-indian');
    // console.log(biryaniData);

    biryaniData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star = document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText = ' '+ item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-name');
        itemPrice.innerText = 'Rs. ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        biryani.appendChild(itemCard);

    })

    chickenData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star = document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText = ' '+ item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-name');
        itemPrice.innerText = 'Rs. ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        chicken.appendChild(itemCard);

    })

    startersData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star = document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText = ' '+ item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-name');
        itemPrice.innerText = 'Rs. ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        starters.appendChild(itemCard);

    })

    vegetableData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star = document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText = ' '+ item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-name');
        itemPrice.innerText = 'Rs. ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        vegetable.appendChild(itemCard);

    })

    chineseData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star = document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText = ' '+ item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-name');
        itemPrice.innerText = 'Rs. ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        chinese.appendChild(itemCard);

    })


    southIndianData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star = document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText = ' '+ item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-name');
        itemPrice.innerText = 'Rs. ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        southIndian.appendChild(itemCard);

    })
}
displayItems();

const categoryListData = [...new Map(foodItem.map(item=> [item 
                        ['category'],item])).values()];
console.log(" data " +categoryListData);

function categoryLists(){
    var categoryList = document.getElementById('category-list');

    categoryListData.map(item => {
        var listCard = document.createElement('div');
        listCard.setAttribute('class','list-card');

        var listImg = document.createElement('img');
        listImg.src = item.img;

        var listName = document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText = item.category;
        listName.setAttribute('href','#'+item.category);

        listCard.appendChild(listImg);
        listCard.appendChild(listName);
        
        var cloneListCard = listCard.cloneNode(true);
        categoryList.appendChild(listCard);
        document.querySelector('.category-header').appendChild(cloneListCard);
    })
}

categoryLists(); 

document.querySelectorAll('.add-to-cart').forEach(item=>{
    item.addEventListener('click',addToCart);
})

var cartData = []
function addToCart(){ 
    // console.log(this.parentNode);

    var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
    // console.log(itemToAdd);
    var itemObj = foodItem.find(element=>element.name == itemToAdd);
    // console.log(itemObj);

    var index = cartData.indexOf(itemObj);
    if(index === -1){
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData = [...cartData,itemObj];
        console.log(cartData);
    }
    else if(index > -1){
        alert("Added To Cart");
    }

    document.getElementById('cart-plus').innerText = ' '+cartData.length + ' Items';
    // document.getElementById('m-cart-plus').innerText=
    // ' ' + cartData.length;
    totalAmount();
    cartItems();

}

function cartItems(){
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    cartData.map(item=>{
        var tableRow = document.createElement('tr');

        var rowData1 = document.createElement('td');
        var img = document.createElement('img');
        img.src = item.img;
        rowData1.appendChild(img);

        var rowData2  = document.createElement('td');
        rowData2.innerText = item.name;
        
        var rowData3 = document.createElement('td');

        var btn1 = document.createElement('button');
        btn1.setAttribute('class','decrease-item');
        btn1.innerText = '-';

        var span = document.createElement('span');
        span.innerText = item.quantity;
       
        var btn2 = document.createElement('button');
        btn2.setAttribute('class','increase-item');
        btn2.innerText = '+';

        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        var rowData4 = document.createElement('td');
        rowData4.innerText = item.price;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);

    })


    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem);
    });

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem);
    });
}

var currPrice = 0;
var flag = false;
function incrementItem(){
    let itemToInc = this.parentNode.previousSibling.innerText;
    console.log(itemToInc);

    var incObj = cartData.find(element=>element.name == itemToInc);
    incObj.quantity += 1;
    
    currPrice = (incObj.price * incObj.quantity - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);
    incObj.price = currPrice*incObj.quantity;
    totalAmount();
    cartItems();
}

function decrementItem(){
    let itemToDec = this.parentNode.previousSibling.innerText;
    let decObj = cartData.find(element=>element.name==itemToDec);
    let ind = cartData.indexOf(decObj);
    if(decObj.quantity > 1){
        currPrice = (decObj.price * decObj.quantity - decObj.price*(decObj.quantity-1)) / (decObj.quantity);
        decObj.quantity-= 1;
        decObj.price= currPrice*decObj.quantity;
    }

    else{
        document.getElementById(decObj.id).classList.remove('toggle-heart');
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerHTML = ' '+cartData.length + " Items";
        // document.getElementById('m-cart-plus').innerHTML = ' '+cartData.length;

        if(cartData.length < 1 && flag ){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            // document.getElementById('m-cart-plus').classList.toggle('food-items');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            document.getElementById('category-header').classList.toggle('toggle-category');
            flag = false;
            alert("Currently No items in Cart");

        }

    }
    totalAmount();
    cartItems();
}

function totalAmount(){
    var sum  =0;
    cartData.map(item=>{
        sum += item.price;
    });
    document.getElementById('total-item').innerText = 'Total Items : ' + cartData.length;
    document.getElementById('total-price').innerText = 'Total Price : Rs. ' + sum;
    document.getElementById('m-total-amount').innerText= 'Total Price : $ ' + sum;
}

document.getElementById('cart-plus').addEventListener('click',cartToggle);
// document.getElementById('m-cart-plus').addEventListener('click',cartToggle)

function cartToggle(){
    if(cartData.length > 0){ 
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        // document.getElementById('m-cart-plus').classList.toggle('food-items');
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag = true;
    }
    else{
        alert("Currently No Items in the Cart");
    }
}

document.getElementById('add-address').addEventListener('click',addAddress);

function addAddress(){
    var address = prompt('Enter your Address');
    if(address){
        document.getElementById('add-address').innerText = ' '+address;
        // document.getElementById('m-add-address').innerText = ' '+address;
    }
    else{
        alert("Address not added");
        document.getElementById('add-address').innerText = 'Your Address'
    }
   
}