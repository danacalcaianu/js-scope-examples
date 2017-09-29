//Lexical scope
var age = 22;

function grandfather() {
    var name = 'grandfather name';
    var likes = "dancing";
    function parent() {
         name = "parent name";
         age = 35;
        function child() {
            // Innermost level of the scope chain
            name = "child name"
            var likes = 'Coding';
        }
        child();
    }
    parent();
    console.log(name);
    console.log(likes);
    console.log(age);
}

grandfather();
