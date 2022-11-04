class Grass {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.multiply = 0;
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
    ];
  }

  chooseCell(character) {
    var found = [];
    for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[y][x] == character) {
          found.push(this.directions[i]);
        }
      }
    }
    return found;
  }

  mult() {
    var empty = random(this.chooseCell(0));
    this.multiply++;
    if (empty && this.multiply > 5) {
      var newX = empty[0];
      var newY = empty[1];
      matrix[newY][newX] = 1;
      var newGr = new Grass(newX, newY);
      grassArr.push(newGr);
      this.multiply = 0;
    }
  }
}

class Xotaker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.energy = 5;
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
    ];
  }

  getNewDirections() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
    ];
  }

  chooseCell(character) {
    this.getNewDirections();
    var found = [];
    for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[y][x] == character) {
          found.push(this.directions[i]);
        }
      }
    }
    return found;
  }

  mult() {
    var empty = random(this.chooseCell(0));
    if (empty && this.energy > 10) {
      var newX = empty[0];
      var newY = empty[1];
      matrix[newY][newX] = 2;
      var xt = new Xotaker(newX, newY);
      xotakerArr.push(xt);
    }
  }

  move() {
    var empty = random(this.chooseCell(0));
    this.energy--;
    if (empty) {
      var newX = empty[0];
      var newY = empty[1];
      matrix[newY][newX] = 2;
      matrix[this.y][this.x] = 0;

      this.x = newX;
      this.y = newY;
    }
  }

  eat() {
    var food = random(this.chooseCell(1));
    if (food) {
      var newX = food[0];
      var newY = food[1];
      matrix[newY][newX] = 2;
      matrix[this.y][this.x] = 0;

      for (var i in grassArr) {
        if (grassArr[i].x == newX && grassArr[i].y == newY) {
          grassArr.splice(i, 1);
        }
      }

      this.x = newX;
      this.y = newY;
      this.energy += 2;
    }
  }

  die() {
    if (this.energy <= 0) {
      matrix[this.y][this.x] = 0;
      for (var i in xotakerArr) {
        if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
          xotakerArr.splice(i, 1);
        }
      }
    }
  }
}


class Moxes {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.energy = 10;
    //    this.multiply = 0
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
    ];
  }

  getNewDirections() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
    ];
  }

  chooseCell(character) {
    this.getNewDirections();
    var found = [];
    for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[y][x] == character) {
          found.push(this.directions[i]);
        }
      }
    }
    return found;
  }

  mult() {
    // debugger;
    var empty = random(this.chooseCell(0));

    //սրանք պետք չի, թող մենակ դատարկ տեղերում բազմանա, կամ էլ եթե ուրիշի վրա ես ուզում բազմանա, պետքա բազմանալուց էտ ուրիշի օբյեկտն էլ ջնջես
    // var empty1 = random(this.chooseCell(1));
    // var empty2 = random(this.chooseCell(2));

    if (empty && this.energy > 15) {
      // this.multiply++
      let newX = empty[0];
      let newY = empty[1];
      matrix[newY][newX] = 3;
      let xt = new Moxes(newX, newY);
      moxesArr.push(xt);
    }

    //մնացածը չի աշխատելու, որովհետև ասել ենք համ խոտ ու խոտակերի վրա քայլի, համ բազմացի համ կե՞ր :D



    // else if (empty1 && this.energy > 15) {
    //   // this.multiply++

    //   var newX = empty1[0];
    //   var newY = empty1[1];
    //   matrix[newY][newX] = 3;
    //   var sd = new Moxes(newX, newY);
    //   moxesArr.push(sd);
    // } else if (empty2 && this.energy > 15) {
    //   // this.multiply++

    //   var newX = empty2[0];
    //   var newY = empty2[1];
    //   matrix[newY][newX] = 3;
    //   var uj = new Moxes(newX, newY);
    //   moxesArr.push(uj);
    // }
  }

  move() {
    var empty = random(this.chooseCell(0));

    if (empty) {
      // this.energy--;
      var newX = empty[0];
      var newY = empty[1];
      matrix[newY][newX] = 3;
      matrix[this.y][this.x] = 0;

      this.x = newX;
      this.y = newY;
    }


    // չի կարա համ բազմանա խոտի վրա համ ուտի իրան :D
    //թողել եմ մենակ ուտելը


    // if (empty1) {
    //   var newX = empty1[0];
    //   var newY = empty1[1];
    //   matrix[newY][newX] = 3;
    //   matrix[this.y][this.x] = 0;

    //   this.x = newX;
    //   this.y = newY;
    // }
  }

  eat() {
    var food = random(this.chooseCell(1));
    var food1 = random(this.chooseCell(2));

    if (food) {
      var newX = food[0];
      var newY = food[1];
      matrix[newY][newX] = 3;
      matrix[this.y][this.x] = 0;

      for (var i in xotakerArr) {
        if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
          xotakerArr.splice(i, 1);
        }
      }

      this.x = newX;
      this.y = newY;
      this.energy += 3;

    } else if (food1) {
      var newX = food1[0];
      var newY = food1[1];
      matrix[newY][newX] = 3;
      matrix[this.y][this.x] = 0
      for (var i in grassArr) {
        if (grassArr[i].x == newX && grassArr[i].y == newY) {
          grassArr.splice(i, 1);
        }
      }

      this.x = newX;
      this.y = newY;
      this.energy++;

    } else {
      this.move();
      this.energy--;
      if (this.energy <= 2) {
        this.die();
      }
    }
  }

  die() {
    matrix[this.y][this.x] = 0;
    for (var i in moxesArr) {
      if (moxesArr[i].x == this.x && moxesArr[i].y == this.y) {
        moxesArr.splice(i, 1);
      }
    }
  }
}














class Bagamol {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.energy = 10;
    //    this.multiply = 0
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
    ];
  }

  getNewDirections() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
    ];
  }

  chooseCell(character) {
    this.getNewDirections();
    var found = [];
    for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[y][x] == character) {
          found.push(this.directions[i]);
        }
      }
    }
    return found;
  }

  mult() {
    // debugger;
    var empty = random(this.chooseCell(0));
    // var empty1 = random(this.chooseCell(1));

    //սրանք պետք չի, թող մենակ դատարկ տեղերում բազմանա, կամ էլ եթե ուրիշի վրա ես ուզում բազմանա, պետքա բազմանալուց էտ ուրիշի օբյեկտն էլ ջնջես
    // var empty1 = random(this.chooseCell(1));
    // var empty2 = random(this.chooseCell(2));

    if (empty && this.energy > 15) {
      // this.multiply++
      let newX = empty[0];
      let newY = empty[1];
      matrix[newY][newX] = 4;
      let uj = new Bagamol(newX, newY);
      bagamolArr.push(uj);
      this.energy = 0
    }

  }

  move() {
    var empty = random(this.chooseCell(0));
    // var empty1 = random(this.chooseCell(1));
    this.energy--;
    if (empty) {
      console.log(empty);

      var newX = empty[0];
      var newY = empty[1];
      matrix[newY][newX] = 4;
      matrix[this.y][this.x] = 0;

      this.x = newX;
      this.y = newY;
      this.energy = 0
    }


  }

  eat() {
    var food = random(this.chooseCell(2));
    var food1 = random(this.chooseCell(3));

    if (food) {
      var newX = food[0];
      var newY = food[1];
      matrix[newY][newX] = 4;
      matrix[this.y][this.x] = 0;

      for (var i in xotakerArr) {
        if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
          xotakerArr.splice(i, 1);
        }
      }

      this.x = newX;
      this.y = newY;
      this.energy++;
    } else if (food1) {
      var newX = food1[0];
      var newY = food1[1];
      matrix[newY][newX] = 4;
      matrix[this.y][this.x] = 0
      for (var i in moxesArr) {
        if (moxesArr[i].x == newX && moxesArr[i].y == newY) {
          moxesArr.splice(i, 1);
        }
      }

      this.x = newX;
      this.y = newY;
      this.energy += 2;
    } else {
      this.move();
      console.log(this.energy);

      if (this.energy <= -1) {
        this.die();
      }
    }
  }

  die() {
    matrix[this.y][this.x] = 0;
    for (var i in bagamolArr) {
      if (bagamolArr[i].x == this.x && bagamolArr[i].y == this.y) {
        bagamolArr.splice(i, 1);
      }
    }
  }
}

