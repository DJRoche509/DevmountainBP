////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1, num2) => num1 + num2 ;

const substract = (num1, num2) => num1 - num2 ;

const multiply = (num1, num2) => num1 * num2 ;

const divide = (num1, num2) => num1 / num2 ;

const calculator = (num1, num2, cb) => {
  // checking to see if input is coercible to a number
  if (+num1 && +num2){
    num1 = +num1;
    num2 = +num2;
    return cb(num1, num2) ;
  } else {
    return console.log('Please, provide numbers only.');
  }
} 

console.log(calculator(10,2,divide));       // Should Log out "5"
console.log(calculator(10,'3',multiply));  // Should Log out "30"

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE
//APPLY DISCOUNT BY PERCENTAGE OR RATE,  we have to pass discount as decimals
const applyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1 - discount)
}

const applyFlatDiscount = (product, discount) => {
  product.displayPrice = product.basePrice - discount;
}

// higher-order method that allows to rite a loop once and apply discounts

const applyDiscounts = (arr, cb, discount) => {
  for (let i = 0; i < arr.length; i++){
    cb(arr[i], discount)
  }
}

// applyDiscounts(dogProducts, applyFlatDiscount, 1) ;
// applyDiscounts(catProducts, applyPercentDiscount, .20)
// console.log(dogProducts);
// console.log(catProducts);



//APPLY DISCOUNT  BY CATEGORIES
const discountByCategories = (arr, cb, discount, category) => {
  for (let i = 0; i < arr.length; i++){
    if (arr[i].category === category){
      cb(arr[i], discount)
    }
  }
}
// discountByCategories(dogProducts, applyFlatDiscount, 2,1);
// discountByCategories(catProducts,applyPercentDiscount,.10, 2)

// console.log(dogProducts);
// console.log(catProducts);



//APPLY DISCOUNT ACORDING TO INVENTORY
const discountByInventory = (arr, cb, discount, amount) => {
  for (let i = 0; i < arr.length; i++ ){
    if (arr[i].inventory > amount){
      cb(arr[i], discount )
    }
  }
}
discountByInventory(dogProducts, applyFlatDiscount, 2,75 );
discountByInventory(catProducts,applyPercentDiscount,.10, 75);
console.log(dogProducts);
console.log(catProducts);

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
const makeSandwich = bread => {
  ingredients => {
    let order = `You ordered a ${bread} bread sandwich with`
    for (let i =0; i < ingredients.length; i++){
      if (i === ingredients.length-1 && i !== 0){
        order += `and ${ingredients[i]},`
      } else if (ingredients.length ===1){
        order += `${ingredients[i]},`
      } else {
        order += `${ingredients[i]},`
      }
    }
    return order ;
  } 
}

const mySandwich = makeSandwich('rye');

console.log(mySandwich(['bacon', 'lettuce', 'tomato', 'tuna']));
