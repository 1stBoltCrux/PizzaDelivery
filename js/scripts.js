function Pizza(size, topping){
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.price = function() {
  return this.size + this.topping;
};

function Address(name, city, state, street, zip){
  this.name = name;
  this.city = city;
  this.state = state;
  this.street = street;
  this.zip = zip;
}
// Not sure if I should be adding these "<li>"s in the backend or in the front//
Address.prototype.fullAddress = function() {
  return "<li>" + this.city + "</li>" + "<li>" + this.state + "</li>" + "<li>" + this.street + "</li>" + "<li>" + this.zip + "</li>"
};

$(document).ready(function(){
  $("#form1").hide();

  $("#ratHeader h3").click(function(){
    $("#form1").fadeIn();
    $(".container").removeClass("welcomeRat")
    $("#splash").hide();
  });
  $("#form1").submit(function(event){
    event.preventDefault();
    $("#form1").hide();
    $("#output").show();

    var topping = parseInt($("#topping").val());
    var size = parseInt($("#size").val());
    var order = new Pizza(size, topping);

    var name = $("#name").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var street = $("#street").val();
    var zip = $("#zip").val();
    var address = new Address(name, city, state, street, zip);


      $("#output p").text("$" + order.price());
      $(".name").text(address.name);
      $("#output ul").append(address.fullAddress());
  });
});
