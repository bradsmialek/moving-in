var password = prompt("please enter pin")
var pin;
if (password === "6767"){
    
    pin = "pin accepted"

}
else{
    windows.location.href='https://josephlee3454.github.io/example'
}






var country = prompt("what country are you fromm", "county here...")
var greetings;

if(country === "America" || country === "usa") {
    greetings = 'Hello there! welcome!';

} else if (country === "mexico" || country === "mx") {
    greetings = 'Hola! que gusto que nos visites!';
} else {
    greetings = 'so glad you are here!';
}

document.write('<h3>' + greetings + '</h3>');


var salary = prompt("how much is your salary")
var money;
 if(salary > 60000) 
 {
     money = 'afordable'; 
    }
    else if (salary < 60000)
    {
        money = 'unaffordable';

    }
    document.write('<h5>' + money + '</h5>')
     
  var weather = prompt ("what season are you moving")  
  var season;
  if (weather === "winter")
  {
      season = 'It rains alot so bring a umbrella';
  } else if (weather === "summer")
    {
        season = 'The summers are so beautiful prepare for lots of sun';
    }
    else if (weather === "spring")
    {
        season = 'the rain starts to go away and the flowers bloom';
    }
   else if (weather === "fall" || weather === "autumn")
   {
       season = 'The leaves are so big and beautiful in fall';

   }

   document.write('<h5>' + season + '<h5>');

   


