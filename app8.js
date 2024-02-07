let result = "";

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    if (result !== "") {
      result += ", ";
    }
    result += i;
  }
}

document.write(result);
