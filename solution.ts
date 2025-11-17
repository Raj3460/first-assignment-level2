

// problem 1
function formatValue(value : string | number | boolean){
       if(typeof value === "string"){
              return value.toUpperCase();
       } else if (typeof value === "number"){
              const val =  value * 10;
              return val;
       }
       else if(typeof value === "boolean"){
              const oppositeVal = !value;
              return oppositeVal;
       }
       
       
}

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(false));

// problem 2

function getLength (value : string | Array<any>){
       if(typeof value === "string"){
              return value.length;
       } else if (Array.isArray(value)){
              return value.length;
       }
}
console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));
console.log(getLength([]));

