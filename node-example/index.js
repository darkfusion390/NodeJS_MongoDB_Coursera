var rect = require('./rectangle');

function solveRect(l,b){
    console.log("Rectangle Dimensions are: "+ l + "and "+ b);
    if(l<=0 || b<=0)
    {
        console.log("Rectangle dimensions must be greater than zero");
    }
    else{
        console.log("The area of the rectangle is "+ rect.area(l,b)+ "and its perimeter is "+ rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);