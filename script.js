let array = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // person 1
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // person 2
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // person 3
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // person 4
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // average stars
  [0, 0, 0, 0, 0, 0, 0, 0, 0]  // votes
];
let foodmap = ["Turkey Sandwich", "Mashed Patatos", "Chicken", "Curry", "Steak", "Bean Salad", "Garden Salad", "Rice", "Pizza"];
let saveddatabase = localStorage.getItem("database");
array = saveddatabase ? JSON.parse(saveddatabase) : array;

//calc stuff
document.getElementById("submit-btn").addEventListener("click", calc);
document.getElementById("refreshbtn").addEventListener("click", leaderboardrefresh);
document.getElementById("devtoolsbtn").addEventListener("click", devtools);
function calc() {
  //when submit button clicked:
  let ratingperson1;
  let ratingperson2;
  let ratingperson3;
  let ratingperson4;

  let foodIndex = 0;
  const foodselector = document.getElementById("food");
  let food = foodselector.value;
  switch (food) {
    case "turkey-sandwich":
      foodIndex = 0;
      break;
    case "mashed-patatos":
      foodIndex = 1;
      break;
    case "chicken":
      foodIndex = 2;
      break;
    case "curry":
      foodIndex = 3;
      break;
    case "steak":
      foodIndex = 4;
      break;
    case "bean-salad":
      foodIndex = 5;
      break;
    case "garden-salad":
      foodIndex = 6;
      break;
    case "rice":
      foodIndex = 7;
      break;
    case "pizza":
      foodIndex = 8;
      break;
  }

  array[5][foodIndex] += 1;

  const ratingperson1form = document.getElementsByName("Rating1");

  for (let ratingperson1option of ratingperson1form) {
    if (ratingperson1option.checked) {
      ratingperson1 = parseInt(ratingperson1option.value);
      break;
    }
  }

  if (ratingperson1 !== undefined) {
  array[0][foodIndex] += ratingperson1;
}
  //record person 1's rating complete

  const ratingperson2form = document.getElementsByName("Rating2");

  for (let ratingperson2option of ratingperson2form) {
    if (ratingperson2option.checked) {
      ratingperson2 = parseInt(ratingperson2option.value);
      break;
    }
  }

  array[1][foodIndex] += ratingperson2; //record person 2's rating complete

  const ratingperson3form = document.getElementsByName("Rating3");

  for (let ratingperson3option of ratingperson3form) {
    if (ratingperson3option.checked) {
      ratingperson3 = parseInt(ratingperson3option.value);
      break;
    }
  }
  array[2][foodIndex] += ratingperson3; //record person 3's rating complete

  const ratingperson4form = document.getElementsByName("Rating4");

  for (let ratingperson4option of ratingperson4form) {
    if (ratingperson4option.checked) {
      ratingperson4 = parseInt(ratingperson4option.value);
      break;
    }
  }

  if (
  ratingperson1 === undefined ||
  ratingperson2 === undefined ||
  ratingperson3 === undefined ||
  ratingperson4 === undefined
) {
  alert("Please make sure all 4 people have submitted a rating!");
  return;
}

  
  array[3][foodIndex] += ratingperson4; //record person 4's rating complete

  let foodscore =
    Math.round(
      ((array[0][foodIndex] +
        array[1][foodIndex] +
        array[2][foodIndex] +
        array[3][foodIndex]) /
        4 /
        array[5][foodIndex]) *
        2
    ) / 2;
  array[4][foodIndex] = foodscore;
  localStorage.setItem("database", JSON.stringify(array))
  alert(
    `Great! Ratings calculated and saved! The food you just voted on is now ${foodscore} stars!`
  );
  let ratingfirst = Math.max(...array[4]);
  let ratingfirstIndex = array[4].indexOf(ratingfirst);
  let ratinglast = Math.min(...array[4]);
  let ratinglastIndex = array[4].indexOf(ratinglast);
  console.log(array);
  console.log(
    `Family's fav food is ${ratingfirstIndex} with ${ratingfirst} stars!`
  );
  console.log(
    `Family's least fav food is ${ratinglastIndex} with ${ratinglast} stars!`
  );
}
function leaderboardrefresh() {
  let duparray = JSON.parse(JSON.stringify(array));
  document.getElementById("leaderboard").innerText = "\n";
  while (duparray[4].length > 0) {
    let a = Math.max(...duparray[4]);
    let b = duparray[4].indexOf(a);
    if (b === -1) break; // failsafe to prevent infinite loop
    let c = foodmap[b];
    let d = `${c} with a total score of ${a}`;
    duparray[4][b] = -Infinity; // mark as used without breaking index mapping
    document.getElementById("leaderboard").innerText += d;
  }
}
function devtools() {
let devtoolspassword = "pass@word1"
console.log(`The Dev Tools password is ${devtoolspassword}`)
let answer = prompt("What is the password?")
if (answer === devtoolspassword) {
let devtools = confirm("Welcome to Dev Tools. Click ok to clear the database. Click cancel to go back")
if (devtools) {
    array = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // person 1
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // person 2
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // person 3
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // person 4
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // average stars
  [0, 0, 0, 0, 0, 0, 0, 0, 0]  // votes
];
alert("The leaderboard will not automaticaly refresh, you have to manualy refresh it.")
} else {
  alert("You have exited Dev Tools.")
}
} else {
  alert("Wrong Password!")
}
}
