let select = document.querySelectorAll('.currency')
let btn = document.getElementById('btn')
let input =document.getElementById('input')
let result = document.getElementById('result')
fetch('https://api.exchangerate-api.com/v4/latest/USD')
  .then(res => res.json())
  .then(data => {
    const rates = data.rates;
    displayDropDown(rates); 
  })
  .catch(err => console.error('Fetch error:', err));

function displayDropDown(rates) {

  let curr = Object.entries(rates)
  for(let i=0; i<curr.length;i++){
    let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
    select[0].innerHTML +=opt
    select[1].innerHTML +=opt
  }
}

btn.addEventListener('click',function(){
   let curr1 = select[0].value
   let curr2 = select[1].value
   let inputVal = input.value
   
   if(curr1 === curr2){
    alert('Choose diffrent option')
   }
   else{
    convert(curr1,curr2,inputVal)
   }
})


function convert(curr1,curr2,inputVal){
fetch(`https://api.exchangerate-api.com/v4/latest/${curr1}`)
  .then(res => res.json())
  .then(data => {
    let rate = data.rates[curr2];
    let convertedAmount = inputVal * rate;
    result.value=convertedAmount;
  })
  .catch(err => console.error('Conversion error:', err));
}