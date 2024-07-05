# Projects on Set Interval

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-prw33f)

## Project 1 solution
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