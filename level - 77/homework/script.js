// second version

const child = document.getElementById("child");

let x = 0;
let y = 0;

document.addEventListener("keydown", (e) =>{
    console.log(e.key)

    if((e.key == "w" || e.key == "W") && y > 0){
        child.style.top == y
        y-=5
    }
    else if((e.key == "s" || e.key == "S") && y < 450){
        child.style.top == y
        y+=5
    }
    else if((e.key == "d" || e.key == "D") && x < 450){
        child.style.left == x
        x+=5
    }
    else if((e.key == "a" || e.key == "A") && x > 0){
        child.style.left == x
        x-=5
    }
    
    child.style.left = x + 'px';
    child.style.top = y + 'px';
} )