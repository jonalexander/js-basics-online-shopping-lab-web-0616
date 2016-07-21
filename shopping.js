"use strict"

var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item] // calling on key returns the value (price)
    }
  }

  return t
}


function getCart() {
 return cart
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100 + 1)
 var newObj = {[item]: price}
 cart.push(newObj) // added key/value pair to cart array
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
 var cl = cart.length

 if (!cl) { // if the cart length is falsey (aka 0), 
  return console.log("Your shopping cart is empty.")
 }

 // will arrive at this code if cart is not empty

 var message = "In your cart you have ";

 for (var index in cart) {
  var item = Object.keys(cart[index])[0];  //key
  var price = cart[index][item];       //value
  message += `${item} at ${price},`
 } //for
}//func viewCart


function removeFromCart(itemName) {

 for (var i = 0; i < cart.length; i++) {
  //first item in cart = cart[i]

  if (Object.keys(cart[i])[0] === itemName) {
   cart.splice(i, 1);
  } else {
   console.log("That item is not in your cart.")
  } //else
 }  //if

 return cart;
}

function placeOrder(creditCard) {
 if (creditCard) {
  console.log(`Your total cost is ${total} and will be charged to credit card number ${creditCard}`);
 } else {
  console.log("We do not have that credit card on file to place your order")
 } //if
} //func
