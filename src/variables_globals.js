// Layout vars
var FILES = 50;
var COLS =  50;
var SIZE =  20;
var G_SIZE = 4;
var DIST = 0;

var grid = Array(20);
var holder_grid = Array(3);


// Tipus de cel.la (TC)
var TC_MAR = -1 // Mar
var TC_CIU =  0 // Ciutat
var TC_BOS =  1 // Bosc
var TC_MUN =  2 // Muntanya

// Classes auxiliars
class createVector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
};

var game = new p5(game_layout, 'map_matrix');
