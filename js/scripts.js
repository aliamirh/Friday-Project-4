Pizza = function(personName, topping, size){
  this.personName = personName;
  this.topping = topping;
  this.size = size;
  this.price = 0;
}

Pizza.prototype.getTotal = function(){
  if(this.size === "Large"){
    console.log("adfsd")
    this.price += 10;
  }else if(this.size === "Medium"){
    this.price += 8;
  }else if( this.size === "Large"){
    this.price += 5;
  }else{
    console.log("test1")
  }
  return this.price;
}

// PizzaOrder = function(){
//   this.pizzas = []
// }
// PizzaOrder.prototype.addPizzas = function(pizzaOrder){
//   this.pizzas.push(pizzaOrder)
// }
//
//
//
// function sizePrice(){
//   if(PizzaOrder.pizzas[0].size === "Small"){
//     PizzaOrder.pizzas[0].price = 5;
//   }else if (PizzaOrder.pizzas[0].size === "Medium"){
//     PizzaOrder.pizzas[0].price = 8;
//   }else{
//     PizzaOrder.pizzas[0].price = 12;
//   }
//
// }
//
// function toppingPrice(){
//     if(PizzaOrder.pizzas[0].topping === "Pepperoni"){
//       PizzaOrder.pizzas[0].price += 1;
//     }else if (PizzaOrder.pizzas[0].topping === "Peppers"){
//       PizzaOrder.pizzas[0].price += 1;
//     }else if (PizzaOrder.pizzas[0].topping === "Cheese"){
//       PizzaOrder.pizzas[0].price += 2;
//     }else if (Pizza.pizzas[0].topping === "Vegan"){
//       PizzaOrder.pizzas[0].price += 3;
//     }
//
//
// }



















//----------------UI--------------------


$(document).ready(function(){
  $(".formGroup").submit(function(event){
    event.preventDefault()
    var personNameInput = $("#personName").val();
    var pizzaSizeInput = $("input[name='pizza']:checked").val();
    var pizzaToppingInput = $("input[name='topping']:checked").val();
    var myPizza = new Pizza (personNameInput, pizzaSizeInput, pizzaToppingInput)
    var totalPrice = myPizza.getTotal();
    console.log(totalPrice);
    console.log(personNameInput)
    console.log(pizzaSizeInput)
    console.log(pizzaToppingInput)

  });
});
