// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:



var getElementsByClassName = function(className, currElement
){
  // your code here
  var ob = typeof currElement != 'undefined' ? currElement : document.body;
  var result = [];

  for (var i = 0; i < ob.childNodes.length; i++) {
      if (ob.childNodes[i].classList !== undefined) {
	  if (ob.childNodes[i].classList.contains(className)) {
	      result.push(ob.childNodes[i]);
	  }
      }
      if (ob.childNodes[i].childNodes.length > 0) {
	  result = result.concat(getElementsByClassName(className, ob.childNodes[i]));
      }
  }
  return result;

};
