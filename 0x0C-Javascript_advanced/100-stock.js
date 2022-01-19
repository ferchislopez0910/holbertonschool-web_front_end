/**
  * @description - 15. Multiple callbacks
  * @var {Object} stock 
  * @function processPayment - payment sucessful
  * @param {String} itemName - product
  */

let stock = {macbook: 2, iphone: 4};

function processPayment(itemName) {
	stock[itemName] -= 1;
	console.log("Payment is being processed for item " + itemName);
}

/**
  * @function processError - payment wrong
  * @param {String} itemName - product
  */
function processError(itemName) {
	console.log("No more " + itemName + " in stock");
	console.log("Payment is not being processed");
}

/**
  * @function processOrder - payment order
  * @param {String} itemName - product
  */
function processOrder(itemName, callbackPayment, callbackError) {
	console.log("Verifying the stock of " + itemName);
	
	if (stock[itemName] > 0) {callbackPayment(itemName);}
	
	else {callbackError(itemName);	}
}
/**
  * Input product
  * @var {String} userMessage - User input message
  */
while(1){
    let userMessage = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");
    processOrder(userMessage, processPayment, processError);
}

