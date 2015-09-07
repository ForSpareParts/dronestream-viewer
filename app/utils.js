/**
 * Call callback with arguments key, value for each key-value pair in obj, then
 * return an array of the results.
 */
export function kvMap(obj, callback) {
  var output = [];

  for (var key in obj) {
    output.push(callback(key, obj[key]));
  }

  return output;
}
