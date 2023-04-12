class ScrambleRubiksCube {
  constructor(scramble, isOrientWhiteTopGreenFront) {
    this.initial = [
      [
        ["W", "W", "W"],
        ["W", "W", "W"],
        ["W", "W", "W"],
      ],
      [
        ["O", "O", "O"],
        ["O", "O", "O"],
        ["O", "O", "O"],
      ],
      [
        ["G", "G", "G"],
        ["G", "G", "G"],
        ["G", "G", "G"],
      ],
      [
        ["R", "R", "R"],
        ["R", "R", "R"],
        ["R", "R", "R"],
      ],
      [
        ["B", "B", "B"],
        ["B", "B", "B"],
        ["B", "B", "B"],
      ],
      [
        ["Y", "Y", "Y"],
        ["Y", "Y", "Y"],
        ["Y", "Y", "Y"],
      ],
    ];
    this.scramble = scramble;
    this.converted = "";
    this.isOrient = isOrientWhiteTopGreenFront;
  }
  rotateClockWise(arr) {
    // corners
    let t = arr[0][0];
    arr[0][0] = arr[2][0];
    arr[2][0] = arr[2][2];
    arr[2][2] = arr[0][2];
    arr[0][2] = t;

    // edges
    t = arr[0][1];
    arr[0][1] = arr[1][0];
    arr[1][0] = arr[2][1];
    arr[2][1] = arr[1][2];
    arr[1][2] = t;
  }

  R() {
    // upper right corner
    let t = this.initial[0][0][2];
    this.initial[0][0][2] = this.initial[2][0][2];
    this.initial[2][0][2] = this.initial[5][0][2];
    this.initial[5][0][2] = this.initial[4][2][0];
    this.initial[4][2][0] = t;

    // middle
    t = this.initial[0][1][2];
    this.initial[0][1][2] = this.initial[2][1][2];
    this.initial[2][1][2] = this.initial[5][1][2];
    this.initial[5][1][2] = this.initial[4][1][0];
    this.initial[4][1][0] = t;

    // lower right corner
    t = this.initial[0][2][2];
    this.initial[0][2][2] = this.initial[2][2][2];
    this.initial[2][2][2] = this.initial[5][2][2];
    this.initial[5][2][2] = this.initial[4][0][0];
    this.initial[4][0][0] = t;
    this.rotateClockWise(this.initial[3]);
  }

  U() {
    // upper left corner
    let t = this.initial[1][0][0];
    this.initial[1][0][0] = this.initial[2][0][0];
    this.initial[2][0][0] = this.initial[3][0][0];
    this.initial[3][0][0] = this.initial[4][0][0];
    this.initial[4][0][0] = t;

    // middle
    t = this.initial[1][0][1];
    this.initial[1][0][1] = this.initial[2][0][1];
    this.initial[2][0][1] = this.initial[3][0][1];
    this.initial[3][0][1] = this.initial[4][0][1];
    this.initial[4][0][1] = t;

    // upper right corner
    t = this.initial[1][0][2];
    this.initial[1][0][2] = this.initial[2][0][2];
    this.initial[2][0][2] = this.initial[3][0][2];
    this.initial[3][0][2] = this.initial[4][0][2];
    this.initial[4][0][2] = t;
    this.rotateClockWise(this.initial[0]);
  }

  F() {
    // clock wise to the nearest
    let t = this.initial[0][2][0];
    this.initial[0][2][0] = this.initial[1][2][2];
    this.initial[1][2][2] = this.initial[5][0][2];
    this.initial[5][0][2] = this.initial[3][0][0];
    this.initial[3][0][0] = t;

    // middle
    t = this.initial[0][2][1];
    this.initial[0][2][1] = this.initial[1][1][2];
    this.initial[1][1][2] = this.initial[5][0][1];
    this.initial[5][0][1] = this.initial[3][1][0];
    this.initial[3][1][0] = t;

    // clock wise to the furthest
    t = this.initial[0][2][2];
    this.initial[0][2][2] = this.initial[1][0][2];
    this.initial[1][0][2] = this.initial[5][0][0];
    this.initial[5][0][0] = this.initial[3][2][0];
    this.initial[3][2][0] = t;
    this.rotateClockWise(this.initial[2]);
  }

  L() {
    // upper left corner
    let t = this.initial[0][0][0];
    this.initial[0][0][0] = this.initial[4][2][2];
    this.initial[4][2][2] = this.initial[5][0][0];
    this.initial[5][0][0] = this.initial[2][0][0];
    this.initial[2][0][0] = t;

    // middle
    t = this.initial[0][1][0];
    this.initial[0][1][0] = this.initial[4][1][2];
    this.initial[4][1][2] = this.initial[5][1][0];
    this.initial[5][1][0] = this.initial[2][1][0];
    this.initial[2][1][0] = t;

    // lower left corner
    t = this.initial[0][2][0];
    this.initial[0][2][0] = this.initial[4][0][2];
    this.initial[4][0][2] = this.initial[5][2][0];
    this.initial[5][2][0] = this.initial[2][2][0];
    this.initial[2][2][0] = t;
    this.rotateClockWise(this.initial[1]);
  }

  D() {
    // bottom left corner
    let t = this.initial[1][2][0];
    this.initial[1][2][0] = this.initial[4][2][0];
    this.initial[4][2][0] = this.initial[3][2][0];
    this.initial[3][2][0] = this.initial[2][2][0];
    this.initial[2][2][0] = t;

    // middle
    t = this.initial[1][2][1];
    this.initial[1][2][1] = this.initial[4][2][1];
    this.initial[4][2][1] = this.initial[3][2][1];
    this.initial[3][2][1] = this.initial[2][2][1];
    this.initial[2][2][1] = t;

    // bottom right corner
    t = this.initial[1][2][2];
    this.initial[1][2][2] = this.initial[4][2][2];
    this.initial[4][2][2] = this.initial[3][2][2];
    this.initial[3][2][2] = this.initial[2][2][2];
    this.initial[2][2][2] = t;
    this.rotateClockWise(this.initial[5]);
  }

  B() {
    // clock wise to the furthest
    let t = this.initial[0][0][0];
    this.initial[0][0][0] = this.initial[3][0][2];
    this.initial[3][0][2] = this.initial[5][2][2];
    this.initial[5][2][2] = this.initial[1][2][0];
    this.initial[1][2][0] = t;

    // middle
    t = this.initial[0][0][1];
    this.initial[0][0][1] = this.initial[3][1][2];
    this.initial[3][1][2] = this.initial[5][2][1];
    this.initial[5][2][1] = this.initial[1][1][0];
    this.initial[1][1][0] = t;

    // clock wise to the nearest
    t = this.initial[0][0][2];
    this.initial[0][0][2] = this.initial[3][2][2];
    this.initial[3][2][2] = this.initial[5][2][0];
    this.initial[5][2][0] = this.initial[1][0][0];
    this.initial[1][0][0] = t;
    this.rotateClockWise(this.initial[4]);
  }

  R_Prime() {
    this.R();
    this.R();
    this.R();
  }

  U_Prime() {
    this.U();
    this.U();
    this.U();
  }

  F_Prime() {
    this.F();
    this.F();
    this.F();
  }

  L_Prime() {
    this.L();
    this.L();
    this.L();
  }

  D_Prime() {
    this.D();
    this.D();
    this.D();
  }

  B_Prime() {
    this.B();
    this.B();
    this.B();
  }

  M() {
    // upper middle corner
    let t = this.initial[0][0][1];
    this.initial[0][0][1] = this.initial[4][2][1];
    this.initial[4][2][1] = this.initial[5][0][1];
    this.initial[5][0][1] = this.initial[2][0][1];
    this.initial[2][0][1] = t;

    // middle
    t = this.initial[0][1][1];
    this.initial[0][1][1] = this.initial[4][1][1];
    this.initial[4][1][1] = this.initial[5][1][1];
    this.initial[5][1][1] = this.initial[2][1][1];
    this.initial[2][1][1] = t;

    // lower middle corner
    t = this.initial[0][2][1];
    this.initial[0][2][1] = this.initial[4][0][1];
    this.initial[4][0][1] = this.initial[5][2][1];
    this.initial[5][2][1] = this.initial[2][2][1];
    this.initial[2][2][1] = t;
  }

  E() {
    // middle left
    let t = this.initial[1][1][0];
    this.initial[1][1][0] = this.initial[4][1][0];
    this.initial[4][1][0] = this.initial[3][1][0];
    this.initial[3][1][0] = this.initial[2][1][0];
    this.initial[2][1][0] = t;

    // middle
    t = this.initial[1][1][1];
    this.initial[1][1][1] = this.initial[4][1][1];
    this.initial[4][1][1] = this.initial[3][1][1];
    this.initial[3][1][1] = this.initial[2][1][1];
    this.initial[2][1][1] = t;

    // middle right
    t = this.initial[1][1][2];
    this.initial[1][1][2] = this.initial[4][1][2];
    this.initial[4][1][2] = this.initial[3][1][2];
    this.initial[3][1][2] = this.initial[2][1][2];
    this.initial[2][1][2] = t;
  }

  S() {
    // clock wise to the nearest
    let t = this.initial[0][1][0];
    this.initial[0][1][0] = this.initial[1][2][1];
    this.initial[1][2][1] = this.initial[5][1][2];
    this.initial[5][1][2] = this.initial[3][0][1];
    this.initial[3][0][1] = t;

    // middle
    t = this.initial[0][1][1];
    this.initial[0][1][1] = this.initial[1][1][1];
    this.initial[1][1][1] = this.initial[5][1][1];
    this.initial[5][1][1] = this.initial[3][1][1];
    this.initial[3][1][1] = t;

    // clock wise to the furthest
    t = this.initial[0][1][2];
    this.initial[0][1][2] = this.initial[1][0][1];
    this.initial[1][0][1] = this.initial[5][1][0];
    this.initial[5][1][0] = this.initial[3][2][1];
    this.initial[3][2][1] = t;
  }

  M_Prime() {
    this.M();
    this.M();
    this.M();
  }

  E_Prime() {
    this.E();
    this.E();
    this.E();
  }

  S_Prime() {
    this.S();
    this.S();
    this.S();
  }

  r() {
    this.R();
    this.M_Prime();
  }

  u() {
    this.U();
    this.E_Prime();
  }

  f() {
    this.F();
    this.S();
  }

  l() {
    this.L();
    this.M();
  }

  d() {
    this.D();
    this.E();
  }

  b() {
    this.B();
    this.S_Prime();
  }

  r_Prime() {
    this.r();
    this.r();
    this.r();
  }

  u_Prime() {
    this.u();
    this.u();
    this.u();
  }

  f_Prime() {
    this.f();
    this.f();
    this.f();
  }

  l_Prime() {
    this.l();
    this.l();
    this.l();
  }

  d_Prime() {
    this.d();
    this.d();
    this.d();
  }

  b_Prime() {
    this.b();
    this.b();
    this.b();
  }

  x() {
    this.r();
    this.L_Prime();
  }

  y() {
    this.u();
    this.D_Prime();
  }

  z() {
    this.f();
    this.B_Prime();
  }

  x_Prime() {
    this.x();
    this.x();
    this.x();
  }

  y_Prime() {
    this.y();
    this.y();
    this.y();
  }

  z_Prime() {
    this.z();
    this.z();
    this.z();
  }

  isValid() {
    let correct = " RUFLDB'2";
    correct += "MES";
    correct += "w";
    correct += "rufldb";
    correct += "xyz";
    let scramble1 = this.scramble;
    scramble1 = scramble1.replace(" ", "");
    scramble1 += " ";
    for (let i = 0; i < scramble1.length - 1; i++) {
      let curr = scramble1.charAt(i);
      let next = scramble1.charAt(i + 1);
      if (i == 0 && (curr == "'" || curr == "2")) {
        return false;
      }
      if (correct.indexOf(curr) == -1) {
        return false;
      }
      if (curr == next && (curr == "2" || curr == "'" || curr == "w")) {
        return false;
      }
      if (
        (curr == "'" ||
          curr == "2" ||
          curr == "M" ||
          curr == "E" ||
          curr == "S" ||
          curr == "r" ||
          curr == "u" ||
          curr == "f" ||
          curr == "l" ||
          curr == "d" ||
          curr == "b" ||
          curr == "x" ||
          curr == "y" ||
          curr == "z") &&
        next == "w"
      ) {
        return false;
      }
    }
    return true;
  }

  compute() {
    this.converted += " ";
    for (let i = 0; i < this.converted.length - 1; i++) {
      let curr = this.converted.charAt(i);
      let next = this.converted.charAt(i + 1);
      if (curr == "'") {
        continue;
      }
      if (next == "'") {
        switch (curr) {
          case "R":
            this.R_Prime();
            break;
          case "U":
            this.U_Prime();
            break;
          case "F":
            this.F_Prime();
            break;
          case "L":
            this.L_Prime();
            break;
          case "D":
            this.D_Prime();
            break;
          case "B":
            this.B_Prime();
            break;
          case "M":
            this.M_Prime();
            break;
          case "E":
            this.E_Prime();
            break;
          case "S":
            this.S_Prime();
            break;
          case "r":
            this.r_Prime();
            break;
          case "u":
            this.u_Prime();
            break;
          case "f":
            this.f_Prime();
            break;
          case "l":
            this.l_Prime();
            break;
          case "d":
            this.d_Prime();
            break;
          case "b":
            this.b_Prime();
            break;
          case "x":
            this.x_Prime();
            break;
          case "y":
            this.y_Prime();
            break;
          case "z":
            this.z_Prime();
            break;
        }
      } else {
        switch (curr) {
          case "R":
            this.R();
            break;
          case "U":
            this.U();
            break;
          case "F":
            this.F();
            break;
          case "L":
            this.L();
            break;
          case "D":
            this.D();
            break;
          case "B":
            this.B();
            break;
          case "M":
            this.M();
            break;
          case "E":
            this.E();
            break;
          case "S":
            this.S();
            break;
          case "r":
            this.r();
            break;
          case "u":
            this.u();
            break;
          case "f":
            this.f();
            break;
          case "l":
            this.l();
            break;
          case "d":
            this.d();
            break;
          case "b":
            this.b();
            break;
          case "x":
            this.x();
            break;
          case "y":
            this.y();
            break;
          case "z":
            this.z();
            break;
        }
      }
    }
  }

  orient() {
    if (this.initial[1][1][1] == "W") {
      this.z();
    } else if (this.initial[2][1][1] == "W") {
      this.x();
    } else if (this.initial[3][1][1] == "W") {
      this.z_Prime();
    } else if (this.initial[4][1][1] == "W") {
      this.x_Prime();
    } else if (this.initial[5][1][1] == "W") {
      this.x();
      this.x();
    }
    if (this.initial[1][1][1] == "G") {
      this.y_Prime();
    } else if (this.initial[3][1][1] == "G") {
      this.y();
    } else if (this.initial[4][1][1] == "G") {
      this.y();
      this.y();
    }
  }

  convert() {
    let halfConverted = "";

    let scramble1 = this.scramble;
    scramble1 = scramble1.replace(" ", "");
    scramble1 += " ";
    for (let i = 0; i < scramble1.length - 1; i++) {
      let curr = scramble1.charAt(i);
      let next = scramble1.charAt(i + 1);

      if (curr == "'" && next == "2") {
        continue;
      }
      if (curr == "w") {
        continue;
      }

      if (next == "w") {
        halfConverted += curr.toLowerCase();
        continue;
      }

      halfConverted += curr;
    }

    // console.log(halfConverted);
    scramble1 = halfConverted;
    scramble1 = scramble1.replaceAll(" ", "");
    scramble1 += " ";
    // console.log(scramble1);
    for (let i = 0; i < scramble1.length - 1; i++) {
      let curr = scramble1.charAt(i);
      let next = scramble1.charAt(i + 1);
      if (curr != "'" && curr != "2") {
        if (next == "'") {
          this.converted += curr + "" + next;
        } else if (next == "2") {
          this.converted += curr + "" + curr;
        } else {
          this.converted += curr;
        }
      }
    }
    // console.log(converted);
    if (this.isValid()) {
      this.compute();
      if (this.isOrient) {
        this.orient();
      }
    }
  }

  getArray() {
    return this.initial;
  }

  className(ch) {
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
}

export default ScrambleRubiksCube;
