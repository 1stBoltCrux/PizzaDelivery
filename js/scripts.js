function Pizza(size, topping){
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.price = function() {
  return this.size + this.topping;
};

$(document).ready(function(){

  $("#addPizza").click(function(){
    $(".newPizzas").append('<div class="newPizzaContainer">' +
    '<div class="form-group">' +
    '<h3>Choose your topping:</h3>' +
    '<select class="form-control" class="new-topping">' +
    '<option value="1">Cheese</option>' +
    '<option value="2">Veggie</option>' +
    '<option value="3">Meat Lovers</option>' +
    '<option value="4">Supreme</option>' +
    '</select>' +
    '</div>' +
    '<div class="form-group">' +
    '<h3>Choose your size:</h3>' +
    '<select class="form-control" class="new-size">' +
    '<option value="1">Small</option>' +
    '<option value="2">Medium</option>' +
    '<option value="3">Large</option>' +
    '</select>' +
    '</div>' +
    '</div>');
  });

  $("#form1").submit(function(event){
    event.preventDefault();
    var topping = parseInt($("#topping").val());
    var size = parseInt($("#size").val());
    var order = new Pizza(size, topping);
debugger;
    $(".newPizzaContainer").each(function() {
      var topping = $(this).find(".new-topping").val();
      var size = $(this).find(".new-size").val();
      console.log(topping);
      console.log(size);
      var newOrder = new Pizza(size, topping);
    });

    $("#output").text("$" + order.price());
    //document ready and event listener end tags//
    $(".new-topping").val("");
    $(".new-size").val("");
    $("#topping").val("");
    $("#size").val("");
  });
});
