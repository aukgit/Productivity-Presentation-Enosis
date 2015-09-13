$(function() {
    // var is first class citizen.





    //var exactFunctionName = function thisNameWillNotWork() {
    //    console.log("Hello World");
    //};

    //exactFunctionName();
    //thisNameWillNotWork();

    //// function , array , json are reference type

    //var arr = [1, 2, 3];
    //var x = arr;
    //x[1] = 33;
    //x.push(function() {
    //    console.log("Sample");
    //});
    //console.log(arr);


    //jQuery naming convention
    //var $checkbox = $(".checkbox");

    // a lot more faster than jQuery each or in loop
    //for (var i = 0; i < LENGTH; i++) {
        
    //}

    $(".checkbox").change(function() {
        // faster than reference function name.
    });

    // array creation

    //var arr = new Array(1,2,3); // anti-pattern , [] is good
    var arr = new Array(43); // Good
});