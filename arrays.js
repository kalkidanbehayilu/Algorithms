class ArrayDataType extends Array {}

function initArrayDataType() {
  // Java sctipt is dynamic data type programming language
  // meaning we can define attributes or manipulate data beside having to worry
  // about the data types or memory allocation
  var a = new ArrayDataType(1, 2, 3, 4);

  a.push(5); // Insert new item to the array
  console.log(a);

  a.pop(); // This will pop or discard the last value added
  console.log(a);

  console.log(a.length); // Data length
}

initArrayDataType(); // Initialize array data type
