//######################Example of the module######################
// const sumOf = function(list) {
//   if (list.length === 1) {
//     return list[0];
//   }
//   return list[0] + sumOf(list.slice(1));
// };

// let lst = [2, 4, 6, 8, 10];
// console.log(sumOf(lst));

//###################Counting Sheep#################################

// const jumpSheep = function(sheep) {
//   //base case or final stance get out of loop
//   if (sheep === 0) {
//     console.log("All Sheep Jumped over the fence");
//     return;
//   }
//   //The nonbase case, recursion
//   console.log(sheep, "Another sheep jumps over the fence");
//   jumpSheep(sheep - 1);
// };
// jumpSheep(10);

//#####################Power Calculator ############################
// const powerCalculator = function(base, exponent) {
//   if (exponent <= 0) {
//     return "exponent should be >= 0";
//   }
//   if (exponent == 1) {
//     return base;
//   }
//   return base * powerCalculator(base, exponent - 1);
// };
// console.log(powerCalculator(10, 2));

//######################Reverse String#############################

// const reverse = function(string) {
//   if (string === "") return "";
//   else return reverse(string.substr(1)) + string.charAt(0);
// };

// console.log(reverse("hello!"));

//######################nth Triangular Number######################

// const triangle = function(n) {
//   if (n <= 0) {
//     return n;
//   }
//   return n + triangle(n - 1);
// };
// console.log(triangle(3));

//#####################String Splitter############################


