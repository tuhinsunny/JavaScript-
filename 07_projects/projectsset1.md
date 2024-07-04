# Projects related to DOM

## Project link
[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution Code


## Project 1

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