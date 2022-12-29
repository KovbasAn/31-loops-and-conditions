let arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let i = 0;
do {
  alert(arr[i] + '. Do you want to see next day?')
  i++
  if (i > 6) {
    i = 0
  }
} while (i >= 0)