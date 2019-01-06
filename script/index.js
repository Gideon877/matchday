var date1 = document.getElementById('dateOne');
var date2 = document.getElementById('dateTwo');

document.getElementById("dateOne").addEventListener("change", myFunction);
document.getElementById("dateTwo").addEventListener("change", myFunction);

var days = document.querySelectorAll('.days');

function myFunction() {
    let whichDag1 = "", whichDag2 = "";
    for (var i = 0; i < days.length; i++) { // loop through days
        days[i].classList.remove("mydate1");
        days[i].classList.remove("mydate2");
        days[i].classList.remove("mystyle");

        if(date1.value !== ""){
            var newDate1 = new Date(date1.value);
            whichDag1 = newDate1.getDay();
        } 
        if(date2.value !== ""){
            var newDate2 = new Date(date2.value);
            whichDag2 = newDate2.getDay();
        };
        checkDays(whichDag1, whichDag2);
    }

    function checkDays(day1, day2) {
        
        if(day1 !== '' && day2 !== '') {
            if(day1 === day2) {
                greenColor();
            };

            if (day1 !== day2) {
                allColors();
            }
        } 

        if(day1 !== '' && day2 === '') {
            blueColor();
        };

        if(day2 !== '' && day1 === '') {
            redColor();
        };
    }

    function blueColor() {
        return days[whichDag1].classList.add('mydate1');
    };
    
    function redColor() {
        return days[whichDag2].classList.add('mydate2');
    };
    
    function greenColor() {
        return  days[whichDag1].classList.add("mystyle");
    };
    
    function allColors() {
        days[whichDag1].classList.add('mydate1');
        days[whichDag2].classList.add('mydate2');
        return;
    }
}

