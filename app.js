var nextId = 1;

function addContact() {
    var name = document.getElementById('name-label').value;
    var surname  = document.getElementById('surname-label').value;
    var email = document.getElementById('email-label').value;
    var phone = document.getElementById('phone-label').value;

    if(name && surname && email && phone) {
        var table = document.querySelector('.list-form table tbody');

        var row = table.insertRow(table.rows.length);

        var cell1  = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3  = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);


        cell1.innerHTML = nextId;
        cell2.innerHTML = name;
        cell3.innerHTML = surname;
        cell4.innerHTML = phone;
        cell5.innerHTML = email;
        cell6.innerHTML = '<button onclick="deleteContact(this)"><i class="fa-solid fa-trash remove"></i></button> <button onclick="updateContact(this)"><i class="fa-solid fa-arrows-rotate change"></i></button>';


        nextId ++;

         document.getElementById('name-label').value = '';
         document.getElementById('surname-label').value = '';
         document.getElementById('email-label').value = '';
         document.getElementById('phone-label').value = ''
}
else {
  alert('Please fill in all fields');
}
}

function deleteContact (button){
  var row = button.parentNode.parentNode;
  
  row.parentNode.removeChild(row);
}



function updateContact (button) {
  var row = button.parentNode.parentNode;

  var name = row.cells[1].innerHTML;
  var surname = row.cells[2].innerHTML;
  var number = row.cells[3].innerHTML;
  var email= row.cells[4].innerHTML;


  document.getElementById('name-label').value = name;
  document.getElementById('surname-label').value = surname;
  document.getElementById('phone-label').value = number
  document.getElementById('email-label').value = email;


  deleteContact(button);
}

function cancelForm() {
  document.getElementById('contactForm').reset();
}




  