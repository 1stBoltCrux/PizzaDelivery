// BACK END LOGIC //
function Pizza(size, topping){
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.price = function() {
  return this.size + this.topping;
};

function Address(name, street, city, state, zip){
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}
// Not sure if I should be adding these "<li>"s in the backend or in the front//
Address.prototype.fullAddress = function() {
  return "<li>" + this.street + "</li>" + "<li>" + this.city + "</li>" + "<li>" + this.state + "</li>" + "<li>" + this.zip + "</li>"
};

// FRONT END LOGIC //
$(document).ready(function(){
  $("#form1").hide();

  $("#ratHeader h3").click(function(){
    $("#form1").fadeIn();
    $("#splash").hide();

    $(".reEnter").click(function(){
      location.reload();
    })
  });

  $("#form1").submit(function(event){
    event.preventDefault();
    $("#output").fadeIn();
    $("#form1").hide();

    var topping = parseInt($("#topping").val());
    var size = parseInt($("#size").val());
    var order = new Pizza(size, topping);

    var name = $("#name").val();
    var street = $("#street").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zip = $("#zip").val();
    var address = new Address(name, street, city, state, zip);


      $("#total").text("$" + order.price());
      $(".name").text(address.name);
      $("#output ul").append(address.fullAddress());
  });
});
