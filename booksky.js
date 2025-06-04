// var overlay = document.querySelector(".popup-overlay");
// var popup = document.querySelector(".popupmsg");
// var addbook = document.getElementById("addbook");
// var cancel = document.getElementById("cancelbtn")

// addbook.addEventListener("click",function(){
//     overlay.style.display="block";
//     popup.style.display="block";
// })
// cancel.addEventListener("click" ,function(event){
//     event.preventDefault();
//      overlay.style.display="none";
//     popup.style.display="none";
// })

// var booklist = document.querySelector(".container");
// var addbutton = document.getElementById("addbutton");
// var booktitle = document.getElementById("booktitle");
// var bookauthor = document.getElementById("bookauthor");
// var textarea = document.getElementById("textarea");
// addbutton.addEventListener("click",function(event){
//     event.preventDefault()
//     var newcreate = document.createElement("div");
//     newcreate.setAttribute("class","container");
//     newcreate.innerHTML=`<h1>${booktitle.value}</h1>`
//     container.append( newcreate);
//     newdiv.innerHTML=`<h2>${booktitle.value}</h2>
//     <h5>${bookauthor.value}</h5>
//     <p>${textarea.value}</p>
//     <button>Delete</button>`
//     booklist.append(newdiv);
//     overlay.style.display="none";
//     popup.style.display="none";

//       div.querySelector(".delete-btn").addEventListener("click", function (event) {
//         event.target.remove();
//     });
// })
var overlay = document.querySelector(".popup-overlay");
var popup = document.querySelector(".popupmsg");
var addbook = document.getElementById("addbook");
var cancel = document.getElementById("cancelbtn");

addbook.addEventListener("click", function () {
    overlay.style.display = "block";
    popup.style.display = "block";
});

cancel.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.style.display = "none";
    popup.style.display = "none";
});

var booklist = document.querySelector(".container");
var addbutton = document.getElementById("addbutton");
var booktitle = document.getElementById("booktitle");
var bookauthor = document.getElementById("bookauthor");
var textarea = document.getElementById("textarea");

addbutton.addEventListener("click", function (event) {
    event.preventDefault();

    // Create a new book card div
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "book-container");

    // Add content to it
    newDiv.innerHTML = `
        <h2>${booktitle.value}</h2>
        <h5>${bookauthor.value}</h5>
        <p>${textarea.value}</p>
        <button class="delete-btn">Delete</button>
    `;

    // Append to book list
    booklist.appendChild(newDiv);

    // Clear popup form
    booktitle.value = "";
    bookauthor.value = "";
    textarea.value = "";

    overlay.style.display = "none";
    popup.style.display = "none";

    // Add delete functionality
    newDiv.querySelector(".delete-btn").addEventListener("click", function () {
        newDiv.remove();
    });
});
