// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here
  var ob = document.body;
  result = [];

  for (var i = 0; i < ob.childNodes.length; i++) {
      if (ob.childNodes[i].classList) {
	  if (ob.childNodes[i].classList.contains(className)) {
	      result.push(ob.childNodes[i]);
	  }
      }
  }
  return result;

};
