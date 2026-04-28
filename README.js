let fruits = ["apple", "banana", "cherry"];
let lastFruit = fruits.push("orange");
console.log(fruits);
console.log(lastFruit);

let firstElement = fruits.shift();
console.log(fruits);
console.log(firstElement);

let firstFruit = fruits.unshift("grape");
console.log(fruits);
console.log(firstFruit);



let colors = ["red", "blue", "green", "blue", "yellow"]
console.log(colors);
console.log(colors.includes("blue"));
console.log(colors.indexOf("blue"));
console.log(colors);
console.log(colors.lastIndexOf("blue"));



let teamA = ["Alice", "Bob"];
console.log("teamA");
let teamB = ["Charlie", "Diana"];
console.log("teamB");
let allTeams = teamA.concat(teamB);
console.log("allTeams");
  

let numbers = [10, 20, 30, 40, 50];
console.log(numbers);
let middleNumbers = numbers.slice(1, 3);
console.log(middleNumbers);
numbers.splice(3, 2, 60, 70);
console.log(numbers);



let scores = [85, 70, 95, 60, 75];
scores.sort((a, b) => a - b).reverse();
console.log(scores);




