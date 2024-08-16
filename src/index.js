import "./styles/index.sass";
import customers from "./data.json";

const rowsPerPage = 8;
let currentPage = 1;
let filteredData = customers;

function displayTable() {
  const tableBody = document.getElementById("customerTable");
  tableBody.innerHTML = "";

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, filteredData.length);

  for (let i = startIndex; i < endIndex; i++) {
    const customer = filteredData[i];
    const row = document.createElement("tr");
    row.className = "table__tr";
    row.innerHTML = `
      <td class='table__td'>${customer.name}</td>
      <td class='table__td'>${customer.company}s</td>
      <td class='table__td'>${customer.phone}</td>
      <td class='table__td'>${customer.email}</td>
      <td class='table__td'>${customer.country}</td>
      <td class='table__td'><span class="status ${customer.status.toLowerCase()}">${
      customer.status
    }</span></td>
    `;
    tableBody.appendChild(row);
  }

  updatePagination();
  updatePaginationInfo();
}

function updatePagination() {
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const pageNumbersContainer = document.querySelector(".pagination__numbers");
  pageNumbersContainer.innerHTML = "";

  const prevPageButton = document.getElementById("prevPage");
  if (prevPageButton) {
    prevPageButton.disabled = currentPage === 1;
  }

  if (totalPages > 1) {
    const firstPageButton = document.createElement("button");
    firstPageButton.textContent = "1";
    firstPageButton.className =
      currentPage === 1 ? "active pagination__btn" : "pagination__btn";
    firstPageButton.addEventListener("click", () => {
      currentPage = 1;
      displayTable();
    });
    pageNumbersContainer.appendChild(firstPageButton);
  }

  if (currentPage > 4) {
    const dots = document.createElement("span");
    dots.textContent = "...";
    pageNumbersContainer.appendChild(dots);
  }

  const startPage = Math.max(2, currentPage - 1);
  const endPage = Math.min(totalPages - 1, currentPage + 3);

  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.className =
      i === currentPage ? "active pagination__btn" : "pagination__btn";
    pageButton.addEventListener("click", () => {
      currentPage = i;
      displayTable();
    });
    pageNumbersContainer.appendChild(pageButton);
  }

  if (currentPage < totalPages - 3) {
    const dots = document.createElement("span");
    dots.textContent = "...";
    pageNumbersContainer.appendChild(dots);
  }

  if (totalPages > 1) {
    const lastPageButton = document.createElement("button");
    lastPageButton.textContent = totalPages;
    lastPageButton.className =
      currentPage === totalPages ? "active pagination__btn" : "pagination__btn";
    lastPageButton.addEventListener("click", () => {
      currentPage = totalPages;
      displayTable();
    });
    pageNumbersContainer.appendChild(lastPageButton);
  }

  const nextPageButton = document.getElementById("nextPage");
  if (nextPageButton) {
    nextPageButton.disabled = currentPage === totalPages;
  }
}

function updatePaginationInfo() {
  const totalEntries = filteredData.length;
  const startEntry = (currentPage - 1) * rowsPerPage + 1;
  const endEntry = Math.min(currentPage * rowsPerPage, totalEntries);
  const paginationInfo = document.getElementById("paginationInfo");

  paginationInfo.textContent = `Showing data ${startEntry} to ${endEntry} of ${totalEntries.toLocaleString()} entries`;
}

function searchByName() {
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", function () {
    const filter = searchInput.value.toLowerCase();
    filteredData = customers.filter((customer) =>
      customer.name.toLowerCase().includes(filter)
    );
    currentPage = 1;
    displayTable();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayTable();
  searchByName();

  const prevPageButton = document.getElementById("prevPage");
  const nextPageButton = document.getElementById("nextPage");

  prevPageButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayTable();
    }
  });

  nextPageButton.addEventListener("click", () => {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      displayTable();
    }
  });
});

document.querySelector(".sidebar__menu").addEventListener("click", function () {
  document.querySelector(".overlay").classList.add("open");
  document.querySelector(".sidebar").classList.add("active");
});

document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("open");
  document.querySelector(".sidebar").classList.remove("active");
});
