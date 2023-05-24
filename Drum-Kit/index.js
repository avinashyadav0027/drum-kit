let buttons = document.querySelectorAll(".drum");
for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function () {
        let buttonInnerHTML = buttons[i].innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
                var audio = new Audio('sounds/tom-1.mp3')
                audio.play();
            break;
        case "a":
                var audio = new Audio('sounds/tom-2.mp3')
                audio.play();
            break;
        case "s":
                var audio = new Audio('sounds/tom-3.mp3')
                audio.play();
            break;    
        case "d":
                var audio = new Audio('sounds/tom-4.mp3')
                audio.play();
            break;   
        case "j":
                var audio = new Audio('sounds/snare.mp3')
                audio.play();
            break;   
        case "k":
                var audio = new Audio('sounds/crash.mp3')
                audio.play();
            break;
        case "l":
                var audio = new Audio('sounds/kick-bass.mp3')
                audio.play();
            break;
        default:
                console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(keyPressed){
    var buttonPressed = '.' + keyPressed;
    document.querySelector(buttonPressed).classList.add("pressed");
    setTimeout( function() {
        document.querySelector(buttonPressed).classList.remove("pressed");
    }, 300);

}