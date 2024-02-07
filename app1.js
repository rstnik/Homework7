let str = "";
for (let i = 10; i <= 20; i++) {
  str += i;
  if (i < 20) {
    str += ", ";
  }
}
document.write(str);