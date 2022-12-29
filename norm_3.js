let arr = [];
let even = 0, odd = 0, positive = 0, negative = 0, zero = 0;
arr = prompt("Enter your numbers").split(" ")
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    positive++
  } else if (arr[i] < 0) {
    negative++
  } else {
    zero++
  }
  if (arr[i] % 2 == 0 && arr[i] != 0) {
    even++
  } else if (arr[i] % 2 != 0 && arr[i] != 0) {
    odd++
  }
}
alert(`In range of numbers ${arr} there are:
even - ${even},
odd - ${odd},
positive - ${positive},
negative - ${negative},
zero - ${zero}`)