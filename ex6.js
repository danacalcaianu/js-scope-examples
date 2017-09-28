//hoisting example 

testFunction();

function testFunction() {
    var foo = 1;
    console.log(foo + " " + bar + " " + baz);
    var bar = 2;
    var baz = 3;
}



// function testFunction() {
//     var foo;
//     var bar;
//     var baz;

//     foo = 1;
//     console.log(foo + " " + bar + " " + baz);
//     bar = 2;
//     baz = 3;
// }

// testFunction();