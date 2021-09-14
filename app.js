var day = new Date();
var positionOfDay = day.getDay();
var nameOfDay;
var quote;

switch (positionOfDay) {
    case 0:
        nameOfDay = "Sunday";
        quote = "Wow,its time to Chillax";
         break;

         case 1:
             nameOfDay = "Monday";
             quote = "Wear a Cooperate";
             break;

             case 2:
                 nameOfDay= "Tuesday";
                 quote = "Taco Time!";
                 break;

                 case 3:
                     nameOfDay = "Wednesday";
                     quote = "Crush Day!";
                     break;

                     case 4:
                         nameOfDay = "Thursday";
                         quote = " A day to Weekend";
                         break;

                         case 5:
                             nameOfDay = "Friday";
                             quote = "ThankGod its Friday";
                             break;

                             case 6:
                                 nameOfDay= "Saturday";
                                 quote = "Clean up Day";
                             break;

}
let weekday = document.getElementById("weekday");
weekday.innerHTML = `${nameOfDay}`

let display = document.getElementById("display");
display.innerHTML = `${quote}`