let arr = []
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 10; j++) {
    arr.push(' ' + i + '*' + j + '=' + i*j)    
  }  
}
alert(arr)