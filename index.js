const countElement = document.getElementbyId("count");
const finalCount = 20000;
const duration = 10000; 
const interval= 50; 
const step = finalCount / (duration / interval );
currentCount = 0;

const updateCount = () => { 
currentCount += step;
if (currentCount >= finalCount) {
currentCount = finalCount;
clearInterval(counterInterval);
countElement.classList.add("blink"); 
} 
countElement.textContent = Math.round(currentCount);
};

const counterInterval = setInterval(updateCount, interval);