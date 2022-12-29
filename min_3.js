let firstNum, lastNum, sum = 0;
firstNum = +prompt(`first number of range`);
lastNum = +prompt(`last number of range`);
for (let i = firstNum; i <= lastNum; i++) {
  sum += i;
}
alert(`I added all integers from ${firstNum} to ${lastNum} and it equals ${sum}`)