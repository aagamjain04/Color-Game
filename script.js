var numberOfSquares = 6;
var colors = []
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");
colorDisplay.textContent = pickedColor;

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}



resetButton.addEventListener("click",function(){
    reset();
})

function reset(){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "new colors";
    for(var i=0; i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
        
    }
    h1.style.background = "#008891";
}
function setupModeButtons(){
    for(var i=0 ; i<modeButton.length; i++){
        modeButton[i].addEventListener("click",function(){
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            (this.textContent==="Easy") ? numberOfSquares=3 : numberOfSquares=6;
            reset();
        });
    }
}

function setupSquares(){
    for(var i=0; i<squares.length;i++){

        squares[i].addEventListener("click",function(){
            
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                setTimeout(function(){
                    reset();
                },2500);
                messageDisplay.textContent = "Correct!";
                messageDisplay.style.color = "#79d70f";
                resetButton.textContent = "new colors"
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            }
            else{
                setTimeout(function(){
                    tryagain();
                }, 1000);
                this.style.background = "#f4f9f4";
                messageDisplay.textContent = "Try Again";
                messageDisplay.style.color = "#ff4b5c";
                
                
            }
    
        });
    }
}
function tryagain(){
    messageDisplay.textContent = "";
}

function changeColors(color){
    for(var i = 0;i<colors.length;i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

   return  "rgb(" + r +", " + g + ", " +b +")";
}


