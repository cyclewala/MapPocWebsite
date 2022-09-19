const inputDataObj = {"lakeInformation":[{"coordinate":"43.9492085441969, -79.43456928874666","lakeName":"Lake Wilcox","pinColor":"#000000","description":"water is safe"},{"coordinate":"43.68877858685247, -78.96846825795835","lakeName":"Lake Ontario","pinColor":"#0b1a9e","description":"Water is safe"},{"coordinate":"44.44202361432006, -79.37130382925282","lakeName":"Lake Simcoe","pinColor":"#f01b0f","description":"not allow swim"},{"coordinate":"45.17529397446151, -80.92917322658052","lakeName":"Georgian Bay","pinColor":"#e63277","description":"water is safe"},{"coordinate":"42.27178060879896, -81.47235329571237","lakeName":"Lake Erie","pinColor":"#e69832","description":"water is safe"},{"coordinate":"42.46168955939732, -82.69691400812333","lakeName":"Lake St Clair","pinColor":"#17ad46","description":"water is safe"}]}

function loadData() {
try {
    console.log("## LoadData Called ##");
    if (typeof Android != 'undefined') {
		console.log("## Android LoadData Called ##");
		let inputString = JSON.stringify(inputDataObj);
		Android.loadDataFromJS(inputString);
    }
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.loadDataFromJS
    ) {
	console.log("## iOS LoadData Called ##");
	let inputString = JSON.stringify(inputDataObj);
      window.webkit.messageHandlers.loadDataFromJS.postMessage(inputString);
    }
  } catch (error) {
	console.log(error);
 }
}

function getData() {
	return inputDataObj;
}

function lakePinTapped(lake) {
	let lakeString = JSON.stringify(lake);
	console.log("Lake Pin Clicked : " +lakeString)
	dropPin()
}

const dropPinObj = {"coordinate":"43.4301153,-80.7469192","lakeName":"Kitchener","pinColor":"#5617c2","description":"water is safe"}

function dropPin() {
try {
    console.log("## Drop Pin Called ##");
    if (typeof Android != 'undefined') {
		console.log("## Android Drop Pin Called ##");
		let inputString = JSON.stringify(dropPinObj);
		console.log("Pin Dropped : " +inputString)
		Android.dropPin(inputString);
    }
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.dropPin
    ) {
	    console.log("## iOS Drop Ping Called ##");
	    let inputString = JSON.stringify(dropPinObj);
	    console.log("Pin Dropped : " +inputString)
        window.webkit.messageHandlers.dropPin.postMessage(inputString);
    }
  } catch (error) {
	console.log(error);
 }
}
