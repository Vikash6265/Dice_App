
let section = document.querySelector('.section');

let heading = document.createElement('h1');
heading.innerText = " Start";
heading.className = "newheading";

let img = document.createElement('img');
img.className = "photos";
img.setAttribute("src","https://pngimg.com/uploads/dice/dice_PNG125.png")

let button = document.createElement("button");
button.className = "btn";
button.innerText = "Roll the Dice";

section.appendChild(img);
section.appendChild(heading);
section.appendChild(button);


const saveData = () =>{

    let randomValue = Math.random()*(6-1)+1;

    if(randomValue.toFixed(0) == 1)
    {
        img.setAttribute("src","https://cdn.pixabay.com/photo/2014/04/03/10/24/one-310338_1280.png");
        heading.innerText = "One : 1";
    }
    else if(randomValue.toFixed(0) == 2){
        img.setAttribute("src","https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312627_640.png");
        heading.innerText = " Two : 2";
    }
    else if(randomValue.toFixed(0) == 3){
        img.setAttribute("src","https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312624__340.png");
        heading.innerText = " Three : 3";
    }
    else if(randomValue.toFixed(0) == 4){
        img.setAttribute("src","https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312623_640.png");
        heading.innerText = "Four : 4";
    }
    else if(randomValue.toFixed(0) == 5){
        img.setAttribute("src","https://cdn.pixabay.com/photo/2014/04/03/10/24/five-310334_960_720.png");
        heading.innerText = "Five : 5";
    }
    else if(randomValue.toFixed(0) == 6){
        img.setAttribute("src","https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312621_640.png");
        heading.innerText = " Six : 6";
    }
};

button.addEventListener("click",saveData);

const findData = (e) =>{

    e.preventDefault();
    console.log("Event Type "+" "+"="+" "+ e.type);
    console.log("Use altkey"+" "+"="+" "+ e.altKey);

    console.log("Use shiftkey"+" "+"="+" "+ e.shiftKey);
    console.log("Pointer wise width"+" "+"="+" "+ e.clientX);
};
button.addEventListener("click",findData);
// button.addEventListener("dblclick",findData);