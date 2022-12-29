let num;
const arr = [];
num = +prompt(`your number...`);
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    arr.push(i)
  }
}
alert(`here's all dividers of ${num}:${arr}`)