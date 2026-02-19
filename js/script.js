let num = document.getElementById("num");
let range = document.getElementById("rangenum");
let table = document.getElementById("table");

let calculate = () => {
  for (let i = 1; i <= range.value; i++) {
    let h2 = document.createElement("h2");
    let total = i * num.value;
    h2.innerText = ` ${i}  X ${num.value} = ${total}`;
    console.log(`${i}  X ${num.value} = ${total}`);
    table.append(h2);
  }
  //   console.log(num.value);
  //   console.log(range.value);
};
