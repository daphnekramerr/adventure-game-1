var title = document.getElementById("title");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var inventoryText = document.getElementById("inventorytext");
var description = document.getElementById("description");
var image = document.getElementById("images")
document.getElementById("medicine").style.display = "none";
document.getElementById("book").style.display = "none";
var hasMedicine = false;
var hasBook = false;

function begin(){
    title.innerHTML = "Traveller"
    description.innerHTML = "Welcome to my adventure game. You're going to make a trip and will face some obstacles. <br> Make the right choice to arrive at your final destination"
    button1.setAttribute("onclick", "startgame()");
    button1.innerHTML = "Start game";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    image.src = "img/travel.jpg";
    hasMedicine = false;
    hasBook = false;
    document.getElementById("inventoryItem").style.display = "none";
    document.getElementById("inventorytext").style.display = "none";
}
begin();



function startgame(){
    title.innerHTML = "Where are you going to?"
    description.innerHTML = "Which destination do you want to go? <br> Click on the buttons to see pictures"
    button1.setAttribute("onclick", "bali()");
    button1.innerHTML = "Bali";
    button2.innerHTML = "Morocco";
    button2.setAttribute("onclick", "morocco()");
    image.src = "img/travel.jpg"
    document.getElementById("button2").style.display = "inline";
}

function bali(){
    title.innerHTML = "Bali";
    description.innerHTML = "Which destination do you want to go? <br> Click Bali again to choose this destination"
    image.src = "img/bali.jpg"
    button1.innerHTML = "Bali";
    button2.innerHTML = "Morocco";
    button1.setAttribute("onclick", "level1Bali()");
    button2.setAttribute("onclick", "morocco()");
    document.getElementById("button2").style.display = "inline";
}

function morocco(){
    title.innerHTML = "Morocco";
    description.innerHTML = "Which destination do you want to go? <br> Click Morocco again to choose this destination"
    image.src = "img/marokko.jpg"
    button1.innerHTML = "Bali";
    button2.innerHTML = "Morocco";
    button1.setAttribute("onclick", "bali()");
    button2.setAttribute("onclick", "level1Morocco()");
    document.getElementById("button2").style.display = "inline";
}


// Vanaf hier komen de functies voor de optie "Bali"

function level1Bali(){
    title.innerHTML = "Bali";
    description.innerHTML = "You choose to go to Bali! How do you want to travel to Bali?";
    image.src = "img/planeship.jpg";
    button1.innerHTML = "By plane";
    button2.innerHTML = "By ship";
    button3.innerHTML = "By foot";
    button1.setAttribute("onclick", "plane()");
    button2.setAttribute("onclick", "ship()");
    button3.setAttribute("onclick", "gameOver()");
    document.getElementById("button3").style.display = "inline";

}

function plane(){
    title.innerHTML = "Airport";
    description.innerHTML = "You  are going to Bali by plane! <br> It's very busy at the airport, you're thinking about what you can do to kill the time. <br> Maybe grab something to eat, or go to the gate to read a book. What do you want to do?";
    image.src = "img/airport.jpg";
    button1.innerHTML = "Get something to eat";
    button2.innerHTML = "Go to the gate";
    button3.innerHTML = "Go tax-free shopping";
    button1.setAttribute("onclick", "eat()");
    button2.setAttribute("onclick", "hallway()");
    button3.setAttribute("onclick", "gameOver1()");
    inventoryText.innerHTML = "You found a medicine-kit on the floor. Grab it!";
    document.getElementById("medicine").style.display = "block";
    document.getElementById("inventorytext").style.display = "block";

}

function eat(){
    title.innerHTML = "Airport";
    description.innerHTML = "You're going to a restaurant to get some food. After you eat, you feel very nauseous. You have some options to do, choose wisely.";
    image.src = "img/restaurant.jpg";
    button1.innerHTML = "Go back to the gate";
    button2.innerHTML = "Go to the first-aid";
    if (hasMedicine){
        button2.innerHTML = "Use medicine from medicine-kit";
        button2.setAttribute("onclick", "win()");
        document.getElementById("inventoryItem").style.display = "block";
        document.getElementById("inventorytext").style.display = "block";
    }
    else{
        document.getElementById("medicine").style.display = "none";
        document.getElementById("inventorytext").style.display = "none";
        button2.setAttribute("onclick", "gameOver4()");
    }
    button1.setAttribute("onclick", "gameOver2()");
    document.getElementById("button3").style.display = "none";
    
}

function hallway(){
    title.innerHTML = "Airport";
    description.innerHTML = "You're on your way to the gate and you see a book on the ground. Are going to pick it up? If you do, you have to leave the items you picked up earlier behind and can't use it anymore.";
    image.src = "img/gang.jpg";
    button1.innerHTML = "Go to the gate";
    button1.setAttribute("onclick", "gate()");
    document.getElementById("book").style.display = "block";
    document.getElementById("inventorytext").style.display = "block";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button2").style.display = "none";
    document.getElementById("medicine").style.display = "none";
    document.getElementById("inventorytext").style.display = "none";

}

function gate(){
    title.innerHTML = "Airport";
    description.innerHTML = "What are you going to do to kill the time?";
    image.src = "img/gate.jpg";
    button1.innerHTML = "Nothing";
    if(hasBook){
        button2.innerHTML = "Read the book you found";
        button2.setAttribute("onclick", "win1()");
        document.getElementById("inventoryItem").style.display = "block";
        document.getElementById("inventorytext").style.display = "block";
        document.getElementById("button2").style.display = "inline";
    }
    else{
        document.getElementById("button2").style.display = "none";
        document.getElementById("button3").style.display = "none";
    }
    button1.setAttribute("onclick", "gameOver3()");
    document.getElementById("book").style.display = "none";
}

function ship(){
    title.innerHTML = "Harber";
    description.innerHTML = "You're going to Bali with a big cruise ship. During you trip to the harbor there was a traffic jam. You are really late at the harbor adn you see 2 ships. You don't know which one you have to take. So which one are you going to choose?";
    image.src = "";
    button1.innerHTML = "The left one";
    button2.innerHTML = "The right one";
    button1.setAttribute("onclick", "gameOver5()");
    button2.setAttribute("onclick", "right()");
    document.getElementById("button3").style.display = "none";
}

function right(){
    title.innerHTML = "Harber";
    description.innerHTML = "You choose the right ship! You're on board now and want to kill some time. What are you going to do?";
    image.src = "";
    button1.innerHTML = "Get something to eat.";
    button2.innerHTML = "Take a nape.";
    button1.setAttribute("onclick", "gameOver6()");
    button2.setAttribute("onclick", "nape()");
    document.getElementById("button3").style.display = "none";
}

function nape(){
    title.innerHTML = "";
    description.innerHTML = "You took a very long time nape, when you woke up the ship is at the first stop. Do you want to get off the ship to explore the city?";
    image.src = "";
    button1.innerHTML = "Yes";
    button2.innerHTML = "No";
    button1.setAttribute("onclick", "gameOver7()");
    button2.setAttribute("onclick", "win2()");
    document.getElementById("button3").style.display = "none";
}

// Vanaf hier komen de functies voor optie "Marokko"

function level1Morocco(){
    title.innerHTML = "Morocco";
    description.innerHTML = "You choose to go to Morocco! How do you want to travel to Morocco?";
    image.src = "img/planeship.jpg";
    button1.innerHTML = "By ship";
    button2.innerHTML = "By plane";
    button3.innerHTML = "By car";
    button1.setAttribute("onclick", "shipMar()");
    button2.setAttribute("onclick", "planeMar()");
    button3.setAttribute("onclick", "gameOver13()");
    document.getElementById("button3").style.display = "inline";
}

function planeMar(){
    title.innerHTML = "Rebook ticket";
    description.innerHTML = "You're going to Morocoo by plane. At the incheck desk they ask you to rebook you ticket, so you can leave right away. What are you going to do?";
    image.src = "img/desk.jpg";
    button1.innerHTML = "Rebook ticket";
    button2.innerHTML = "Do nothing";
    button1.setAttribute("onclick", "gameOver8()");
    button2.setAttribute("onclick", "doNothing()");
    document.getElementById("button3").style.display = "none";
}

function doNothing(){
    title.innerHTML = "Hallway";
    description.innerHTML = "You're going to go to some tax-free shops. How many are you going to visit?";
    image.src = "img/airport.jpg";
    button1.innerHTML = "Click on the button";
    button1.setAttribute("onclick", "input()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function input(){
    var answer = prompt();
    if (answer <= 3){
        phone();
    }
    else if (answer > 3){
        gameOver9();
    }
}

function phone(){
    title.innerHTML = "Phone";
    description.innerHTML = "You went to a few shops and were on time for you flight. The plane is flying and you are in you seatbelt. You remember that you left your phone in your suitcase. Are you going to get it?";
    image.src = "img/plane.jpg";
    button1.innerHTML = "Stay in your seat";
    button2.innerHTML = "Get phone";
    button1.setAttribute("onclick", "win3()");
    button2.setAttribute("onclick", "gameOver10()");
    document.getElementById("button3").style.display = "none";
    document.getElementById("button2").style.display = "inline";
}

function shipMar(){
    title.innerHTML = "Morocco";
    description.innerHTML = "You decided to go to Morocco by ship! You arrive at the harbor and see that you ship is delayed. Are going to wait for the ship or go to the ciry to kill the time?";
    image.src = "";
    button1.innerHTML = "Wait for the ship";
    button2.innerHTML = "Go in to the city";
    button1.setAttribute("onclick", "wait()");
    button2.setAttribute("onclick", "city()");
    document.getElementById("button3").style.display = "none";
    document.getElementById("button2").style.display = "inline";
}

function city(){
    title.innerHTML = "City";
    description.innerHTML = "You went into the city. How many shops are you going to visit?";
    image.src = "";
    button1.innerHTML = "Click on the button";
    button1.setAttribute("onclick", "input1()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function input1(){
    var answer = prompt();
    if (answer <= 3){
        win4();
    }
    else if (answer > 3){
        gameOver11();
    }
}

function wait(){
    title.innerHTML = "Waiting..";
    description.innerHTML = "You've waited an hour for the ship but when it arrived you remembered that you forgot your bag in your car.";
    image.src = "";
    button1.innerHTML = "Get your bag";
    button2.innerHTML = "Get on board of the ship";
    button1.setAttribute("onclick", "gameOver12()");
    button2.setAttribute("onclick", "win5()");
    document.getElementById("button3").style.display = "none";
    document.getElementById("button2").style.display = "inline";
}


// Vanaf hier komen alle gameOver functies

function gameOver(){
    title.innerHTML = "Game over!";
    description.innerHTML = "It was a stupid option to go by foot to Bali. You didn't make it. That's the end of your holiday..";
    image.src = "img/gameover.jpg";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function gameOver1(){
    title.innerHTML = "Game over!";
    description.innerHTML = "You went tax-free shopping and forgot the time. Because of this you missed your flight. That's the end of your holiday..";
    image.src = "img/gameover.jpg";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("inventorytext").style.display = "none";
    document.getElementById("medicine").style.display = "none";
}

function gameOver2(){
    title.innerHTML = "Game over!";
    description.innerHTML = "You went back to the gate while you were feeling nauseous. It got worse and you had to go to the first-aid. Because of this you missed your flight. That's the end of your holiday..";
    image.src = "img/gameover.jpg";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function gameOver3(){
    title.innerHTML = "Game over!";
    description.innerHTML = "You had to wait a very long time at the gate and you did nothing, you fell a sleep and because of this you missed your flight. That's the end of your holiday..";
    image.src = "img/gameover.jpg";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("book").style.display = "none";
}

function gameOver4(){
    title.innerHTML = "Game over!";
    description.innerHTML = "You went to the first-aid and they thought you had a dangerous infection and brought you to the hospital. That's the end of your holiday..";
    image.src = "img/gameover.jpg";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function gameOver5(){
    title.innerHTML = "Game over!";
    description.innerHTML = "You choose the wrong one, the other ship left before you could enter. That's the end of your holiday..";
    image.src = "img/gameover.jpg";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function gameOver6(){
    title.innerHTML = "Game over!";
    description.innerHTML = "You went to eat something. You became really sick. With the next stop you went off board to go to the hospital. That's the end of your holiday..";
    image.src = "img/gameover.jpg";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function gameOver7(){
    title.innerHTML = "Game over!";
    description.innerHTML = "You went into the city. When you came back at the ship you have to show you're passport again, but your passport is still on the ship. You can't enter the ship anymore.. That's the end of your holiday..";
    image.src = "img/gameover.jpg";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function gameOver8(){
    title.innerHTML = "Game over!";
    description.innerHTML = "You rebooked you flight, you had to run to your gate, you only had 5 minutes left but you were to late. That's the end of your holiday..";
    image.src = "img/gameover.jpg";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function gameOver9(){
    title.innerHTML = "Game over!";
    description.innerHTML = "You went shopping to long. You missed your flight. That's the end of your holiday..";
    image.src = "img/gameover.jpg";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function gameOver10(){
    title.innerHTML = "Game over!";
    description.innerHTML = "You went to grabe your phone. The suitcase falls on you head and you're unconsious. You wake up in an hospital in the Netherlands.. That's the end of your holiday..";
    image.src = "img/gameover.jpg";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function gameOver11(){
    title.innerHTML = "Game over!";
    description.innerHTML = "You went shopping to long. You missed your ship. That's the end of your holiday..";
    image.src = "img/gameover.jpg";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function gameOver12(){
    title.innerHTML = "Game over!";
    description.innerHTML = "You ran to your car to get your bag, but when you arrive at the ship again, it's to late to get on board. That's the end of your holiday..";
    image.src = "img/gameover.jpg";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function gameOver13(){
    title.innerHTML = "Game over!";
    description.innerHTML = "You decided to go to Morocco by car but halfway through your car broke down.. That's the end of your holiday..";
    image.src = "img/gameover.jpg";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}


// Vanaf hier komen alle win functies

function win(){
    title.innerHTML = "You won!";
    description.innerHTML = "You used some medicine from the medicine-kit and felt better. You were on time at the gate for you flight and your holiday is about to start!";
    image.src = "img/youwon.jpg";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("inventoryItem").style.display = "none";
    document.getElementById("inventorytext").style.display = "none";
}

function win1(){
    title.innerHTML = "You won!";
    description.innerHTML = "To kill the time at the gate you read the book you found. When the gate opened you entered the plane, and you flew to Bali. Have a nice holiday!";
    image.src = "img/youwon.jpg";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function win2(){
    title.innerHTML = "You won!";
    description.innerHTML = "You decided not to get off the ship. Your journey continues undisturbed. Have a nice holiday!";
    image.src = "";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function win3(){
    title.innerHTML = "You won!";
    description.innerHTML = "You stayed in your seat and nothing happened. Your journey continues undisturbed. Have a nice holiday!";
    image.src = "";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function win4(){
    title.innerHTML = "You won!";
    description.innerHTML = "You went to just a few shops and were on time at the harbor again. Have a nice holiday!";
    image.src = "";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function win5(){
    title.innerHTML = "You won!";
    description.innerHTML = "You got on board of the ship, only without your bag. But you journey continues undisturbed. Have a nice holiday!";
    image.src = "";
    button1.innerHTML = "Play again";
    button1.setAttribute("onclick", "begin()");
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

// Vanaf hier komen alle inventory item functies

function medicine(){
    hasMedicine = true;
    document.getElementById("medicine").style.display = "none";
    inventoryItem.src = "img/medicine-kit.jpg";
    inventoryText.innerHTML = "Inventory";
    document.getElementById("inventoryItem").style.display = "block";
    document.getElementById("inventorytext").style.display = "block";
    console.log("You picked up a medicine-kit.");
}

function book(){
    hasBook = true;
    hasMedicine = false;
    document.getElementById("book").style.display = "none";
    inventoryItem.src = "img/book.jpg";
    inventoryText.innerHTML = "Inventory";
    document.getElementById("inventoryItem").style.display = "block";
    document.getElementById("inventorytext").style.display = "block";
    console.log("You picked up a book.");
}