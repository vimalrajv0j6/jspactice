let view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);
const views = document.getElementsByClassName("view");
const sameviews = document.querySelectorAll(".view")
console.log(views);
console.log(sameviews);
const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDiv = view1.getElementsByTagName("div");
console.log(sameDiv);


const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

 evenDivs[0].style.backgroundColor = "blue";
for(var i=0; i< evenDivs.length;i++){
    evenDivs[i].style.width = "150px";
    evenDivs[i].style.backgroundColor = "green";
}

const navText = document.querySelector("nav h1");
console.log(navText);

navText.textContent="vimal";
console.log(navText.textContent);

const navBar = document.querySelector("nav");
navBar.innerHTML = `<h1>hello</h1> <p>helo everyone</p>`
navBar.style.justifyContent="space-evenly";
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);



view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection= "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";
console.log(view2.lastElementChild);
console.log(view2.lastElementChild.remove());


const createDiv = (parent,iter)=>{
const newDiv = document.createElement("div");
newDiv.textContent=iter;
newDiv.style.backgroundColor="yellow"
newDiv.style.width = "100px";
newDiv.style.margin = "10px";
newDiv.style.height = "100px";
newDiv.style.color = "black";
newDiv.style.display = "flex"
newDiv.style.justifyContent= "center";
newDiv.style.alignItems = "center";
parent.append(newDiv);
}
for(let i=0;i<11;i++)
{
createDiv(view2,i);
}

