// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className){
  // your code here
  var result = [];

  var checkElement = function(element) {
    if (element.classList) {
	if (element.classList.contains(className)) {
	    result.push(element)
	}
    }
    if (element.childNodes) {
	for (var i = 0; i < element.childNodes.length; i++) {
	  checkElement(element.childNodes[i]);
	}
    }
  }
  
  checkElement(document.body);

  return result;
};

