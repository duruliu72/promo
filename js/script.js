 var countDownDate = new Date("oct 10, 2018 15:37:25").getTime();
        var d = document.getElementById("days");
        var h = document.getElementById("hours");
        var m = document.getElementById("minutes");
        var s = document.getElementById("seconds");

        var x = setInterval(function() {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            d.innerHTML = days;
            h.innerHTML = hours;
            m.innerHTML = minutes;
            s.innerHTML = seconds;
            // If the count down is finished, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }

        }, 1000);

        //        ################################
        //        function move() { // var elem = document.getElementById("myBar"); // var width = 1; // var id = setInterval(frame, 10); // // function frame() { // if (width >= 100) { // clearInterval(id); // } else { // width++; // elem.style.width = width + '%'; // } // } // }
