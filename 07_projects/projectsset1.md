# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution Code


## Project 1 Solution

``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

//buttons is a nodelist so we can use forEach loop to traverse
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    body.style.backgroundColor = e.target.id
  });
});


```

## Project 2 Solution

```javascript

const form = document.querySelector("form")
//this usecase will give you empty
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit",function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value); //the values are in string so converting them to integer
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector("#results")

  if(height === ''|| height < 0 || isNaN(height)){
    result.innerHTML = `Please give a valid height ${height}`
  }
  else if(weight === ''|| weight < 0 || isNaN(weight)){
    result.innerHTML = `Please give a valid weight ${weight}`
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    //show the result
    if(bmi<18.6){
      result.innerHTML = `<span>${bmi}</span>(Underweight)`
    }
    else if(bmi>=18.6 && bmi<24.9){
      result.innerHTML = `<span>${bmi}</span>(Normal Range)`
    }
    else if(bmi>24.9){
      result.innerHTML = `<span>${bmi}</span>(OverWeight)`
    }
  }
})

```

## Project 3 solution

```javascript

const clock = document.getElementById("clock")

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
},1000)

```

## Project 4 solution

```javascript
  
let randomNumber = parseInt(Math.random()*100 +1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess =[] // Will store the input guesses
let numGuess = 1
let playGame = true

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    // console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  // This function will check if the value is between 1 and 100 or not
  if(isNaN(guess)){
    alert("Please enter a valid number!")
  }
  else if(guess<1){
    alert("Please enter a number greater than 1!")
  }
  else if(guess>100){
    alert("Please enter a number less than 100!")
  }
  else{
    prevGuess.push(guess)
    if(numGuess>10){
      cleanupGuess(guess)
      displayMessage(`Game Over . Random number was ${randomNumber}`)
      endGame()
    }
    else{
      cleanupGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  //If the value is equal to the random number
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  }
  else if(guess < randomNumber){
    displayMessage(`Number is TOOO low`)
  }
  else if(guess > randomNumber){
    displayMessage(`Number is TOOO high`)
  }
}

function cleanupGuess(guess){
  //Will clear the input, update the guesses and remaining
  userInput.value = ''
  guessSlot.innerHTML += `${guess} `
  numGuess++
  remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
  //will print the message
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*100 +1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML= ''
    remaining.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true
  })
}


```
## Project 5 solution
```javascript

console.log('Project 5');
const insert = document.querySelector("#insert")

window.addEventListener("keydown",function(e){
  insert.innerHTML =`
  <div class="color">
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===" "?"Space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  <div/>
  `
})

```

## Project 6 solution
```javascript

const start = document.querySelector("#start")
const stop = document.querySelector("#stop")

//generate a random color
const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(let i=0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)]
  }
  return color;
}
let intervalId;
start.addEventListener("click",function(){
  if(!intervalId){
    intervalId = setInterval(function(){
      const color = randomColor()
      document.body.style.backgroundColor = color;
    },1000)
  }
})
stop.addEventListener("click",function(){
  clearInterval(intervalId)
  intervalId = null //this will make the code efficient
})

```