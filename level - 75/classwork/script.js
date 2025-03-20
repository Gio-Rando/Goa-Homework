// first version

const child = document.getElementById('child');

let x = 450;
let y = 0;

const moveRight = setInterval(() => {
   x--; 
   child.style.left = `${x}px`;
   if (x == 0){
      clearInterval(moveRight);
      const moveDown = setInterval(() => {
         y++; 
         child.style.top = `${y}px`;
         if (y == 450){
            clearInterval(moveDown);
            const moveLeft = setInterval(() => {
               x++; 
               child.style.left = `${x}px`;
               if (x == 450){
                  clearInterval(moveLeft);
                  const moveUp = setInterval(() => {
                     y--; 
                     child.style.top = `${y}px`;
                     if (y == 0){
                         clearInterval(moveUp);
                         return moveRight
                     }
                  }, 1)
               }
            }, 1)
         }
      },1)
   }
}, 1)