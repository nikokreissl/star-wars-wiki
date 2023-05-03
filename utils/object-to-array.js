export function objectToArray(obj) {
  var arr = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var newObj = {
        itemName: key,
        link: obj[key],
      };
      arr.push(newObj);
    }
  }
  return arr;
}
