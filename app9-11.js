let digit;
do {
  if (digit !== undefined) {
    alert(`Please enter the correct number`);
  }
  digit = parseInt(prompt("Enter the number"));
} while (isNaN(digit));
let result = "";
let quantity = 0;
let sumQuantity = 0;
for (i = 1; i <= 9; i++) {
  if (digit % i === 0) {
    result += i + ' ';
    if (i % 2 === 0){
        quantity++;
        sumQuantity += i;
    }
  }
}
document.write(`<p>${result}</p>`);
document.write(`<p>Even divisors: ${quantity}</p>`)
document.write(`<p>Sum of divisors: ${sumQuantity}</p>`)
