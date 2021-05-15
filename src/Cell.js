function Cell(x, y, t, p) {
  // The position where the box is displayed.
  this.x = x;
  this.y = y;

  // -1 for empty box
  // Betwen 0 and 6 other colors.
  this.COLOR = t;

  this.fusta = 0;

  this.show = function() {
    var grey = Math.random()*(115-100+1) + 85;
    switch(this.COLOR) {
      case TC_MAR: p.fill( grey-40, grey-20, grey + 100); break;
      case TC_CIU: p.fill(
                       255,
                       0,
                       0);
                   break;   // Vermell (ciutat)
      case TC_BOS: p.fill( 
                       80*(1.3-this.fusta/200), 
                       150*(1.3-this.fusta/200),  
                       90 *(1-this.fusta/100)
                       ); 
                   break;   // Verd    (esplanada/bosc)
      case TC_MUN: p.fill(grey, grey, grey); break;
      default: break;
    }
    p.stroke(30,30,30);
    p.rect(this.x, this.y, SIZE, SIZE);
  }

  this.estableixTipus = function(tipus)
  {
    this.COLOR = tipus;
    switch(this.COLOR) {
      case TC_MAR: this.fusta = 0; break;
      case TC_CIU: this.fusta = 0; break;
      case TC_BOS: this.fusta = 100*Math.random(); break;
      case TC_MUN: this.fusta = 0; break;
      default: break;
    }
  }
}
