// allow data to persist on page load
(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  console.log(data);
  createTask();
})();

// CREATE
let createTask = () => {
  tasks.innerHTML = "";
  data.map((x, y) => {
    return (tasks.innerHTML += `
    <div id=${y}>
      <h5 class="fw-bold">${x.text}</h5>
      <span class="small text-secondary">${x.date}</span>
      <p>${x.description}</p>

      <span class="btnOptions">
        <i onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
        <i onClick="deleteTask(this);createTask()" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `);
  });
  resetForm();
};
