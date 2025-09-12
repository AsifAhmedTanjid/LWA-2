const handleAddproduct =()=>
{
    const productElement = document.getElementById('product')
    const quantityElement = document.getElementById('quantity')
    const product = productElement.value;
    const quantity = parseInt(quantityElement.value);
    displayProducts(product,quantity);
    addProductToCart(product,quantity)
    console.log('product Add',product,quantity);
    productElement.value='';
    quantityElement.value='';
    
}


const getCart =()=>{
    let cart={};
    const cartJSON = localStorage.getItem('cart');
    if(cartJSON){
        cart = JSON.parse(cartJSON);
    }

    return cart;
}

const addProductToCart =(product,quantity)=>{
    const cart =getCart();
    if(cart[product]){
            cart[product]+=quantity;
    }
    else {

        cart[product] = quantity
    }
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('cart',cartJSON);
}
const displayProducts =(product,quantity)=>{
    const li = document.createElement("li");
    li.innerText =`${product} : ${quantity}`;


    const ul =document.getElementById("products-container");
    ul.appendChild(li);

}
const displayStoredProducts=()=>{
    const cart =getCart();
    for(const product in cart ){
        const quantity = cart[product];
        displayProducts(product,quantity);
    }
}
displayStoredProducts();

/**
 * to save object/ array in local storage
 * 1. cnvert the object to json string by json.stringyfy
 * 2.localstorage.setitem();
 * 
 * 
 * 
 * to get object/array from the local storage
 * 1. get the item from the local storage and it will be in json string
 * 2.convert the json string to js object by using json.parse
 */