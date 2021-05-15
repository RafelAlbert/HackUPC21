function Box(x, y, p){
  // The possition where de box is displayed.
  this.x = x;
  this.y = y;

  // -1 for empty box
  // Betwen 0 and 6 other colors.
  this.COLOR = -1;

  // default (empty box)
  // dynamic or static
  this.state = "default";

  this.show = function() {
    switch(this.COLOR) {
      case -1: p.fill( 50,  70, 200);   break;     // Blau    (mar)
      case 0:  p.fill(255,   0,   0);break;   // Vermell (ciutat)
      case 1:  p.fill( 40, 150,  50);  break;   // Verd    (esplanada/bosc)
      case 2:  p.fill(100, 100, 100);  break;   // Gris    (muntanya)
      default: break;
    }
    p.stroke(30,30,30);
    p.rect(this.x, this.y, SIZE, SIZE);
  }
}
