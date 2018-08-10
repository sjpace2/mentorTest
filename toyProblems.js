//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: string => {
    return string.split('').reverse().join('') 
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: arr => {
    let filteredArray = arr.filter((el, i)=>{
      return arr.indexOf(el) === i
    })
    return filteredArray
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: (str) => {
    let strArr = str.split(" ")
    let lettArr = strArr.map(str => {
      return str.split("")
    })
    let capArr = lettArr.map(lett => {
     let upper = lett[0].toUpperCase()
      let newLett = lett.splice(0, 1, upper)
     return lett.join("")
    })
  return capArr.join(" ")
  
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: (str) => {
  
    let lower = str.toLowerCase()
    let count = 0
    for(let i=0; i<lower.length; i++){
      if(lower.charAt(i) ===  'a' || lower.charAt(i) ===  'e' || lower.charAt(i) ===  'i' || lower.charAt(i) ===  'o' || lower.charAt(i) ===  'u'    ){
        count++
      }
    }
    return count
  }

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  // isPrime:

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  //foo:

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  // log1:
  // log2:
}
