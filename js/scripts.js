Pizza = function(personName, type, size){
  this.personName = personName,
  this.type = type,
  this.size = size,
  this.price = 0
}
PizzaOrder = function(){
  this.pizzas = []
}

PizzaOrder.prototype.addPizzas = function(pizzaOrder){
  this.pizzas.push(pizzaOrder)
}




















//----------------UI--------------------


$(document).ready(function(){
  $(".formGroup").submit(function(event){
    event.preventDefault()

  });
});
