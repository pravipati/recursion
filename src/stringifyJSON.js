// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (Array.isArray(obj)) {
      // check if anything is in array
      if (obj.length) {
	  // stores "stringified" contents of an array in result array variable
	  var result = [];
	  for (var i = 0; i < obj.length; i++) {
	      result.push(stringifyJSON(obj[i]));
	  }
	  // String(result) turns the result array into a nice string with stringified elements, allowing us to add brackets
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
