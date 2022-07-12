// grab all id's and store in variables

let tasks = document.getElementById("tasks");
let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let add = document.getElementById("add");

// handle form validation first
let formValidation = () => {
  // if form is blank then alert user, otherwise do not alert user and accept incoming data.
  if (textInput.value === "") {
    console.log("failure. no input detected");
    msg.innerHTML = "Input task to continue";
  } else {
    console.log("success");
    msg.innerHTML = "";

    acceptData();
    // after accepting data, need to clear the form
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  formValidation();
});

// collect user data and save to local storage

let data = [];

let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  });

  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
};

// should reset the form after submitting

let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};
