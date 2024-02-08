let str = "";
let target = 20;
for (let i = 10; i <= target; i++) {
  str += i;
  if (i < target) {
    str += ", ";
  }
}
document.write(str);