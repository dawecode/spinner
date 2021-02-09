const spinnerArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let multi = 100;
for (const char of spinnerArr) {
  setTimeout(() => {
    process.stdout.write(char);
  }, multi);
  multi += 200;
}
setTimeout(() => {
  process.stdout.write("\n");
}, multi);

