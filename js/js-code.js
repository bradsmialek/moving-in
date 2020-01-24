
function password() {

var password = prompt("please enter pin")
var pin;
while ( password !== '6767' && password != 'joe')
{
    password = prompt ('please enter password or pin')
};
if (password === "6767")
{
    
    pin = "pin accepted"
}
else if (password === "joe"){
    pin = 'password accepted'
}
else {
    window.location = 'https://josephlee3454.github.io/example';
}
return '<h3>' + pin + '</h3>' ;
}

function movers()
{
movers = pompt("how many movers");
while(movers===0)||(movers !== Number())
{
movers = prompt("how many movers")
}
total = 0 
cost = 50 
for (var i = 0; i<movers; i++)
return '<h3>' + movers + '</h3>';
}





    


