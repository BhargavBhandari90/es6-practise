
/**
 * Scope.
 */
if ( true ) {
    let roll_no = 6; // This will not available out side of scope.
    console.log(roll_no);
}

// console.log(roll_no); // This will create error in console.

/**
 * Constants
 */

const LICENSE_KEY = 'sjdkjhsdgwyt723547';

console.log( LICENSE_KEY );

// var LICENSE_KEY = 'buntycena';

// console.log(LICENSE_KEY); // This will generte Uncaught SyntaxError: Identifier 'LICENSE_KEY' has already been declared

/**
 * Concatanation
 */

let fname = 'John';
let lname = 'Cena';

console.log( `My fav. wrestler is ${fname} ${lname}` );

/**
 * class based.
 */

let person = {
    fname: 'John',
    lname: 'Cena',
    showMyFavWrestler() {
        return `My fav. wrestler is ${this.fname} ${this.lname}`;
    }
}

let myfavwrestler = person.showMyFavWrestler();

console.log(myfavwrestler);

/*********************************************
 * Arrow functions
 **********************************************/

 console.log('======= Arrow Functions =======');

 let addValues = ( a, b ) => {
     return a + b;
 }

 console.log( addValues( 1, 3 ) );

 /**
  * Single line sytax.
  */

let addValues1 = (a, b) => a + b;

console.log(addValues1(2, 3));

/**
 * Array iteration
 */

// Example - 1

let number = [1,2,3,4];
let squereTheNumber = number.map( function(n) {
    return n * n;
} );

console.log(squereTheNumber);

// Example - 2

let numbers = [1, 2, 3, 4];
let squereTheNumbers = number.map( n => n * n );

console.log(squereTheNumbers);

// Example - 3

let myFavBikes = {
    myname: 'Bunty',
    bikes : ['himalayan', 'thunder bird', 'classic'],
    showMyFavBikes: function() {
        this.bikes.forEach( bike => {
            console.log( `${this.myname} Likes ${bike}` );
        });
    }
}

myFavBikes.showMyFavBikes();

/*********************************************
 * Spread operator and rest params
 **********************************************/

console.log('======= Spread operator and rest params =======');

/**
 * Example 1
 */
let multiplier = ( mul, ...numbers ) => {

    return numbers.map( n => mul * n );

};

console.log( multiplier(10, 2, 3, 4) );

/**
 * Example 2 - Array concat
 */

let arr1 = [1,2,3,4];
let arr2 = [...arr1,5, 6, 7, 8];

console.log(arr2);

/*********************************************
 * Destructing
 **********************************************/

console.log('======= Destructing =======');

let personObj = {
    name : 'bunty',
    city : 'bilimora'
}

let { name, city } = personObj;

console.log(name, city);