// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (Array.isArray(obj)) {
      if (obj.length) {
	  var result = [];
	  for (var i = 0; i < obj.length; i++) {
	      result.push(stringifyJSON(obj[i]));
	  }
	  return "[" + String(result) + "]";
      }
      else {
	  return "[" + "]";
      }
  }
  if (typeof(obj) === "string") {
      return '"' + String(obj) + '"';
  }
  return String(obj);
};
