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
    button2.setAttribute("onclick", "morocco()");
    document.getElementById("button2").style.display = "inline";
}


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