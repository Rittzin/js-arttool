function setup() {
    createCanvas(500, 500);
    background("red")
  }
  
  function draw() {
    stroke("white");
    fill("white")
  
    
    
    if (mouseIsPressed) {
        rect(mouseX, mouseY, 15, 20)
      }
    } 