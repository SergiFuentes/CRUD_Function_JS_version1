let i, el;
let dataCoders = [
    { coder:``},
];


let panel = document.querySelector("#codersList");

function clearForm() {
    document.querySelector("#coderName").value = "";
}

function renderCoders() {
    panel.textContent = "";
    dataCoders.forEach(x => {
      el = document.createElement("option");
      el.innerText = `${x.coder}`;
      panel.append(el);
    });
}
  
function createCoders() {
    let coderName = document.querySelector("#coderName").value;
    if (coderName != "") {
        dataCoders = [...dataCoders, { coder: coderName }];
    clearForm();
    renderCoders();   
    }
    
}

function panelClick() {
    i = panel.selectedIndex;
  document.querySelector("#coderName").value = dataCoders[i].coder;
}

function updateCoders() {
    dataCoders[i].coder = document.querySelector("#coderName").value;
  renderCoders();
}

function deleteCoders() {
    data.splice(i, 1);
    renderCoders();
  }

  renderCoders();