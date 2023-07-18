/*
let x = (3); 
let y = (2);

let f = (7); 
let g = (5);

let previousX = 3;
let previousY = 2;


/*Tarea #1*/
/*function translate2d(dx, dy) { {
      return [x + dx, y + dy];
    }
  
  }
  console.log (translate2d(dx, dy))

  /*Tarea #2*/

/*function scale2d(sx, sy) {{
      return [x * sx, y * sy]
    };
  }
console.log (scale2d(sx, sy))

  /*Tarea #3*/
/*function composeTransform(f, g) {
   {
      return [dx + dy, sx + sy ];
    };
  }  
  console.log (composeTransform(f, g))

  /*Tarea #4*/
/*function memoizeTransform(f) {
function f(x, y){
      if(previousX === x || previousY === y){
        return 'previousResult: Igual';
      } else {
       return 'previousX o previousY: No son iguales';
      }
    }
    return previousResult = f(x,y);
  }

  console.log (memoizeTransform(f))*/

  /**Ejercicio clase hoy 18/07/2023 */
  function Punto(x, y) {
    this.x = x;
    this.y = y;
  
    this.suma = function(punto) {
      return new Punto(this.x + punto.x, this.y + punto.y);
    };
  
    this.toString = function() {
      return `(${this.x},${this.y})`;
    };
  }
  
  let p1 = new Punto(1, 2);
  let p2 = new Punto(2, 3);
  
  console.log(p1.suma(p2).toString()); // Output: (3,5)
  