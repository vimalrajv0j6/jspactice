var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var emailInput = document.getElementById("email");
var addUser = document.getElementById("addUser");
var userList = document.getElementById("userList");
var inputForm = document.getElementById("inputForm");

let user = JSON.parse(localStorage.getItem("user")) || [];
let success= true;
user.forEach((user) => {
  createUser(user.name, user.age, user.email);
});

addUser.addEventListener("click", function (event) {
  event.preventDefault();
  const userName = nameInput.value;
  const userAge = ageInput.value;
  const userEmail = emailInput.value;

  if (!userName || !userAge || !userEmail === "") {
    return alert("All fields are required!");
  }

  const duplicateName = user.some(
    (event)=>{return event.name === userName}
  );

  if(duplicateName){
    return alert('This username is already exist');
  }
  const duplicateEmail = user.some(
    (event)=>{return event.email === userEmail}
  );

  if(duplicateEmail){
    return alert('This email is already exist');
  }
  validateEmail(emailInput);
 if (!validateEmail(userEmail)) 
{
  return alert("Please enter a valid email!");
}

  createUser(userName, userAge, userEmail);
  user.push({ name: userName, age: userAge, email: userEmail });
  localStorage.setItem("user", JSON.stringify(user));

  nameInput.value = "";
  ageInput.value = "";
  emailInput.value = "";
});

function createUser(userName, userAge, userEmail) {
  const row = document.createElement("tr");
  row.innerHTML = `<tr>
     <td>${userName}</td>
     <td>${userAge}</td>
     <td>${userEmail}</td>
     <td><button class="editBtn">Edit</button><button class="delBtn">Delete</button></td>`;
  userList.append(row);

  const del = row.querySelector(".delBtn");

  del.addEventListener("click", function () {
    row.remove();

    for (let i = 0; i < user.length; i++) {
      if (user[i].email === userEmail) {
        user.splice(i, 1);
      }
    }
    localStorage.setItem("user", JSON.stringify(user));
  });

  const edit = row.querySelector(".editBtn");
  edit.addEventListener("click", function () {
    nameInput.value = userName;
    ageInput.value = userAge;
    emailInput.value = userEmail;
    const update = document.createElement("button");
    update.textContent = "Update User";
    update.classList.add(".updateBtn");
    inputForm.append(update);
  

  update.addEventListener("click", function () {
    const upName = nameInput.value;
    const upAge = ageInput.value;
    const upEmail = emailInput.value;

    if (!upName || !upAge || !upEmail) {
      return alert("All fields are required!");
    }

    for (let i = 0; i < user.length; i++) {
      if (user[i].email === userEmail) {
        user[i] = { name: upName, age: upAge, email: upEmail };
        break;
      }
    }
    localStorage.setItem("user", JSON.stringify(user));

    nameInput.value = "";
    ageInput.value = "";
    emailInput.value = "";

    update.remove();
    userList.innerHTML = "";
    user.forEach((user) => {
        createUser(user.name, user.age, user.email);
      });
  });
  });
}
const validateEmail = (emailInput) => {
    return String(emailInput)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };