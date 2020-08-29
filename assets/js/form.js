var storageDict = {
  "strawberries":"2-3 days",
  "raspberries":"2-3 days",
  "blackberries":"2-3 days",
  "apples": "8 weeks in fridge",
  "yogurt": "about 2 weeks, fridge",
  "granola": "6 months",
  "peaches": "3-4 days, counter or fridge",
  "beets": "2 weeks"
}

function formatStorage(food) {
  var foodList = food.split(",");
  if (foodList.length===1)
    return storageDict[food];
  var i, s = "";
  for (i of foodList) {
    s += i + ": " + storageDict[i.trim()] + "<br>";
    console.log(i);
  }
  return s;
}

function saveList() {
  var food;

  event.preventDefault();
  food = document.getElementById("vegList").value;

  document.getElementById("p1").innerHTML = formatStorage(food);
}
//<!-- More Info: https://colorlib.com/etc/cf/ContactFrom_v1/index.html -->
