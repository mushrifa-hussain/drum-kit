var loopLength = document.querySelectorAll(".drum").length;

for(var i = 0; i< loopLength; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonHTML = this.innerHTML;
        makeSound(buttonHTML);
        buttonAnimation(buttonHTML);
});
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(buttonHTML);
});

function makeSound(key) {
    switch(key){
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        default:
            console.log(buttonHTML);
    }
}

function buttonAnimation(currentKey){
    var animateKey = document.querySelector("."+ currentKey);
    animateKey.classList.add("pressed");
    setTimeout(function (){
        animateKey.classList.remove("pressed"), 1000
    })
}