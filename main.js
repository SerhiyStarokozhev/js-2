'use strict';

function sum(){

  let num = 4563,
      arr = 0,
      sum = 1;

  arr = ('' + num).split('');

  for(let i = 0; i < arr.length; i++){
    sum *= arr[i];
  } return sum;
}

let pow = sum(),
    cube,
    str;

cube = pow ** 3;
str = cube.toString().slice(0, -6);



console.log(str);

alert(str);