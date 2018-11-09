window.onload = function () {
    var canvas = new Canvas("canvas");

    document.getElementById("one").onclick = function () { 
        var musicOne = new Audio("Audio/captainJack.mp3"); 
        musicOne.play(); 
        canvas.startingGame() 
    }

    document.getElementById("two").onclick = function () { 
        var musicTwo = new Audio("Audio/beethoven.mp3"); 
        musicTwo.play(); 
        canvas.startingGame()
    }
    document.getElementById("three").onclick = function () { 
        var musicTwo = new Audio("Audio/butterfly.mp3"); 
        musicTwo.play(); 
        canvas.startingGame()
    }
}