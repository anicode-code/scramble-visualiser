import Scramble from "./ScrambleClass.js";

let ob = null;

function reset() {
  let e = document.getElementById("wrong-scramble");
  e.innerHTML = "";
  e.classList.remove("wrong-scramble");
}

function className(ch) {
  if (ch == "W") {
    return "white";
  }
  if (ch == "O") {
    return "orange";
  }
  if (ch == "G") {
    return "green";
  }
  if (ch == "R") {
    return "red";
  }
  if (ch == "B") {
    return "blue";
  }
  if (ch == "Y") {
    return "yellow";
  }
  return "";
}

function remove(c) {
  let a = document.getElementById("element" + c);
  a.classList.remove("white");
  a.classList.remove("orange");
  a.classList.remove("green");
  a.classList.remove("red");
  a.classList.remove("blue");
  a.classList.remove("yellow");
}

function show() {
  let c = 1;
  for (let i = 0; i < ob.getArray().length; i++) {
    for (let j = 0; j < ob.getArray()[0].length; j++) {
      for (let k = 0; k < ob.getArray()[0][0].length; k++) {
        remove(c);
        document
          .getElementById("element" + c)
          .classList.add(className(ob.getArray()[i][j][k]));
        c++;
      }
    }
  }
}

function analyse() {
  reset();
  let scramble = document.getElementById("input-scramble").value;
  let orient = document.getElementById("orient").checked;
  ob = new Scramble(scramble, orient);
  if (ob.isValid()) {
    ob.convert();
    show();
  } else {
    document.getElementById("wrong-scramble").innerHTML =
      "wrong scramble please enter again";
    document.getElementById("wrong-scramble").classList.add("wrong-scramble");
    ob = new Scramble("", true);
    show();
  }
}

document
  .getElementById("input-scramble-button")
  .addEventListener("click", () => {
    analyse();
  });
