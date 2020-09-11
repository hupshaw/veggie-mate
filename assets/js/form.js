//
// var storageDict = {
//   "strawberries":"2-3 days",
//   "raspberries":"2-3 days",
//   "blackberries":"2-3 days",
//   "apples": "8 weeks in fridge",
//   "yogurt": "about 2 weeks, fridge",
//   "granola": "6 months",
//   "peaches": "3-4 days, counter or fridge",
//   "beets": "2 weeks"
// }

function main() {
  var food;

  event.preventDefault();
  food = document.getElementById("vegList").value;

  document.getElementById("p1").innerHTML = getStorage(food);
}

function getStorage(foodString) {
  var foodList = foodString.split(","), storageInfo;
  var i, s = "", storage;
  for (i of foodList) {
    storage = formatStorage(i.trim());
    s += i + ": " + storage + "<br>";
  }
  return s;
}

function formatStorage(food) {
  var storage = getStorageDict(food);

  //room temp
  if (storage[0]!=-1) {
      return storage[0] + " days at room temperature";
  }
  return storage[1] + " days in the fridge";

}
// function getButton() { deprecated
//   var button = document.createElement("button");
//   button.innerHTML = "Do Something";
//   var body = document.getElementsByTagName("body")[0];
//   body.appendChild(button);
//
//   button.addEventListener("click",
//   function() {
//     alert("did something");
//   });
// }

function getStorageDict(food) {
var storageDict = {
  "apples": [-1, 5],
  "avocados": [3, 7],
  "berries": [-1,3],
  "grapefruit": [7, 14],
  "grapes": [-1, 7],
  "lemons": [7, 28],
  "limes": [7, 28],
  "oranges": [3, 35],
  "peaches": [-1, 3],
  "pineapple": [2, 4],
  "watermelon": [3, 7],
  "asparagus": [-1,4],
  "beans": [-1, 5],
  "broccoli": [-1, 5],
  "peas": [-1, 5],
  "summer squash": [-1, 5],
  "bell peppers": [-1, 14],
  "beets": [-1,14],
  "cabbage": [-1, 7],
  "cauliflower": [-1, 7],
  "celery": [-1, 7],
  "chilies": [-1, 7],
  "corn": [0],
  "collards": [-1, 4],
  "kale": [-1, 4],
  "spinach": [-1, 4],
  "Swiss chard": [-1, 4],
  "mustard": [-1, 4],
  "green beans": [-1, 7],
  "lettuce": [-1, 7],
  "salad greens": [-1, 7],
  "mushrooms": [-1, 2],
  "radishes": [-1, 14]
  }
  return storageDict[food];
}
