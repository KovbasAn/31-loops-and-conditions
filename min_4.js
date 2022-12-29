let num1, num2;
const arrDiv = [];
num1 = +prompt(`first number`);
num2 = +prompt(`second number`);
for (let i = 1; i <= num2; i++) {
  if (num2 % i == 0) {
    if (num1 % i == 0) {
      arrDiv.push(i)
    }
  }
}
alert(`greatest common divider for ${num1} and ${num2} is: ${arrDiv.pop()}`)