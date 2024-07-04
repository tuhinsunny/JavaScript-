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