//----------Buisness Logic----------------

Pizza = function(personName, size, topping){
  this.personName = personName;
  this.size = size;
  this.topping = topping;
  this.price = 0;
}

Pizza.prototype.getTotal = function(){
  if(this.size === "small"){
    return this.price += 5;

  }else if(this.size === "medium"){
    return this.price += 8;

  }else if( this.size === "large"){
    return this.price += 10;

  }else{

  }
  return this.price;
}

//----------------UI--------------------


$(document).ready(function(){
  $(".formGroup").submit(function(event){
    event.preventDefault()
    var personNameInput = $("#personName").val();
    var pizzaToppingInput = $("input[name='topping']:checked").val();
    var pizzaSizeInput = $("input[name='pizza']:checked").val();
    var myPizza = new Pizza (personNameInput, pizzaSizeInput, pizzaToppingInput)
    var totalPrice = myPizza.getTotal();
    $("#person-name").text(personNameInput);
    $("#pizza-size").text(pizzaSizeInput);
    $("#topping").text(pizzaToppingInput);
    $("#total").text(totalPrice);
    $("#reciept").show();

  });
});
