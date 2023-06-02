const secondsHand = document.querySelector('.sec-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hours-hand')

function setDate() {
   const date = new Date()
   const seconds = date.getSeconds()
   const secondsInDegree = ((seconds / 60 )* 360) + 90;
   secondsHand.style.transform = `rotate(${secondsInDegree}deg)`

   const minute = date.getMinutes()
   const minuteInDegree = ((minute / 60 )* 360) + 90;
   minuteHand.style.transform = `rotate(${minuteInDegree}deg)`

   const hours = date.getHours()
   const hoursInDegree = ((hours / 12 )* 360) + 90;
   hourHand.style.transform = `rotate(${hoursInDegree}deg)`
}


setInterval(setDate, 1000);