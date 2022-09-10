const inputDataObj = {"lakeInformation":[{"coordinate":"43.9492085441969, -79.43456928874666","lakeName":"Lake Wilcox","pinColor":"#1b3893","description":"water is safe"},{"coordinate":"43.68877858685247, -78.96846825795835","lakeName":"Lake Ontario","pinColor":"#0b9e99","description":"Water is safe"},{"coordinate":"44.44202361432006, -79.37130382925282","lakeName":"Lake Simcoe","pinColor":"#f01b0f","description":"not allow swim"},{"coordinate":"45.17529397446151, -80.92917322658052","lakeName":"Georgian Bay","pinColor":"#e63277","description":"water is safe"},{"coordinate":"42.27178060879896, -81.47235329571237","lakeName":"Lake Erie","pinColor":"#e69832","description":"water is safe"},{"coordinate":"42.46168955939732, -82.69691400812333","lakeName":"Lake St Clair","pinColor":"#17ad46","description":"water is safe"}]}

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
	console.log("Lake Pin Tapped : " +lakeString)
}