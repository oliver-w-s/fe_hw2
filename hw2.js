const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

let task1 = itemsObject.map(function (obj) {
  let res = {};
  res.quantity = obj.quantity * 2;
  res.price = obj.price * 2;
  return res;
});
console.log(task1);

let task2 = itemsObject.filter(function (obj) {
  return obj.quantity > 2 && obj.price > 300;
});
console.log(task2);

let task3 = itemsObject.reduce((acc, obj) => acc + obj.quantity * obj.price, 0);
console.log(task3);

const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";

let task4 = string.replace(/\W/g, "").toLowerCase();
console.log(task4);
