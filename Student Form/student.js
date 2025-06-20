
  function save() {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get input values
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;
    let email = document.getElementById("mail").value;

    // Get gender
    let genderElements = document.getElementsByName("gender");
    let gender = "";
    for (let i = 0; i < genderElements.length; i++) {
      if (genderElements[i].checked) {
        gender = genderElements[i].nextSibling.textContent.trim(); // Read "male" or "female"
        break;
      }
    }

    // Validation (optional but useful)
    if (!name || !age || !gender || !course || !email) {
      alert("Please fill in all fields.");
      return;
    }

    // Create new row
    let table = document.getElementById("table");
    let newRow = table.insertRow(-1); // Append at the end

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);

    cell1.innerText = name;
    cell2.innerText = age;
    cell3.innerText = course;
    cell4.innerText = gender;
    cell5.innerText = email;
    cell6.innerHTML = `<button onclick="deleteRow(this)">Delete</button>`;

    // Clear form after adding
    document.querySelector("form").reset();
  }

  function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.remove();
  }

