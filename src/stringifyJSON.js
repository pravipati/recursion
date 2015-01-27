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
  // Check if the obj is a proper Object
  if (String(obj) === "[object Object]") {
      // Removes any key / value pairs that contain functions or undefined values
      for (var v in obj) {
	  if ((typeof(obj[v]) === "function") || (typeof(obj[v]) === "undefined")) {
	      delete obj[v];
	  }
      }
      // Check if there's anything inside the object
      if (Object.keys(obj)) {
	  var result = [];
	  // Goes through each key:value pair in the obj and makes a recursive call to stringifyJSON
	  for (var k in obj) {
	      result.push(stringifyJSON(k) + ':' + stringifyJSON(obj[k]));
	  }
        return "{" + result.join(",") + "}";
      }
      else {
	  return "{" + "}";
      }
  }
  return String(obj);
};
