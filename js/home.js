let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
  empPayrollList = getEmployeePayrollDataFromStorage();
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  createInnerHtml();
  localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
  return localStorage.getItem("empList") ?
    JSON.parse(localStorage.getItem('empList')) : [];
}
const createInnerHtml = () => {
    if (empPayrollList.length == 0) return;
  const headerHtml =
    "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
    "<th>Salary</th><th>Start Date</th><th>Actions</th>";
  let innerHtml = `${headerHtml}`;
  for (const empPayrollData of empPayrollList) {
    innerHtml = `${innerHtml}
      <tr>
          <td>
          <img class="profile" alt="" src="${empPayrollData._profilePic}">
          </td>
          <td>${empPayrollData._name}</td>
          <td>${empPayrollData._gender}</td>
          <td>${getDeptHtml(empPayrollData._department)}</td>
          <td>${empPayrollData._salary}</td>
          <td>${stringifyDate(empPayrollData._startDate)}</td>
          <td>
          <img id="${empPayrollData._name}" onclick="remove(this)" alt="delete" 
              src="../assets/icons/delete-black-18dp.svg">
      <img id="${empPayrollData._name}" alt="edit" onclick="update(this)"
              src="../assets/icons/create-black-18dp.svg">
          </td>
      </tr>
      `;
  }
  document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
  let deptHtml = '';
  for (const dept of deptList) {
    deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
  }
  return deptHtml;
}

const remove = (node) => {
    let empData = empPayrollList.find(empData => empData._name == node.id);
    if (!empData) return;
    const index = empPayrollList.map(empData => empData._name).indexOf(empData._name);
    empPayrollList.splice(index, 1);
    localStorage.setItem("empList", JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
}
