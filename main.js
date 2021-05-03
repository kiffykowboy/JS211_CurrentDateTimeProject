// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const numberToString = (num) =>{

  return num.toString();

}



// Write a JavaScript program to convert a string to the number.

const stringToNumber = (str) =>{

  return Number(str);

}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
  const input1 = true;
  const input2 = 74;
  const input3 = 'jerome';
  const input4 = {}
  const input5 = []

  const nameOfFunction = (anything) =>{

    return typeof(anything)

  }



  console.log(typeof input1)
  console.log(typeof input2)
  console.log(typeof input3)
  console.log(typeof input4)
  console.log(typeof input5)

// Write a JavaScript program that adds 2 numbers together.

const add = (num1 , num2) => {

  return num1 + num2;

}


// Write a JavaScript program that runs only when 2 things are true.

const true1 = true
const true2 = true

const t2t = (true1 , true2) => {

if (true1 && true2)


return "1 and 2 are true"
}

t2t(true1 , true2)


// Write a JavaScript program that runs when 1 of 2 things are true.


const t2f = (true1 , false1) => {

if (true1 || false1)


return "1 is true and 2 is false"
}

t2t(true1 , false1)

// Write a JavaScript program that runs when both things are not true.  


const f2f = (true1 , false1) => {

if (!true1 && !false1)


return "1 and 2 are false"
}

f2f(true1 , false1)

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
