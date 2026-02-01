const teamsByDiv = {
  1: [
    { name: "GUROU", pts: 0 },
    { name: "WIZARD", pts: 0 }
  ],
  2: [],
  3: [],
  4: []
};

let currentDiv = 1;

const tableBody = document.getElementById("tableBody");
const divTitle = document.getElementById("divTitle");

function render() {
  tableBody.innerHTML = "";
  teamsByDiv[currentDiv].forEach((t, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${i+1}</td><td>${t.name}</td><td>${t.pts}</td>`;
    tableBody.appendChild(tr);
  });
  divTitle.textContent = `Division ${currentDiv} Standings`;
}

document.querySelectorAll(".div-tabs button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".div-tabs button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentDiv = btn.dataset.div;
    render();
  });
});

// Modal logic
const modal = document.getElementById("teamModal");
const closeModal = document.getElementById("closeModal");

closeModal.onclick = () => modal.classList.add("hidden");
modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.add("hidden");
});

render();
