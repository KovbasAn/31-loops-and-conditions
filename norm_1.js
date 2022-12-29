let num = 0;
num = prompt(`give me 5-digits number`);
if (Math.floor(num / 10000) == num % 10 && Math.floor(num / 1000) % 10 == Math.floor((num % 100) / 10)) {
  alert(`that's PALINDROM!!!`)
} else {
  alert(`that's not palindrom`)
}