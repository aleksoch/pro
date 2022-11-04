let matrix = []
function generate(a,gr,grEat,mox,bag) {
    for (let i = 0; i < a; i++) {
        matrix.push([])
        for (let j = 0; j < a; j++) {    
            //նայի ամբողջ մատրիցը մենակ զրոներով լցնենք       
            matrix[i].push(0)
        }
    }
     //հիմա ասենք,որ մեչ տված քանակով խոտ ստեղծի ըստ gr արգումենտի
     for (let i = 0; i < gr; i++) {
         let x = Math.floor(Math.random()*a)
         let y = Math.floor(Math.random()*a)
         if(matrix[x][y] == 0) {
             //ստեղծեց մեկերին
             matrix[x][y] = 1
         } 
     }
     //խոտակերա լցնում մեր ասած քանակով
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random()*a)
        let y = Math.floor(Math.random()*a)
        if(matrix[x][y] == 0) {
            matrix[x][y] = 2
        } 
    }
    //մողեսա լցնում
    for (let i = 0; i < mox; i++) {
        let x = Math.floor(Math.random()*a)
        let y = Math.floor(Math.random()*a)
        if(matrix[x][y] == 0) {
            matrix[x][y] = 3
        } 
    }
    for (let i = 0; i < bag; i++) {
        let x = Math.floor(Math.random()*a)
        let y = Math.floor(Math.random()*a)
        if(matrix[x][y] == 0) {
            matrix[x][y] = 4
        } 
    }
}

generate(80, 220,400, 10,80)

var side = 10;
var grassArr = [];
var xotakerArr = [];
var moxesArr = [];
var bagamolArr = [];

function createObjects(){
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            }
            else if (matrix[y][x] == 3) {
                var sd = new Moxes(x, y)
                moxesArr.push(sd)
            }
            else if (matrix[y][x] == 4) {
                var uj = new Bagamol(x, y)
                bagamolArr.push(uj)
            }
            
            
            
        }
    }
}

createObjects()

function setup() {
    
    noStroke()
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}




function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("purple");
            }

            

            ellipse(x * side, y * side, side, side)

            /*fill("blue")
            text(x + " " + y, x * side + side / 2, y * side + side / 2)
            */
        }
    }

    for (let i in grassArr) {
        grassArr[i].mult()
    }


    for (let i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
//ստեղ առաջինը մուլտն ենք կանչում, գնա կլասի ֆայլ կհասկանաս
    for (let i in moxesArr) {
        moxesArr[i].mult()
        moxesArr[i].eat()
       
    

}
for (let i in bagamolArr) {
     bagamolArr[i].mult()
     bagamolArr[i].eat()
 }
}