var a = 1;

function x() {
    var b = "v2"
    // console.log(c);
    function y() {
        var c = "v3"
        console.log(c);
        function z() {
            var d = "v4"
            console.log(c);
        }
       console.log(z());
    }
    console.log(y());
}
console.log(x());
// console.log(c);