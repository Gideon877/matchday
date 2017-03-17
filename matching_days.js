var date1 = document.getElementById('dateOne');
var date2 = document.getElementById('dateTwo');

document.getElementById("dateOne").addEventListener("change", myFunction);
document.getElementById("dateTwo").addEventListener("change", myFunction);

var days = document.querySelectorAll('.days');

function myFunction() {

    for (var i = 0; i < days.length; i++) { // loop through days
        var newDate1 = new Date(date1.value);// convert input date to js date
        var whichDag1 = newDate1.getDay(); // get the value of the day

        var newDate2 = new Date(date2.value);
        var whichDag2 = newDate2.getDay();

        days[i].classList.remove("mydate1");
        days[i].classList.remove("mydate2");
        days[i].classList.remove("mystyle");

        if(whichDag1 === whichDag2){
            days[whichDag1].classList.add("mystyle");   //give the day green colour
        }
        else if( whichDag2 == NaN){
            days[whichDag1].classList.add('mydate1');
            //days[whichDag2].classList.add('mydate2');

        } else if (whichDag1 == NaN) {
            days[whichDag2].classList.add('mydate2');

        } else {
            days[whichDag1].classList.add('mydate1');
            days[whichDag2].classList.add('mydate2');
        }
    }
}
