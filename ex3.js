//Block Scope

var inBlock = true;

if(inBlock) {
    var inBlock = false;
}

if (!inBlock) {
    console.log("Is there block scope in Javascript? " + inBlock);
}

if (true) {
    // name is in the global scope because of the 'var' keyword
    var name = 'Some Name';
    // likes is in the local scope because of the 'let' keyword
    let likes = 'Coding';
    // skills is in the local scope because of the 'const' keyword
    const skills = 'JavaScript';
}

console.log(name); 
// console.log(likes);
// console.log(skills); 
