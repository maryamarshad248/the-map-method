'use strict';

///////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 130];

const euroToUSD = 1.1;
//const movementsUSD = movements.map(function (mov) {
// return mov * euroToUSD;
//});
//console.log(movements);
//console.log(movementsUSD);

const movementsUSD = movements.map(mov => mov * euroToUSD);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * euroToUSD);
console.log(movementsUSDfor);

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${
      mov > 0 ? 'you deposited' : 'you withdraw'
    } ${Math.abs(mov)}`
);
// return `Movement ${i + 1}: You deposited ${mov}`;
// } else {
//return `Movement ${i + 1}: You withdraw ${Math.abs(mov)}`;
//}
//});

console.log(movementsDescription);
