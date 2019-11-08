Pizza = function(personName, topping, size){
  this.personName = personName,
  this.topping = topping,
  this.size = size,
  this.price = 0
}
PizzaOrder = function(){
  this.pizzas = []
}

PizzaOrder.prototype.addPizzas = function(pizzaOrder){
  this.pizzas.push(pizzaOrder)
}

function sizePrice(){
  if(PizzaOrder.pizzas[0].size === "Small"){
    PizzaOrder.pizzas[0].price = 5;

















//----------------UI--------------------


$(document).ready(function(){
  $(".formGroup").submit(function(event){
    event.preventDefault()
    var personNameInput = $("#personName").val();
    var pizzaSizeInput = $("input[name='pizza']:checked").val();
    var pizzaToppingInput = $("input[name='topping']:checked").val();
    console.log(pizzaToppingInput)
    console.log(pizzaSizeInput)
    console.log(personNameInput)
  });
});
