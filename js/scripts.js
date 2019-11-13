//----------Buisness Logic----------------

Pizza = function(personName, size, topping) {
  this.personName = personName,
    this.size = size,
    this.topping = topping,
    this.price = 0
}

Pizza.prototype.getTotal = function() {

  if (this.size === "small") {
    return this.price += 5;

  } else if (this.size === "medium") {
    return this.price += 8;

  } else if (this.size === "large") {
    return this.price += 10;

  }
  return this.price;
}
Pizza.prototype.getTotalTopping = function() {
  if (this.topping === "pepperoni") {
    return this.price += 1;
  } else if (this.topping === "peppers") {
    return this.price += .5;
  } else if (this.topping === "cheese") {
    return this.price += 2;
  } else if (this.topping === "fish") {
    return this.price += 3;
  } else {
    alert("Go add a topping!")
  }
}

//----------------UI--------------------


$(document).ready(function() {
  $(".formGroup").submit(function(event) {
    event.preventDefault()
    var personNameInput = $("#personName").val();
    var pizzaToppingInput = $("input[name='topping']:checked").val();
    var pizzaSizeInput = $("input[name='pizza']:checked").val();
    var myPizza = new Pizza(personNameInput, pizzaSizeInput, pizzaToppingInput)
    var totalPrice = myPizza.getTotal() + myPizza.getTotalTopping();
    $("#receipt").text("Hello " + myPizza.personName + "!" + " thank you for your order of a " + myPizza.size + " pizza with " + myPizza.topping + " on top! " + "Your Total is $" + myPizza.price + ".")
    $("#receipt").show();

  });
});
