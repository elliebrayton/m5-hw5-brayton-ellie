var pizza = {
    crust: "garlic",
    cheese: "mozzarella",
    sauce: "tomato"
};
//Methocd
pizza.addToppings = function(){
    return "Please add pepperoni and sausage";
};

//For my reference to make sure it is working
// console.log(pizza);
// console.log(pizza.addToppings);




function orderPizza() {
    console.log(pizza.crust);
    console.log(pizza.cheese);
    console.log(pizza.sauce);
    console.log(pizza.addToppings());
  }
  
orderPizza();