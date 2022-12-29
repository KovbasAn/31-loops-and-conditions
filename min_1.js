let userAge;
userAge = prompt(`What's your age?`);
if (userAge < 0 || userAge > 122) {
  alert(`I think you're lying`)
} else if (userAge >= 0 && userAge <= 11) {
  alert(`you're a child`)
} else if (userAge > 11 && userAge <= 17) {
  alert(`you're a teenager`)
} else if (userAge > 17 && userAge <= 59) {
  alert(`you're an adult`)
} else {
  alert(`you're a pensioner`)
}