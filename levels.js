var title = document.getElementById("title");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var inventoryText = document.getElementById("inventorytext");
var description = document.getElementById("description");
var image = document.getElementById("images")

const levels = [
    {description : "Welcome to my adventure game. You're going to make a trip and will face some obstacles. <br> Make the right choice to arrive at your final destination",
title : "Traveller", button1 : "Start game", button2 : "", button3 : "", image : "img/travel.jpg"},

{description : "Which destination do you want to go?",
title : "Where are you going to?", button1 : "Bali", button2 : "Morocco", button3: "", image : "img/travel.jpg"},

{description : "You choose to go to Bali! How do you want to travel to Bali?",
title : "Bali", button1 : "By plane", button2 : "By ship", button3: "", image : "img/planeship.jpg"},

{description : "You  are going to Bali by plane! <br> It's very busy at the airport, you're thinking about what you can do to kill the time. <br> Maybe grab something to eat, or go to the gate to read a book. What do you want to do?",
title : "Airport", button1 : "Get something to eat", button2 : "Go to the gate", button3: "", image : "img/airport.jpg"}

]


var levelCount = 0;


function level(){
    console.log(levels[levelCount].title);
    
    title.innerHTML = levels[levelCount].title;
    description.innerHTML = levels[levelCount].description;

    button1.innerHTML = levels[levelCount].button1;
    button2.innerHTML = levels[levelCount].button2;
    button3.innerHTML = levels[levelCount].button3;

    image.src = levels[levelCount].image;
    levelCount = levelCount +1;
    button1.setAttribute("onclick", "level()");
    button2.setAttribute("onclick", "level()");
    button2.setAttribute("onclick", "level()");


    if (button2.innerHTML == ""){
        document.getElementById("button2").style.display = "none";
    }
    else{
        document.getElementById("button2").style.display = "inline";
    }
    if (button3.innerHTML == ""){
        document.getElementById("button3").style.display = "none";
    }
    else{
        document.getElementById("button3").style.display = "inline";
    }
}
level();