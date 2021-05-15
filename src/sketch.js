var game_layout = function( p ) {
  p.setup = function() {
    p.createCanvas(COLS*SIZE+1, FILES*SIZE);

    for (var j = 0; j < FILES; ++j){
      grid[j] = new Array(COLS);
      for (var i = 0; i < COLS; ++i){
        grid[j][i] = new Box(i*SIZE, j*SIZE, p);
        grid[j][i].COLOR = TC_MAR;
      }
    }

    for (var j = 4;   j < FILES-4; ++j) {
      for (var i = 4; i < COLS -4; ++i) {
        var probi = i/COLS  - 0.5; probi = probi * 2;
        var probj = j/FILES - 0.5; probj = probj * 2;
        var prob  = Math.sqrt(probi*probi + probj*probj);
        if (1.2*prob < Math.random()) {
            grid[j][i].COLOR = TC_BOS;
        } 
      }
    }

    var maxi = 0;
    var mini = COLS;
    for (var j = 0;   j < FILES; ++j) {
      var min = COLS;
      var max = 0;
      for (var i = 0; i < COLS ; ++i) {
        if (grid[j][i].COLOR == TC_BOS) {
          if (i > max) max = i;
          if (i < min) min = i;
        }
      }
      if ( min != max && min != COLS ) {
        for (var i = min; i <= max ; ++i) {
          grid[j][i].COLOR = TC_BOS;
        }
      }


      if (max > maxi) maxi = max;
      if (min < mini) mini = min;
    }


    var maxj = 0;
    var minj = COLS;
    for (var i = 0;   i < COLS; ++i) {
      var min = FILES;
      var max = 0;
      for (var j = 0; j < FILES ; ++j) {
        if (grid[j][i].COLOR == TC_BOS) {
          if (j > max) max = j;
          if (j < min) min = j;
        }
      }
      if ( min != max && min != FILES ) {
        for (var j = min; j <= max ; ++j) {
          grid[j][i].COLOR = TC_BOS;
        }
      }

      if (max > maxj) maxj = max;
      if (min < minj) minj = min;
    }


    for (var j = minj;   j < maxj; ++j) {
      for (var i = mini; i < maxi; ++i) {
        var probi = i/COLS  - 0.5; probi = probi * 2;
        var probj = j/FILES - 0.5; probj = probj * 2;
        var prob  = 1-Math.sqrt(probi*probi + probj*probj);
        if (Math.random() < 0.05*prob)  {
          var mun_size = Math.floor(Math.random() * (prob) * 10) + 1;
          var ki = Math.floor(j - mun_size/2);
          var mi = Math.floor(i - mun_size/2);
          var kf = Math.floor(j + mun_size/2) + 1;
          var mf = Math.floor(i + mun_size/2) + 1;
          if (
            grid[mi][ki].COLOR != TC_MAR &&
            grid[mf][ki].COLOR != TC_MAR && 
            grid[mi][kf].COLOR != TC_MAR && 
            grid[mf][kf].COLOR != TC_MAR
          ) {
            for (var k = ki; k < kf; k++) {
              for (var m = mi; m < mf; m++) {
                grid[k][m].COLOR = TC_MUN;
              }
            }
          }
        } 
      }
    }

    for (var i = 0; i < COLS; ++i) {
      for (var j = 0; j < FILES; ++j) {
          grid[j][i].show();
      }
    }
   
  };

  p.draw = function() {
    update(p);
  };

};

//function keyPressed() {
//  switch(game.keyCode){
//    case game.LEFT_ARROW: 	dirH = "left";                  break;
//    case game.RIGHT_ARROW:	dirH = "right";	                break;
//    case game.UP_ARROW:		dirR = "right";                 break;
//    case 16: 			dirR = "left";			break;
//    case game.DOWN_ARROW: 	fallDelay = 5;			break;
//    case 67: {
//      if (!is_holded){
//        pesa.make_static();
//        pesa.clean();
//        pesa = hold(pesa);
//        pesa.origin.x = 3;
//        pesa.origin.y = -2;
//        pesa.draw();
//        is_holded = true;
//      }
//      break;
//    }
//    case 32: fallDelay = 0;                                             break;
//    default:                                                            break;
//  }
//}
//
//function keyReleased() {
//  switch(game.keyCode){
//    case game.DOWN_ARROW:  fallDelay = defFallDelay - 3*level;   break;
//    case game.LEFT_ARROW:  dirH = "stoped";  break;
//    case game.RIGHT_ARROW: dirH = "stoped";  break;
//    default:                                 break;
//  }
//};
