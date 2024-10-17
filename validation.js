function validateForm() {
  let x = document.forms[0]["myLName"].value;

  if (x == "") {
    alert("Please fill out last name");
    return false;
  }
  return true;
}
