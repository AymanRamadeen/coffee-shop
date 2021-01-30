var coffeeType=prompt("what type of coffe do you want?");
var noCUPS=prompt("how many cups do you want?");

var orderDetails;

if(noCUPS >=1 && noCUPS <3){
    orederDetails="congrats you gained a discount of 25%";
}
else if (noCUPS > 3 && noCUPS <=5 ){
    orderDetails="congrats you gained a discount of 50%";
}
else if (noCUPS > 5 && noCUPS <10){
    orderDetails="congrats you gained a discount of 50% and a sticker"
}
else if (noCUPS >=10){
    orderDetails="congrats you gained a discount of 50% and a Dounts";
}
else {orderDetails="no discounts";

}

document.write(orderDetails);
document.getElementById("order").innerText.coffeeType;

confirm("are you happy with your discount?");
alert("thank you and good bye!");
