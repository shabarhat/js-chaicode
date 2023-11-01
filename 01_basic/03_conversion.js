let score = undefined;

//console.log(typeof score);
// console.log(typeof(score))

let valueInNumber = Number(score); //conversion
//console.log(typeof(valueInNumber));

//console.log(valueInNumber);

/* Notes After conversion
I/p (string) "33" => O/p 33 => type number
I/p (string) "33abc" => O/p NaN => type number
I/p (object) null => O/p 0 => type number
I/p (undefined) undefined => O/p NaN => type number
I/p (boolean) true => O/p 1 => type number
I/p (string) "Farhat" => O/p Nan => type number
*/

let isLoggedIn = 1;

let booleanisLoggedIn = Boolean(isLoggedIn);

//console.log(booleanisLoggedIn);

/* Notes
0 =>false 1=>true
"" => false
"Farhat" => true
*/

let someNumber = "33";

let stringNumber = String(stringNumber);
console.log(stringNumber);
