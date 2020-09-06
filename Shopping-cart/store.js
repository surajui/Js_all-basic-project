if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready();
}
function ready(){
    const removeCartButton = document.getElementsByClassName('btn-danger');
    for(let i=0;i < removeCartButton.length;i++){
        let buttons = removeCartButton[i];
        buttons.addEventListener('click',removeCartItem)      
    } 
    let quantityInput = document.getElementsByClassName('cart-quantity-input');
    for(let i=0;i<quantityInput.length;i++){
        let input = quantityInput[i];
        input.addEventListener('change',quantityChanged)
    } 
      let addToCartButton = document.getElementsByClassName('shop-item-button')
      for(let i=0;i<addToCartButton.length;i++){
          let cartbutton = addToCartButton[i];
          cartbutton.addEventListener('click',addToCartItem);
      }
}
function quantityChanged(event){
    let input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateCartTotal();
}
function removeCartItem(event){
    let buttonClick = event.target;
    buttonClick.parentElement.parentElement.remove();
    updateCartTotal()
}

function addToCartItem(event){
    let addbutton = event.target;
    let shopItem = addbutton.parentElement.parentElement;
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    let image = shopItem.getElementsByClassName('shop-item-image')[0].src;
    // console.log(title,image);
    addItemToCart(title,price,image);
    updateCartTotal();
}

function addItemToCart(title,price,image){
let cartRow = document.createElement('div')
cartRow.classList.add('cart-row');
let cartItem = document.getElementsByClassName('cart-items')[0];
let cartItemNames = cartItem.getElementsByClassName('cart-item-title');
for(let i=0;i<cartItemNames.length;i++){
    if(cartItemNames[i].innerText == title){
        alert('sorry this item is add cart');
        return
    }
}
let cartContent = `<div class="cart-row">
<div class="cart-item cart-column">
    <img class="cart-item-image" src='${image}' width="100" height="100">
    <span class="cart-item-title">${title}</span>
</div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
</div>
</div>`
cartRow.innerHTML =cartContent;
cartItem.append(cartRow);
cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem);
cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChanged)
}

function updateCartTotal(){
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartRows = cartItemContainer.getElementsByClassName('cart-row')
    let total = 0;
    for(let i=0;i<cartRows.length;i++){
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0];
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        let price = parseFloat(priceElement.innerText.replace('$',''));
        let quantity = quantityElement.value;
        total = total + (price*quantity);  
    }
    total = Math.round(total*100)/100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$'+ total;
}