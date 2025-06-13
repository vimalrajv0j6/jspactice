var increment = document.getElementById('increment');
var decrement = document.getElementById('decrement');
var reset = document.getElementById('reset');
var count = document.getElementById('count');
let countNumber=0;

increment.addEventListener('click',()=>{
   countNumber++;
   count.textContent=countNumber;
})
decrement.addEventListener('click',()=>{
   countNumber--;
   count.textContent=countNumber;
})
reset.addEventListener('click',()=>{
   countNumber=0
   ;
   count.textContent=countNumber;
})