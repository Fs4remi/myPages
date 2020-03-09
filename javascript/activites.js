//Function to create activity table
createTable = () => {
  let table = document.getElementById("table");
  let thead = document.createElement("thead");

  table.appendChild(thead);

  let trH = document.createElement("tr");
  thead.append(trH);

  let tdNH = document.createElement("td");
  let tdDH = document.createElement("td");

  tdNH.innerHTML = "Event";
  tdDH.innerHTML = "Dates";

  trH.appendChild(tdNH);
  trH.appendChild(tdDH);

  events.map(e => {
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let tdN = document.createElement("td");
    let tdD = document.createElement("td");
    tdN.innerHTML = e.name;
    tdD.innerHTML = e.dates;

    tr.appendChild(tdN);
    tr.appendChild(tdD);
  });
};

//Call function once html and css is loaded
window.onload = event => {
    console.log("Page is fully loaded.")
    createTable()
}

