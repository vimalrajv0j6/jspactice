// const view = document.querySelector("#view2");
// console.log(view);
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");

// //syntax
//addEventListeners(event, function , usecapture)

// const doSomething = ()=>{
//     alert("doing something");
// }

// h2.addEventListener("click",doSomething,false);
// h2.removeEventListener("click",doSomething,false);

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("complete");
    initApp();
  }
});

// const initApp = () => {
//   const view = document.querySelector(".view2");
//   console.log(view);
//   const div = view.querySelector("div");
//   const h2 = div.querySelector("h2");

//   view.addEventListener("click",(event)=>{
//      view.style.backgroundColor="purple";
//   },true)
//   div.addEventListener("click",(event)=>{

//      div.style.backgroundColor="blue";
//   },true)
//   h2.addEventListener("click",(event)=>{
//    const myText = event.target.textContent;
//    myText === "Subscribe" ? (event.target.textContent = "Subscribed"):(event.target.textContent = "Subscribe") ;
// });
// const navv = document.querySelector("nav");
// navv.addEventListener("mouseover",(event)=>{
//      event.target.classList.add("height100");
// })
// navv.addEventListener("mouseout",(event)=>{
//      event.target.classList.remove("height100");
// })
// }


const initApp = ()=>{
    const view3 = document.querySelector("#view3");
    const myForm = view3 . querySelector("#myForm");
    myForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        console.log("submit event");
    })
}