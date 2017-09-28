//Lexical scope

function grandfather() {
    var name = 'Some name';
    // likes is not accessible here
    function parent() {
        // name is accessible here
        // likes is not accessible here
        function child() {
             // name is also accessible here
            // Innermost level of the scope chain
            var likes = 'Coding';
        }
    }
}