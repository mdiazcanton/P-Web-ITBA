totalGuantes = "158U$D";
console.log(totalGuantes);
console.log(Number.isInteger(Number(totalGuantes[2])));
num = "";

for (let i = 0; i < totalGuantes.length; i++) {
  if (Number.isInteger(Number(totalGuantes[i]))) {
    num = num + totalGuantes[i];
    console.log(num);
  }
  console.log(num);
}

console.log("" == "" && "" == "");

