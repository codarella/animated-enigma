// var countDownDate = new Date("March, 2024 1:00:00").getTime();
// var countdownfunction = setInterval(function () {

//     var now = new Date().getTime();
//     var distance = countDownDate - now;

//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Update the content of each container
//     document.getElementById("days").innerHTML = days;
//     document.getElementById("hours").innerHTML = hours;
//     document.getElementById("minutes").innerHTML = minutes;
//     document.getElementById("seconds").innerHTML = seconds;

//     if (distance < 0) {
//         clearInterval(countdownfunction);
//         document.getElementById("demo").innerHTML = "EXPIRED";
//     }
// })
var countDownDate = new Date("February 28, 2024 01:00:00").getTime();
var countdownFunction = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    if (distance >= 0) {
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the content of each container
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    } else {
        clearInterval(countdownFunction);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
