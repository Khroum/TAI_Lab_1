var s = "";
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    s = s + i * j + "\t";
  }
  console.log(s);
  s = "";
}
